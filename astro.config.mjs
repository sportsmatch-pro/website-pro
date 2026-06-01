import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import { loadEnv } from 'vite'

const env = loadEnv('', process.cwd(), '')
const PORT = parseInt(env.PORT || '3002', 10)

export default {
    server: { port: PORT },
    integrations: [
        react()
    ],
    output: 'static',
    build: {
        static: true
    },
    vite: {
        plugins: [tailwindcss()],
        server: {
            watch: {
                usePolling: true
            }
        }
    }
}