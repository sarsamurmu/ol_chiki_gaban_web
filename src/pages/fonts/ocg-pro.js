import { FontPage } from '@/components/font-page'
import { OCGPro } from '@/fonts/OCG-Pro'

export default function Page() {
  const variations = [
    [100, 'Thin'],
    [200, 'Extra Light'],
    [300, 'Light'],
    [400, 'Regular'],
    [500, 'Medium'],
    [600, 'Semi Bold'],
    [700, 'Bold'],
    [800, 'Extra Bold'],
    [900, 'Black']
  ].flatMap(x => ([[...x, false], [x[0], x[1] + ' Italic', true]]))

  return (
    <FontPage
      name='OCG Pro'
      archiveName='OCG-Pro'
      fontClassName={OCGPro.className}
      variations={variations}>
      <p>
        This is the font I have spent the most time refining.
      </p>
      <p>
        Covers all letters, numbers and symbols of Ol&nbsp;Chiki script.
      </p>
      <p>
        The regular variant is properly kerned and is best suited for print and other digital uses.
        The other variants are there for stylistic purposes and do not have proper kerning.
        I expect the users to adjust the kerning themselves when necessary.
      </p>
    </FontPage>
  )
}
