#!/usr/bin/env node
import { Command } from 'commander';
import inquirer from 'inquirer';
import chalk from 'chalk';
import ora from 'ora';
import { generateProject } from './generator.js';
import { buildProject } from './builder.js';
import { fixErrors } from './fixer.js';

const program = new Command();

program
  .name('ralph')
  .description('Ralph‑Fixer: Turn plain‑language ideas into working micro‑apps')
  .version('1.0.0');

program
  .command('create')
  .description('Create a new React + Vite + Tailwind micro-app from a description')
  .option('-n, --name <name>', 'Project name')
  .option('-d, --description <description>', 'App description')
  .option('-o, --output <path>', 'Output directory', './output')
  .action(async (options) => {
    console.log(chalk.blue.bold('\n🚀 Welcome to Ralph-Fixer!\n'));

    let projectName = options.name;
    let appDescription = options.description;

    // If options not provided, prompt the user
    if (!projectName || !appDescription) {
      const answers = await inquirer.prompt([
        {
          type: 'input',
          name: 'projectName',
          message: 'What would you like to name your project?',
          default: 'my-app',
          when: !projectName,
        },
        {
          type: 'input',
          name: 'appDescription',
          message: 'Describe your app in plain language:',
          default: 'A simple counter app with increment and decrement buttons',
          when: !appDescription,
        },
      ]);

      projectName = projectName || answers.projectName;
      appDescription = appDescription || answers.appDescription;
    }

    console.log(chalk.green(`\n✨ Creating: ${projectName}`));
    console.log(chalk.gray(`Description: ${appDescription}\n`));

    const spinner = ora('Generating project structure...').start();

    try {
      // Step 1: Generate project
      spinner.text = 'Generating React + Vite + Tailwind project...';
      const projectPath = await generateProject(projectName, appDescription, options.output);
      spinner.succeed('Project structure generated!');

      // Step 2: Build project
      spinner.start('Building project...');
      const buildResult = await buildProject(projectPath);
      
      if (buildResult.success) {
        spinner.succeed('Project built successfully!');
      } else {
        spinner.warn('Build encountered errors. Attempting auto-fix...');
        
        // Step 3: Fix errors
        spinner.start('Auto-fixing errors...');
        const fixResult = await fixErrors(projectPath, buildResult.errors);
        
        if (fixResult.success) {
          spinner.succeed('All errors fixed! Project is ready!');
        } else {
          spinner.fail('Some errors could not be auto-fixed.');
          console.log(chalk.yellow('\n⚠️  Manual intervention may be required.'));
        }
      }

      console.log(chalk.green.bold(`\n✅ Done! Your app is ready at: ${projectPath}`));
      console.log(chalk.cyan('\nNext steps:'));
      console.log(chalk.gray(`  cd ${projectPath}`));
      console.log(chalk.gray('  npm install'));
      console.log(chalk.gray('  npm run dev\n'));

    } catch (error) {
      spinner.fail('Failed to create project');
      console.error(chalk.red(`\n❌ Error: ${error.message}`));
      process.exit(1);
    }
  });

program.parse();
