import { Link } from "react-router-dom"

export default function HousingCard({ id, title, cover, loading = "lazy" }) {
  return (
    <Link to={`/housing/${id}`} className="card">
      <article className="card__inner">
        <img className="card__img" src={cover} alt="" loading={loading} decoding="async" />
        <h2 className="card__title">{title}</h2>
      </article>
    </Link>
  )
}
