import { FontPage } from '@/components/font-page'
import { OCGVegar2 } from '@/fonts/OCG-Vegar'

export default function Page() {
  return (
    <FontPage
      name='OCG Vegar 2'
      archiveName='OCG-Vegar-2'
      fontClassName={OCGVegar2.className}
      variations={[[400, 'Regular']]}>
      <p>
        Covers all letters Ol&nbsp;Chiki script. No numbers and symbols.
      </p>
    </FontPage>
  )
}
