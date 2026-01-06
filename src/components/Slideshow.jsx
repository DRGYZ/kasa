import { useState } from "react"

export default function Slideshow({ pictures = [], title = "" }) {
  const [index, setIndex] = useState(0)
  const total = pictures.length

  if (total === 0) return null

  const goPrev = () => setIndex((i) => (i === 0 ? total - 1 : i - 1))
  const goNext = () => setIndex((i) => (i === total - 1 ? 0 : i + 1))
  const showControls = total > 1

  return (
    <section className="slideshow">
      <img
        className="slideshow__img"
        src={pictures[index]}
        alt={`${title} - ${index + 1}`}
      />

      {showControls && (
        <>
          <button className="slideshow__btn slideshow__btn--prev" type="button" onClick={goPrev} aria-label="Previous image">
            ‹
          </button>

          <button className="slideshow__btn slideshow__btn--next" type="button" onClick={goNext} aria-label="Next image">
            ›
          </button>

          <p className="slideshow__count">
            {index + 1}/{total}
          </p>
        </>
      )}
    </section>
  )
}
