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
    }
  ],
  variable: '--ol-chiki'
})

export const fontClassNames = [inter, jetbrains, ocg].map(x => x.variable).join(' ')
