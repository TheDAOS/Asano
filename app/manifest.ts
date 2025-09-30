import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Asano',
        short_name: 'Asano',
        description: 'Asano a Next.js PWA Expence tracker app',
        start_url: '/home',
        display: 'standalone',
        background_color: '#FFFFFF',
        theme_color: '#000000',
        icons: [
            {
                src: '/web-app-manifest-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/web-app-manifest-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}