import Collapse from "../components/Collapse"
import Banner from "../components/Banner"

const ABOUT_SECTIONS = [
  {
    title: "Fiabilité",
    content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
  },
  {
    title: "Respect",
    content: "La bienveillance et le respect définissent l'esprit de Kasa. Nous valorisons la confiance entre hôtes et voyageurs pour que chaque séjour commence dans les meilleures conditions.",
  },
  {
    title: "Service",
    content: "Nos équipes vous accompagnent tout au long de votre expérience pour vous offrir un suivi sur mesure. De la réservation au départ, Kasa reste disponible quand vous en avez besoin.",
  },
  {
    title: "Sécurité",
    content: "La sécurité est la priorité de Kasa. Nos standards comme notre accompagnement sont pensés pour offrir une tranquillité d'esprit totale aux voyageurs et aux hôtes.",
  },
]

export default function About() {
  return (
    <main className="about">
      <h1 className="visually-hidden">À propos de Kasa</h1>
      <Banner className="banner--about" image="images/about-banner.jpg" />

      <div className="about__collapses">
        {ABOUT_SECTIONS.map((section) => (
          <Collapse key={section.title} title={section.title}>
            <p>{section.content}</p>
          </Collapse>
        ))}
      </div>
    </main>
  )
}
