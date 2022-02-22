import styles from './index.module.css'
import { formatDate } from 'helpers/date'

export default function ProfileInfo ({ image, username, github, date, bio }) {
  return (
    <section className={styles.profile}>
      <img className={styles.profile_image} src={image} alt="user image" />

      <div className={styles.profile_top}>
        <div>
          <h3 className={styles.profile_username} >
            { username }
          </h3>
          <a className={styles.profile_link} href={`https://github.com/${github}`} target="_blank" rel="noreferrer">
            @{ github }
          </a>
        </div>
        <time className={styles.profile_date}>
          Joined { formatDate(date) }
        </time>

        <p className={`${styles.profile_bio_alt} ${bio ? '' : styles.disabled}`}>
          { bio || 'This profile has no bio' }
        </p>
      </div>

      <p className={`${styles.profile_bio} ${bio ? '' : styles.disabled}`}>
        { bio || 'This profile has no bio' }
      </p>
    </section>
  )
}
