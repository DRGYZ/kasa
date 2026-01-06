import { useParams } from "react-router-dom"
import logements from "../data/logements.json"
import { Navigate } from "react-router-dom"
import Slideshow from "../components/Slideshow"
import Tags from "../components/Tags"
import Host from "../components/Host"
import Rating from "../components/Rating"
import Collapse from "../components/Collapse"

export default function Housing() {
  const { id } = useParams()
  const logement = logements.find((item) => item.id === id)

  if (!logement) {
    return <Navigate to="/404" replace />
  }



  return (
    <main className="housing">
      <Slideshow pictures={logement.pictures} title={logement.title} />

      <section className="housing__top">
        <div className="housing__left">
          <h1 className="housing__title">{logement.title}</h1>
          <p className="housing__location">{logement.location}</p>
          <Tags tags={logement.tags} />
        </div>

        <div className="housing__right">
          <Host name={logement.host?.name} picture={logement.host?.picture} />
          <Rating value={logement.rating} />
        </div>
      </section>

      <section className="housing__bottom">
        {/* your two Collapse blocks stay as-is */}
      </section>
    </main>

  )
}
