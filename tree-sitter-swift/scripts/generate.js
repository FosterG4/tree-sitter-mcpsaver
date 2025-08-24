// Runs the local tree-sitter CLI reliably on Windows
const { spawnSync } = require('node:child_process');
const path = require('node:path');

const repoRoot = path.resolve(__dirname, '..');
const cli = path.resolve(repoRoot, 'node_modules', 'tree-sitter-cli', 'cli.js');

const result = spawnSync(process.execPath, [cli, 'generate', '--no-bindings'], {
  cwd: repoRoot,
  stdio: 'inherit',
});

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}
