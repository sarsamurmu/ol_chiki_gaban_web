import localFont from 'next/font/local'

export const OCGPro = localFont({
  src: [
    {
      path: './OCGPro-Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './OCGPro-ThinItalic.otf',
      weight: '100',
      style: 'italic',
    },
    {
      path: './OCGPro-ExtraLight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './OCGPro-ExtraLightItalic.otf',
      weight: '200',
      style: 'italic',
    },
    {
      path: './OCGPro-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './OCGPro-LightItalic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: './OCGPro-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './OCGPro-Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './OCGPro-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './OCGPro-MediumItalic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './OCGPro-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './OCGPro-SemiBoldItalic.otf',
      weight: '600',
      style: 'italic',
    },
    {
      path: './OCGPro-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './OCGPro-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: './OCGPro-ExtraBold.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './OCGPro-ExtraBoldItalic.otf',
      weight: '800',
      style: 'italic',
    },
    {
      path: './OCGPro-Black.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './OCGPro-BlackItalic.otf',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--ocg-pro',
  fallback: [],
  adjustFontFallback: false
})
