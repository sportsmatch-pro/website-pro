import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'

export default {
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