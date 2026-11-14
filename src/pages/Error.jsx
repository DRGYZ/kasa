import { Link } from "react-router-dom"

export default function Error() {
  return (
    <main className="error">
      <div className="error__card">
        <p className="error__eyebrow">Page introuvable</p>
        <h1 className="error__code">404</h1>
        <p className="error__text">
          Oups ! La page que vous demandez n&apos;existe pas ou l&apos;annonce n&apos;est plus en ligne.
        </p>
        <Link to="/" className="error__link">
          Retourner sur la page d’accueil
        </Link>
      </div>
    </main>
  )
}
