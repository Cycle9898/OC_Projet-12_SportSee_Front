(EN)

# OpenClassrooms projet 12 : SportSee

## Context

This project represents the new user profile page of the SportSee website, an imaginary startup dedicated to sports coaching.

It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This page will notably allow the user to track the number of sessions completed as well as the number of calories burned.

It was integrated from a [Figma mockup](https://www.figma.com/file/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?type=design&node-id=1-2&mode=design).

The [Recharts](https://recharts.org/en-US) library was used to create the charts.

The data are fetched from an API. More info on this one [here](https://github.com/Cycle9898/OC_Projet-12_SportSee_Back).

The REACT_APP_API_URL environment variable (in .env file) stores the API URI.

Data from 2 unique users are currently available via the API.

It is possible to launch the application with one of these users by clicking on their first name on the home page.

This additional page was created to make it easier to test the profile page with different data.

Mocked data is also provided with the application (JSON files present in the 'src/data' folder).

## Web application overview

### Prerequisites

-   [Node.JS](https://nodejs.org/en)

-   [Yarn](https://yarnpkg.com/)

### Back-end local start-up

-   Clone the back-end repository : `git clone https://github.com/Cycle9898/OC_Projet-12_SportSee_Back.git`

-   Inside the cloned folder, install all dependencies with : `yarn`

-   Then start the back-end with : `yarn dev`

### Front-end local start-up

-   Clone this repository : `git clone https://github.com/Cycle9898/OC_Projet-12_SportSee_Front.git`

-   Inside the cloned folder, install all dependencies with : `yarn`

-   Modify or add the REACT_APP_API_URL environment variable (.env file) with the URI (base) of the API whether it is launched locally or hosted online.
    If this variable is not defined, the application will run with mocked data.

-   Then start the front-end with : `yarn start`

This command runs the application in development mode.

Open http://localhost:3001 in your browser to use it.

The port can be configured with the 'PORT' environment variable (.env file). Warning: port 3000 is reserved for the API (if launched locally).

(FR)

# OpenClassrooms projet 12 : SportSee

## Contexte

Ce projet représente la nouvelle page de profil utilisateur du site de SportSee, une startup imaginaire dédiée au coaching sportif.

Il a été initialisé avec [Create React App](https://github.com/facebook/create-react-app).

Cette page va notamment permettre à l’utilisateur de suivre le nombre de sessions réalisées ainsi que le nombre de calories brûlées.

Elle a été intégrée à partir d'une [maquette Figma](https://www.figma.com/file/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?type=design&node-id=1-2&mode=design).

La bibliothèque [Recharts](https://recharts.org/en-US) a été utilisée pour créer les graphiques.

Les données sont récupérées via une API. Plus d'infos sur celle-ci [ici](https://github.com/Cycle9898/OC_Projet-12_SportSee_Back).

La variable d'environnement REACT_APP_API_URL (fichier .env) permet de stocker l'URI de l'API.

Les données de 2 utilisateurs sont actuellement disponibles via l'API.

On peut lancer l'application avec l'un de ces utilisateurs en cliquant sur leur prénom à la page d'accueil.

Cette page supplémentaire a été réalisée pour faciliter le test de la page de profil avec des données différentes.

Des données mockées sont également fournies avec l'application (fichiers JSON présents dans le dossier 'src/data').

## Aperçu de l'application web

### Prérequis

-   [Node.JS](https://nodejs.org/fr)

-   [Yarn](https://yarnpkg.com/)

### Lancement du Back-end en local

-   Cloner le dépôt du back-end : `git clone https://github.com/Cycle9898/OC_Projet-12_SportSee_Back.git`

-   À l'intérieur du dossier cloné, installer toutes les dépendances avec : `yarn`

-   Ensuite, démarrer la partie back-end avec : `yarn dev`

### Lancement du Front-end en local

-   Cloner ce dépôt : `git clone https://github.com/Cycle9898/OC_Projet-12_SportSee_Front.git`

-   À l'intérieur du dossier cloné, installer toutes les dépendances avec : `yarn`

-   Modifier ou ajouter la variable d'environnement REACT_APP_API_URL (fichier .env) avec l'URI (base) de l'API qu'elle soit lancée en local ou hébergée en ligne.
    Si cette variable n'est pas définie, l'application tournera avec les données mockées.

-   Ensuite, démarrer la partie front-end avec : `yarn start`

Cette commande exécute l'application en mode développement.

Ouvrir http://localhost:3001 pour la voir dans un navigateur web.

Le port peut être configuré avec la variable d'environnement 'PORT' (fichier .env). Attention : le port 3000 est réservé à l'API(si lancée en local).
