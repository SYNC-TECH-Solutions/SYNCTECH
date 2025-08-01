'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

const THEMES = ['light', 'dark'] as const
type Theme = (typeof THEMES)[number]
type SystemTheme = 'light' | 'dark' | undefined

interface ThemeProviderProps {
  children: ReactNode
  /** List of all available theme names. */
  themes?: string[]
  /** Forced theme name for the current page. */
  forcedTheme?: string
  /** Whether to switch between dark and light themes based on user's system settings. */
  enableSystem?: boolean
  /** Disable all CSS transitions when switching themes. */
  disableTransitionOnChange?: boolean
  /** Whether to indicate to browsers which color scheme is used (dark or light) for built-in UI like inputs and buttons. */
  enableColorScheme?: boolean
  /** Key used to store theme setting in localStorage. */
  storageKey?: string
  /** Default theme name (for v0.0.12 and lower the default was light). */
  defaultTheme?: string
  /** HTML attribute modified with the theme name. */
  attribute?: string | 'class'
  /** Mapping of theme name to HTML attribute value. Most likely you will only need to use this if you are branding your site with a provider like Algolia. */
  value?: ValueObject
  /** Nonce string to pass to the inline script for CSP headers. */
  nonce?: string
}

interface ValueObject {
  [themeName: string]: string
}

interface ThemeContextProps {
  /** Current theme name. */
  theme?: string
  /** List of all available theme names. */
  themes: string[]
  /** Update the theme. */
  setTheme: (theme: string) => void
  /** If `enableSystem` is true, returns the System theme name, either `light` or `dark`, otherwise returns `undefined`. */
  systemTheme?: 'light' | 'dark'
  /** If enableSystem is true, returns the resolved theme name, which will be the same as `theme` unless `theme` is `system`. */
  resolvedTheme?: string
  /** Update the theme to the system default. */
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)
ThemeContext.displayName = 'ThemeContext'

export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}

const colorSchemes = ['light', 'dark']
const MEDIA_QUERY = '(prefers-color-scheme: dark)'

const ThemeScript = ({
  forcedTheme,
  storageKey,
  attribute,
  enableSystem,
  enableColorScheme,
  defaultTheme,
  value,
  themes,
  nonce,
}: Omit<ThemeProviderProps, 'children'> & { themes: string[] }) => {
  const defaultSystem = defaultTheme === 'system'

  const el = `
    (function() {
      try {
        var a=function(s){return window.localStorage.getItem(s)},
          t=function(s,v){window.localStorage.setItem(s,v)},
          e='${enableSystem ? 'true' : 'false'}',
          c='${attribute}',
          m='${storageKey}',
          o='${JSON.stringify(themes)}',
          d=a(m),
          w='${JSON.stringify(value)}',
          p=document.documentElement,
          q=window.matchMedia('${MEDIA_QUERY}'),
          u=p.style.colorScheme

        var z = ${forcedTheme ? `"${forcedTheme}"` : 'd'}

        if (!z && e === 'true') {
          z = q.matches ? 'dark' : 'light'
        }

        var f = z || '${defaultTheme}'
        var y = w ? JSON.parse(w)[f] : f
        if (c === 'class') {
          p.classList.remove.apply(p.classList, JSON.parse(o))
          if (y) p.classList.add(y)
        } else {
          if (y) p.setAttribute(c, y)
        }
        if (${enableColorScheme}) {
          if (f === 'system') f = q.matches ? 'dark' : 'light'
          p.style.colorScheme = f
        }
      } catch (e) {
        // We never want to break the application
        console.error(e)
      }
    })()
  `

  return <script nonce={nonce} dangerouslySetInnerHTML={{ __html: el }} />
}

// Helpers
const getTheme = (key: string, fallback?: string): string | undefined => {
  let theme: string | undefined
  try {
    theme = localStorage.getItem(key) || undefined
  } catch (e) {
    // Unsupported
  }
  return theme || fallback
}

const applyTheme = (
  theme: string,
  themes: string[],
  forcedTheme?: string,
  attribute: string | 'class' = 'class',
  value?: ValueObject,
  enableColorScheme = true
) => {
  const resolved = theme === 'system' ? getSystemTheme() : theme

  const name = value ? value[resolved] : resolved
  const el = document.documentElement

  if (attribute === 'class') {
    el.classList.remove(...themes.map(t => (value ? value[t] : t)))
    if (name) el.classList.add(name)
  } else {
    if (name) {
      el.setAttribute(attribute, name)
    } else {
      el.removeAttribute(attribute)
    }
  }

  if (enableColorScheme) {
    el.style.colorScheme = colorSchemes.includes(resolved) ? resolved : ''
  }
}

const getSystemTheme = (e?: MediaQueryList | MediaQueryListEvent) => {
  if (!e) e = window.matchMedia(MEDIA_QUERY)
  const isDark = e.matches
  const systemTheme = isDark ? 'dark' : 'light'
  return systemTheme
}

export const ThemeProvider = ({
  children,
  themes: customThemes = ['light', 'dark'],
  forcedTheme,
  enableSystem = true,
  disableTransitionOnChange = false,
  enableColorScheme = true,
  storageKey = 'theme',
  defaultTheme = 'system',
  attribute = 'class',
  value,
  nonce,
}: ThemeProviderProps) => {
  const [theme, setThemeState] = useState(() => getTheme(storageKey, defaultTheme))
  const [resolvedTheme, setResolvedTheme] = useState(() => getTheme(storageKey))

  const themes = useMemo(() => {
    if (value) return Object.keys(value)
    return customThemes
  }, [customThemes, value])

  const apply = useCallback(
    (theme: any) => {
      let resolved = theme
      if (theme === 'system') resolved = getSystemTheme()
      setResolvedTheme(resolved)

      // Always apply theme to HTML attribute
      const name = value ? value[resolved] : resolved
      const el = document.documentElement

      if (attribute === 'class') {
        el.classList.remove(...themes.map(t => (value ? value[t] : t)))
        if (name) el.classList.add(name)
      } else {
        if (name) {
          el.setAttribute(attribute, name)
        } else {
          el.removeAttribute(attribute)
        }
      }

      if (enableColorScheme) {
        el.style.colorScheme = colorSchemes.includes(resolved) ? resolved : ''
      }
    },
    [attribute, enableColorScheme, themes, value]
  )

  const setTheme = useCallback(
    (theme: any) => {
      setThemeState(theme)

      // Save to storage
      try {
        localStorage.setItem(storageKey, theme)
      } catch (e) {
        // Unsupported
      }
    },
    [storageKey]
  )

  const toggleTheme = useCallback(() => {
    const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }, [setTheme, resolvedTheme])

  useEffect(() => {
    const media = window.matchMedia(MEDIA_QUERY)

    // Intentionally use deprecated listener methods to support iOS & old browsers
    media.addListener(handleMediaQuery)
    handleMediaQuery(media)

    return () => media.removeListener(handleMediaQuery)

    function handleMediaQuery(e: any) {
      const systemTheme = getSystemTheme(e)
      setResolvedTheme(t => (t === 'system' ? systemTheme : t))

      if (theme === 'system' && !forcedTheme) {
        apply(systemTheme)
      }
    }
  }, [theme, apply, forcedTheme])

  // localStorage event handling
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key !== storageKey) {
        return
      }

      const t = e.newValue || defaultTheme
      setTheme(t)
    }

    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [setTheme, storageKey, defaultTheme])

  // When theme attribute changes, update the theme setting
  useEffect(() => {
    if (disableTransitionOnChange) {
      const el = document.documentElement
      const enable = () => {
        el.style.setProperty('transition', 'none')
      }

      const disable = () => {
        setTimeout(() => {
          el.style.removeProperty('transition')
        }, 50)
      }

      enable()
      apply(theme as any)
      disable()
    } else {
      apply(theme as any)
    }
  }, [theme, apply, disableTransitionOnChange])

  const providerValue = useMemo(
    () => ({
      theme,
      setTheme,
      forcedTheme,
      resolvedTheme: theme === 'system' ? resolvedTheme : theme,
      themes: enableSystem ? [...themes, 'system'] : themes,
      toggleTheme,
      systemTheme: resolvedTheme as SystemTheme | undefined,
    }),
    [theme, setTheme, forcedTheme, resolvedTheme, themes, enableSystem, toggleTheme]
  )

  return (
    <ThemeContext.Provider value={providerValue}>
      <ThemeScript
        {...{
          forcedTheme,
          storageKey,
          attribute,
          enableSystem,
          enableColorScheme,
          defaultTheme,
          value,
          themes,
          nonce,
        }}
      />
      {children}
    </ThemeContext.Provider>
  )
}
