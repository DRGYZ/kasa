import { NavLink } from "react-router-dom"

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <h2 className="header__logo">Kasa</h2>

        <nav className="header__nav">
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Accueil
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
            A propos
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
