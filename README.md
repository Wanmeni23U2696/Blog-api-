# Blog-api-
API backend pour la gestion d’un blog


##  Description

Ce projet est une API REST développée avec **Node.js et Express**, permettant de gérer un blog simple.  
Elle permet de créer, lire, modifier, supprimer et rechercher des articles.

La base de données utilisée est **SQLite**, et l’API est documentée avec **Swagger**.

---
## 🚀 Technologies utilisées

- Node.js
- Express.js
- SQLite
- Swagger (documentation API)
- dotenv
- cors

---

## Prérequis

- Node.js (version >= 18)
- npm (Node Package Manager)

---

## Installation

1. Cloner le dépôt :

```
git clone https://github.com/Wanmeni23U2696/Blog-api-.git
cd blog-api
```
2. Installer les dépendances :
   
```
npm install
```
3. Créer un fichier .env à la racine avec le contenu suivant :
   
```
PORT=3000
DB_PATH=./blog.db
```
4. Initialiser la base de données :
   
```
node testDB.js
```

## Lancer le serveur

```
node index.js
```

##  Accès à l’application

L’application développée est accessible via les liens suivants :

- API locale : http://localhost:3000/
- Documentation Swagger : http://localhost:3000/api-docs

  ## Endpoints principaux
| Méthode | URL                              | Description                       |
| ------- | -------------------------------- | --------------------------------- |
| GET     | /api/articles                    | Récupérer tous les articles       |
| GET     | /api/articles/{id}               | Récupérer un article par ID       |
| POST    | /api/articles                    | Créer un nouvel article           |
| PUT     | /api/articles/{id}               | Mettre à jour un article          |
| DELETE  | /api/articles/{id}               | Supprimer un article              |
| GET     | /api/articles/search?query=texte | Rechercher des articles par texte |
