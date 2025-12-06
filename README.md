# Paisley Highland Games

A web application for managing Highland Games events, registrations, results, and ticket sales.

## Features

- Event management and scheduling
- Online registration for participants
- Results tracking and display
- Ticket purchasing system
- Responsive design with Bootstrap

## Tech Stack

- **Frontend**: React 19, React Router 7
- **Backend**: Node.js, React Router (SSR)
- **Database**: MongoDB with Mongoose
- **Styling**: Bootstrap 5
- **Build**: Vite

## Quick Start

### Prerequisites

- Node.js 20+
- MongoDB Atlas account (free)

### Local Development

1. **Install dependencies**
```bash
cd paisley-hg
npm install
```

2. **Configure environment**

Create a `.env` file in the `paisley-hg` directory:
```bash
DB_STRING=mongodb+srv://username:password@cluster.mongodb.net/paisley_highland_games
NODE_ENV=development
```

3. **Start development server**
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Seed Database

1. Navigate to seed directory:
```bash
cd seed
npm install
```

2. Create `.env` file with your MongoDB connection string

3. Run seed script:
```bash
node index.js
```

## Deployment

### MongoDB Atlas Setup

1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Create a new cluster (M0 Free tier)
3. Configure database access:
   - Create a database user with read/write permissions
   - Add IP address `0.0.0.0/0` to Network Access
4. Get your connection string

### Render.com Deployment

1. Sign up at [Render.com](https://render.com/)
2. Create a new Web Service
3. Connect your GitHub repository
4. Configure:
   - **Root Directory**: `paisley-hg`
   - **Runtime**: Docker
   - **Plan**: Free
5. Add environment variables:
   - `NODE_ENV`: `production`
   - `DB_STRING`: Your MongoDB Atlas connection string
6. Deploy

The app will be live at `https://your-app.onrender.com`

## Project Structure

```
paisley-hg/
├── app/
│   ├── routes/          # Route handlers and pages
│   ├── models/          # MongoDB schemas
│   ├── layouts/         # Layout components
│   └── root.tsx         # App root
├── public/              # Static assets
├── Dockerfile           # Container configuration
└── package.json         # Dependencies

seed/
├── index.js             # Database seeding script
└── config/              # Database configuration
```

## Common Issues

**Cannot connect to database**
- Verify your MongoDB connection string
- Check that IP `0.0.0.0/0` is whitelisted in MongoDB Atlas
- Ensure database user has correct permissions

**App is slow to load (Render free tier)**
- Free tier apps sleep after 15 minutes of inactivity
- First request after sleep takes ~30 seconds to wake up

## License

This is a student project for educational purposes.

