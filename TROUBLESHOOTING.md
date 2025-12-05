# Troubleshooting and Solutions

## Common Problems and Solutions

---

## Error: "Cannot connect to MongoDB"

### Symptoms
```
MongooseServerSelectionError: Could not connect to any servers in your MongoDB Atlas cluster
```

### Solutions

#### 1. Check connection string
```bash
# Connection string must be in format:
mongodb+srv://username:password@cluster.xxxxx.mongodb.net/database?retryWrites=true&w=majority

# ERROR: Unencoded password
mongodb+srv://admin:p@ssw0rd!@cluster.mongodb.net/...

# CORRECT: Encoded password
mongodb+srv://admin:p%40ssw0rd%21@cluster.mongodb.net/...
```

**Encode your password**: https://www.urlencoder.org/

#### 2. Check Network Access in MongoDB Atlas
1. MongoDB Atlas -> Network Access
2. Verify `0.0.0.0/0` is added
3. Status must be "Active"

#### 3. Check Database User
1. MongoDB Atlas -> Database Access
2. Verify user exists
3. Check permissions: "Read and write to any database"

#### 4. Test connection
```bash
cd seed
npm install
node test-connection.js
```

---

## Error: "Authentication failed"

### Symptoms
```
MongoServerError: Authentication failed
```

### Solutions

#### 1. Check username and password
- Username: Exactly as in MongoDB Atlas -> Database Access
- Password: The password, NOT the username

#### 2. Reset password
1. MongoDB Atlas -> Database Access
2. Click "Edit" on your user
3. "Edit Password" -> Generate new password
4. Copy it and update your `DB_STRING`

#### 3. Check special characters
```bash
# If your password contains: @ : / ? # [ ] @
# You MUST encode it

# Examples:
@ -> %40
: -> %3A
/ -> %2F
? -> %3F
# -> %23
```

---

## App won't start on Render

### Symptoms
In Render logs:
```
Error: Cannot find module 'xyz'
Failed to start service
```

### Solutions

#### 1. Check Dockerfile
```bash
# Dockerfile must be in paisley-hg/
ls paisley-hg/Dockerfile
```

#### 2. Check Root Directory
In Render settings:
- Root Directory: `paisley-hg` (not `/workspaces/PaisleyHG/paisley-hg`)

#### 3. Rebuild from scratch
Render Dashboard -> Manual Deploy -> Clear build cache & deploy

#### 4. Check logs
Render Dashboard -> Logs -> Look for errors

---

## App is very slow on first load

### Symptoms
- First load: 30-60 seconds
- Subsequent loads: fast

### Explanation
**This is normal** with Render Free Tier:
- App "sleeps" after 15 minutes of inactivity
- On next access, it restarts (30 seconds)

### Solutions

#### 1. Upgrade to paid plan ($7/month)
Render Dashboard -> Settings -> Instance Type -> Starter

#### 2. Use UptimeRobot (free)
1. Go to https://uptimerobot.com/
2. Create account
3. Add New Monitor:
   - Type: HTTP(s)
   - URL: `https://your-app.onrender.com`
   - Interval: 5 minutes
4. UptimeRobot pings your app every 5 min -> never sleeps

#### 3. Accept the limitation
For a student project, this is acceptable. Warn users.

---

## Error 500: Internal Server Error

### Symptoms
Blank page or 500 error in browser

### Solutions

#### 1. Check logs
Render Dashboard -> Logs

#### 2. Check environment variables
```bash
# Required variables in Render:
NODE_ENV = production
DB_STRING = mongodb+srv://...
```

#### 3. Test locally
```bash
cd paisley-hg
export NODE_ENV=production
export DB_STRING="mongodb+srv://..."
npm run build
npm run start
```

#### 4. Check DB connection
```javascript
// In app/db.ts, add more logs:
console.log("Attempting to connect to:", connectionString);
```

---

## Data not displaying

### Symptoms
- App works
- But events/results pages are empty

### Solutions

#### 1. Verify seed was executed
```bash
cd seed
node index.js
# Must display: "Event created:", "Registration created:", etc.
```

#### 2. Check in MongoDB Atlas
1. MongoDB Atlas -> Database -> Browse Collections
2. Check collections: events, registrations, results, tickets
3. Must contain documents

#### 3. Check database name
In your connection string:
```
mongodb+srv://.../paisley_highland_games?...
                    ^^^^^^^^^^^^^^^^^^^^^^
                    This name must match
```

#### 4. Recreate data
```bash
# Delete old data
# MongoDB Atlas -> Collections -> Drop collection

# Re-seed
cd seed
node index.js
```

---

## Error: "Out of memory"

### Symptoms
```
JavaScript heap out of memory
```

### Solutions

#### 1. Render Free tier has 512MB RAM
This is limited. Optimize your code:

```javascript
// Avoid loading all data at once
// AVOID
const allEvents = await Event.find();

// PREFER (with pagination)
const events = await Event.find().limit(50);
```

#### 2. Increase NODE_OPTIONS (temporary)
In Render Environment Variables:
```
NODE_OPTIONS=--max-old-space-size=460
```

#### 3. Upgrade plan
Render Starter ($7/month): 512MB -> 2GB RAM

---

## CORS Error

### Symptoms
```
Access to fetch at 'https://...' from origin 'https://...' has been blocked by CORS policy
```

### Solutions

#### 1. Verify you're not calling localhost
```javascript
// Does NOT work in production
fetch('http://localhost:3000/api/...')

// Use relative URLs
fetch('/api/...')
```

#### 2. If you have separate frontend
Add in `entry.server.tsx`:

```typescript
export function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
) {
  responseHeaders.set("Access-Control-Allow-Origin", "*");
  // ... rest of code
}
```

---

## Git push doesn't trigger deployment

### Symptoms
- You push to GitHub
- Render doesn't redeploy automatically

### Solutions

#### 1. Check branch
Render only deploys configured branch (e.g. `main`)

```bash
# Check which branch you're on
git branch

# If on another branch:
git checkout main
git merge your-branch
git push origin main
```

#### 2. Check Auto-Deploy
Render Dashboard -> Settings -> Build & Deploy
- Auto-Deploy: **Yes**

#### 3. Manual deployment
Render Dashboard -> Manual Deploy -> Deploy latest commit

---

## Images/CSS not loading

### Symptoms
- App works
- But styles or images are broken

### Solutions

#### 1. Check public folder
```bash
# Static files must be in:
paisley-hg/public/
```

#### 2. Check paths
```tsx
// Absolute paths from file system
<img src="/workspaces/PaisleyHG/public/image.jpg" />

// Relative paths from public/
<img src="/image.jpg" />
```

#### 3. Rebuild
```bash
npm run build
```

---

## Port already in use

### Symptoms (locally)
```
Error: listen EADDRINUSE: address already in use :::5173
```

### Solutions

#### 1. Find and kill process
```bash
# Find process on port 5173
lsof -ti:5173

# Kill process
kill -9 $(lsof -ti:5173)

# Restart
npm run dev
```

#### 2. Use another port
```bash
npm run dev -- --port 3000
```

---

## Environment variables undefined

### Symptoms
```
process.env.DB_STRING is undefined
```

### Solutions (Render)

#### 1. Add variables
Render Dashboard -> Environment -> Add Environment Variable
```
Key: DB_STRING
Value: mongodb+srv://...
```

#### 2. Redeploy after adding
Variable changes require redeployment

#### 3. Check dotenv loading
```typescript
// At start of your file
import dotenv from 'dotenv';
dotenv.config();
```

---

## Docker build fails

### Symptoms (Render)
```
ERROR: failed to solve: failed to compute cache key
```

### Solutions

#### 1. Check Dockerfile
```bash
# Must be valid
cd paisley-hg
docker build -t test .
```

#### 2. Check .dockerignore
```bash
# paisley-hg/.dockerignore must contain:
node_modules
.env
.git
```

#### 3. Clear build cache on Render
Render Dashboard -> Manual Deploy -> Clear build cache & deploy

---

## Getting Help

### Render Support
- Documentation: https://render.com/docs
- Community Forum: https://community.render.com/
- Status: https://status.render.com/

### MongoDB Atlas Support
- Documentation: https://docs.atlas.mongodb.com/
- Community Forum: https://www.mongodb.com/community/forums/
- Support: https://support.mongodb.com/

### Stack Overflow
Tag your questions with:
- `react-router`
- `mongodb`
- `render-com`
- `docker`

---

## Deployment Checklist

Before deploying, verify:

- [ ] MongoDB Atlas cluster created
- [ ] Database user created with strong password
- [ ] Network Access: 0.0.0.0/0 added
- [ ] Connection string tested locally
- [ ] Seed data inserted in MongoDB Atlas
- [ ] Code pushed to GitHub (main branch)
- [ ] Render service created
- [ ] Environment variables added on Render
- [ ] Build succeeds (no errors in logs)
- [ ] App accessible via Render URL
- [ ] Events/results pages display data
- [ ] No errors in Render logs

**Need additional help?**  
Copy error logs and search on Stack Overflow or GitHub Issues.
