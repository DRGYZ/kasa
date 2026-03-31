import { assetPath } from "../utils/assetPath"

export default function Footer() {
  return (
    <footer className="footer">
      <img className="footer__logo" src={assetPath("images/logo.png")} alt="Kasa" />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
