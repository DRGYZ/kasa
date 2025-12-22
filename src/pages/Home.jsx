import Banner from "../components/Banner"
import HousingCard from "../components/HousingCard"
import logements from "../data/logements.json"

export default function Home() {
  return (
    <main>
      <Banner title="Chez vous, partout et ailleurs" />

      <section>
        {logements.map((item) => (
          <HousingCard
            key={item.id}
            id={item.id}
            title={item.title}
            cover={item.cover}
          />
        ))}
      </section>
    </main>
  )
}
