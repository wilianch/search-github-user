import styles from './index.module.css'
import { useState } from 'react'
import { ReactComponent as IconMoon } from 'assets/icons/moon.svg'
import { ReactComponent as IconSun } from 'assets/icons/sun.svg'

export default function ToggleTheme () {
  const body = document.body
  const [darkMode, setDarkMode] = useState(() => {
    const response = localStorage.getItem('darkModeActive')
    return !!response
  })

  if (darkMode) {
    body.classList.replace('light', 'dark')
    localStorage.setItem('darkModeActive', true)
  } else {
    body.classList.replace('dark', 'light')
    localStorage.removeItem('darkModeActive')
  }

  return (
    <label className={styles.toggle}>
      { darkMode
        ? <IconSun className={styles.toggle_icon}/>
        : <IconMoon className={styles.toggle_icon}/>
      }
      <input
        className={styles.toggle_input}
        type="checkbox"
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
      />
    </label>
  )
}
