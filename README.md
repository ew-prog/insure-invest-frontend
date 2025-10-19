# InsureInvest Leads Platform

A complete web platform to manage insurance and investment leads.  
Features include a public insurance page, partner portal, leads dashboard, authentication, and a responsive navbar.

---

## Features

- **Home Page:** Landing page with platform overview.  
- **Insurance Page / Lead Form:** Clients submit leads by filling Name, Email, Phone, selecting an Insurance Company, choosing a Product, or adding a custom product.  
- **Partner Portal:** Protected route for partners/agents to view and manage leads in real time.  
- **Leads Dashboard:** Displays all submitted leads in a table with Name, Email, and Phone.  
- **Login:** Simple authentication for partners (`partner@insureinvest.com` / `password123`).  
- **Responsive Navbar:** Links to Home, Insurance, Partner Portal, Dashboard, Login.  

---

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, React Router DOM  
- **Backend:** Node.js / Express (insure-invest-backend-v2)  
- **Deployment:** Render / Vercel  

---

## Environment Variables

### Frontend (`.env`)

```env
VITE_API_BASE_URL=https://insure-invest-backend-v2.onrender.com
