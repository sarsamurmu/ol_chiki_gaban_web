import { FontPage } from '@/components/font-page'
import { OCGVegar1 } from '@/fonts/OCG-Vegar'

export default function Page() {
  return (
    <FontPage
      name='OCG Vegar 1'
      archiveName='OCG-Vegar-1'
      fontClassName={OCGVegar1.className}
      variations={[[400, 'Regular']]}>
      <p>
        Covers all letters Ol&nbsp;Chiki script. No numbers and symbols.
      </p>
    </FontPage>
  )
}
