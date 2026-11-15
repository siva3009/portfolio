# Deploy your portfolio
Extract the ZIP and open the folder containing package.json in Antigravity. To preview locally use Node.js 22 and pnpm, then run pnpm install --frozen-lockfile and pnpm dev.

## GitHub
Create an empty repository in your own GitHub account. From the project folder, run the following commands, substituting the HTTPS URL GitHub shows for YOUR_REPOSITORY_URL.

```sh
git init -b main
git add .
git commit -m "Add personal portfolio"
git remote add origin YOUR_REPOSITORY_URL
git push -u origin main
```

## Vercel
Choose your personal Hobby account for eligible non-commercial use. Import the repository as a new project. Use the root containing package.json, the Next.js preset, and the default installation and build settings. Click Deploy. The project exports static pages. Open the generated URL to verify the hero, Selected Work transitions and resume download. Later pushes to main update the deployment.

## Replacing projects
Edit lib/content.ts for titles and descriptions. Put screenshots in public/images/projects/ and reference them from lib/project-images.ts.
