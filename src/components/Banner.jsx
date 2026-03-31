import { assetPath } from "../utils/assetPath"

export default function Banner({ title, image = "images/banner.jpg", className = "" }) {
  const imageUrl = image.startsWith("http") ? image : assetPath(image)

  return (
    <section
      className={`banner ${className}`.trim()}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {title ? <h1 className="banner__title">{title}</h1> : null}
    </section>
  )
}
