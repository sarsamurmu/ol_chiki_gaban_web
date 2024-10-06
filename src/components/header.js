import s from '@/styles/header.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import logo from '/assets/logo.svg'
import { inter, notoOlChiki } from '@/components/fonts'

export const Header = () => {
  const items = [
    ['Download', '/download'],
    ['How to use', '/how-to-use']
  ]

  return (
    <div data-nosnippet className={s.header}>
      <Link href={'/'} className={s.logoLink}>
        <Image src={logo} alt='' />
      </Link>
      <ul>
        {items.map(([name, link]) => (
          <li key={link}>
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
