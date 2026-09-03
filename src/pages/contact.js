import { Header } from '@/components/header'
import { MetaHead } from '@/components/meta-head'
import s from '@/styles/contact.module.scss'
import '@/fonts'

const MainContent = () => {
  return (
    <div className={s.mainContent}>
      <h1>Contact me</h1>
      <p>Found a bug? Have a suggestion? Want to request a new font?</p>
      <p>Or maybe you just want to say hi. Whatever it is, I'd love to hear from you!</p>
      <p>
        Drop me a message -{' '}
        <a href='https://telegram.me/sarsamurmu' target='_blank' rel='noreferrer'>Telegram</a>
        {' · '}
        <a href='https://instagram.com/sarsa.murmu' target='_blank' rel='noreferrer'>Instagram</a>
      </p>
    </div>
  )
}

export default function ContactPage() {
  return (
    <>
      <MetaHead namePrefix='Contact' />
      <Header />
      <MainContent />
    </>
  )
}
