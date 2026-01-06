export default function Host({ name = "", picture = "" }) {
  return (
    <div className="host">
      <p className="host__name">{name}</p>
      {picture ? <img className="host__img" src={picture} alt={name} /> : null}
    </div>
  )
}
