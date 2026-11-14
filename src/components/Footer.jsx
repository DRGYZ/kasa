import { assetPath } from "../utils/assetPath"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <img className="footer__logo" src={assetPath("images/logo.png")} alt="Kasa" />
        <p className="footer__text">© 2020 Kasa. Tous droits réservés · Locations vérifiées à Paris</p>
      </div>
    </footer>
  )
}
