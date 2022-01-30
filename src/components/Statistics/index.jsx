import styles from './index.module.css'

export default function Statistics ({ repos, followers, following }) {
  return (
    <section className={styles.statistics}>
        <p className={styles.statistics_item}>
          repos
          <span className={styles.statistics_value} >
            {repos}
          </span>
        </p>
        <p className={styles.statistics_item}>
          followers
          <span className={styles.statistics_value}>
            {followers}
          </span>
        </p>
        <p className={styles.statistics_item}>
          following
          <span className={styles.statistics_value}>
            {following}
          </span>
        </p>
      </section>
  )
}
