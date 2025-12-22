export default function Rating({ value = 0 }) {
  const rating = Number(value)
  const stars = [1, 2, 3, 4, 5]

  return (
    <div aria-label={`Rating ${rating} out of 5`}>
      {stars.map((n) => (
        <span key={n}>{n <= rating ? "★" : "☆"}</span>
      ))}
    </div>
  )
}
