import { ReactComponent as IconAlert } from 'assets/icons/alert.svg'
import styles from './index.module.css'

export default function Popup () {
  return (
    <div className={styles.popup}>
      <span className={styles.popup_icon}>
        <IconAlert className={styles.popup_icon_svg} />
      </span>
      <span className={styles.popup_text}>User not found!</span>
    </div>
  )
}
