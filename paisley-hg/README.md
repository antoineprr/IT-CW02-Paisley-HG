# Paisley Highland Games - React Router Application

Application web pour la gestion des Jeux Écossais de Paisley : événements, inscriptions, résultats et billetterie.

## 🚀 Quick Links

- **[QUICKSTART.md](../QUICKSTART.md)** - Déploiement en 15 minutes
- **[DEPLOYMENT.md](../DEPLOYMENT.md)** - Guide détaillé complet
- **[ALTERNATIVES.md](../ALTERNATIVES.md)** - Autres options de déploiement
- **[TROUBLESHOOTING.md](../TROUBLESHOOTING.md)** - Résolution de problèmes

---

## 📋 Stack Technique

- **Frontend** : React 19 + React Router v7
- **Backend** : Node.js + React Router Server
- **Database** : MongoDB (Mongoose)
- **Deployment** : Docker-ready
- **Styling** : CSS vanilla

---

## 🏃 Développement Local

### Prérequis
- Node.js >= 20.0.0
- MongoDB (local ou Atlas)

### Installation

```sh
# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env
# Éditez .env avec votre connection string MongoDB

# Lancer en mode développement
npm run dev
```

L'application sera accessible sur http://localhost:5173

### Commandes disponibles

```sh
npm run dev        # Mode développement
npm run build      # Build production
npm run start      # Lancer en production
npm run typecheck  # Vérifier les types TypeScript
```

---

## 🌐 Déploiement (Gratuit pour Étudiants)

### Option 1 : Render.com (Recommandé)
**Gratuit | Simple | 15 minutes**

1. MongoDB Atlas (base de données gratuite)
2. Render.com (hébergement gratuit)
3. Voir **[QUICKSTART.md](../QUICKSTART.md)**

### Option 2 : Railway.app
**$5/mois crédit | Le plus simple | Jamais en veille**

Voir **[ALTERNATIVES.md](../ALTERNATIVES.md)**

### Option 3 : Avec GitHub Student Pack
**Crédits gratuits : $200-$300**

- DigitalOcean : $200 crédit
- Azure : $100 crédit  
- Heroku : $13/mois

Voir **[ALTERNATIVES.md](../ALTERNATIVES.md)**

---

## 📂 Structure du Projet

```
paisley-hg/
├── app/
│   ├── routes/              # Pages de l'application
│   │   ├── home.tsx         # Page d'accueil
│   │   ├── events.tsx       # Liste des événements
│   │   ├── register.$id.tsx # Inscription à un événement
│   │   ├── results.tsx      # Résultats
│   │   └── tickets.tsx      # Billetterie
│   ├── models/              # Modèles Mongoose
│   │   ├── Event.ts
│   │   ├── Registration.ts
│   │   ├── Result.ts
│   │   └── Ticket.ts
│   ├── layouts/             # Layout commun
│   │   └── sidebar.tsx
│   ├── db.ts                # Configuration MongoDB
│   └── root.tsx             # Root layout
├── public/                  # Assets statiques
├── Dockerfile               # Configuration Docker
└── package.json
```

---

## 🗄️ Base de Données

### MongoDB Atlas (Gratuit)
- 512 MB de stockage gratuit
- Aucune carte bancaire requise
- Guide : voir **[DEPLOYMENT.md](../DEPLOYMENT.md)**

### Seed Data
Pour initialiser la base de données avec des données de test :

```sh
cd ../seed
npm install
# Configurez .env avec votre MongoDB connection string
node index.js
```

Voir **[seed/README.md](../seed/README.md)**

---

## 🐳 Docker

L'application est prête pour Docker :

```sh
# Build l'image
docker build -t paisley-hg .

# Run le container
docker run -p 3000:3000 -e DB_STRING="mongodb+srv://..." paisley-hg
```

---

## 🔧 Configuration

### Variables d'environnement (.env)

```env
# Base de données MongoDB
DB_STRING=mongodb+srv://username:password@cluster.mongodb.net/paisley_highland_games

# Environnement
NODE_ENV=production
```

Voir `.env.example` pour les détails.

---

## 📱 Fonctionnalités

- ✅ **Événements** : Liste et détails des événements Highland Games
- ✅ **Inscriptions** : Formulaire d'inscription aux événements
- ✅ **Résultats** : Classements et résultats par événement
- ✅ **Billetterie** : Achat de tickets avec codes uniques
- ✅ **Dashboard** : Vue d'ensemble des statistiques
- ✅ **Responsive** : Design adaptatif mobile/desktop

---

## 🎓 Pour Étudiants

### Coût Total : 0€
- MongoDB Atlas : Gratuit (512 MB)
- Render.com : Gratuit (750h/mois)
- Domaine : Inclus (.onrender.com)
- SSL : Inclus (HTTPS automatique)

### Durée : Illimitée
Les plans gratuits n'expirent pas.

### GitHub Student Pack
Obtenez des crédits supplémentaires :
- https://education.github.com/pack
- $200+ de crédit cloud gratuit
- Voir **[ALTERNATIVES.md](../ALTERNATIVES.md)**

---

## 🐛 Problèmes ?

Consultez **[TROUBLESHOOTING.md](../TROUBLESHOOTING.md)** pour :
- Erreurs de connexion MongoDB
- Problèmes de déploiement
- App lente au démarrage
- Erreurs 500
- Et bien plus...

---

## 📚 Documentation

- [React Router Docs](https://reactrouter.com/)
- [MongoDB Atlas Docs](https://docs.atlas.mongodb.com/)
- [Render Docs](https://render.com/docs)
- [Docker Docs](https://docs.docker.com/)

---

## 📄 License

Ce projet est un projet académique étudiant.
