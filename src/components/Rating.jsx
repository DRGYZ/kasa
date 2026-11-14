export default function Rating({ value = 0 }) {
  const rating = Number(value) || 0
  const stars = [1, 2, 3, 4, 5]

  return (
    <div className="rating" aria-label={`Note ${rating} sur 5`}>
      <div className="rating__stars">
        {stars.map((n) => (
          <span
            className={`rating__star ${n <= rating ? "" : "rating__star--idle"}`.trim()}
            key={n}
            aria-hidden="true"
          >
            ★
          </span>
        ))}
      </div>
      <span className="rating__score">{rating} / 5</span>
    </div>
  )
}
