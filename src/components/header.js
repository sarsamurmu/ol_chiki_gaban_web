import s from '@/styles/header.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import logo from '/assets/logo.svg'
import { useRef } from 'react'
import gsap from 'gsap'
import { ThreeBarsIcon, XIcon } from '@primer/octicons-react'

export const Header = () => {
  const items = [
    ['Download', '/download'],
    ['How to use', '/how-to-use'],
    ['Contact us', '/contact']
  ]
  const ulRef = useRef()
  const threeBarIcRef = useRef()
  const XIcRef = useRef()

  const toggle = () => {
    const [el, threeBarIc, xIc] = [ulRef, threeBarIcRef, XIcRef].map(x => x.current)

    if (el.style.height == '') {
      gsap.set(el.querySelectorAll('li'), { display: 'block' })
      gsap.set(el, { height: 'auto' })
      const height = el.getBoundingClientRect().height
      gsap.set(el, { height: 0 })
      gsap.to(el, { height })
      gsap.to(threeBarIc, { rotate: -45, opacity: 0, duration: 0.2 })
      gsap.fromTo(xIc, { rotate: 45 }, { rotate: 0, opacity: 1, duration: 0.2 })
    } else {
      gsap.to(el, {
        height: 0,
        onComplete() {
          el.style.removeProperty('height')
          gsap.set(el.querySelectorAll('li'), { display: 'none' })
        }
      })
      gsap.to(threeBarIc, { rotate: 0, opacity: 1, duration: 0.2 })
      gsap.to(xIc, { rotate: 45, opacity: 0, duration: 0.2 })
    }
  }

  return (
    <div data-nosnippet className={s.header}>
      <div>
        <Link href={'/'} className={s.logoLink}>
          <Image src={logo} alt='' />
        </Link>
        <button onClick={toggle}>
          <ThreeBarsIcon size={26} ref={threeBarIcRef} />
          <XIcon size={26} ref={XIcRef} />
        </button>
      </div>
      <ul ref={ulRef}>
        {items.map(([name, link]) => (
          <li key={link}>
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
