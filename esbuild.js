// esbuild.js
const esbuild = require('esbuild');
const path = require('path');

esbuild.build({
  entryPoints: ['./src/extension.ts'],
  bundle: true,
  outfile: 'out/extension.js',
  platform: 'node',
  external: ['vscode'], // 'vscode' is provided by VS Code, not to be bundled
  sourcemap: true,
  format: 'cjs',
  target: ['node18'],
}).catch(() => process.exit(1));

esbuild.build({
  entryPoints: ['./src/server.ts'],
  bundle: true,
  outfile: 'out/server.js',
  platform: 'node',
  external: ['vscode'],
  sourcemap: true,
  format: 'cjs',
  target: ['node18'],
}).catch(() => process.exit(1));
