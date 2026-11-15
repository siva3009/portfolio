import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const args = process.argv.slice(2);
const value = (keys, fallback) => { const index = args.findIndex(arg => keys.includes(arg)); return index >= 0 && args[index + 1] ? args[index + 1] : fallback; };
// Sites passes Vite-style flags; translate them to the actual Next.js CLI.
const child = spawn(process.execPath, [require.resolve('next/dist/bin/next'), 'dev', '--webpack', '--hostname', value(['--host', '--hostname'], '0.0.0.0'), '--port', value(['--port', '-p'], '3000')], { stdio: 'inherit', env: process.env });
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => child.kill(signal));
child.on('exit', code => process.exit(code ?? 0));
