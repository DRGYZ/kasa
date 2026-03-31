# Projet 11 - Kasa

## Description

Ce projet correspond au front-end de la plateforme **Kasa**, une application de location de logements entre particuliers.

L'objectif est de développer une application React responsive à partir de maquettes Figma, en respectant les contraintes techniques du brief :

- utilisation de **React**
- gestion des pages avec **React Router**
- styles réalisés en **Sass**
- données récupérées depuis un fichier **JSON local**

Le back-end n'étant pas encore disponible, l'application repose uniquement sur les données fournies dans le projet.

## Objectifs du projet

- Initialiser une application React avec Vite
- Mettre en place le routage de l'application
- Créer des composants réutilisables
- Afficher dynamiquement les logements à partir d'un fichier JSON
- Gérer les erreurs de navigation avec une page 404
- Développer les comportements attendus pour le carrousel et les collapses
- Respecter les maquettes desktop et mobile

## Technologies utilisées

- React
- React Router
- Sass
- Vite
- ESLint

## Installation

1. Cloner le dépôt :

```bash
git clone <url-du-repo>
```

2. Se placer dans le dossier du projet :

```bash
cd P11
```

3. Installer les dépendances :

```bash
npm install
```

## Lancer le projet

Pour démarrer l'application en local :

```bash
npm start
```

Le serveur de développement Vite démarre ensuite dans le navigateur.

## Scripts disponibles

- `npm start` : lance le serveur de développement
- `npm run dev` : lance également le serveur Vite
- `npm run build` : génère une version de production
- `npm run preview` : prévisualise le build de production
- `npm run lint` : vérifie la qualité du code avec ESLint

## Fonctionnalités développées

- Page d'accueil avec affichage dynamique des logements
- Page "À propos" avec sections repliables
- Page logement avec :
  - galerie d'images
  - informations du logement
  - tags
  - hôte
  - note
  - descriptions repliables
- Redirection vers une page 404 pour toute route invalide
- Redirection vers la page 404 si l'identifiant d'un logement est introuvable

## Comportements spécifiques

### Slideshow

- retour automatique à la dernière image depuis la première
- retour automatique à la première image depuis la dernière
- masquage des flèches et de la pagination s'il n'y a qu'une seule image

### Collapse

- les menus sont fermés par défaut
- un clic permet d'ouvrir ou de refermer le contenu

## Structure du projet

```text
src/
  components/   Composants réutilisables
  data/         Données JSON
  pages/        Pages de l'application
  router/       Configuration du routeur
  styles/       Organisation Sass par base, composants et pages
```

## Données

Les logements sont stockés dans le fichier :

```text
src/data/logements.json
```

## Vérifications réalisées

- application compilée avec succès
- lint sans erreur
- démarrage local fonctionnel avec `npm start`

## Auteur

Projet réalisé dans le cadre d'un projet de formation front-end.
