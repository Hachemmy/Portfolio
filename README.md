# Portfolio

Mon portfolio personnel, développé avec React et Tailwind CSS.

## Aperçu

Un site vitrine présentant mes projets, compétences et un moyen de me contacter directement depuis le site.

## Technologies utilisées

- **React 19** — bibliothèque UI (via Create React App)
- **Tailwind CSS** — styles utilitaires
- **Framer Motion** — animations
- **React Icons** — icônes
- **EmailJS** — envoi d'e-mails depuis le formulaire de contact, sans backend

## Structure du projet

```
Portfolio/
├── public/              # Fichiers statiques (index.html, favicon, images...)
├── src/                 # Code source de l'application React
├── tailwind.config.js    # Configuration Tailwind CSS
├── postcss.config.js     # Configuration PostCSS
├── package.json
└── .hintrc               # Configuration webhint
```

## Installation

```bash
git clone https://github.com/Hachemmy/Portfolio.git
cd Portfolio
npm install
```

## Utilisation

Lancer le serveur de développement :

```bash
npm start
```
L'application est accessible sur `http://localhost:3000`.

Construire une version de production :

```bash
npm run build
```
Les fichiers optimisés sont générés dans le dossier `build/`.

Lancer les tests :

```bash
npm test
```

## Configuration EmailJS

Le formulaire de contact utilise [EmailJS](https://www.emailjs.com/). Pour qu'il fonctionne, vous devez renseigner vos propres identifiants (Service ID, Template ID, Public Key) dans le code source ou via des variables d'environnement (`.env`), selon la façon dont ils sont utilisés dans `src/`.

## Déploiement

Le champ `"homepage": "."` dans `package.json` permet un déploiement avec des chemins relatifs, utile par exemple pour GitHub Pages ou un hébergement statique classique. Après un `npm run build`, déployez le contenu du dossier `build/` sur la plateforme de votre choix (GitHub Pages, Netlify, Vercel...).

## Auteur

**Hachemmy** — [GitHub](https://github.com/Hachemmy)

## Licence

Ce projet est libre d'utilisation. Ajoutez une licence (MIT, par exemple) si vous souhaitez formaliser les conditions de réutilisation.
