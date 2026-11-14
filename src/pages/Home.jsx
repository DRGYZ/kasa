import { useState } from "react"
import Banner from "../components/Banner"
import HousingCard from "../components/HousingCard"
import logements from "../data/logements.json"
import { matchesSectorFilter } from "../utils/location"

const FILTER_DEFS = [
  { id: "all", label: "Tous" },
  { id: "rive-droite", label: "Paris Rive Droite" },
  { id: "rive-gauche", label: "Paris Rive Gauche" },
  { id: "grand-paris", label: "Grand Paris" },
  { id: "top-rated", label: "Note 5/5" },
]

const SECTOR_FILTERS = FILTER_DEFS.map((filter) => ({
  ...filter,
  count: logements.filter((item) => matchesSectorFilter(item, filter.id)).length,
}))

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("all")
  const filteredListings = logements.filter((item) => matchesSectorFilter(item, activeFilter))

  return (
    <main className="home">
      <Banner
        className="banner--home"
        eyebrow="Sélection architecturale · Paris"
        title="Chez vous, partout et ailleurs"
        subtitle="Comparez plusieurs pièces avant d'ouvrir une annonce. 20 adresses vérifiées à Paris et en Île-de-France."
      />

      <div className="filter-bar">
        <div className="filter-pills" role="group" aria-label="Filtrer par secteur">
          {SECTOR_FILTERS.map((filter) => (
            <button
              key={filter.id}
              type="button"
              className="filter-pill"
              aria-pressed={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
            >
              <span>{filter.label}</span>
              <span className="filter-pill__count">{filter.count}</span>
            </button>
          ))}
        </div>

        <p className="filter-meta">
          {filteredListings.length} logement{filteredListings.length > 1 ? "s" : ""} affiché{filteredListings.length > 1 ? "s" : ""}
        </p>
      </div>

      <section className="home__grid" aria-label="Annonces Kasa">
        {filteredListings.map((item, index) => (
          <HousingCard
            key={item.id}
            id={item.id}
            title={item.title}
            cover={item.cover}
            pictures={item.pictures}
            location={item.location}
            rating={item.rating}
            tags={item.tags}
            host={item.host}
            loading={index < 4 ? "eager" : "lazy"}
          />
        ))}
      </section>
    </main>
  )
}
