import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import { loadEnv } from 'vite'
import { defineConfig } from 'astro/config'

const env = loadEnv('', process.cwd(), '')
const PORT = parseInt(env.PORT || '3002', 10)

export default defineConfig({
    server: { port: PORT },
    integrations: [
        react()
    ],
    output: 'static',
    build: {
        static: true
    },
    i18n: {
        defaultLocale: 'es',
        locales: ['es', 'ca', 'en'],
        routing: {
            prefixDefaultLocale: false,
        },
    },
    vite: {
        plugins: [tailwindcss()],
        server: {
            watch: {
                usePolling: true
            }
        }
    }
})
