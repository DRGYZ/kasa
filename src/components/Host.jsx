export default function Host({ name = "", picture = "" }) {
  return (
    <div>
      <p>{name}</p>
      {picture ? <img src={picture} alt={name} /> : null}
    </div>
  )
}
