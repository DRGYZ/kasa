import { assetPath } from "../utils/assetPath"

export default function Banner({ title, image = "banner", className = "" }) {
  const imageUrl = (width) => assetPath(`images/${image}-${width}.webp`)

  return (
    <section className={`banner ${className}`.trim()}>
      <picture className="banner__media">
        <source
          media="(max-width: 768px)"
          srcSet={`${imageUrl(400)} 400w, ${imageUrl(800)} 800w`}
          sizes="calc(100vw - 40px)"
        />
        <img src={imageUrl(1600)} alt="" fetchPriority="high" />
      </picture>
      {title ? <h1 className="banner__title">{title}</h1> : null}
    </section>
  )
}
