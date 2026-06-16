import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import critters from 'astro-critters'
import tailwindcss from '@tailwindcss/vite'
import { loadEnv } from 'vite'
import { defineConfig } from 'astro/config'

const env = loadEnv('', process.cwd(), '')
const PORT = parseInt(env.PORT || '3002', 10)

const PRIVATE_PAGES = ['/acceder', '/registrarse', '/soporte']

export default defineConfig({
    site: 'https://sportsmatch.pro',
    server: { port: PORT },
    integrations: [
        react(),
        sitemap({
            filter: (page) =>
                !PRIVATE_PAGES.some((p) => new URL(page).pathname.endsWith(p + '/') || new URL(page).pathname === p),
        }),
        critters(),
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
