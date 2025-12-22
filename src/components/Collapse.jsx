import { useId, useState } from "react"

export default function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)
  const contentId = useId()

  return (
    <section>
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        {title} {isOpen ? "▲" : "▼"}
      </button>

      {isOpen && (
        <div id={contentId}>
          {children}
        </div>
      )}
    </section>
  )
}
