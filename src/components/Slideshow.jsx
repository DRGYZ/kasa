import { useRef, useState } from "react"

export default function Slideshow({ pictures = [], title = "" }) {
  const [index, setIndex] = useState(0)
  const touchStartX = useRef(null)
  const stripRef = useRef(null)
  const total = pictures.length

  if (total === 0) return null

  const currentIndex = index >= total ? 0 : index
  const showControls = total > 1

  const syncStripThumb = (nextIdx) => {
    const btn = stripRef.current?.children?.[nextIdx]
    if (btn && typeof btn.scrollIntoView === "function") {
      btn.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" })
    }
  }

  const goTo = (nextIdx) => {
    setIndex(nextIdx)
    syncStripThumb(nextIdx)
  }

  const goPrev = () => goTo(currentIndex === 0 ? total - 1 : currentIndex - 1)
  const goNext = () => goTo(currentIndex === total - 1 ? 0 : currentIndex + 1)

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches?.[0]?.clientX ?? null
  }

  const handleTouchEnd = (event) => {
    if (!showControls || touchStartX.current === null) return
    const endX = event.changedTouches?.[0]?.clientX ?? null
    if (endX === null) return
    const deltaX = endX - touchStartX.current
    touchStartX.current = null
    if (Math.abs(deltaX) > 42) {
      if (deltaX < 0) goNext()
      else goPrev()
    }
  }

  const formatThumbNumber = (idx) => String(idx + 1).padStart(2, "0")

  return (
    <section
      className={`slideshow stage-a ${!showControls ? "stage-a--single" : ""}`.trim()}
      aria-label="Galerie du logement"
    >
      <div
        className="stage-a__main"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          className="slideshow__img"
          src={pictures[currentIndex]}
          alt={`${title} - ${currentIndex + 1}`}
        />

        {showControls ? (
          <div className="stage-a__overlay-nav">
            <span className="slideshow__count stage-a__counter" aria-hidden="true">
              {currentIndex + 1} / {total}
            </span>
            <div className="thumb-nav-group">
              <button
                className="gallery-btn"
                type="button"
                onClick={goPrev}
                aria-label="Image précédente"
              >
                ‹
              </button>
              <button
                className="gallery-btn"
                type="button"
                onClick={goNext}
                aria-label="Image suivante"
              >
                ›
              </button>
            </div>
          </div>
        ) : null}
      </div>

      {showControls ? (
        <>
          <div className="stage-a__grid" aria-label="Toutes les photos">
            {pictures.map((pic, idx) => (
              <button
                key={pic}
                type="button"
                className={`stage-a__thumb ${idx === currentIndex ? "is-active" : ""}`.trim()}
                onClick={() => goTo(idx)}
                aria-label={`Afficher la photo ${idx + 1} sur ${total}`}
                aria-pressed={idx === currentIndex}
              >
                <img src={pic} alt="" loading={idx < 4 ? "eager" : "lazy"} decoding="async" />
                <span className="stage-a__thumb-num">{formatThumbNumber(idx)}</span>
              </button>
            ))}
          </div>

          <div className="mobile-thumb-dock" aria-label="Navigation tactile des photos">
            <div className="mobile-thumb-dock__strip" ref={stripRef}>
              {pictures.map((pic, idx) => (
                <button
                  key={pic}
                  type="button"
                  className={`mobile-thumb-dock__item ${idx === currentIndex ? "is-active" : ""}`.trim()}
                  onClick={() => goTo(idx)}
                  aria-label={`Photo ${idx + 1}`}
                  aria-pressed={idx === currentIndex}
                >
                  <img src={pic} alt="" decoding="async" />
                </button>
              ))}
            </div>
            <div className="mobile-thumb-dock__actions">
              <span className="mobile-thumb-dock__count" aria-hidden="true">
                {currentIndex + 1}/{total}
              </span>
              <button
                className="gallery-btn"
                type="button"
                onClick={goPrev}
                aria-label="Image précédente"
              >
                ‹
              </button>
              <button
                className="gallery-btn gallery-btn--accent"
                type="button"
                onClick={goNext}
                aria-label="Image suivante"
              >
                ›
              </button>
            </div>
          </div>

          <p className="visually-hidden" role="status">
            Image {currentIndex + 1} sur {total}
          </p>
        </>
      ) : null}
    </section>
  )
}
