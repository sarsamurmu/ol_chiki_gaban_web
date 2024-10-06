import { MetaHead } from '@/components/meta-head'
import { Header } from '@/components/header'
import s from '@/styles/contact.module.scss'
import '@/components/fonts'

const mail = 'contact@olchikigaban.com'

const MainContent = () => {
  return (
    <div className={s.mainContent}>
      <h1>Contact us</h1>
      <p>
        If you have any questions or feedback, contact us at <a href={'mailto:' + mail}>{mail}</a>
      </p>
    </div>
  )
}

export default function ContactPage() {
  return (
    <>
      <MetaHead siteName='Contact us - Ol Chiki Gaban' />
      <Header />
      <MainContent />
    </>
  )
}
