
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

## Getting Started

Follow these instructions to get a local copy of the project up and running for development and testing purposes.

### Prerequisites

-   [Node.js](https://nodejs.org/en/) (version 20.x or later recommended)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

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
    Now, open the `.env` file and add your secret keys. This is crucial for running the project locally.

    ```env
    # Resend API Key for sending emails from the contact form
    RESEND_API_KEY=your_resend_api_key

    # Google Analytics Tracking ID
    NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

    # Your website's absolute URL (used for sitemap and metadata)
    NEXT_PUBLIC_SITE_URL=http://localhost:9002
    ```

## Available Scripts

In the project directory, you can run the following commands:

-   `npm run dev`: Starts the Next.js development server on `http://localhost:9002`.
-   `npm run build`: Builds the application for production.
-   `npm start`: Starts a production server for the built application.
-   `npm run lint`: Lints the project files for errors.
-   `npm run typecheck`: Runs the TypeScript compiler to check for type errors.

## Deployment Guide (Netlify)

This project is optimized for deployment on **Netlify**, which offers a generous free tier for public repositories.

### Prerequisites
- A [GitHub](https://github.com/) account with this repository pushed to it.
- A [Netlify](https://www.netlify.com/) account.

### Step-by-Step Instructions

#### Step 1: Login to Netlify and Add a New Site
1.  Go to your [Netlify dashboard](https://app.netlify.com/).
2.  Click the **"Add new site"** button and select **"Import an existing project"**.

#### Step 2: Connect to GitHub
1.  Under "Connect to a Git provider," click the **GitHub** button.
2.  A new window will open, asking you to authorize Netlify to access your GitHub repositories. Click **Authorize**.
3.  Select the repository for your SYNC TECH project.

#### Step 3: Configure Build Settings
Netlify will automatically detect that this is a Next.js project and should pre-fill the build settings correctly thanks to the `netlify.toml` file in the project. Please verify that they are as follows:

-   **Build command:** `npm run build`
-   **Publish directory:** `.next`

#### Step 4: Add Environment Variables (Crucial!)
This is the most important step for ensuring your contact form works correctly on the live site.
1.  Before deploying, click on **"Show advanced"** and then **"New variable"**.
2.  You need to add your secret keys here. These are the same keys from your local `.env` file.
    -   Add a variable with the key `RESEND_API_KEY` and the value of your Resend API key.
    -   Add another variable with the key `NEXT_PUBLIC_GA_ID` and the value of your Google Analytics ID.
    -   Add a final variable with the key `NEXT_PUBLIC_SITE_URL` and the value of your final, live website URL (e.g., `https://www.synctech.ie`).

#### Step 5: Deploy the Site
1.  Click the **"Deploy site"** button.
2.  Netlify will start building and deploying your application. You can watch the progress in the deploy logs. It should take a few minutes to complete.

Once finished, your site will be live on a temporary Netlify URL (e.g., `your-site-name.netlify.app`).

### Step 6: Add Your Custom Domain (Optional)
1.  In your site's dashboard on Netlify, go to **Domain settings**.
2.  Click **"Add a domain"** and follow the instructions to link your custom domain. Netlify provides excellent, easy-to-follow guidance on how to update your DNS records.

Congratulations! Your SYNC TECH website is now live for the world to see.
