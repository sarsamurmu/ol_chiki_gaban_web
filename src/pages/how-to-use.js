import { MetaHead } from '@/components/meta-head'
import { Header } from '@/components/header'
import s from '@/styles/how-to-use.module.scss'
import '@/fonts'

/* eslint-disable @stylistic/quote-props */
const layouts = [
  {
    'ᱚ': 'O or Shift + A',
    'ᱛ': 'T',
    'ᱜ': 'G',
    'ᱝ': 'N, G -> Tab',
    'ᱞ': 'L',

    'ᱟ': 'A',
    'ᱠ': 'K',
    'ᱡ': 'J',
    'ᱢ': 'M',
    'ᱣ': 'W',
  }, {
    'ᱤ': 'I',
    'ᱥ': 'S',
    'ᱦ': 'Shift + H',
    'ᱧ': 'Q or N, J -> Tab',
    'ᱨ': 'R',
    'ᱩ': 'U',
    'ᱪ': 'C',
    'ᱫ': 'D',
    'ᱬ': 'Shift + N',
    'ᱭ': 'Y',
  }, {
    'ᱮ': 'E',
    'ᱯ': 'P',
    'ᱰ': 'Shift + D',
    'ᱱ': 'N',
    'ᱲ': 'Shift + R',

    'ᱳ': 'Shift + O',
    'ᱴ': 'Shift + T',
    'ᱵ': 'B',
    'ᱶ': 'Shift + W',
    'ᱷ': 'H',
  }, {
    'ᱸ': 'Backtick key (`)',
    'ᱹ': 'Period key (.)',
    'ᱺ': 'Backtick, Period -> Tab',
    'ᱻ': 'Shift + Backtick',
    'ᱼ': 'Dash key',
    'ᱽ': 'Z',
    '᱾': 'Shift + Period key',
    '᱿': 'Period, Peroid -> Tab',
    '—': 'Dash, Dash -> Tab'
  }, {
    '᱑': '1',
    '᱒': '2',
    '᱓': '3',
    '᱔': '4',
    '᱕': '5',

    '᱖': '6',
    '᱗': '7',
    '᱘': '8',
    '᱙': '9',
    '᱐': '0',
  }
]
/* eslint-enable */

const LayoutTable = ({ layout, ...props }) => (
  <table {...props}>
    <thead>
      <tr>
        <th>Letter</th>
        <th>Input</th>
      </tr>
    </thead>
    <tbody>
      {Object.entries(layout).map(([key, value]) => (
        <tr key={key}>
          <th>{key}</th>
          <th>{value}</th>
        </tr>
      ))}
    </tbody>
  </table>
)

const MainContent = () => {
  return (
    <div className={s.mainContent}>
      <h1>Basic usage</h1>
      <p>
        Open Ol Chiki Gaban. Make sure <code>Enable keyboard</code> is checked.
        You can now write in Ol Chiki anywhere. Press <code>Ctrl + Spacebar</code> anytime to
        switch between Ol Chiki and English.
      </p>

      <h2>Accepting suggestions</h2>
      <p>
        Sometimes, the keyboard may show you suggestions. To accept a suggestion, press the <code>Tab</code> key in your keyboard.
        This only works when the suggestion is still showing on the screen.
      </p>
      <p>You can try writing <span className={s.ol}>ᱱᱜ</span> then pressing <code>Tab</code> to see how it works.</p>


      <h1>Default keyboard layout</h1>
      <div className={s.tableContainer}>
        {layouts.map((layout, idx) => (
          <LayoutTable layout={layout} key={idx} />
        ))}
      </div>
      <div className={s.singleTableContainer}>
        <LayoutTable
          layout={layouts.reduce((prev, curr) => Object.assign(prev, curr), {})} />
      </div>


      <h1>Configurations</h1>
      <p>Now we are going to explain what each of the options in the app does.</p>

      <h2>Enable keyboard</h2>
      <p>
        Turn on/off the keyboard. You can use the hotkey (by default, which is <code>Ctrl + Spacebar</code>)
        to quickly switch between input methods.
      </p>

      <h2>Custom hotkey</h2>
      <p>The hotkey is used to switch between Ol Chiki and English. If you don't like the current hotkey, you can change it to whatever you prefer</p>

      <h2>Minimize to system tray</h2>
      <p>
        Minimizes the keyboard to the system tray so that you can continue using it even after closing the app window.
        You can still exit the app by right clicking the system tray icon and selecting <code>Exit</code>.
        If you uncheck this option, the app will exit as soon as you close the app window.
      </p>

      <h2>Switch keys based on context</h2>
      <p>
        Currently, it automatically switches between ᱦ and ᱷ based on the previously typed letter.
        So, most of the time, you can simply press <code>H</code> without worrying about whether to use Shift or not.
      </p>
      <p>
        In the future, more context-based key switching may be added. But for now, it's limited to H key.
      </p>

      <h2>Key assignments</h2>
      <p>
        You can use this to change the default keyboard layout. After editing, click <code>Save</code> to start using your own layout.
        If something goes wrong, you can always use <code>Reset to default</code>.
      </p>
      <p>
        <b><i>NOTE:</i></b> Use <code>d</code> to retain the default function of a key.
        You can find that for all number keys, the {'"Shift"'} is set to <code>d</code>.
      </p>

      <h2>Replacements</h2>
      <p>
        You can use replacements to type long words more easily. Currently, replacements are only used for 
        letters that do not have a dedicated key assignment, such as <span className={s.ol}>ᱝ, ᱧ, ᱿</span>.
      </p>

      <h2>Virtual keyboard</h2>
      <p>
        Opens the virtual keyboard for typing. 
        You can also open it by right-clicking the system tray icon and selecting <code>Open Virtual keyboard</code>.
      </p>
    </div>
  )
}

export default function HowToUsePage() {
  return (
    <>
      <MetaHead namePrefix='How to use' />
      <Header />
      <MainContent />
    </>
  )
}
