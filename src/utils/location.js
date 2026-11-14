export const RIVE_DROITE = new Set([
  "Paris 3e",
  "Paris 10e",
  "Paris 11e",
  "Paris 17e",
  "Paris 18e",
  "Paris 20e",
])

export const RIVE_GAUCHE = new Set([
  "Paris 6e",
  "Paris 13e",
  "Paris 14e",
])

export function parseLocation(location = "") {
  const separatorIndex = location.lastIndexOf(" - ")
  if (separatorIndex === -1) {
    return { label: location, area: null }
  }
  return {
    label: location.slice(0, separatorIndex),
    area: location.slice(separatorIndex + 3),
  }
}

export function matchesSectorFilter(item, filterId) {
  const { area } = parseLocation(item.location)
  if (filterId === "rive-droite") return RIVE_DROITE.has(area)
  if (filterId === "rive-gauche") return RIVE_GAUCHE.has(area)
  if (filterId === "grand-paris") {
    return Boolean(area) && !RIVE_DROITE.has(area) && !RIVE_GAUCHE.has(area)
  }
  if (filterId === "top-rated") return Number(item.rating) === 5
  return true
}
