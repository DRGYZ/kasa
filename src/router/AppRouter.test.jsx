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

function findButtonByText(selector, label) {
  return [...container.querySelectorAll(selector)].find((btn) =>
    btn.textContent.includes(label),
  )
}

describe("Page d'accueil et comparaison", () => {
  it("filtre les annonces par secteur", async () => {
    await visit("/")
    expect(container.querySelectorAll(".dir-a-card")).toHaveLength(20)

    act(() => findButtonByText(".filter-pill", "Paris Rive Gauche").click())
    expect(container.querySelectorAll(".dir-a-card")).toHaveLength(4)

    act(() => findButtonByText(".filter-pill", "Tous").click())
    expect(container.querySelectorAll(".dir-a-card")).toHaveLength(20)
  })

  it("conserve le focus sur le bouton après avoir changé la photo principale", async () => {
    await visit("/")

    const listing = logements.find(({ pictures }) => pictures.length > 1)
    const thumbnail = galleryButton(`Comparer la photo 2 de ${listing.title}`)
    const lead = thumbnail.closest(".dir-a-card").querySelector(".triptych__lead img")
    expect(lead.getAttribute("src")).toBe(listing.pictures[0])

    thumbnail.focus()
    act(() => thumbnail.click())

    expect(lead.getAttribute("src")).toBe(listing.pictures[1])
    expect(thumbnail.matches(":focus")).toBe(true)
    expect(thumbnail.getAttribute("aria-label")).toBe(`Comparer la photo 1 de ${listing.title}`)
  })
})

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

  it("saute à une miniature et replie/déplie Description", async () => {
    const listing = logements.find(({ pictures }) => pictures.length > 2)
    await visit(`/housing/${listing.id}`)
    const photo = container.querySelector(".slideshow img")

    act(() => galleryButton(`Afficher la photo 2 sur ${listing.pictures.length}`).click())
    expect(photo.getAttribute("src")).toBe(listing.pictures[1])
    expect(container.querySelector('[role="status"]').textContent).toBe(
      `Image 2 sur ${listing.pictures.length}`,
    )

    const descToggle = findButtonByText(".collapse__header", "Description")
    expect(descToggle.getAttribute("aria-expanded")).toBe("true")
    act(() => descToggle.click())
    expect(descToggle.getAttribute("aria-expanded")).toBe("false")
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
