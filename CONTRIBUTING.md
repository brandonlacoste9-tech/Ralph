# Contributing to Ralph-Fixer

Thank you for your interest in contributing to Ralph-Fixer! This guide will help you get started.

## Development Setup

1. Fork and clone the repository:
```bash
git clone https://github.com/your-username/Ralph.git
cd Ralph
```

2. Install dependencies:
```bash
npm install
```

3. Test the CLI locally:
```bash
node src/cli.js create
```

## Project Structure

```
Ralph/
├── src/
│   ├── cli.js         # Command-line interface
│   ├── generator.js   # Project template generator
│   ├── builder.js     # Build automation
│   ├── fixer.js       # Error detection and fixing
│   └── index.js       # Main exports
├── templates/         # Future: Additional templates
├── examples.sh        # Demo script
├── package.json       # Project configuration
└── README.md         # Documentation
```

## How to Contribute

### Reporting Bugs

If you find a bug, please open an issue with:
- A clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Your environment (OS, Node.js version)

### Suggesting Features

Feature suggestions are welcome! Please:
- Check if the feature has already been requested
- Describe the use case clearly
- Explain how it would benefit users

### Adding New Templates

To add a new app template:

1. Edit `src/generator.js`
2. Add a new pattern detection in `generateAppComponent()`
3. Create a new generator function (e.g., `generateCalendarApp()`)
4. Test with various descriptions

Example:
```javascript
function generateCalendarApp() {
  return `// Your React component code here`;
}
```

### Improving Error Fixing

To enhance the auto-fix capability:

1. Edit `src/fixer.js`
2. Add new error pattern detection
3. Implement fix logic
4. Test with real-world errors

### Code Style

- Use ES6+ features
- Follow existing code patterns
- Add comments for complex logic
- Keep functions focused and small

## Testing Your Changes

1. Test the CLI with various descriptions:
```bash
node src/cli.js create --name test-app --description "your description"
```

2. Verify the generated project builds:
```bash
cd output/test-app
npm run dev
npm run build
```

3. Test error scenarios and auto-fix

## Pull Request Process

1. Create a feature branch:
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes with clear commits

3. Test thoroughly

4. Update README if needed

5. Submit a pull request with:
   - Clear description of changes
   - Why the change is needed
   - Testing performed

## Questions?

Feel free to open an issue for any questions or concerns!
