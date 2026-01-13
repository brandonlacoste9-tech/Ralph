# Ralph-Fixer 🚀

Ralph‑Fixer turns plain‑language ideas into working micro‑apps. It generates a full React + Vite + Tailwind project, builds and tests it in a sandbox, and automatically fixes every error until everything runs clean. Download or deploy instantly with no coding or debugging—just describe the app you want and Ralph delivers.

## Features

✨ **Plain-Language Input**: Just describe what you want in plain English  
⚛️ **React + Vite + Tailwind**: Modern, fast, and beautiful by default  
🔨 **Auto-Build**: Automatically installs dependencies and builds your project  
🐛 **Auto-Fix**: Detects and fixes common errors automatically  
📦 **Ready to Deploy**: Get a production-ready bundle instantly  

## Installation

```bash
npm install
```

## Usage

### Create a new micro-app

```bash
node src/cli.js create
```

You'll be prompted to enter:
- **Project name**: Name of your app
- **Description**: Describe your app in plain language

### Command-line options

```bash
node src/cli.js create --name my-app --description "A counter app with buttons" --output ./output
```

Options:
- `-n, --name <name>`: Project name
- `-d, --description <description>`: App description in plain language
- `-o, --output <path>`: Output directory (default: `./output`)

## Examples

### Counter App
```bash
node src/cli.js create --name counter-app --description "A simple counter with increment and decrement buttons"
```

### Todo List
```bash
node src/cli.js create --name todo-app --description "A todo list for managing daily tasks"
```

### Contact Form
```bash
node src/cli.js create --name contact-form --description "A form with name, email and message fields"
```

## What Gets Generated

Ralph-Fixer creates a complete project structure:
- ⚙️ **package.json** with React, Vite, and Tailwind dependencies
- 📝 **vite.config.js** for Vite configuration
- 🎨 **tailwind.config.js** and **postcss.config.js** for Tailwind
- 🏠 **index.html** as the entry point
- ⚛️ **src/App.jsx** with your custom component based on the description
- 🎯 **src/main.jsx** for React rendering
- 💅 **src/index.css** with Tailwind directives
- 🚫 **.gitignore** for version control

## Generated Project Usage

After Ralph creates your project:

```bash
cd output/your-app-name
npm install  # Already done by Ralph
npm run dev  # Start development server
npm run build  # Build for production
```

## How It Works

1. **Parse**: Analyzes your plain-language description
2. **Generate**: Creates a React + Vite + Tailwind project structure
3. **Build**: Installs dependencies and builds the project
4. **Fix**: Automatically detects and fixes common errors
5. **Deliver**: Provides a ready-to-use, production-ready app

## Supported App Types

Ralph recognizes these patterns and generates appropriate components:
- **Counter apps**: Increment/decrement/reset functionality
- **Todo lists**: Add, complete, and delete tasks
- **Forms**: Contact forms, surveys, data entry
- **Generic apps**: Custom starter template

## Requirements

- Node.js 18+ recommended
- npm or yarn

## License

Apache-2.0
