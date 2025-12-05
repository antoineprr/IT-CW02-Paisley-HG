# Deployment Guide - Paisley Highland Games

## Platform: Render.com (FREE)

### Prerequisites
- [ ] GitHub account with code pushed
- [ ] MongoDB Atlas account (free)
- [ ] Render.com account (free)

---

## Step by Step

### 1. MongoDB Atlas (Free database)

#### 1.1 Create account
1. Go to https://www.mongodb.com/cloud/atlas/register
2. Sign up with your email
3. Choose **FREE** (M0 Sandbox - 512MB)

#### 1.2 Create cluster
1. Provider: **AWS**
2. Region: **eu-west-1** (or close to you)
3. Cluster name: `paisley-hg-cluster`
4. Click **Create**

#### 1.3 Configure security
1. **Database Access** (left menu):
   - Click "Add New Database User"
   - Username: `paisley_admin`
   - Password: Generate a strong password (SAVE IT!)
   - Database User Privileges: **Read and write to any database**
   - Click "Add User"

2. **Network Access** (left menu):
   - Click "Add IP Address"
   - Select "Allow Access from Anywhere" (0.0.0.0/0)
   - Click "Confirm"

#### 1.4 Get connection string
1. Return to "Database" (left menu)
2. Click **Connect** on your cluster
3. Choose "Connect your application"
4. Driver: **Node.js**, Version: **5.5 or later**
5. Copy the connection string:
   ```
   mongodb+srv://paisley_admin:<password>@paisley-hg-cluster.xxxxx.mongodb.net/paisley_highland_games?retryWrites=true&w=majority
   ```
6. **IMPORTANT**: Replace `<password>` with your actual password

---

### 2. Render.com (Free hosting)

#### 2.1 Create account
1. Go to https://render.com/
2. Sign up with your GitHub account
3. Authorize Render to access your repositories

#### 2.2 Deploy application
1. From Render dashboard, click **New +** -> **Web Service**
2. Connect your GitHub repository: `IT-CW02-Paisley-HG`
3. Configuration:
   - **Name**: `paisley-hg`
   - **Region**: `Frankfurt (EU Central)` or nearby
   - **Branch**: `main`
   - **Root Directory**: `paisley-hg`
   - **Runtime**: **Docker**
   - **Instance Type**: **Free**

#### 2.3 Environment variables
In the "Environment Variables" section, add:

| Key | Value |
|-----|-------|
| `NODE_ENV` | `production` |
| `DB_STRING` | `mongodb+srv://paisley_admin:YOUR_PASSWORD@paisley-hg-cluster.xxxxx.mongodb.net/paisley_highland_games?retryWrites=true&w=majority` |

**WARNING**: Replace with your actual MongoDB Atlas connection string!

#### 2.4 Deploy
1. Click **Create Web Service**
2. Deployment takes 5-10 minutes
3. You'll see real-time logs
4. Once complete, your app will be accessible at: `https://paisley-hg.onrender.com`

---

### 3. Initialize Database (Seed Data)

#### 3.1 Update seed script
The seed script must point to MongoDB Atlas.

#### 3.2 Run seed locally
```bash
cd /workspaces/PaisleyHG/seed
npm install
# Add your MongoDB Atlas connection string in seed/.env
node index.js
```

---

## Maintenance

### View logs
1. In Render dashboard, click on your service
2. "Logs" tab to see errors

### Redeploy
- Each `git push` to `main` redeploys automatically
- Or click "Manual Deploy" -> "Deploy latest commit"

### Monitor usage
- Render Free: 750 hours/month (enough for 1 app 24/7)
- MongoDB Atlas Free: 512MB storage

---

## Free Alternatives

### Option 2: Railway.app
- Simpler than Render
- $5 free credit/month (enough for small projects)
- https://railway.app/

### Option 3: Fly.io
- 3 free machines
- Good for Docker
- https://fly.io/

### Option 4: Vercel (Frontend) + MongoDB Atlas
- Vercel: free for frontend/serverless
- Requires adapting app for serverless functions
- https://vercel.com/

---

## Free Tier Limitations

### Render Free Tier
- 750 hours/month
- Unlimited deployments
- Automatic SSL
- App "sleeps" after 15 min of inactivity (restarts in 30s)
- 512MB RAM

### MongoDB Atlas Free Tier
- 512MB storage
- Unlimited connections
- 24/7 availability
- No automatic backups

---

## Student Bonus

### GitHub Student Developer Pack
If you have a student email (.edu or @university.com):
1. https://education.github.com/pack
2. Get:
   - Heroku: $13/month free
   - DigitalOcean: $200 credit
   - Azure: $100 credit
   - MongoDB Atlas: $50 credit

---

## Troubleshooting

### App won't start
- Check logs in Render
- Verify `DB_STRING` is correctly configured
- Verify MongoDB Atlas allows connections (0.0.0.0/0)

### MongoDB connection error
- Verify password doesn't contain unencoded special characters
- Encode password: https://www.urlencoder.org/
- Example: `p@ssw0rd!` becomes `p%40ssw0rd%21`

### App is slow on first load
- Normal with Render free tier: app "sleeps" after 15 min
- Restarts automatically (30 seconds)
- Use UptimeRobot (free) to ping app and prevent sleep

---

## Support

- Render Docs: https://render.com/docs
- MongoDB Docs: https://docs.atlas.mongodb.com/
- React Router Docs: https://reactrouter.com/

---

**Estimated deployment time**: 20-30 minutes  
**Cost**: $0 (100% free)  
**Availability**: Unlimited as long as you use free plans
