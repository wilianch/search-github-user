import styles from './index.module.css'
import Statistics from 'components/Statistics'
import NavBar from 'components/NavBar'
import ProfileInfo from 'components/ProfileInfo'

export default function UserCard ({ user }) {
  return (
    <div>
      <div className={styles.card} >
      {/* imagen del usuario */}
      <img
        className={styles.image}
        src={user.avatar_url}
        alt="user image"
      />
      <section className={styles.card_info}>
        {/* barra de descripcion */}
        <ProfileInfo
          username={user.name}
          date={user.created_at}
          github={user.login}
          bio={user.bio}
          image={user.avatar_url}
        />
        {/* barra de estadisticas */}
        <Statistics
          repos={user.public_repos}
          followers={user.followers}
          following={user.following}
        />
        {/* barra de redes sociales */}
        <NavBar
          location={user.location}
          twitter={user.twitter_username}
          blog={user.blog}
          company={user.company}
        />
      </section>
    </div>
    </div>
  )
}
