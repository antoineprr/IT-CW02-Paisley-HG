# Highland Games de Paisley - Configuration Base de Données

## Structure de la Base de Données

L'application utilise MongoDB avec les collections suivantes :

### 1. Events (Événements)
```javascript
{
  name: String,          // ex: "Caber Toss"
  category: String,      // ex: "Heavy Events"
  date: String,         // ex: "2024-07-15"
  location: String,     // ex: "Paisley Abbey Grounds"
  description: String   // Description de l'événement
}
```

### 2. Registrations (Inscriptions)
```javascript
{
  eventId: ObjectId,    // Référence vers Event
  firstName: String,    // Prénom du participant
  lastName: String,     // Nom de famille
  email: String,        // Email de contact
  club: String         // Club d'appartenance (optionnel)
}
```

### 3. Results (Résultats)
```javascript
{
  eventId: ObjectId,    // Référence vers Event
  year: Number,         // Année de la compétition
  rankings: [           // Classement
    {
      place: Number,    // Position (1, 2, 3...)
      name: String,     // Nom du compétiteur
      score: String,    // Score (optionnel)
      distance: String  // Distance (optionnel)
    }
  ]
}
```

### 4. Tickets (Billets)
```javascript
{
  purchaserName: String,  // Nom de l'acheteur
  email: String,          // Email
  type: String,           // Type : "General Admission", "VIP", "Family Pass", "Student"
  quantity: Number,       // Nombre de billets
  code: String           // Code unique du billet
}
```

## Données d'Exemple Pré-chargées

Le script de seeding charge automatiquement :

### Événements Highland Games :
- **Caber Toss** - Lancer de tronc traditionnel écossais
- **Stone Put** - Lancer de pierre
- **Hammer Throw** - Lancer de marteau
- **Weight for Distance** - Lancer de poids (56lb)
- **Tug of War** - Tir à la corde
- **Highland Dancing** - Danse traditionnelle écossaise
- **Pipe Band Competition** - Compétition de cornemuses
- **Hill Race** - Course en montagne

### Participants Typiques :
- Noms écossais authentiques (Hamish MacLeod, Morag Fraser, etc.)
- Clubs réalistes (Glasgow Highland Athletic Club, etc.)
- Emails de contact

### Résultats Historiques :
- Classements de 2023 avec distances/scores réalistes
- Différents formats selon le type d'épreuve

### Billets :
- Types variés : General, VIP, Family Pass, Student
- Codes uniques pour chaque achat
- Quantités diverses

## Comment Utiliser

1. **Démarrer MongoDB** :
   ```bash
   docker run --name mongodb -p 27017:27017 -d mongodb/mongodb-community-server:latest
   ```

2. **Seeding de la base** :
   ```bash
   cd seed
   npm start
   ```

3. **Utilisation dans l'app** :
   - La base `paisley_highland_games` sera automatiquement créée
   - Les modèles existants dans `/app/models/` correspondent aux schémas
   - La connexion se fait via `connectDB()` dans `/app/db.ts`

## Base de Données

**Nom** : `paisley_highland_games`
**Port** : `27017`
**Collections** : `events`, `registrations`, `results`, `tickets`