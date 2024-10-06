import Head from "next/head";
import Link from 'next/link'
import s from "@/styles/home.module.scss";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useEffect, useRef, useState } from 'react';
import { Header } from '@/components/header';
import { MetaHead } from '@/components/meta-head';

gsap.registerPlugin(useGSAP)

const MainContent = () => {
  const ref = useRef()

  useGSAP(() => {
    const tl = gsap.timeline({
      repeat: -1,
      // paused: true
    })
    const stayDuration = 15

    tl.set(`h1 > span`, { opacity: 0 })

    const animateIn = (n) => {
      tl.set(`h1:nth-child(${n})`, { display: 'block' })
      tl.fromTo(`h1:nth-child(${n}) > span`, {
        opacity: 0
      }, {
        opacity: 1,
        stagger: 0.1,
        duration: 0.1
      }, '>')
    }

    const animateOut = (n) => {
      tl.fromTo(`h1:nth-child(${n}) > span`, {
        opacity: 1
      }, {
        opacity: 0,
        stagger: -0.1,
        duration: 0.1
      }, '>')
      tl.set(`h1:nth-child(${n})`, { display: 'none' }, '>')
    }

    animateIn(1)
    tl.to({}, { delay: stayDuration }, '>')
    animateOut(1)
    animateIn(2)
    tl.to({}, { delay: stayDuration }, '>')
    animateOut(2)

  }, { scope: ref })

  return (
    <div ref={ref} className={s.mainContent}>
      <div>
        <h1 data-nosnippet>
          {'Ol Chiki Gaban'.split('').map((x, i) => <span key={x+i}>{x}</span>)}
        </h1>
        <h1 className={s.olchiki}>
          {'ᱚᱞ ᱪᱤᱠᱤ ᱜᱟᱵᱟᱱ'.split('').map((x, i) => <span key={x + i}>{x}</span>)}
        </h1>
      </div>
      <p>The best keyboard for typing Ol Chiki on Windows</p>
      <div data-nosnippet className={s.buttons}>
        <Link href={'/download'}>
          <button>Download {'-->'}</button>
        </Link>
      </div>
    </div>
  )
}

const chars = 'ᱧᱣᱮᱨᱛᱭᱩᱤᱳᱯᱟᱥᱫᱝᱜᱷᱦᱡᱠᱞᱲᱰᱪᱶᱵᱱᱬᱢᱴᱚ'
const elementInEachRow = 10;
const getRandomChars = (length) => {
  const arr = Array(length).fill(0)
  for (let i = 0; i < length; i++) {
    let char
    while ((char = chars[Math.floor(Math.random() * chars.length)]) && (char === arr[i-1])) {}
    arr[i] = char
  }
  return arr
}

const CharacterGrid = () => {
  const ref = useRef()
  const [arr, setArr] = useState([])

  useEffect(() => {
    setArr(getRandomChars(elementInEachRow * 30))
  }, [])

  useGSAP(() => {
    gsap.to(`.${s.charGridContainer}`, { opacity: 1, duration: 0.5, delay: 1 })
  })

  useGSAP(() => {
    if (arr.length === 0) return
    const el = ref.current

    gsap.set(el, { rotation: 0.01 })
    gsap.fromTo(el, {
      y: 0
    }, {
      y: -document.querySelector(`.${s.charGrid} span`).getBoundingClientRect().height,
      ease: 'none',
      duration: 10,
      onComplete() {
        const newArr = arr.slice(elementInEachRow).concat(getRandomChars(elementInEachRow))
        setArr(newArr)
      }
    })
  }, { dependencies: [arr] })

  return (
    <div data-nosnippet className={s.charGridContainer}>
      <div ref={ref} className={`${s.charGrid}`}>
        {arr.map((x, i) => <span key={i}>{x}</span>)}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <MetaHead />
      <Header />
      <MainContent />
      <CharacterGrid />
    </>
  );
}
