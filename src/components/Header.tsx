import sunThemeIcon from '../assets/icon-sun.svg'
import moonThemeIcon from '../assets/icon-moon.svg'

type Theme = {
  theme: string
  setTheme: React.Dispatch<React.SetStateAction<string>>
};

export function Header(props: Theme) {
  const { theme, setTheme } = props

  return (
    <header className='flex gap-4 justify-between'>
      <h1 className='company text-2xl font-bold'>devfinder</h1>
      <div onClick={() => theme === 'dark' ? setTheme('light') : setTheme('dark')} className='flex gap-2 items-center cursor-pointer' id="theme-button">
        <p className='uppercase tracking-widest text-secondary-text'>{theme}</p>
        <img src={theme === 'dark' ? moonThemeIcon : sunThemeIcon} alt="" className="theme-icon object-contain" />
      </div>
    </header>
  )
}
