import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header>
      <h2>Kasa</h2>
      <nav>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/about">About</Link>
      </nav>
    </header>
  )
}
