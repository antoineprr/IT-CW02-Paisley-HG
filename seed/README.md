# Seed MongoDB Atlas Instructions

## Option 1: Seed from your local machine

### 1. Install dependencies
```bash
cd /workspaces/PaisleyHG/seed
npm install
```

### 2. Configure connection string
Create or modify `seed/.env` file:
```bash
DB_STRING=mongodb+srv://your_username:your_password@cluster0.xxxxx.mongodb.net/paisley_highland_games?retryWrites=true&w=majority
```

### 3. Execute seed
```bash
node index.js
```

---

## Option 2: Seed via MongoDB Compass (GUI)

### 1. Download MongoDB Compass
- https://www.mongodb.com/try/download/compass
- Free version

### 2. Connect
- Paste your MongoDB Atlas connection string
- Click "Connect"

### 3. Import data
- Select database `paisley_highland_games`
- For each collection (events, registrations, results, tickets)
- Click "Add Data" -> "Import JSON or CSV"
- Import your data files

---

## Option 3: Automatic seed on first startup

Modify `paisley-hg/app/db.ts` to add automatic seeding on first startup.

---

## Verification

### Via MongoDB Atlas
1. Go to https://cloud.mongodb.com
2. Clusters -> Browse Collections
3. Verify data is present

### Via your application
Once deployed, visit:
- https://your-app.onrender.com/events
- https://your-app.onrender.com/results
