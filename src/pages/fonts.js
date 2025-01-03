import { MetaHead } from '@/components/meta-head'
import { Header } from '@/components/header'
import s from '@/styles/fontpage.module.scss'
import '@/fonts'

const samplePassage = `
ᱚᱱᱟᱠᱚ ᱜᱟᱰᱟ ᱨᱮᱜᱮ ᱥᱩᱨᱩᱡᱽ ᱛᱮᱠᱤᱱ ᱟᱯᱟᱦᱚᱱ ᱡᱚᱸᱰᱽᱨᱟ, ᱵᱟᱡᱽᱲᱟ, ᱜᱷᱟᱸᱜᱽᱨᱟ ᱮᱢᱟᱱᱠᱤᱱ ᱪᱟᱥ ᱟᱠᱟᱫ
ᱛᱟᱦᱮᱸᱠᱟᱱᱟ᱾ ᱢᱤᱫ ᱢᱟ ᱚᱱᱟᱠᱚ ᱠᱚᱪᱟᱨᱮ ᱵᱩᱨᱩ ᱫᱟᱜ ᱟᱛᱳ ᱯᱷᱮᱰᱚᱜ ᱠᱟᱱ ᱛᱟᱦᱮᱸᱜ, ᱫᱚᱥᱟᱨ ᱫᱚ ᱥᱟᱨ
ᱦᱚᱸᱠᱤᱱ ᱞᱟᱜᱟᱣ ᱞᱮᱫ ᱛᱟᱦᱮᱸ ᱛᱮ ᱚᱱᱟᱠᱚ ᱪᱟᱥ ᱫᱚ ᱟᱹᱰᱤ ᱟᱸᱴ ᱦᱩᱭ ᱟᱠᱟᱱ ᱛᱟᱦᱮᱸ ᱠᱟᱱᱟ᱾ ᱟᱨ ᱚᱱᱟ ᱧᱮᱞᱛᱮ
ᱟᱯᱟᱦᱚᱱ ᱛᱩᱞ ᱵᱟᱲᱟᱠᱤᱱ ᱞᱮᱠᱟᱠᱤᱱ ᱟᱹᱭᱠᱟᱹᱣᱮᱫ ᱛᱟᱦᱮᱸ ᱠᱟᱱᱟ᱾ ᱥᱩᱨᱩᱡᱽ ᱟᱡ ᱵᱟᱵᱟ ᱟᱛᱳ ᱨᱮᱱ ᱦᱚᱲᱠᱚ ᱧᱟᱢ
ᱞᱮᱠᱷᱟᱱᱠᱚ ᱢᱮᱛᱟᱭᱟ — “ᱥᱮᱫᱟᱭ ᱡᱩᱜᱽ ᱫᱚ ᱨᱩᱣᱟᱹᱲ ᱟᱠᱟᱱ ᱛᱟᱵᱚᱱᱟ᱾ ᱱᱮᱥ ᱫᱚ ᱥᱩᱨᱩᱡᱽ ᱫᱚᱢ ᱦᱚᱲ ᱜᱚᱫ ᱟᱭ ᱪᱚ ᱪᱮᱫ ᱪᱚ”᱾
ᱥᱩᱨᱩᱡᱽ ᱟᱡ ᱵᱟᱵᱟ ᱩᱱᱠᱩᱣᱟᱜ ᱠᱟᱛᱷᱟ ᱟᱸᱡᱚᱢ ᱠᱟᱛᱮ ᱫᱚ ᱢᱩᱞᱩᱡ ᱢᱟᱪᱷᱟᱭ ᱞᱟᱸᱫᱟᱭᱟ ᱟᱨ ᱦᱟᱸᱼᱦᱩᱸᱭ ᱢᱮᱱ ᱵᱟᱲᱟᱣᱟᱠᱚᱣᱟ᱾
ᱵᱤᱨ ᱰᱟᱹᱰᱤᱛᱮ ᱫᱟᱜ ᱞᱩ ᱪᱟᱞᱟᱜ ᱠᱩᱲᱤ ᱦᱚᱸ ᱦᱩᱭ ᱟᱠᱟᱱ ᱪᱟᱥ ᱧᱮᱞ ᱛᱮᱠᱚ ᱢᱮᱱᱟ —
“ᱥᱩᱨᱩᱡᱽ ᱦᱚᱸ ᱩᱱᱠᱩᱣᱟᱜ ᱜᱟᱞᱢᱟᱨᱟᱣ ᱟᱸᱡᱚᱢ ᱛᱤᱭᱩᱜ ᱠᱟᱛᱮᱡ ᱞᱮᱠᱷᱟᱱ ᱫᱚ ᱡᱤᱣᱤ ᱠᱚ ᱡᱟᱸᱠ ᱛᱤᱭᱩᱜ ᱛᱟᱭ ᱞᱮᱠᱟᱭ
ᱟᱹᱭᱠᱟᱹᱣᱟ ᱟᱨ ᱢᱩᱞᱩᱡ ᱢᱟᱪᱷᱟᱭ ᱞᱟᱸᱫᱟ ᱜᱚᱫᱟ᱾ ᱩᱱ ᱡᱚᱠᱷᱚᱱ ᱢᱤᱨᱩᱠᱚ ᱟᱹᱯᱷᱤᱨ ᱵᱟᱲᱟᱭᱮ ᱧᱮᱞ ᱞᱮᱠᱚ ᱠᱷᱟᱱ
ᱫᱚᱭ ᱦᱚᱦᱚ ᱜᱚᱫᱟ — ‘ᱢᱤᱨᱩ ! ᱠᱩᱸᱭᱰᱤ ᱢᱤᱨᱩ ! ᱪᱮᱫᱯᱮ ᱟᱹᱯᱷᱤᱨ ᱵᱟᱲᱟᱭ ᱠᱟᱱᱟ᱾ ᱫᱮᱞᱟ, ᱦᱤᱡᱩᱜᱯᱮ ᱟᱞᱮ
ᱵᱟᱲᱜᱮᱛᱮ᱾ ᱪᱚᱴ ᱨᱮᱢᱟ ᱵᱟᱡᱽᱲᱟ, ᱛᱟᱞᱟ ᱨᱮᱢᱟ ᱡᱚᱸᱰᱽᱨᱟ, ᱯᱷᱮᱰ ᱨᱮᱢᱟ ᱜᱷᱟᱸᱜᱽᱨᱟ ᱜᱟᱫᱟᱨ ᱟᱠᱟᱱ᱾
ᱦᱟᱱᱟᱯᱮ ᱡᱚᱼᱢᱟ ᱥᱮ, ᱢᱤᱨᱩ ! ᱱᱚᱣᱟ ᱯᱮ ᱡᱚᱼᱢᱟ᱾’” ᱦᱚᱦᱚ ᱟᱸᱡᱚᱢᱛᱮ ᱢᱤᱨᱩ ᱫᱚ ᱜᱚᱼᱞᱟᱛᱮ ᱟᱹᱰᱤ ᱟᱸᱴ ᱛᱮᱠᱚ
ᱟᱹᱯᱷᱤᱨᱠᱟᱜᱼᱟ, ᱢᱮᱱᱠᱷᱟᱱ ᱫᱟᱜ ᱞᱩ ᱠᱩᱲᱤ ᱠᱚᱫᱚ, ᱵᱮᱸᱜᱮᱫ ᱧᱟᱯᱟᱢ ᱠᱟᱛᱮ, ᱠᱟᱸᱰᱟ ᱫᱟᱜ ᱪᱷᱤᱞᱠᱟᱹᱣ ᱞᱮᱠᱟ
ᱦᱮᱞᱠᱟᱣ ᱢᱚᱱ ᱟᱱᱛᱮ ᱢᱮᱞᱚᱢᱮᱪᱚ ᱤᱛᱨᱟᱹᱼᱤᱛᱨᱟᱠᱚ ᱥᱮᱱ ᱯᱟᱨᱚᱢᱚᱜᱼᱟ᱾
`.trim().replace(/\n/g, ' ')

const editable = {
  contentEditable: true,
  spellCheck: false,
  suppressContentEditableWarning: true
}

const MainContent = () => {
  return (
    <div className={s.mainContent}>
      {/* <h1>Fonts</h1> */}
      <p>
        <b>Ol Chiki Gaban Sans</b> or <b>OCG Sans</b> is a typeface carefully designed for {' '}
        better legibility. It includes all Ol Chiki alphabets and common punctuations.
        It is internally used by the app in its user interfaces.
      </p>

      <p className={s.previewBox} {...editable}>
        ᱚᱛᱜᱝᱞᱟᱠᱡᱢᱣᱤᱥᱦᱧᱨᱩᱪᱫᱬᱭᱮᱯᱰᱱᱲᱳᱴᱵᱶᱷ ᱸ ᱹ ᱺ ᱻ ᱼ ᱽ ᱾ ᱿ ᱑᱒᱓᱔᱕᱖᱗᱘᱙᱐
        {` , . ? ! / : ; < = > " # % ' () * + - – — [] \ { } ^ ‘ ’ “ ” _ | @`}
      </p>

      {/* <p>It also comes with many weights.</p> */}

      {[
        [200, 'Extra Light'],
        [300, 'Light'],
        [400, 'Regular'],
        [500, 'Medium'],
        [700, 'Bold'],
        [800, 'Extra Bold']
      ].map(([weight, name]) => (
        <div className={s.smallPreviewBox} key={weight}>
          <span>{name}</span>
          <p style={{ fontWeight: weight }} {...editable}>
            ᱡᱚᱦᱟᱨ ᱜᱮ ᱥᱟᱱᱟᱢ ᱠᱚ
          </p>
        </div>
      ))}

      <div className={s.samplePassage}>
        <span>Example text</span>
        <p>{samplePassage}</p>
        <span>Excerpt from ᱠᱚᱲᱟ by ᱵᱟᱹᱵᱩᱞᱟ ᱢᱩᱨᱢᱩ ‘ᱟᱹᱫᱤᱵᱟᱹᱥᱤ’</span>
      </div>

      <h1>Installation instructions</h1>
      <ol>
        <li>Download the <a href='https://github.com/sarsamurmu/ocg-sans/releases/download/1.0/Ol-Chiki-Gaban-Sans-1.0.zip'>fonts archive</a></li>
        <li>Extract the <code>.zip</code> file</li>
        <li>Open the folder where all files are extracted</li>
        <li>Select all font files, then right click and choose <code>Install</code></li>
      </ol>

      <h1>License</h1>
      <p>This font is available under the <a href='https://raw.githubusercontent.com/sarsamurmu/ocg-sans/refs/heads/main/LICENSE.txt'>SIL Open Font License</a>.</p>
    </div>
  )
}

export default function FontPage() {
  return (
    <>
      <MetaHead namePrefix='Fonts' />
      <Header />
      <MainContent />
    </>
  )
}
