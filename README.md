# 🛒 My Ecommerce Demo (Next.js + Stripe)

Welcome to the My Ecommerce Demo Project — a modern, minimal e-commerce website built using Next.js 13, Tailwind CSS, Stripe, and TypeScript (optional). This is a fully functional frontend demo where users can browse products, add them to the cart, and simulate a checkout experience.

> ⚠️ This is a demo project. Do not make real payments. This is meant for learning and showcasing skills only.

---

## 🔥 Features

- 💡 Product listing from Stripe
- 🛍 Cart functionality using Zustand
- 📦 Checkout integration with Stripe
- 🎨 Styled with Tailwind CSS
- 🧠 React hooks: `useState`, `useEffect`
- 🧭 Routing with Next.js App Router
- ⚠️ Demo banner: Scrolling message warns users not to pay

---

## 🛠 Tech Stack

| Tech         | Purpose                      |
| ------------ | ---------------------------- |
| Next.js 13   | React Framework (App Router) |
| Tailwind CSS | Utility-first styling        |
| Stripe API   | Product data & Checkout      |
| Zustand      | Cart State Management        |
| TypeScript   | Type Safety (Optional)       |
| Heroicons    | Modern Icons                 |

## 📁 Project Structure

├── app/ # Next.js routes
├── components/ # Reusable UI components
├── store/ # Zustand cart store
├── lib/stripe.ts # Stripe configuration
├── public/ # Static assets
├── styles/ # Tailwind and globals
├── .env.local # Environment variables
├── README.md
└── ...

## 🚀 Getting Started Locally

1. Clone the repository

git clone https://github.com/yourusername/ecommerce-demo.git
cd ecommerce-demo

Install dependencies

pnpm install # or npm install / yarn install
Set up .env.local

env

NEXT_PUBLIC_BASE_URL=http://localhost:3000
STRIPE_SECRET_KEY=your_stripe_secret_key

Run the development server

pnpm dev # or npm run dev / yarn dev
Visit http://localhost:3000 🎉

✅ To Do
Add Product Details Page

Create Admin Product Management (optional)

Deploy on Vercel

Add unit tests with Vitest or Jest

📦 Deployment
This app is ready to deploy on Vercel with environment variables set.

🙋‍♂️ Author
Made by Tejas Jagdale

📝 License
This project is open-source and free to use under the MIT License.

⚠️ Disclaimer
This is a demo project. No real products are being sold. The Stripe integration is in test mode. Do not enter real card details.
