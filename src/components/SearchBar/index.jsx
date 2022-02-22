import styles from './index.module.css'
import { ReactComponent as IconSearch } from 'assets/icons/search.svg'
import { UserContext } from 'context/user'
import { useContext, useState } from 'react'
import Popup from 'components/Popup'

export default function SearchBar () {
  const { setUser } = useContext(UserContext)
  const [view, setView] = useState(false)

  const getUserData = async e => {
    e.preventDefault()
    const username = e.target.search.value
    const API_URL = `https://api.github.com/users/${username}`
    const response = await fetch(API_URL)
    if (response.status === 200) {
      const res = await response.json()
      setUser(res)
    } else {
      setView(true)
      setTimeout(() => setView(false), 1000)
    }
  }

  return (
    <>
      {view && <Popup /> }
      <form className={styles.form} onSubmit={getUserData} autoComplete="off" >
        <IconSearch className={styles.form_icon} />
        <input
          className={styles.form_search}
          type="search"
          name="search"
          placeholder="Search GitHub User..."
          spellCheck={false}
        />
        <input className={styles.form_submit} type="submit" value="search" />
      </form>
    </>
  )
}
