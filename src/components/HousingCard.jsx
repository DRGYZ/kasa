import { Link } from "react-router-dom"

export default function HousingCard({ id, title, cover }) {
  return (
    <Link to={`/housing/${id}`}>
      <article>
        <img src={cover} alt={title} />
        <h2>{title}</h2>
      </article>
    </Link>
  )
}
