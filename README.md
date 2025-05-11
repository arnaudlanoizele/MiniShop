# MiniShop – Application de Click & Collect local 🛍️

## 🚀 Description

MiniShop est une application web de e-commerce local destinée aux commerçants de proximité.
Elle permet aux clients de commander des produits en ligne et de venir les récupérer en boutique.

---

## 📌 Objectifs pédagogiques (RNCP)

Ce projet a pour but de valider les compétences liées à :

- La conception d'une application web
- Le développement front-end et back-end
- La gestion de base de données
- Le déploiement d’une application

---

## 👥 Utilisateurs

- **Client** : navigue, ajoute des produits au panier, passe commande
- **Administrateur** : gère les produits, visualise les commandes

---

## 🔧 Fonctionnalités prévues

- ✅ Catalogue produits
- ✅ Ajout au panier
- ✅ Commande sans paiement
- 🔒 Authentification (admin)
- 🛠️ Gestion des produits (admin)
- 📦 Historique des commandes (client/admin)
- 🌐 Déploiement web
- 📱 Version PWA (progressive web app – à venir)

---

## 🛠️ Stack technique

- Front-end : React
- Back-end : Node.js + Express
- Base de données : PostgreSQL
- Auth : JWT
- Déploiement : Render (back), Vercel (front)

---
1: 🧩 Conception – Diagramme de cas d’utilisation UML
Ce diagramme met en évidence les interactions entre les utilisateurs (Client, Admin) et les principales fonctionnalités de l’application :

💡 Le fichier source au format .drawio est disponible dans le dossier /assets/design/UML.png
![Langage de Modélisation Unifié](https://raw.githubusercontent.com/arnaudlanoizele/MiniShop/main/assets/design/UML.png)

2: 🗃️ Modèle conceptuel de données (MCD)
Le Modèle Conceptuel de Données (MCD) permet de représenter les entités principales de l’application MiniShop, ainsi que les relations logiques entre ces entités, sans tenir compte de contraintes techniques ou de syntaxe de base de données.

💡 Le fichier source au format .drawio est disponible dans le dossier /assets/design/MCD.png
![Diagramme MCD](https://raw.githubusercontent.com/arnaudlanoizele/MiniShop/main/assets/design/MCD.png)

---
## 📁 Arborescence prévue

/mini-shop
├── client/ # React app
├── server/ # Express API
├── README.md
├── .gitignore


---

## 📅 Planning estimé

- Semaine 1 : conception UML + init projet
- Semaine 2-3 : back-end
- Semaine 3-4 : front-end
- Semaine 5 : tests + déploiement
- Semaine 6 : rapport + soutenance

---

## 👤 Auteur

Arnaud Lanoizele – Formation Holberton School 2025
