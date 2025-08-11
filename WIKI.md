# SYNC TECH Website - Project Wiki & Management Guide

This document serves as a guide for managing and maintaining the SYNC TECH website. It provides instructions for common tasks like adding content and understanding the project's structure.

**Author:** Sheraz Hussain

## 1. How to Add a New Blog Post

The website's blog is generated from a central data file. To add a new post, you need to edit this file.

**File Location:** `src/lib/posts.ts`

**Steps:**

1.  **Open `src/lib/posts.ts`:** You will see an array named `posts`. Each object in this array represents a single blog post.
2.  **Use the AI Blog Generator (Optional but Recommended):**
    *   Navigate to the `/admin` page of your running local site (e.g., `http://localhost:9002/admin`).
    *   Enter a topic and some keywords for your new post.
    *   Click "Generate Content".
    *   The AI will produce a title, excerpt, and HTML content. You can copy these directly.
3.  **Add a New Post Object:** Add a new JavaScript object to the `posts` array. It must follow this structure:

    ```javascript
    {
      title: "Your New Blog Post Title",
      slug: "your-new-blog-post-slug", // This should be unique and URL-friendly
      date: "YYYY-MM-DD", // e.g., "2024-08-20"
      excerpt: "A short, compelling summary of your blog post. This appears on the main blog page.",
      content: `
        // Paste your HTML content here. Use <h3> for subheadings and <p> for paragraphs.
        // Example:
        <h3 class="text-2xl font-bold mt-6 mb-4">This is a Subheading</h3>
        <p>This is a paragraph of text. You can add more HTML tags like <ul>, <li>, etc.</p>
      `,
      image: "https://placehold.co/800x400.png", // URL for the blog post's main image
      imageHint: "keywords for ai image" // One or two keywords for the image hint
    },
    ```

4.  **Save the file.** Next.js will automatically detect the changes and update the blog page.

## 2. How to Add a New Portfolio Project

Adding a portfolio project follows the same pattern as adding a blog post.

**File Location:** `src/lib/projects.ts`

**Steps:**

1.  **Open `src/lib/projects.ts`:** You will see an array named `projects`. Each object represents a case study.
2.  **Add a New Project Object:** Add a new JavaScript object to the `projects` array with the following structure:

    ```javascript
    {
      title: "Title of Your New Project",
      slug: "new-project-slug", // Unique and URL-friendly
      excerpt: "A short, one-sentence summary of the project and its key achievement.",
      description: "A more detailed paragraph describing the project, the client's needs, and your approach.",
      image: "https://placehold.co/1200x600.png", // URL for the main project image
      imageHint: "project image hint", // One or two keywords
      techStack: ["React", "Next.js", "Tailwind CSS", "Firebase"], // An array of technologies used
      results: "A description of the tangible results achieved, e.g., 'Increased revenue by 30% and improved user engagement by 50%.'",
      liveUrl: "https://example.com" // (Optional) A link to the live project website.
    },
    ```

3.  **Save the file.** The portfolio and case study pages will update automatically.

## 3. Environment Variables

All secret keys and environment-specific settings are stored in the `.env` file. This file is **not** checked into version control (see `.gitignore`) and must be created manually in any new environment.

**File:** `.env`

**Required Keys:**

-   `RESEND_API_KEY`: Your API key from Resend for sending emails.
-   `NEXT_PUBLIC_GA_ID`: Your Google Analytics 4 tracking ID (e.g., `G-XXXXXXXXXX`).

## 4. AI Flows (Genkit)

The AI functionality is managed through Genkit flows.

**Location:** `src/ai/flows/`

-   `generate-blog-post.ts`: The flow that powers the `/admin` blog generator tool. The prompt inside this file can be customized to change the tone, style, or structure of the generated blog posts.
-   `validate-contact-form.ts`: The flow that checks incoming contact form messages for validity. The prompt can be adjusted to make the validation more or less strict.
