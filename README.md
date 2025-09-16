# lochan-portfolio
My .Portfolio 
# 🌐 Portfolio Website with Contact Form (MongoDB + Render)

This is a **personal portfolio website** that showcases projects and skills, with a working **Contact Form** connected to **MongoDB Atlas**.  
The backend is hosted on **Render** and the frontend is served from the same Express server.

---

## 🚀 Features

- 🖼️ Responsive portfolio UI (About, Projects, Contact)
- 📩 Contact form that saves messages to **MongoDB Atlas**
- 🎯 Thank You page after successful submission
- 🌍 Live deployment using **Render**
- 🔒 Secure credentials via environment variables (`.env` / `secure.env`)

---

## 🛠️ Tech Stack

**Frontend**
- HTML, CSS, JavaScript

**Backend**
- Node.js
- Express.js
- MongoDB Atlas (cloud database)
- Mongoose (ODM)
- dotenv (for environment variables)

**Deployment**
- Render (for hosting backend + frontend)
- GitHub (for version control)

---

## 📂 Project Structure
project-folder/
│
├── public/ # frontend files
│ ├── index.html
│ ├── thankyou.html
│ ├── styles.css
│ └── script.js
│
├── server.js # backend logic (Express + MongoDB)
├── package.json
├── package-lock.json
├── secure.env / .env # environment variables (not pushed to GitHub)
└── README.md

