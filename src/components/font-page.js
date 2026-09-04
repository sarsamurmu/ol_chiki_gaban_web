import { Header } from './header'
import { MetaHead } from './meta-head'
import '@/fonts'
import s from '@/styles/fontpage.module.scss'

const MainContent = ({ fontName, variations, fontClassName, archiveName, children }) => {
  return (
    <div className={s.mainContent}>
      <h1>{fontName}</h1>
      {children}
      <a href={`/fonts/${archiveName}.zip`}><button className={s.downloadBtn}>↓&nbsp;&nbsp;Download Font</button></a>
      <h2>Styles</h2>
      {variations.map(([weight, name, isItalic]) => (
        <div key={weight + name + isItalic} className={s.preview}>
          <p className={s.label}>{name}</p>
          <div
            style={{ fontWeight: weight, fontStyle: isItalic ? 'italic' : 'normal' }}
            className={`${s.editBox} ${fontClassName}`}
            contentEditable
            spellCheck={false}
            suppressContentEditableWarning={true}>
            ᱡᱚᱦᱟᱨ ᱜᱮ ᱥᱟᱱᱟᱢ ᱠᱚ
          </div>
        </div>
      ))}
    </div>
  )
}

export const FontPage = ({
  children,
  name,
  variations,
  archiveName,
  fontClassName
}) => {
  return (
    <>
      <MetaHead namePrefix={`${name} Font`} />
      <Header />
      <MainContent {...({ fontName: name, variations, fontClassName, archiveName })}>{children}</MainContent>
    </>
  )
}
