import { useContext } from "react"
import AuthContext from "../context/auth"

export default function Header() {
  const { user, login, logout } = useContext(AuthContext)

  return (
    <>
      <header>
        {!user && <h1>Invite only logins...</h1>}
        {user && <h2>Welcome back {user.user_metadata.full_name}</h2>}
        {!user && <button onClick={login}>Log In</button>}
        {user && <button onClick={logout}>Log out</button>}
      </header>
    </>
  )
}
