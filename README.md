# MERN Deployment Assignment

## Overview
This project is a MERN stack application deployed to production with CI/CD pipelines and monitoring.

## URLs
- Frontend: https://deployment-and-devops-essentials-mn.vercel.app/
- Backend: https://deployment-and-devops-essentials-mntsnt.onrender.com/

## Setup Instructions

### Backend
1. Clone the repo
2. Run `npm install`
3. Create `.env` from `.env.example` and add your MongoDB URI
4. Run `npm run dev` for development or deploy using Render/Heroku/Railway

### Frontend
1. Clone the repo
2. Run `npm install`
3. Create `.env.production` and set `REACT_APP_API_URL`
4. Build with `npm run build` and deploy to Vercel

## CI/CD
- Frontend CI: `frontend-ci.yml`
- Frontend CD: `frontend-cd.yml`
- Backend CI: `backend-ci.yml`
- Backend CD: `backend-cd.yml`

## Monitoring
- Health check endpoint: `/health`
- Error tracking: Sentry
- Server logs: platform dashboard
- Performance monitoring: browser dev tools & platform metrics

## Maintenance
- Regular updates of dependencies
- Database backups via MongoDB Atlas
- Deployment and rollback procedures documented in this README
