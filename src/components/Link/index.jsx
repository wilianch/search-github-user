import styles from './index.module.css'

export default function Link ({ href, children, name }) {
  return (
    <>
    { href
      ? <a className={styles.link} href={href} target="_blank" rel="noreferrer" >
          { children && <span className={styles.link_icon}>{ children }</span> }
          { name || 'Not Available' }
        </a>
      : <a className={[styles.link, `${name ? '' : styles.disabled}`].join(' ')} target="_blank">
          { children && <span className={styles.link_icon}>{ children }</span> }
          { name || 'Not Available' }
        </a>
    }
    </>
  )
}
