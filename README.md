
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

You have several excellent free options for hosting this project, depending on whether your GitHub repository is private or public.

### For Private Repositories
For developers looking for a free and powerful hosting solution for private repositories, both **Firebase Hosting** and **Cloudflare Pages** are ideal choices.

-   **Firebase Hosting:** Free deployment from private repos, integrates well with other Firebase services, and offers a global CDN.
-   **Cloudflare Pages:** Generous free tier with unlimited sites and bandwidth, world-class performance, and a simple Git-based workflow.

### For Public Repositories
If you make your repository public, your free options expand to include two of the most popular platforms in the ecosystem.

-   **Vercel:** Created by the makers of Next.js, Vercel offers a seamless, zero-configuration deployment experience and is perfectly optimized for Next.js projects. It's free for public/open-source repos.
-   **Netlify:** Another top-tier platform with a powerful free tier for public repositories, known for its ease of use and robust features.

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
    ```

    **Note:** You will also need to have Application Default Credentials set up for Google Cloud for the Genkit AI features to work locally. Follow the [Google Cloud authentication guide](https://cloud.google.com/docs/authentication/provide-credentials-adc) for instructions.

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

-   **With Firebase Hosting:** Run `firebase deploy` after initializing your project.
-   **With Vercel, Netlify, or Cloudflare Pages:** Connect your GitHub repository to the hosting provider. They will automatically build and deploy your site whenever you push to your main branch. You will typically only need to set the build command to `npm run build` and the output directory to `.next` in the project settings on their platform.


## Project Structure Overview

-   `src/app/`: Contains all the routes and pages of the application (using the App Router).
-   `src/components/`: Shared React components used across the application.
-   `src/lib/`: Utility functions, data sources (`posts.ts`, `projects.ts`), and schemas.
-   `src/ai/`: Contains all the Genkit AI flows and configuration.

For a more detailed guide on how to manage the content of this website, please see the `WIKI.md` file.
