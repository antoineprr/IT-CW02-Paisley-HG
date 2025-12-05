# Paisley Highland Games - Web Deployment

## Documentation Navigation

**[INDEX.md](INDEX.md)** - Complete guide to navigate all documentation

## Complete Documentation

### Quick Start
**[QUICKSTART.md](QUICKSTART.md)** - Deploy in 15 minutes  
*Perfect for: Deploy quickly without reading all documentation*

### Complete Guide
**[DEPLOYMENT.md](DEPLOYMENT.md)** - Detailed step-by-step guide  
*Perfect for: Understanding each step in detail*

### Alternative Options
**[ALTERNATIVES.md](ALTERNATIVES.md)** - Other deployment platforms  
*Perfect for: Comparing options and choosing the best for you*

### Troubleshooting
**[TROUBLESHOOTING.md](TROUBLESHOOTING.md)** - Debugging and solutions  
*Perfect for: Solving common errors and problems*

### Architecture
**[ARCHITECTURE.md](ARCHITECTURE.md)** - Diagrams and technical architecture  
*Perfect for: Understanding the global system architecture*

### Cheat Sheet
**[CHEATSHEET.md](CHEATSHEET.md)** - Commands and quick references  
*Perfect for: Quick reference and essential commands*

---

## Ultra-Fast Start

### Step 1: MongoDB Atlas (5 min)
```
-> https://www.mongodb.com/cloud/atlas/register
-> Plan: FREE (M0)
-> Get connection string
```

### Step 2: Render.com (10 min)
```
-> https://render.com/
-> New Web Service
-> Connect GitHub repo
-> Add Environment Variables:
   - NODE_ENV=production
   - DB_STRING=mongodb+srv://...
-> Deploy
```

### Step 3: Seed Database (3 min)
```bash
cd seed
npm install
# Edit .env
node index.js
```

### Done!
Your app is live: `https://your-app.onrender.com`

---

## Total Cost: Free

| Service | Plan | Cost | Limit |
|---------|------|------|-------|
| **MongoDB Atlas** | Free | $0 | 512 MB |
| **Render.com** | Free | $0 | 750h/month |
| **Domain** | .onrender.com | $0 | Included |
| **SSL/HTTPS** | Automatic | $0 | Included |
| **TOTAL** | | **$0** | Unlimited |

---

## Student Bonus

### GitHub Student Developer Pack
https://education.github.com/pack

**Get for FREE**:
- DigitalOcean: $200 credit
- Azure: $100 credit
- Heroku: $13/month
- MongoDB Atlas: $50 credit
- Namecheap: Free domain 1 year
- 60+ other free tools

**Duration**: As long as you are a student

---

## Project Structure

```
PaisleyHG/
├── README.md                 <- You are here
├── QUICKSTART.md             <- Quick deployment
├── DEPLOYMENT.md             <- Complete guide
├── ALTERNATIVES.md           <- Other options
├── TROUBLESHOOTING.md        <- Troubleshooting
│
├── paisley-hg/               <- Main application
│   ├── app/                  <- React Router code
│   ├── Dockerfile            <- Docker config
│   ├── package.json
│   └── README.md             <- Technical doc
│
└── seed/                     <- Initial data
    ├── index.js              <- Seed script
    ├── README.md             <- Seed instructions
    └── .env.example
```

---

## Choose Your Path

### I want to deploy NOW
**[QUICKSTART.md](QUICKSTART.md)**  
15 minutes. Follow the steps.

### I want to understand in detail
**[DEPLOYMENT.md](DEPLOYMENT.md)**  
Complete guide with explanations.

### I want to compare options
**[ALTERNATIVES.md](ALTERNATIVES.md)**  
Railway, Fly.io, Vercel, Heroku, Azure...

### I have an error
**[TROUBLESHOOTING.md](TROUBLESHOOTING.md)**  
Solutions to common problems.

---

## App Features

- **Highland Games Events** - List and details
- **Registrations** - Online registration form
- **Results** - Rankings and history
- **Ticketing** - Purchase with unique codes
- **Dashboard** - Real-time statistics
- **Responsive** - Mobile and desktop

---

## Tech Stack

- **Frontend**: React 19 + React Router v7
- **Backend**: Node.js + React Router Server
- **Database**: MongoDB (Mongoose)
- **Deploy**: Docker + Render.com
- **Hosting**: Free and unlimited

---

## Support

### Need help?

1. **Check** [TROUBLESHOOTING.md](TROUBLESHOOTING.md)
2. **Render Support**: https://render.com/docs
3. **MongoDB Support**: https://docs.atlas.mongodb.com/
4. **Stack Overflow**: Tags `react-router`, `mongodb`, `render-com`

---

## Ready to Deploy?

### Estimated time: 15-30 minutes
### Cost: $0
### Required skills: Beginner

**Start now** - **[QUICKSTART.md](QUICKSTART.md)**

---

## Important Notes

### Render Free Plan
- App "sleeps" after 15 min of inactivity
- Restarts in ~30 seconds on next access
- **Solution**: Use UptimeRobot (free) to ping the app

### Sufficient For
- Student projects
- Demonstrations
- Portfolios
- Prototypes
- Course projects

### Not Recommended For
- High-availability commercial applications
- High concurrent traffic (>100 users)
- Need for 100% uptime

---

## Complete Checklist

### Before Deployment
- [ ] MongoDB Atlas account created
- [ ] MongoDB cluster created (Free plan)
- [ ] Database user created
- [ ] Network Access: 0.0.0.0/0
- [ ] Connection string retrieved
- [ ] Render.com account created
- [ ] GitHub account with repo

### Deployment
- [ ] Service created on Render
- [ ] GitHub repo connected
- [ ] Root Directory: `paisley-hg`
- [ ] Runtime: Docker
- [ ] Environment variables added
- [ ] First deployment launched

### After Deployment
- [ ] Build completed (green logs)
- [ ] App accessible via URL
- [ ] Database seeded (initial data)
- [ ] Events/results pages work
- [ ] Registration forms work
- [ ] No errors in logs

### Bonus
- [ ] UptimeRobot configured (prevent sleep)
- [ ] GitHub Student Pack activated
- [ ] Custom domain (optional)

---

## Success!

Once deployed, share your application:
```
https://your-app.onrender.com
```

**Happy deploying!**
