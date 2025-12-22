import Collapse from "../components/Collapse"

export default function About() {
  return (
    <main>
      <h1>About</h1>

      <Collapse title="Fiabilité">
        <p>Les annonces postées sur Kasa garantissent une fiabilité totale.</p>
      </Collapse>

      <Collapse title="Respect">
        <p>Le respect est une valeur fondatrice de Kasa.</p>
      </Collapse>

      <Collapse title="Service">
        <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.</p>
      </Collapse>

      <Collapse title="Sécurité">
        <p>La sécurité est la priorité de Kasa.</p>
      </Collapse>
    </main>
  )
}
