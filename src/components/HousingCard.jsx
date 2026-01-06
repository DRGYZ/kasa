import { Link } from "react-router-dom"

export default function HousingCard({ id, title, cover }) {
  return (
    <Link to={`/housing/${id}`} className="card">
      <article className="card__inner">
        <img className="card__img" src={cover} alt={title} />
        <h2 className="card__title">{title}</h2>
      </article>
    </Link>
  )
}
