export default function Banner({ title, image = "/images/banner.jpg", className = "" }) {
  return (
    <section
      className={`banner ${className}`.trim()}
      style={{ backgroundImage: `url(${image})` }}
    >
      {title ? <h1 className="banner__title">{title}</h1> : null}
    </section>
  )
}
