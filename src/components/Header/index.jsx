import styles from './index.module.css'

import ToggleTheme from 'components/ToggleTheme'

export default function Header () {
  return (
    <header className={styles.header}>
      <h2 className={styles.header_title} >Devfinder</h2>
      <ToggleTheme />
    </header>
  )
}
