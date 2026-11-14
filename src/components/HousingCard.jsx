import { useState } from "react"
import { Link } from "react-router-dom"
import { parseLocation } from "../utils/location"

export default function HousingCard({
  id,
  title,
  cover,
  pictures = [],
  location = "",
  rating = "0",
  tags = [],
  host = null,
  loading = "lazy",
}) {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0)

  const pics = pictures && pictures.length > 0 ? pictures : [cover]
  const safeIdx = activePhotoIndex >= pics.length ? 0 : activePhotoIndex
  const secondaryIndices = pics.map((_, idx) => idx).filter((idx) => idx !== safeIdx).slice(0, 2)
  const isSingle = pics.length <= 1
  const { area, label } = parseLocation(location)
  const areaLabel = area || label

  return (
    <article className="card dir-a-card">
      <div className={`triptych ${isSingle ? "triptych--single" : ""}`.trim()}>
        <Link
          to={`/housing/${id}`}
          className="triptych__lead"
          aria-label={`Ouvrir ${title}`}
        >
          <img
            className="card__img"
            src={pics[safeIdx]}
            alt={title}
            loading={loading}
            decoding="async"
          />
          <span className="triptych__badge">
            {pics.length} photo{pics.length > 1 ? "s" : ""}
          </span>
        </Link>

        {!isSingle ? (
          <div className="triptych__side">
            {secondaryIndices.map((picIdx) => (
              <button
                key={picIdx}
                type="button"
                className="triptych__thumb"
                onClick={() => setActivePhotoIndex(picIdx)}
                aria-label={`Comparer la photo ${picIdx + 1} de ${title}`}
              >
                <img src={pics[picIdx]} alt="" loading={loading} decoding="async" />
              </button>
            ))}
          </div>
        ) : null}
      </div>

      <div className="dir-a-card__body">
        <div className="dir-a-card__meta">
          {areaLabel ? <span className="arr-chip">{areaLabel}</span> : <span />}
          <span className="rating-inline" aria-label={`Note ${rating} sur 5`}>
            <span className="rating-inline__star" aria-hidden="true">★</span>
            <span>{rating}/5</span>
          </span>
        </div>

        <h2 className="card__title dir-a-card__title">
          <Link to={`/housing/${id}`}>{title}</Link>
        </h2>

        {tags.length > 0 ? (
          <ul className="card-tags">
            {tags.slice(0, 3).map((tag) => (
              <li key={tag} className="card-tags__item">
                {tag}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="dir-a-card__footer">
          <div className="host-mini">
            {host?.picture ? (
              <img
                className="host-mini__avatar"
                src={host.picture}
                alt=""
                loading="lazy"
                decoding="async"
              />
            ) : null}
            <span className="host-mini__name">Hôte : {host?.name || ""}</span>
          </div>
          <Link to={`/housing/${id}`} className="card-cta">
            Voir le logement →
          </Link>
        </div>
      </div>
    </article>
  )
}
