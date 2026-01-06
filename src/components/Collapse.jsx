import { useId, useState } from "react"

export default function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)
  const contentId = useId()

  return (
    <section className={`collapse ${isOpen ? "is-open" : ""}`}>
      <button
        className="collapse__header"
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span className="collapse__title">{title}</span>
        <span className="collapse__icon" aria-hidden="true">⌄</span>
      </button>

      <div className="collapse__content" id={contentId}>
        <div className="collapse__inner">{children}</div>
      </div>
    </section>
  )
}
