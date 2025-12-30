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

## 🏷️ Project Badges

<p align="center">
  <img src="docs/images/readme-badges.png" alt="Aquila README Badges" />
</p>

---

## 🖥️ Product UI Preview

### 📊 Dashboard

<p align="center">
  <img src="docs/images/dashboard.png" alt="Aquila Dashboard UI" />
</p>

### 📈 Metrics & Monitoring

<p align="center">
  <img src="docs/images/metrics.png" alt="Aquila Metrics UI" />
</p>

### 💳 Billing & Plans

<p align="center">
  <img src="docs/images/billing.png" alt="Aquila Billing UI" />
</p>

### 🛠️ Admin Panel

<p align="center">
  <img src="docs/images/admin.png" alt="Aquila Admin UI" />
</p>

### 📁 Projects Management

<p align="center">
  <img src="docs/images/projects.png" alt="Aquila Projects UI" />
</p>

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
* JWT Authentication (Access & Refresh tokens)
* Middleware-heavy architecture
* Event-driven logging

### Databases

* PostgreSQL (Prisma ORM) — core data
* MongoDB — logs, audit trails, metrics

### DevOps

* Docker & Docker Compose
* Nginx (reverse proxy / API gateway)

---

## 🏗️ Architecture Overview

<p align="center">
  <img src="docs/images/architecture-diagram.png" alt="Aquila System Architecture Diagram" />
</p>

---

## 🔄 Full System Workflow

<p align="center">
  <img src="docs/images/system-workflow.png" alt="Aquila System Workflow Diagram" />
</p>

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
├── docs/
│   └── images/
│       ├── dashboard.png
│       ├── metrics.png
│       ├── billing.png
│       ├── admin.png
│       ├── projects.png
│       ├── architecture-diagram.png
│       ├── system-workflow.png
│       └── readme-badges.png
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

Ensure **PostgreSQL** and **MongoDB** are running locally.

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

Runs **Frontend + Backend + PostgreSQL + MongoDB + Nginx**.

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
* Protected frontend & backend routes

### SaaS Billing

* Plan-based subscriptions
* Admin-controlled usage limits
* Usage-based API call tracking

### Feature Flags

* Backend-controlled toggles
* Admin UI enable/disable
* Organization-scoped flags

### Metrics & Monitoring

* Per-project API usage
* Real-time metrics dashboard
* Audit logs via MongoDB

### Admin Panel

* User & org management
* Subscription oversight
* Feature flag control
* System-wide visibility

---

## ✅ Production-Ready Highlights

* Multi-tenant SaaS architecture
* API gateway + reverse proxy
* Event-driven backend logging
* Dockerized deployment
* Scalable & extensible design

