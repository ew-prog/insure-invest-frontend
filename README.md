# InsureInvest Leads Platform

A complete web platform to manage insurance and investment leads.  
Features include: public insurance page, partner portal, leads dashboard, authentication, and a responsive navbar.

---

## Features

- **Home Page:** Landing page with platform overview.
- **Insurance Page:** Horizontal menu of products (Unit Trust, Life Insurance, Motor, Travel, Home, Medical). Clients can submit leads.
- **Lead Form:** Collects Name, Email, Phone, Insurance Company, Product (or custom product).
- **Partner Portal:** Protected route for partners/agents to manage leads.
- **Leads Dashboard:** View submitted leads in a table.
- **Login:** Simple authentication for partners (`partner@insureinvest.com` / `password123`).
- **Responsive Navbar:** Links to Home, Insurance, Partner Portal, Dashboard.

---

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, React Router DOM
- **Backend:** Node.js / Express (insure-invest-backend)
- **Deployment:** Render / Vercel

---

## Environment Variables

### Frontend (`.env`)

```env
VITE_API_BASE_URL=https://insure-invest-backend.onrender.com
