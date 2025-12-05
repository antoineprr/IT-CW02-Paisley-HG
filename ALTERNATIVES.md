# Free Deployment Alternatives

## Platform Comparison

| Platform | Free | Docker | Auto-deploy | Sleep time | Ease | Recommended for |
|----------|------|--------|-------------|------------|------|-----------------|
| **Render** | 750h/month | Yes | Yes | 15 min | 4/5 | **Student production** |
| **Railway** | $5/month | Yes | Yes | Never | 5/5 | **Simplest** |
| **Fly.io** | 3 apps | Yes | Yes | Never | 3/5 | Docker experts |
| **Vercel** | Unlimited | No | Yes | Never | 4/5 | Serverless apps |
| **Heroku** | With Student Pack | Yes | Yes | - | 4/5 | With Student Pack |

---

## 1. Railway.app (Recommended #1)

### Advantages
- **Simplest** to configure
- Automatically detects Docker
- Ultra-intuitive interface
- Never sleeps
- $5 free credit/month (more than enough)

### Deployment
```bash
# 1. Install Railway CLI
npm i -g @railway/cli

# 2. Login
railway login

# 3. From paisley-hg folder
cd paisley-hg
railway init

# 4. Deploy
railway up

# 5. Add environment variables
railway variables set NODE_ENV=production
railway variables set DB_STRING="mongodb+srv://..."

# 6. Open app
railway open
```

### Documentation
https://docs.railway.app/

---

## 2. Fly.io (For advanced users)

### Advantages
- 3 free machines
- Very fast deployment
- No sleep
- Excellent performance

### Deployment
```bash
# 1. Install Fly CLI
curl -L https://fly.io/install.sh | sh

# 2. Authenticate
fly auth signup
fly auth login

# 3. From paisley-hg/
cd paisley-hg
fly launch

# Interactive configuration:
# - App name: paisley-hg
# - Region: Amsterdam (ams)
# - PostgreSQL: No
# - Redis: No

# 4. Add secrets
fly secrets set NODE_ENV=production
fly secrets set DB_STRING="mongodb+srv://..."

# 5. Deploy
fly deploy
```

### Documentation
https://fly.io/docs/

---

## 3. Vercel (Requires modifications)

### Limitation
Vercel is optimized for **serverless** applications. Your React Router app must be adapted.

### Advantages
- Unlimited free
- Excellent for Next.js and frontend
- Very fast
- Never sleeps

### Deployment
Requires converting app to "SPA" (Single Page Application) mode or using serverless functions.

**Not recommended** for your current project without major modifications.

### Documentation
https://vercel.com/docs

---

## 4. Heroku (With Student Pack)

### Important
Heroku removed its free plan in November 2022. BUT with the **GitHub Student Developer Pack**, you get:
- **$13/month free credit**
- Enough for 1 Hobby Dyno app

### Get Student Pack
1. Go to https://education.github.com/pack
2. Verify your student status (with .edu email or student ID)
3. Once approved, activate Heroku

### Deployment
```bash
# 1. Install Heroku CLI
curl https://cli-assets.heroku.com/install.sh | sh

# 2. Login
heroku login

# 3. Create app
cd paisley-hg
heroku create paisley-hg

# 4. Set buildpack for Docker
heroku stack:set container

# 5. Config vars
heroku config:set NODE_ENV=production
heroku config:set DB_STRING="mongodb+srv://..."

# 6. Deploy
git push heroku main
```

### Documentation
https://devcenter.heroku.com/

---

## 5. DigitalOcean App Platform (With Student Pack)

### Advantages with Student Pack
- **$200 credit** (valid 1 year)
- Very professional
- Excellent performance
- Native Docker support

### Get credits
1. Go to https://education.github.com/pack
2. Activate DigitalOcean
3. Get $200 credit

### Deployment
1. Go to https://cloud.digitalocean.com/apps
2. **Create App** -> Connect GitHub
3. Select repo `IT-CW02-Paisley-HG`
4. Configuration:
   - Type: Web Service
   - Dockerfile: Automatically detected
   - Plan: Basic ($5/month - covered by credit)
5. Add environment variables
6. **Launch App**

### Documentation
https://docs.digitalocean.com/products/app-platform/

---

## 6. Azure (With Student Pack)

### Advantages with Student Pack
- **$100 credit** (renewable each year)
- Professional Microsoft platform
- Excellent for resume

### Get credits
1. Go to https://azure.microsoft.com/en-us/free/students/
2. Verify with student email
3. No credit card required

### Deployment
```bash
# 1. Install Azure CLI
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash

# 2. Login
az login

# 3. Create resource group
az group create --name paisley-rg --location westeurope

# 4. Create App Service Plan
az appservice plan create --name paisley-plan --resource-group paisley-rg --is-linux --sku B1

# 5. Create Web App
az webapp create --name paisley-hg --resource-group paisley-rg --plan paisley-plan --deployment-container-image-name <your-docker-hub-image>

# 6. Configure variables
az webapp config appsettings set --name paisley-hg --resource-group paisley-rg --settings NODE_ENV=production DB_STRING="mongodb+srv://..."
```

### Documentation
https://docs.microsoft.com/azure/app-service/

---

## GitHub Student Developer Pack

### How to get it?
1. Go to https://education.github.com/pack
2. Verify your student status
3. Get access to **60+ free tools**:

### Included in Pack
| Service | Credit | Duration |
|---------|--------|----------|
| DigitalOcean | $200 | 1 year |
| Azure | $100 | Renewable |
| Heroku | $13/month | While student |
| MongoDB Atlas | $50 | - |
| GitHub Pro | Unlimited | While student |
| Namecheap | Free domain | 1 year |

---

## Recommendations by Use Case

### For a course project (3-6 months)
**Render.com** - Simple, reliable, free

### For a portfolio (long term)
**Railway.app** - Never sleeps, simple

### With Student Pack
**DigitalOcean** - Professional, $200 credit

### To learn DevOps
**Fly.io** - Modern, powerful CLI

### Absolutely zero budget
**Render.com** - 750h/month free for life

---

## Decision Table

```
Need maximum simplicity?
  -> Railway.app

Need app to never sleep?
  -> Railway.app or Fly.io

Have Student Pack?
  -> DigitalOcean or Heroku

Absolutely zero budget?
  -> Render.com

Want to learn Docker/DevOps?
  -> Fly.io

Need to add to resume?
  -> Azure or DigitalOcean
```

---

## Final Advice

For a **student project** like yours:

1. **Short term** (< 6 months): **Render.com**
2. **Medium term** with Student Pack: **Railway.app** or **DigitalOcean**
3. **Professional portfolio**: **DigitalOcean** or **Azure**

**Simplest to start**: Render.com (see QUICKSTART.md)
