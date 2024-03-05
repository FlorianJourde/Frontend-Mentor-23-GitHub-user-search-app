import sunThemeIcon from '../assets/icon-sun.svg'
import moonThemeIcon from '../assets/icon-moon.svg'
import { motion, AnimatePresence } from 'framer-motion';

type Theme = {
  theme: string
  setTheme: React.Dispatch<React.SetStateAction<string>>
};

export function Header(props: Theme) {
  const { theme, setTheme } = props

  return (
    <header className='flex gap-4 justify-between'>

      <AnimatePresence mode='wait'>
        <motion.h1
          initial={{ y: -20, opacity: 0, filter: "blur(5px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0)" }}
          transition={{ delay: .4 }}
          className='company text-2xl font-bold'>devfinder
        </motion.h1>
      </AnimatePresence>

      <AnimatePresence mode='wait'>
        <motion.button
          initial={{ y: -20, opacity: 0, filter: "blur(5px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0)" }}
          transition={{ delay: .8 }}
          onClick={() => theme === 'dark' ? setTheme('light') : setTheme('dark')} className=' cursor-pointer overflow-hidden' id="theme-button">
          <AnimatePresence mode='wait' initial={false} >
            {theme === 'dark' ? (
              <motion.span
                initial={{ y: 20, opacity: 0, filter: "blur(5px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0)" }}
                exit={{ y: 20, opacity: 0, filter: "blur(5px)" }}
                key={moonThemeIcon}
                className='flex gap-2 items-center font-bold'>
                <p className='uppercase tracking-widest text-secondary-text'>{theme}</p>
                <img src={moonThemeIcon} alt="" className="theme-icon object-contain" />
              </motion.span>
            ) : (
              <motion.span
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                key={sunThemeIcon}
                className='flex gap-2 items-center font-bold'>
                <p className='uppercase tracking-widest text-secondary-text'>{theme}</p>
                <img src={sunThemeIcon} alt="" className="theme-icon object-contain" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </AnimatePresence>
      
    </header>
  )
}
