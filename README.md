# HRMS (MERN) - Starter

## Description
Basic Human Resource Management System (HRMS) built with MERN: user auth, employees CRUD, leave apply/approve, attendance (starter).

## Setup - Backend
cd hrms-backend
cp .env.example .env
# set MONGO_URI and JWT_SECRET
npm install
npm run dev

## Setup - Frontend
cd hrms-frontend
npm install
# set REACT_APP_API_URL in .env or use default http://localhost:5000/api
npm start

## Publish to GitHub
git init
git add .
git commit -m "Initial HRMS starter"
# create repo on GitHub and push
