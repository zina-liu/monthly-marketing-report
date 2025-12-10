# GeoVision Monthly Marketing Report

This is a static web page for GeoVision's monthly marketing updates, designed to be hosted on GitHub Pages.

## 🚀 Quick Start

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/YOUR_USERNAME/monthly-marketing-report.git
    cd monthly-marketing-report
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

## 📝 How to Update Content

To add a new monthly report or update existing content, you only need to edit **one file**:

`client/src/lib/data.ts`

### Adding a New Month

1.  Open `client/src/lib/data.ts`.
2.  Add a new object to the `reports` array at the **beginning** of the list (so it appears first).

Example structure:

```typescript
{
  id: 'dec-2025',
  month: 'December',
  year: 2025,
  title: 'Marketing Updates - December',
  items: [
    {
      id: 'vid-dec-1',
      title: 'New Video Title',
      category: 'Video',
      link: 'https://youtube.com/...',
      thumbnail: '/images/your-thumbnail.jpg',
      description: 'Description of the video.'
    },
    // Add more items...
  ]
},
```

### Adding Images

1.  Place your image files in the `client/public/images/` folder.
2.  Reference them in `data.ts` using the path `/images/filename.jpg`.

## 🌍 Deployment

This project is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

1.  **Push your changes:**
    ```bash
    git add .
    git commit -m "Update monthly report"
    git push origin main
    ```

2.  **Enable GitHub Pages:**
    -   Go to your repository settings on GitHub.
    -   Navigate to **Pages**.
    -   Under **Build and deployment**, select **GitHub Actions** as the source.

The site will be live at `https://YOUR_USERNAME.github.io/monthly-marketing-report/`.

## 🎨 Customization

-   **Theme Colors**: Edit `client/src/index.css` to change the color scheme.
-   **Layout**: Edit `client/src/pages/Home.tsx` to modify the page structure.
