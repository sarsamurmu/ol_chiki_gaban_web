import { Header } from '@/components/header'
import { MetaHead } from '@/components/meta-head'
import Link from 'next/link'
import Image from 'next/image'
import s from '@/styles/download.module.scss'
import smartscreen from '/assets/smartscreen.svg'
import smartscreen_more from '/assets/smartscreen_more.svg'
import '@/components/fonts'

const gitRaw = 'https://raw.githubusercontent.com/sarsamurmu/ocg-releases/refs/heads/main/'
const setupFile = 'Ol-Chiki-Gaban-Setup.exe'
const portableFile = 'Ol-Chiki-Gaban-Portable.zip'
const portableFileExe = 'Ol Chiki Gaban.exe'

const MainContent = () => {
  return (
    <div className={s.mainContent}>
      <h1>
        Download Installer (Recommended)
      </h1>

      <ul>
        <li>
          <a href={gitRaw + setupFile}>
            Click here
          </a> to download the setup
        </li>
        <li>After the download is complete, run <code>{setupFile}</code></li>
        <li>
          When prompted with the following message, click <code>More info</code> then click <code>Run anyway</code>
          <br /><br />
          <Image src={smartscreen} alt='Microsoft SmartScreen first page' />
          <Image src={smartscreen_more} alt='Microsoft SmartScreen after clicking "More info"' />
        </li>
        <li>After the install completes, the app will start and you can now use the keyboard!</li>
        <li>We recommend reading <Link href='/how-to-use'>How to use guide</Link> for better experience.</li>
      </ul>

      <h1>
        Download Portable Version
      </h1>

      <ul>
        <li>
          <a href={gitRaw + portableFile}>
            Click here
          </a> to download the portable version
        </li>
        <li>Extract <code>{portableFile}</code>, then run <code>{portableFileExe}</code> to start using the keyboard</li>
      </ul>
    </div>
  )
}

export default function DownloadPage() {
  return (
    <>
      <MetaHead siteName='Download - Ol Chiki Gaban' />
      <Header />
      <MainContent />
    </>
  )
}
