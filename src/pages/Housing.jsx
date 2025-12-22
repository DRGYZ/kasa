import { useParams } from "react-router-dom"
import logements from "../data/logements.json"
import  { Navigate } from "react-router-dom"

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
    <main>
      <Slideshow pictures={logement.pictures} title={logement.title} />

      <section>
        <div>
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <Tags tags={logement.tags} />
        </div>

        <div>
          <Host name={logement.host?.name} picture={logement.host?.picture} />
          <Rating value={logement.rating} />
        </div>
      </section>

      <section>
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>

        <Collapse title="Équipements">
          <ul>
            {logement.equipments?.map((eq) => (
              <li key={eq}>{eq}</li>
            ))}
          </ul>
        </Collapse>
      </section>
    </main>
  )
}
