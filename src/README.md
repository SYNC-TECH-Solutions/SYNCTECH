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
-   **Deployment:** Firebase Hosting, Cloudflare Pages, or any Node.js compatible platform.

## Free Hosting for Private Repositories

For developers looking for a free and powerful hosting solution, especially for private repositories, both **Firebase Hosting** and **Cloudflare Pages** are ideal choices.

### Why Firebase Hosting?
-   **Free for Private Repos:** Firebase allows you to connect and deploy from a private GitHub repo at no cost.
-   **Integrated Ecosystem:** Since the project can use Firebase services, hosting here keeps your entire backend and frontend in one managed platform.
-   **High Performance:** Firebase Hosting serves your content from a global CDN, ensuring fast load times.

### Why Cloudflare Pages?
-   **Generous Free Plan:** Like Firebase, Cloudflare Pages offers a free tier that supports private repositories with unlimited sites and bandwidth.
-   **World-Class Performance:** Deploys your application to Cloudflare's extensive global network, which is known for its speed and security.
-   **Simple Git-Based Workflow:** Easy to set up continuous deployment from your GitHub repository.

## Key Features

-   **Fully Responsive Design:** A seamless experience across desktops, tablets, and mobile devices.
-   **AI-Powered Blog Generator:** An internal admin tool at `/admin` that uses Genkit to generate draft blog posts from a topic and keywords, streamlining content creation.
-   **Dynamic Contact Form:** A secure contact form connected to Firebase Firestore to reliably capture user messages.
-   **Dynamic Blog System:** A complete blog with individual post pages, automatically generating static pages for optimal performance and SEO.
-   **In-Depth Portfolio Case Studies:** A dynamic portfolio system where each project has its own detailed case study page.
-   **SEO Optimized:** Built-in metadata generation for all pages, including blog posts and portfolio items, plus an automatically generated `sitemap.xml`.
-   **Comprehensive Legal Pages:** Includes templates for Privacy Policy, Terms & Conditions, and an Accessibility Statement.

## Getting Started

Follow these instructions to get a local copy of the project up and running for development and testing purposes.

### Prerequisites

-   [Node.js](https://nodejs.org/en/) (version 20.x or later recommended)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
-   [Firebase CLI](https://firebase.google.com/docs/cli) (for deployment to Firebase)

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
    # Firebase project configuration keys (if using Firebase services)
    NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id

    # Google Analytics Tracking ID
    NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
    ```

    **Note:** You will also need to have Application Default Credentials set up for Google Cloud for the Genkit AI features to work locally. Follow the [Google Cloud authentication guide](https://cloud.google.com/docs/authentication/provide-credentials-adc) for instructions.

## Deployment

You can deploy this Next.js application to any hosting provider that supports Node.js. For a seamless, free experience with private repositories, we recommend either **Firebase Hosting** or **Cloudflare Pages**. Both offer continuous deployment from GitHub.

## Available Scripts

In the project directory, you can run the following commands:

-   `npm run dev`: Starts the Next.js development server on `http://localhost:9002`.
-   `npm run build`: Builds the application for production.
-   `npm start`: Starts a production server for the built application.
-   `npm run lint`: Lints the project files for errors.
-   `npm run typecheck`: Runs the TypeScript compiler to check for type errors.

## Project Structure Overview

-   `src/app/`: Contains all the routes and pages of the application (using the App Router).
-   `src/components/`: Shared React components used across the application.
-   `src/lib/`: Utility functions, data sources (`posts.ts`, `projects.ts`), and schemas.
-   `src/ai/`: Contains all the Genkit AI flows and configuration.

For a more detailed guide on how to manage the content of this website, please see the `WIKI.md` file.
