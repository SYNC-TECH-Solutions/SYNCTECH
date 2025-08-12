
# SYNC TECH - Official Website

This is the official website for SYNC TECH, a modern, feature-rich web application built with Next.js and TypeScript. Developed by Sheraz Hussain, this project showcases a professional online presence for a technology solutions provider, complete with a blog, a project portfolio, and integrated AI capabilities.

## Author

- **Sheraz Hussain**

## Tech Stack

This project is built with a modern, robust, and scalable technology stack:

-   **Framework:** [Next.js 15](https://nextjs.org/) (with App Router)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
-   **AI Integration:** [Google AI - Genkit](https://firebase.google.com/docs/genkit)
-   **Form Management:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
-   **Email Delivery:** [Resend](https://resend.com/)
-   **Analytics:** [Google Analytics](https://analytics.google.com/)

## Key Features

-   **Fully Responsive Design:** A seamless experience across desktops, tablets, and mobile devices.
-   **AI-Powered Blog Generator:** An internal admin tool at `/admin` that uses Genkit to generate draft blog posts from a topic and keywords, streamlining content creation.
-   **AI-Validated Contact Form:** A secure contact form that uses an AI flow to validate submissions for spam or malicious content before sending an email.
-   **Dynamic Blog System:** A complete blog with individual post pages, automatically generating static pages for optimal performance and SEO.
-   **In-Depth Portfolio Case Studies:** A dynamic portfolio system where each project has its own detailed case study page.
-   **SEO Optimized:** Built-in metadata generation for all pages, including blog posts and portfolio items, plus an automatically generated `sitemap.xml`.
-   **Comprehensive Legal Pages:** Includes templates for Privacy Policy, Terms & Conditions, and an Accessibility Statement.

## Hosting Options (Free)

You have several excellent free options for hosting this project. The best choice depends on whether your GitHub repository is private or public.

### For Public Repositories (Recommended)
If your repository is public, you have access to the best platforms in the ecosystem, which are perfectly optimized for Next.js. **Vercel is the top recommendation.**

-   **Vercel:** Created by the makers of Next.js, Vercel offers a seamless, zero-configuration deployment experience. It's free for public/open-source repos and is the ideal choice for this project.
-   **Netlify:** Another top-tier platform with a powerful free tier for public repositories, known for its ease of use and robust features.

### For Private Repositories
If you choose to keep your repository private, both **Firebase Hosting** and **Cloudflare Pages** are ideal choices.

-   **Firebase Hosting:** Free deployment from private repos, integrates well with other Firebase services, and offers a global CDN.
-   **Cloudflare Pages:** Generous free tier with unlimited sites and bandwidth, world-class performance, and a simple Git-based workflow.

**Note on GitHub Pages:** While GitHub Pages is great for simple, static websites, it **cannot run this Next.js application** because it does not support the necessary server-side functionality (like the contact form).

## Getting Started

Follow these instructions to get a local copy of the project up and running for development and testing purposes.

### Prerequisites

-   [Node.js](https://nodejs.org/en/) (version 20.x or later recommended)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
-   [Firebase CLI](https://firebase.google.com/docs/cli) (if deploying to Firebase Hosting)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repository-name.git
    cd your-repository-name
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a new file named `.env` in the root of the project by copying the example file:
    ```bash
    cp .env.example .env
    ```
    Now, open the `.env` file and add your secret keys:

    ```env
    # Resend API Key for sending emails from the contact form
    RESEND_API_KEY=your_resend_api_key

    # Google Analytics Tracking ID
    NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

    # Your website's absolute URL (used for sitemap and metadata)
    NEXT_PUBLIC_SITE_URL=http://localhost:9002
    ```
    **Note:** When you deploy your site, be sure to set these as environment variables in your hosting provider's dashboard and update `NEXT_PUBLIC_SITE_URL` to your live domain.

## Available Scripts

In the project directory, you can run the following commands:

-   `npm run dev`: Starts the Next.js development server on `http://localhost:9002`.
-   `npm run build`: Builds the application for production.
-   `npm start`: Starts a production server for the built application.
-   `npm run lint`: Lints the project files for errors.
-   `npm run typecheck`: Runs the TypeScript compiler to check for type errors.

## Deployment

You can deploy this Next.js application to any hosting provider that supports Node.js. For a seamless, free experience, we recommend the providers listed in the "Hosting Options" section above.

### Build Command

To create a production-ready build of your app, run:
```bash
npm run build
```
This command generates an optimized version of your site in the `.next` folder. Your hosting provider will need this command.

### Deploying

-   **With Vercel or Netlify:** Connect your GitHub repository to the hosting provider. They will automatically build and deploy your site whenever you push to your main branch. You will typically only need to set the build command to `npm run build` and the output directory to `.next` in the project settings on their platform.
-   **With Firebase Hosting:** Run `firebase deploy` after initializing your project.

## Project Structure Overview

-   `src/app/`: Contains all the routes and pages of the application (using the App Router).
-   `src/components/`: Shared React components used across the application.
-   `src/lib/`: Utility functions, data sources (`posts.ts`, `projects.ts`), and schemas.
-   `src/ai/`: Contains all the Genkit AI flows and configuration.

For a more detailed guide on how to manage the content of this website, please see the `WIKI.md` file.

