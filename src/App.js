import { useContext } from "react"
import "./App.css"
import Header from "./components/Header"
import LoggedIn from "./components/LoggedIn"
import AuthContext from "./context/auth"

function App() {
  const { user } = useContext(AuthContext)

  return (
    <div className="App">
      <Header />
      {user && <LoggedIn />}
    </div>
  )
}

export default App
