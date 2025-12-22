import { useState } from "react"

export default function Slideshow({ pictures = [], title = "" }) {
  const [index, setIndex] = useState(0)
  const total = pictures.length

  if (total === 0) return null

  const goPrev = () => setIndex((i) => (i === 0 ? total - 1 : i - 1))
  const goNext = () => setIndex((i) => (i === total - 1 ? 0 : i + 1))

  const showControls = total > 1

  return (
    <section>
      <img src={pictures[index]} alt={`${title} - ${index + 1}`} />

      {showControls && (
        <>
          <button type="button" onClick={goPrev} aria-label="Previous image">
            ‹
          </button>

          <button type="button" onClick={goNext} aria-label="Next image">
            ›
          </button>

          <p>
            {index + 1}/{total}
          </p>
        </>
      )}
    </section>
  )
}
