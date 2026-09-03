import { Inter, JetBrains_Mono } from 'next/font/google'
import { OCGPro } from './OCG-Pro'

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

export const fontClassNames = [inter, jetbrains, OCGPro].map(x => x.variable).join(' ')
