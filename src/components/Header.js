import { useContext } from "react"
import AuthContext from "../context/auth"

export default function Header() {
  const { user, login, logout } = useContext(AuthContext)

  console.log(user)

  return (
    <>
      <header>
        <button>Log In</button>
        <p></p>
      </header>
    </>
  )
}
