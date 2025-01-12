import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Entre Grãos e Grafemas - Arabie Bezri Hermont',
    short_name: 'Arabie Bezri Hermont',
    description:
      'Um blog, escrito por Arabie Bezri Hermont, dedicado ao estudo da Linguística, com artigos e reflexões sobre aquisição de linguagem, sintaxe, fonética, fonologia e outros temas essenciais para entender os fenômenos da linguagem humana.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fdffff',
    theme_color: '#8c4949',
    icons: [
      {
        src: '/pwa/pwa-p.png',
        sizes: '144x144',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/pwa/pwa-m.png',
        sizes: '256x256',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/pwa/pwa-g.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
