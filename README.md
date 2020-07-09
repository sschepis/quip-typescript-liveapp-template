# Quip Apps

The Quip Apps platform enables developers to extend the Quip document canvas with interactive, custom components. The goal of the platform is to expand the scope and capabilities of Quip's living documents.

This live app template has been adapted for Typescript. 

<ul>
    <li><a href="https://quip.com/dev/liveapps/">Getting Started</a> - Learn how to create an app.</li>
    <li><a href="https://quip.com/dev/liveapps/documentation">API Reference</a> - Explore the nuts and bolts of the API.</li>
    <li><a href="https://quip.com/dev/liveapps/samples">Example Apps</a> - Browse open-source code.</li>
</ul>

The platform is currently in beta.

## Quick Overview

Make sure you modify `app/manifest.json` and replace `id` with your token value 

```
git clone https://github.com/sschepis/quip-typescript-liveapp-template
cp -r quip-typescript-liveapp-template [my app name]
cd [my app name]
npm install
npm run build
```

```
quip-typescript-liveapp-template
├── package.json
├── node_modules
├── tsconfig.json
├── webpack.config.js
├── app
│   └── manifest.json
└── src
    └── App.less
    └── App.tsx
    └── root.tsx
```

## Getting Started

Follow the <a href="https://quip.com/dev/liveapps/">Getting Started Guide</a> to start creating your own live app.

## Publishing

During the beta period, only developers of your app will be able to insert the app. To add a developer, go to the Quip Dev Portal. To insert the live app in a Quip document, type @ followed by the app name.

Others can view and interact with the app, but they won't be able to create new instances of it yet.

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
