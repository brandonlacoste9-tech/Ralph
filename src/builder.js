import { execa } from 'execa';
import path from 'path';
import fs from 'fs-extra';

/**
 * Build the generated project and capture any errors
 */
export async function buildProject(projectPath) {
  const errors = [];
  let success = true;

  try {
    // Check if node_modules exists, if not, run npm install
    const nodeModulesPath = path.join(projectPath, 'node_modules');
    const nodeModulesExists = await fs.pathExists(nodeModulesPath);

    if (!nodeModulesExists) {
      console.log('  Installing dependencies...');
      try {
        await execa('npm', ['install'], {
          cwd: projectPath,
          stdio: 'pipe',
        });
      } catch (installError) {
        errors.push({
          type: 'install',
          message: installError.message,
          stderr: installError.stderr,
        });
        success = false;
        return { success, errors };
      }
    }

    // Try to build the project
    try {
      const result = await execa('npm', ['run', 'build'], {
        cwd: projectPath,
        stdio: 'pipe',
        timeout: 60000, // 60 second timeout
      });
      
      success = true;
    } catch (buildError) {
      errors.push({
        type: 'build',
        message: buildError.message,
        stderr: buildError.stderr,
        stdout: buildError.stdout,
      });
      success = false;
    }

  } catch (error) {
    errors.push({
      type: 'general',
      message: error.message,
    });
    success = false;
  }

  return { success, errors };
}
