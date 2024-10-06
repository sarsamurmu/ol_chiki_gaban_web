import { Inter, Noto_Sans_Ol_Chiki, JetBrains_Mono } from 'next/font/google'

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--inter'
})
const noto = Noto_Sans_Ol_Chiki({
  weight: ['400', '500', '600', '700'],
  subsets: ['ol-chiki'],
  variable: '--ol-chiki'
})
const jetbrains = JetBrains_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--monospace'
})

export const fontClassNames = [inter, noto, jetbrains].map(x => x.variable).join(' ')
