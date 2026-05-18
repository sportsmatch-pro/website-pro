import { spawn, execSync } from 'child_process'
import { existsSync } from 'fs'
import { resolve } from 'path'

const PORT = 4321
const ROOT = resolve(__dirname, '..')

let previewProcess: ReturnType<typeof spawn> | null = null

function waitForPort(port: number, timeoutMs = 30000): Promise<void> {
  return new Promise((res, rej) => {
    const deadline = Date.now() + timeoutMs
    const check = () => {
      fetch(`http://localhost:${port}/`)
        .then(() => res())
        .catch(() => {
          if (Date.now() > deadline) {
            rej(new Error(`Server on port ${port} did not start within ${timeoutMs}ms`))
          } else {
            setTimeout(check, 500)
          }
        })
    }
    check()
  })
}

export async function setup(): Promise<void> {
  const distPath = resolve(ROOT, 'dist')
  if (!existsSync(distPath)) {
    console.log('[globalSetup] dist/ not found — running astro build...')
    execSync('npx astro build', { cwd: ROOT, stdio: 'inherit' })
  }

  console.log('[globalSetup] Starting astro preview...')
  previewProcess = spawn('npx', ['astro', 'preview', '--port', String(PORT)], {
    cwd: ROOT,
    stdio: 'pipe',
    detached: false,
  })

  previewProcess.stderr?.on('data', (data: Buffer) => {
    process.stderr.write(data)
  })

  await waitForPort(PORT)
  console.log(`[globalSetup] Server ready on http://localhost:${PORT}`)
}

export async function teardown(): Promise<void> {
  if (previewProcess) {
    console.log('[globalSetup] Stopping astro preview...')
    previewProcess.kill('SIGTERM')
    previewProcess = null
  }
}
