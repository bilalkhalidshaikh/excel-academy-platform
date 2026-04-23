# Excel Academy Platform

A conversion-focused web platform for an educational institution, designed to streamline admissions, capture leads, and provide automated student assistance.

---

## Overview

This project implements a modern frontend architecture with a focus on performance, usability, and structured lead acquisition. It combines a responsive UI with a lightweight AI-assisted interaction layer to support prospective students and guide them through the admissions process.

The system is built to handle high user engagement while maintaining fast load times and predictable behavior across devices.

---

## Technology Stack

- Framework: Next.js 15  
- Language: TypeScript  
- Styling: Tailwind CSS  
- Animation: Framer Motion  
- AI Integration: Google Gemini API (REST)  
- Form Handling: Formspree  
- Deployment: Vercel  

---

## Features

### 1. Admissions Interface

- Structured layout for academic programs and schedules  
- Clear call-to-action elements for enrollment  
- Mobile-first responsive design  

### 2. Lead Capture System

- Integrated form handling via Formspree  
- Designed to minimize friction and maximize submission rate  
- Works without requiring a custom backend  

### 3. AI-Assisted Student Interaction

- Context-driven responses using a language model  
- Handles common admission-related queries  
- Redirects users toward lead submission where appropriate  

### 4. UI System

- Modular component structure  
- Consistent spacing, typography, and layout system  
- Lightweight animations for interaction feedback  

### 5. Performance Optimization

- Optimized image handling via Next.js  
- Controlled layout shifts using fixed aspect ratios  
- Minimal client-side overhead  

---

## Project Structure

    ├── app/
    │   ├── globals.css        # Global styles
    │   ├── layout.tsx         # Root layout and fonts
    │   └── page.tsx           # Main entry point
    │
    ├── components/
    │   └── ui/                # Reusable UI components
    │
    ├── public/                # Static assets
    │
    ├── lib/
    │   └── utils.ts           # Utility functions
    │
    └── README.md

---

## Local Development

### Prerequisites

- Node.js (v18 or higher)  
- npm / yarn / pnpm  

### Setup

Clone the repository:

    git clone https://github.com/YOUR_USERNAME/excel-academy-platform.git
    cd excel-academy-platform

Install dependencies:

    npm install

Create environment file:

    touch .env.local

Add the following:

    GEMINI_API_KEY=your_api_key_here

Run the development server:

    npm run dev

Open in browser:

    http://localhost:3000

---

## Deployment

The project is configured for deployment on Vercel.

Steps:

1. Push repository to GitHub  
2. Import project into Vercel  
3. Add environment variables  
4. Deploy  

---

## Notes

- API keys exposed via NEXT_PUBLIC_* are accessible on the client side.  
- For production systems, sensitive keys should be handled through a backend service.  

---

## License

MIT License