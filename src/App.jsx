import 'styles/global.css'
import Header from 'components/Header'
import SearchBar from 'components/SearchBar'
import UserCard from 'components/UserCard'
import { UserContext } from 'context/user'
import { useContext } from 'react'

export default function App () {
  const { user } = useContext(UserContext)

  return (
    <main>
      { user &&
        <div className="main_content">
          <Header />
          <SearchBar />
          <UserCard user={user} />
        </div>
      }
    </main>
  )
}
