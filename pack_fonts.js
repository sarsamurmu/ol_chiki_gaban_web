import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { ZipArchive } from 'archiver'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.resolve(__dirname, './public/fonts')

fs.mkdirSync(outDir, { recursive: true })

const license = `
Copyright © ${new Date().getFullYear()} Sarsa Murmu

This font is free to use for personal and commercial purposes.

You are permitted to:

- Use the font for personal and commercial projects.
- Use the font in printed and digital materials.
- Use the font in logos, branding, websites, applications, and other creative works.
- Modify the font for your own use.
- Embed the font in documents and applications where technically permitted.

You may not:

- Sell, sublicense, or redistribute the font files themselves.
- Upload or distribute the font files on font-sharing or download websites without permission.
- Claim the original font as your own.
- Redistribute modified versions of the font without permission.

The font is provided "as is", without warranty of any kind. The author shall not be held liable for any damages arising from the use of this font.

For licensing questions or permission for uses not covered above, please contact:

Sarsa Murmu https://olchikigaban.vercel.app/contact
`.trim()

const pack = (archiveName, files) => {
  const output = fs.createWriteStream(path.join(outDir, archiveName))
  const archive = new ZipArchive({ zlib: { level: 9 } })

  output.on('close', () => {
    console.log(`Created ${archiveName} (${archive.pointer()} bytes)`)
  })

  archive.on('error', err => {
    throw err
  })

  archive.pipe(output)

  files.forEach(([filePath, name]) => {
    archive.append(fs.createReadStream(filePath), { name })
  })

  archive.append(license, { name: 'LICENSE.txt' })

  archive.finalize()
}

{
  const inDir = path.resolve(__dirname, './src/fonts/OCG-Pro')
  const files = fs.readdirSync(inDir)
    .filter(f => f.endsWith('.otf'))
    .map(f => [path.join(inDir, f), f])
  
  pack('OCG-Pro.zip', files)
}

{
  [1, 2].forEach(num => {
    const inDir = path.resolve(__dirname, './src/fonts/OCG-Vegar')
    const name = `OCG Vegar ${num}.otf`
    pack(`OCG-Vegar-${num}.zip`, [[path.resolve(inDir, name), name]])
  })
}
