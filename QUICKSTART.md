# Quick Start - Deploy in 15 Minutes

## Quick Checklist

### Step 1: MongoDB Atlas (5 min)
1. Go to https://www.mongodb.com/cloud/atlas/register
2. Create account -> Plan **FREE**
3. Create cluster (AWS, nearby region)
4. **Security QuickStart**:
   - Username: `dbAdminUser`
   - Password: Generate and **SAVE IT**
   - IP Access: `0.0.0.0/0` (everywhere)
5. **Connect** -> Copy connection string:
   ```
   mongodb+srv://paisley_admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/paisley_highland_games
   ```

---

### Step 2: Render.com (10 min)
1. Go to https://render.com/
2. Sign up with GitHub
3. **New +** -> **Web Service**
4. Connect repo: `IT-CW02-Paisley-HG`
5. **Configuration**:
   ```
   Name: paisley-hg
   Region: Frankfurt (EU)
   Branch: main
   Root Directory: paisley-hg
   Runtime: Docker
   Plan: Free
   ```
6. **Environment Variables**:
   ```
   NODE_ENV = production
   DB_STRING = mongodb+srv://paisley_admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/paisley_highland_games
   ```
7. **Create Web Service** -> Wait 5-10 min

---

### Step 3: Seed Data (3 min)
```bash
cd seed
npm install
# Edit .env with your MongoDB Atlas connection string
node index.js
```

---

## Done!

Your app is accessible at: `https://paisley-hg.onrender.com`

---

## Useful Commands

### View logs
```bash
# On Render.com -> Logs tab
```

### Redeploy
```bash
git add .
git commit -m "update"
git push origin main
# Auto-deploys on Render
```

### Test locally before deployment
```bash
cd paisley-hg
npm install
npm run dev
# Opens http://localhost:5173
```

---

## Common Problems

| Problem | Solution |
|---------|----------|
| "Cannot connect to database" | Check `DB_STRING` in Render env vars |
| "Authentication failed" | Check username/password MongoDB Atlas |
| "App is slow to load" | Normal (free tier) - app restarts after 15 min |
| "IP not whitelisted" | MongoDB Atlas -> Network Access -> Add 0.0.0.0/0 |

---

## Share your app

Once deployed, simply share the URL:
```
https://paisley-hg.onrender.com
```

---

## Tips

### Prevent app from sleeping
Use [UptimeRobot](https://uptimerobot.com/) (free):
- Ping your app every 5 minutes
- Keeps app "awake"

### Custom domain (optional)
Render allows adding your own domain for free:
- Settings -> Custom Domain -> Add `yourdomain.com`

---

**Total time**: 15-20 minutes  
**Cost**: $0  
**Valid**: Unlimited
