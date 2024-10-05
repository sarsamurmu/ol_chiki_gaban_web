import '@/styles/globals.scss'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />

      <Script
        defer
        data-cf-beacon='{"token": "bc4b50cd41514d01855ff104fd013e70"}'
        src='https://static.cloudflareinsights.com/beacon.min.js' />
    </>
  )
}
