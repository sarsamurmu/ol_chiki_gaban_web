import Link from 'next/link'
import { MetaHead } from '@/components/meta-head'
import { Header } from '@/components/header'
import s from '@/styles/fonts.module.scss'
import '@/fonts'
import { OCGPro } from '@/fonts/OCG-Pro'
import { OCGVegar1, OCGVegar2 } from '@/fonts/OCG-Vegar'
import { useRouter } from 'next/router'

const MainContent = () => {
  const router = useRouter()
  const fontItems = [
    ['OCG Pro', OCGPro, 'ocg-pro'],
    ['OCG Vegar 1', OCGVegar1, 'ocg-vegar-1'],
    ['OCG Vegar 2', OCGVegar2, 'ocg-vegar-2']
  ]

  return (
    <div className={s.mainContent}>
      <p>Have a design in mind? <Link href='/contact'>Let me know!</Link></p>
      {fontItems.map(([name, nextFont, pagePath]) => (
        <div key={name} className={s.fontItem} onClick={() => router.push('/fonts/' + pagePath)}>
          <p className={s.label}>{name}</p>
          <p className={`${s.preview} ${nextFont.className}`}>
            ᱡᱚᱦᱟᱨ ᱜᱮ ᱥᱟᱱᱟᱢ ᱠᱚ
          </p>
        </div>
      ))}
    </div>
  )
}

export default function FontsPage() {
  return (
    <>
      <MetaHead namePrefix='Fonts' />
      <Header />
      <MainContent />
    </>
  )
}
