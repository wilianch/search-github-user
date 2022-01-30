import { createContext, useEffect, useState } from 'react'
import useSWR from 'swr'

export const UserContext = createContext(null)
const fetcher = async url => await fetch(url).then(res => res.json())
const URL_API = 'https://api.github.com/users/octocat'

export const Provider = ({ children }) => {
  const [user, setUser] = useState(null)
  const { data, error } = useSWR(URL_API, fetcher)

  console.log('user: ', user)
  console.log('error: ', error)

  useEffect(() => {
    setUser(data)
  }, [data])

  return (
    <UserContext.Provider value={{ user, setUser }} >
      { children }
    </UserContext.Provider>
  )
}
