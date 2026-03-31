import { NavLink, Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__brand" aria-label="Accueil Kasa">
          <img className="header__logo" src="/images/logo.png" alt="Kasa" />
        </Link>

        <nav className="header__nav">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
            Accueil
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
            A Propos
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
