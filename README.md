# Acts9 IT Services - Website

This is a Vite + React starter site for **Acts9 IT Services**, including Tailwind CSS, Framer Motion, React Router, and EmailJS (placeholder keys).

## Quick start

1. Install dependencies
```bash
npm install
```

2. Start dev server
```bash
npm run dev
```

3. Build for production
```bash
npm run build
```

4. Preview production build locally
```bash
npm run preview
```

## EmailJS Integration

The contact form uses EmailJS. Replace the placeholders in `src/App.jsx`:

```js
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, 'YOUR_PUBLIC_KEY')
```

with the real values from your EmailJS account.

Also ensure your EmailJS template fields match: `name`, `email`, `message`.

## Deploying to Azure

You can deploy this as a static site:

### Azure Static Web Apps
1. Create a Static Web App in the Azure Portal.
2. Connect your GitHub repo (or push the built `dist` to your chosen branch).
3. Set build command to `npm run build` and output location to `dist`.

### Azure App Service (Linux)
1. Create an App Service for a Node app.
2. Set startup command (optional) to serve the `dist` folder using a static server like `serve`.
3. Alternatively use an Azure pipeline that runs `npm install && npm run build` and deploys the `dist`.

## Notes
- This project uses TailwindCSS. If you change classes, run the dev server to see updates.
- Framer Motion is used for simple animations; remove if unnecessary.

