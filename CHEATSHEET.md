# Command Reference - Quick Deployment

## Essential Commands

### MongoDB Atlas
```bash
# Test connection
mongosh "mongodb+srv://username:password@cluster.mongodb.net/paisley_highland_games"

# Encode password
# https://www.urlencoder.org/
# Example: p@ss -> p%40ss
```

### Seed Database
```bash
cd seed
npm install
# Edit .env with DB_STRING
node index.js
```

### Local Development
```bash
cd paisley-hg
npm install
npm run dev      # http://localhost:5173
npm run build    # Build production
npm run start    # Run production locally
```

### Docker (Local Test)
```bash
cd paisley-hg
docker build -t paisley-hg .
docker run -p 3000:3000 -e DB_STRING="mongodb+srv://..." paisley-hg
```

### Git Workflow
```bash
git add .
git commit -m "update: description"
git push origin main
# Auto-deploys on Render
```

---

## Important URLs

| Service | URL |
|---------|-----|
| **MongoDB Atlas** | https://cloud.mongodb.com |
| **Render Dashboard** | https://dashboard.render.com |
| **GitHub Student Pack** | https://education.github.com/pack |
| **URL Encoder** | https://www.urlencoder.org |
| **UptimeRobot** | https://uptimerobot.com |
| **Render Docs** | https://render.com/docs |

---

## Environment Variables

### Render.com
```env
NODE_ENV=production
DB_STRING=mongodb+srv://username:password@cluster.mongodb.net/paisley_highland_games?retryWrites=true&w=majority
```

### Local (.env)
```env
DB_STRING=mongodb://localhost:27017/paisley_highland_games
```

### Seed (.env)
```env
DB_STRING=mongodb+srv://username:password@cluster.mongodb.net/paisley_highland_games
```

---

## Quick Debug

### MongoDB connection fails
```bash
# 1. Check IP Whitelist
MongoDB Atlas -> Network Access -> 0.0.0.0/0

# 2. Check user/password
MongoDB Atlas -> Database Access

# 3. Encode special characters
https://www.urlencoder.org/

# 4. Test connection
cd seed && node test-connection.js
```

### App won't start (Render)
```bash
# 1. View logs
Render Dashboard -> Service -> Logs

# 2. Check env vars
Render Dashboard -> Environment

# 3. Clear cache & redeploy
Render Dashboard -> Manual Deploy -> Clear build cache

# 4. Check Root Directory
Render Settings -> Root Directory = "paisley-hg"
```

### App slow to start
```bash
# Normal with Free Tier (sleeps after 15 min)
# Solution: UptimeRobot ping every 5 min
```

### Data not showing
```bash
# 1. Check seed executed
cd seed && node index.js

# 2. Check in MongoDB Atlas
Cloud.mongodb.com -> Database -> Browse Collections

# 3. Check database name
# Must be: paisley_highland_games
```

---

## Deployment Checklist

### MongoDB Atlas
- [ ] Account created
- [ ] Cluster created (M0 Free)
- [ ] Database user created
- [ ] Password saved
- [ ] Network Access: 0.0.0.0/0
- [ ] Connection string copied
- [ ] Database seeded

### Render.com
- [ ] Account created (with GitHub)
- [ ] New Web Service created
- [ ] Repo connected
- [ ] Branch: main
- [ ] Root Directory: paisley-hg
- [ ] Runtime: Docker
- [ ] Plan: Free
- [ ] ENV vars added
- [ ] First deploy succeeded
- [ ] App accessible

### Final Verification
- [ ] https://your-app.onrender.com loads
- [ ] /events displays events
- [ ] /results displays results
- [ ] /register/$id loads form
- [ ] No errors in Render Logs

---

## One-Line Commands

### Setup MongoDB Atlas User
```bash
# Username: paisley_admin
# Password: Generate strong password
# Privileges: Read and write to any database
```

### Setup Render Service
```bash
# Type: Web Service
# Name: paisley-hg
# Runtime: Docker
# Branch: main
# Root: paisley-hg
# Plan: Free
```

### Encode Password with Special Characters
```bash
# Use: https://www.urlencoder.org/
# Or in Node.js:
node -e "console.log(encodeURIComponent('your_password'))"
```

---

## Useful Tools

### MongoDB Compass (GUI)
```bash
# Download: https://www.mongodb.com/products/compass
# Connection string: Paste your MongoDB Atlas string
# Allows visual data viewing/editing
```

### VS Code Extensions
```bash
# MongoDB for VS Code
# Docker
# GitLens
```

### CLI Tools
```bash
# MongoDB Shell
npm install -g mongosh

# Render CLI
npm install -g render-cli

# Railway CLI
npm install -g @railway/cli
```

---

## Quick Support

### MongoDB Atlas
```
Docs: https://docs.atlas.mongodb.com/
Forum: https://www.mongodb.com/community/forums/
Support: Dashboard -> Help -> Contact Support
```

### Render.com
```
Docs: https://render.com/docs
Community: https://community.render.com/
Status: https://status.render.com/
```

### Stack Overflow
```
Tags: react-router, mongodb, render-com, docker
Search: "[react-router] [mongodb] your error"
```

---

## Pro Tips

### Performance
```bash
# Enable MongoDB indexes
# In your models, add:
schema.index({ fieldName: 1 });
```

### Logs
```javascript
// In db.ts, for debug:
mongoose.set('debug', true);
```

### Cache
```bash
# Render caches Docker layers
# To force rebuild:
# Manual Deploy -> Clear build cache & deploy
```

### Monitoring
```bash
# UptimeRobot (free):
# 1. Create account
# 2. Add Monitor: https://your-app.onrender.com
# 3. Interval: 5 minutes
# 4. Notifications: Email
```

---

## Student Resources

### GitHub Student Pack
```
URL: https://education.github.com/pack
Required: Student email or proof of enrollment
Content: 60+ free tools
Value: $200,000+ in services
```

### Free Cloud Credits
```
DigitalOcean: $200 (via Student Pack)
Azure: $100 (via Student Pack)
Heroku: $13/month (via Student Pack)
MongoDB Atlas: $50 credit
```

---

## Express Deployment (Copy-Paste)

### 1. MongoDB Atlas Connection String
```
mongodb+srv://<USERNAME>:<PASSWORD>@<CLUSTER>.mongodb.net/paisley_highland_games?retryWrites=true&w=majority
```

### 2. Render Environment Variables
```
NODE_ENV=production
DB_STRING=<YOUR_CONNECTION_STRING>
```

### 3. Seed Command
```bash
cd seed && npm install && node index.js
```

---

## Monitoring URLs

### Health Checks
```bash
# Your app
https://your-app.onrender.com/

# Render Status
https://status.render.com/

# MongoDB Status
https://status.mongodb.com/
```

---

## One-Liner Deploy

```bash
# From project root
cd paisley-hg && \
git add . && \
git commit -m "deploy" && \
git push origin main && \
echo "Deployment launched! See: https://dashboard.render.com"
```

---

## Success Indicators

```
Build Logs: "Build succeeded"
Deploy Logs: "Deploy live"
Health Check: Status 200
MongoDB: "Connected to MongoDB"
URL: App responds in HTTPS
```

---

**Save this file for quick reference!**
