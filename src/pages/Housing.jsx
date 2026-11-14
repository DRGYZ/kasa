import { Link, Navigate, useParams } from "react-router-dom"
import logements from "../data/logements.json"
import Slideshow from "../components/Slideshow"
import Tags from "../components/Tags"
import Host from "../components/Host"
import Rating from "../components/Rating"
import Collapse from "../components/Collapse"
import { parseLocation } from "../utils/location"

export default function Housing() {
  const { id } = useParams()
  const logement = logements.find((item) => item.id === id)

  if (!logement) {
    return <Navigate to="/404" replace />
  }

  const { label: locationLabel, area: locationTag } = parseLocation(logement.location)
  const housingTags = locationTag
    ? [...new Set([...logement.tags, locationTag])]
    : logement.tags
  const equipments = logement.equipments || []

  return (
    <main className="housing">
      <Link to="/" className="detail-crumb">
        <span>← Retour aux annonces</span>
        {locationTag ? <span className="detail-crumb__route">{locationTag}</span> : null}
      </Link>

      <Slideshow key={logement.id} pictures={logement.pictures} title={logement.title} />

      <section className="housing__top detail-a__header">
        <div className="housing__left detail-a__main-meta">
          <h1 className="housing__title">{logement.title}</h1>
          <p className="housing__location">
            {locationLabel}
            {locationTag ? ` · ${locationTag}` : ""}
          </p>
          <Tags tags={housingTags} />
        </div>

        <div className="housing__right detail-a__host-box">
          <Host name={logement.host?.name} picture={logement.host?.picture} />
          <Rating value={logement.rating} />
        </div>
      </section>

      <section className="housing__bottom detail-a__panels">
        <Collapse title="Description" badge="Logement" defaultOpen={true}>
          <p>{logement.description}</p>
        </Collapse>

        <Collapse
          title="Équipements"
          badge={`${equipments.length} inclus`}
          defaultOpen={true}
        >
          <ul className="amenity-list">
            {equipments.map((equipment) => (
              <li key={equipment} className="amenity-list__item">
                <span className="amenity-list__check" aria-hidden="true">✓</span>
                <span>{equipment}</span>
              </li>
            ))}
          </ul>
        </Collapse>
      </section>
    </main>
  )
}
