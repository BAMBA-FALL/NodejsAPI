# API d'Authentification d'Utilisateur

## Description
Cette API permet l'inscription et la connexion des utilisateurs en utilisant Node.js et MongoDB. Elle utilise les modules npm suivants : `express`, `cookie-parser`, `mongoose`, `jsonwebtoken`, `bcrypt`,  `nodemon`, et `dotenv`.

## Installation
1. Clonez le dépôt : `git clone <URL_du_dépôt>`
2. Installez les dépendances : `npm install`
3. Configurez les variables d'environnement dans un fichier `.env`

## Configuration
Assurez-vous de configurer correctement les variables d'environnement nécessaires :
- `MONGO_URI`: URL de connexion à la base de données MongoDB
- `SECRET_KEY`: Clé secrète pour la génération de tokens JWT
- Autres configurations nécessaires pour votre application

## Utilisation
- Pour démarrer l'API : `npm start` ou `nodemon`
- Les endpoints principaux :
  - `POST /api/register`: Endpoint pour l'inscription d'un nouvel utilisateur
  - `POST /api/login`: Endpoint pour la connexion d'un utilisateur existant

## Contribuer
Vous pouvez contribuer à ce projet en créant des issues, en soumettant des pull requests, etc.

## Auteurs
- Bamba Fall

## License
Ce projet n'est sous licence.

## Remarques supplémentaires
Ajoutez ici toute remarque ou détails supplémentaires que vous jugez importants pour votre API.
