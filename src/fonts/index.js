import { Inter, JetBrains_Mono } from 'next/font/google'
import localFont from 'next/font/local'

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--inter'
})
const jetbrains = JetBrains_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--monospace'
})
const ocg = localFont({
  src: [
    {
      path: './OCG Sans Extra Light.otf',
      weight: '200'
    },
    {
      path: './OCG Sans Light.otf',
      weight: '300'
    },
    {
      path: './OCG Sans Regular.otf',
      weight: '400'
    },
    {
      path: './OCG Sans Medium.otf',
      weight: '500'
    },
    {
      path: './OCG Sans Bold.otf',
      weight: '700'
    },
    {
      path: './OCG Sans Extra Bold.otf',
      weight: '800'
    }
  ],
  variable: '--ol-chiki',
  fallback: [],
  adjustFontFallback: false
})

export const fontClassNames = [inter, jetbrains, ocg].map(x => x.variable).join(' ')
