// @vitest-environment jsdom
import { act } from "react"
import { createRoot } from "react-dom/client"
import { afterEach, beforeEach, describe, expect, it } from "vitest"
import logements from "../data/logements.json"
import AppRouter from "./AppRouter"

let root
let container

beforeEach(() => {
  globalThis.IS_REACT_ACT_ENVIRONMENT = true
  container = document.createElement("div")
  document.body.append(container)
  root = createRoot(container)
})

afterEach(() => {
  act(() => root.unmount())
  container.remove()
  window.history.replaceState(null, "", "/")
  delete globalThis.IS_REACT_ACT_ENVIRONMENT
})

async function visit(path) {
  window.history.replaceState(null, "", `/#${path}`)
  await act(async () => root.render(<AppRouter />))
}

function galleryButton(label) {
  return container.querySelector(`button[aria-label="${label}"]`)
}

describe("Fiche logement", () => {
  it("revient à la dernière photo puis à la première", async () => {
    const listing = logements.find(({ pictures }) => pictures.length > 1)
    await visit(`/housing/${listing.id}`)
    const photo = container.querySelector(".slideshow img")
    expect(photo.getAttribute("src")).toBe(listing.pictures[0])

    act(() => galleryButton("Image précédente").click())
    expect(photo.getAttribute("src")).toBe(listing.pictures.at(-1))
    expect(container.querySelector('[role="status"]').textContent).toBe(
      `Image ${listing.pictures.length} sur ${listing.pictures.length}`,
    )

    act(() => galleryButton("Image suivante").click())
    expect(photo.getAttribute("src")).toBe(listing.pictures[0])
  })

  it("masque la navigation pour une seule photo", async () => {
    const listing = logements.find(({ pictures }) => pictures.length === 1)
    await visit(`/housing/${listing.id}`)
    expect(container.querySelector(".slideshow img").getAttribute("src")).toBe(listing.pictures[0])
    expect(galleryButton("Image suivante")).toBeNull()
    expect(galleryButton("Image précédente")).toBeNull()
  })

  it("redirige un identifiant inconnu vers la page 404", async () => {
    await visit("/housing/logement-inexistant")
    expect(window.location.hash).toBe("#/404")
    expect(container.querySelector("main h1").textContent).toBe("404")
    expect(container.querySelector("main a").getAttribute("href")).toBe("#/")
  })
})
