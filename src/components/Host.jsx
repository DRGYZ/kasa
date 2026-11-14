export default function Host({ name = "", picture = "" }) {
  return (
    <div className="host">
      <div className="host__info">
        <p className="host__name">{name}</p>
        <p className="host__role">Hôte vérifié</p>
      </div>
      {picture ? (
        <img
          className="host__img"
          src={picture}
          alt={name}
          loading="lazy"
          decoding="async"
        />
      ) : null}
    </div>
  )
}
