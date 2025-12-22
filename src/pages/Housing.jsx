import { useParams } from "react-router-dom"

export default function Housing() {
  const { id } = useParams()
  return <h1>Housing: {id}</h1>
}
