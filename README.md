# Wild Oasis web-app

**The Wild Oasis** is a hotel management web application designed for hotel employees to manage bookings, check-ins, and customer details. Built using React.js and Supabase for backend services, it offers a secure and seamless user experience.

## 🔗 Live Demo
[View the live app](#)

## 📂 Project Structure
```bash
wild-oasis-website/
├── components/        # Reusable UI components
├── pages/             # Next.js pages
│   ├── api/           # API routes
│   ├── index.js       # Home page
│   ├── profile.js     # User profile page
│   └── ...            # Other pages
├── public/            # Public assets and images
├── styles/            # Global and component-specific styles
├── utils/             # Utility functions and helpers
├── .env.local         # Environment variables (not committed)
├── next.config.js     # Next.js configuration
├── package.json       # Project dependencies and scripts
└── README.md          # Project documentation
```

## 🛠️ Tech Stack

### Frontend:
Frontend: Next.js (React framework)
Backend: Supabase (PostgreSQL, Authentication, Realtime database)
Styling: Tailwind CSS
State Management: React Context API
Deployment: Vercel

### Backend:
- **Supabase**: Used for authentication, storage, and database functionalities.
- **PostgreSQL**: The underlying database managed by Supabase for storing users, bookings, and related data.

### Deployment:
- Hosted on **Vercel**, ensuring continuous deployment and fast load times.


## ✨ Features

- **User Authentication**: Powered by Supabase, customers can securely log in or sign up.
- **Booking Management**: Employees can add, view, and manage bookings with real-time updates.
- **Check-In**: Quick and easy check-in functionality directly from the booking page.
- **Responsive Design**: The app is fully responsive, built with Styled Components for a seamless experience across devices.
- **Dark Mode**: Users can switch between light and dark themes using the dark mode toggle.


## 🛡️ Security

- **Supabase Auth** ensures only verified users can access the application. Passwords are securely stored and encrypted.
- **Real-Time Data**: The app uses Supabase's real-time features to sync bookings data across devices.


