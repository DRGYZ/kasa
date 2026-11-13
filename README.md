# Kasa

Catalogue de locations réalisé pour le parcours Développeur d’application JavaScript React d’OpenClassrooms. L’accueil affiche les annonces, chaque fiche regroupe la galerie et les informations du logement, et la page À propos présente les engagements de Kasa.

[Voir la démo](https://drgyz.github.io/kasa/)

## Démarrer

Avec Node.js 24 et npm, depuis la racine du dépôt :

```sh
npm ci
npm run dev
```

Vite sert l’application sous `/kasa/`. Les annonces proviennent de `src/data/logements.json` et les photos de logements sont hébergées par OpenClassrooms. Les deux bannières locales utilisent des WebP adaptés à la largeur de l’écran.

## Vérifier et publier

```sh
npm run verify
npm run preview
```

`verify` exécute ESLint, les tests Vitest et le build Vite. Les tests ouvrent les fiches via le routeur et couvrent la boucle de la galerie, le cas d’une seule photo et la redirection d’un identifiant inconnu.

Le workflow GitHub Actions exécute la même vérification sur `main` puis publie l’artefact `dist/` sur GitHub Pages. Les routes utilisent un hash pour permettre l’ouverture directe des fiches sur l’hébergement statique.

- `src/pages/` et `src/router/` définissent les vues et la navigation.
- `src/components/` contient les cartes, la galerie et les sections repliables.
- `src/styles/` regroupe les styles Sass.
