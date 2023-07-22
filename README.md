(EN)
# OpenClassroom project 12 : SportSee

## Introduction

This project represents an user profile page, the dashboard on a sports coaching website, where the user can follow his progress.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The page was integrated from a [Figma mockup](https://www.figma.com/file/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?type=design&node-id=1-2&mode=design).

The [Recharts](https://recharts.org/en-US) library was used to make the charts.

Data is retrieved via an API. More infos on this API [here](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard).

Data from 2 users is currently available through the API.
We get their respective data by changing the environment variable (.env file) 'REACT_APP_API_USER_ID' by the user ID (12 or 18).

It is also possible to use mocked data by changing the environment variable (.env file) 'REACT_APP_MOCK_API' with 'MOCK' value instead of 'API'.

## Prerequisites

- [Node.JS](https://nodejs.org/en)

- [Yarn](https://yarnpkg.com/)

# Getting Started (Back-end)

- Clone the back-end repo : `git clone https://github.com/Cycle9898/OC_Projet-12_SportSee_Back.git`

- Inside the back-end folder, install all dependencies with : `yarn`

- Then start the back-end part with : `yarn dev`

# Getting Started (Front-end)

- Clone this repo : `git clone https://github.com/Cycle9898/OC_Projet-12_SportSee_Front.git`

- Inside the front-end folder, install all dependencies with : `yarn`

- Then start the front-end part with : `yarn start`

This command runs the app in the development mode.

Open http://localhost:3001 to view it in the browser.

The port can be configured with the 'PORT' environment variable (.env file). Warning: port 3000 is reserved for the API.

(FR)
# OpenClassroom projet 12 : SportSee

## Présentation

Ce projet représente une page de profil utilisateur, le tableau de bord d'un site de coaching sportif, où l'utilisateur peut suivre sa progression.

Ce projet a été initialisé avec [Create React App](https://github.com/facebook/create-react-app).

La page a été intégrée à partir d'une [maquette Figma](https://www.figma.com/file/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?type=design&node-id=1-2&mode=design).

La bibliothèque [Recharts](https://recharts.org/en-US) a été utilisée pour créer les graphiques.

Les données sont récupérées via une API. Plus d'infos sur cette API [ici](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard).

Les données de 2 utilisateurs sont actuellement disponibles via l'API.
On obtient leurs données respectives en changeant la variable d'environnement (fichier .env) 'REACT_APP_API_USER_ID' par l'ID de l'utilisateur (12 ou 18).

Il est également possible d'utiliser des données simulées en changeant la variable d'environnement (fichier .env) 'REACT_APP_MOCK_API' avec la valeur 'MOCK' au lieu de 'API'.

## Prérequis

- [Node.JS](https://nodejs.org/fr)

- [Yarn](https://yarnpkg.com/)

# Lancement du projet (Back-end)

- Cloner le dépôt du back-end : `git clone https://github.com/Cycle9898/OC_Projet-12_SportSee_Back.git`

- À l'intérieur du dossier cloné, installer toutes les dépendances avec : `yarn`

- Ensuite, démarrer la partie back-end avec : `yarn dev`

# Lancement du projet (Front-end)

- Cloner ce dépôt : `git clone https://github.com/Cycle9898/OC_Projet-12_SportSee_Front.git`

- À l'intérieur du dossier cloné, installer toutes les dépendances avec : `yarn`

- Ensuite, démarrer la partie front-end avec : `yarn start`

Cette commande exécute l'application en mode développement.

Ouvrir http://localhost:3001 pour la voir dans un navigateur web.

Le port peut être configuré avec la variable d'environnement 'PORT' (fichier .env). Attention : le port 3000 est réservé à l'API.