import { useContext } from "react"
import AuthContext from "../context/auth"

export default function Header() {
  const { user, login } = useContext(AuthContext)
  console.log(user)

  return (
    <>
      <header>
        <button onClick={login}>Log In</button>
      </header>
    </>
  )
}
