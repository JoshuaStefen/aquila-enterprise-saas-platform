# 🦅 Aquila — Enterprise SaaS Platform

Aquila is a **production-grade, multi-tenant SaaS platform** built with a **modern full-stack architecture** using **Next.js, Fastify, PostgreSQL, MongoDB, Docker, and Nginx**.

It demonstrates **real-world SaaS patterns** including:

* Authentication & RBAC
* Admin dashboards
* Usage-based billing
* Feature flags
* Per-project metrics
* Audit trails
* Event-driven backend
* Full containerized deployment

---

## 🚀 Tech Stack

### Frontend

* Next.js (App Router)
* React
* Tailwind CSS
* Zustand (state management)
* Fetch API

### Backend

* Node.js
* Fastify
* JWT Authentication (access tokens)
* Middleware-heavy architecture
* Event-driven logging

### Databases

* PostgreSQL (Prisma ORM) — core data
* MongoDB — logs, audit events, metrics

### DevOps

* Docker & Docker Compose
* Nginx (reverse proxy)

---

## 🏗️ Architecture Overview

```
┌────────────────────────────┐
│        Client (Browser)    │
│   Next.js + Tailwind UI    │
└───────────────┬────────────┘
                │
                │ HTTP / REST
                ▼
┌────────────────────────────┐
│        Nginx Gateway       │
│   Routes /api → Backend   │
│   Routes / → Frontend     │
└───────────────┬────────────┘
                │
        ┌───────▼────────┐
        │ Fastify API     │
        │ ─ Auth & RBAC   │
        │ ─ Billing       │
        │ ─ FeatureFlags  │
        │ ─ Metrics       │
        │ ─ Admin APIs    │
        └───────┬────────┘
                │
     ┌──────────▼───────────┐
     │ PostgreSQL (Prisma)  │
     │ Users / Orgs / Plans │
     └──────────────────────┘

     ┌──────────────────────┐
     │ MongoDB              │
     │ Logs / Audit / Stats │
     └──────────────────────┘
```

---

## 📁 Repository Structure

```
aquila/
├── backend/
│   ├── src/
│   ├── prisma/
│   ├── Dockerfile
│   └── .env.example
├── frontend/
│   ├── app/
│   ├── components/
│   ├── styles/
│   ├── Dockerfile
│   └── .env.example
├── nginx/
│   └── nginx.conf
├── docker-compose.yml
└── README.md
```

---

## ⚙️ Environment Setup

### Backend — `backend/.env`

```env
PORT=4000
JWT_SECRET=supersecret
JWT_REFRESH_SECRET=refreshsecret

DATABASE_URL=postgresql://postgres:postgres@postgres:5432/aquila
MONGO_URI=mongodb://mongo:27017/aquila_logs
```

### Frontend — `frontend/.env`

```env
NEXT_PUBLIC_API_URL=http://localhost
```

---

## ▶️ Local Run (Without Docker)

### 1️⃣ Start Databases

You must have **PostgreSQL** and **MongoDB** running locally.

---

### 2️⃣ Backend

```bash
cd backend
npm install
npx prisma generate
npx prisma migrate dev
npm run dev
```

Backend runs at:

```
http://localhost:4000
```

---

### 3️⃣ Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:3000
```

---

## 🐳 Docker Run (Recommended)

This runs **everything**:

* Frontend
* Backend
* PostgreSQL
* MongoDB
* Nginx reverse proxy

### 1️⃣ Build & Start

```bash
docker compose up --build
```

### 2️⃣ Access Application

```
http://localhost
```

---

## 🔐 Core Features

### Authentication & RBAC

* JWT-based authentication
* Roles: `MEMBER`, `ADMIN`, `SUPERADMIN`
* Protected routes (frontend + backend)

### SaaS Billing

* Plan-based subscriptions
* Admin-controlled usage limits
* Usage-based API call tracking

### Feature Flags

* Backend-controlled toggles
* Admin UI for enable/disable
* Org-scoped feature flags

### Metrics & Monitoring

* Per-project API usage
* Real-time dashboard (polling)
* SVG-based charts
* Audit trail from MongoDB logs

### Admin Panel

* User management
* Subscription visibility
* Feature flag control
* System-wide oversight

---
