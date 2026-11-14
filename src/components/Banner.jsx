import { assetPath } from "../utils/assetPath"

export default function Banner({
  title,
  subtitle = "",
  eyebrow = "",
  image = "banner",
  className = "",
}) {
  const imageUrl = (width) => assetPath(`images/${image}-${width}.webp`)
  const hasCopy = Boolean(title || subtitle || eyebrow)

  return (
    <section className={`banner ${className}`.trim()}>
      {hasCopy ? (
        <div className="banner__copy">
          {eyebrow ? <span className="banner__eyebrow">{eyebrow}</span> : null}
          {title ? <h1 className="banner__title">{title}</h1> : null}
          {subtitle ? <p className="banner__sub">{subtitle}</p> : null}
        </div>
      ) : null}
      <picture className="banner__media">
        <source
          media="(max-width: 480px)"
          srcSet={`${imageUrl(400)} 1x, ${imageUrl(800)} 2x`}
        />
        <source media="(max-width: 960px)" srcSet={imageUrl(800)} />
        <img src={imageUrl(1600)} alt="" fetchPriority="high" />
      </picture>
    </section>
  )
}
