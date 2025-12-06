<template>
  <nav>
    <div class="logo">
      <NuxtLink to="/">JN STUDIOS</NuxtLink>
    </div>
    
    <ul class="nav-links">
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
      
      <!-- Galleries Dropdown -->
      <li class="dropdown">
        <span class="drop-trigger">Galleries ▾</span>
        <div class="dropdown-content">
          <NuxtLink to="/galleries/weddings">Weddings</NuxtLink>
          <!-- Change this line: -->
          <NuxtLink to="/galleries/headshots">Headshots & Corporate</NuxtLink>
          <NuxtLink to="/galleries/families">Family & Lifestyle</NuxtLink>
        </div>
      </li>
      
      <li><NuxtLink to="/pricing">Pricing</NuxtLink></li>
      <li><NuxtLink to="/contact">Inquire</NuxtLink></li>

      <!-- SOCIAL ICONS IN NAVBAR -->
      <li class="nav-socials">
        <div class="nav-divider"></div>
        <a href="https://www.instagram.com/jn_studios_photography_cinema/" target="_blank">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        </a>
        <a href="https://www.facebook.com/JNStudiosPhotographyandCinema" target="_blank">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </a>
      </li>

    </ul>
  </nav>
</template>

<style scoped>
/* ADD THIS TO YOUR NAVBAR CSS */

.nav-socials {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: 20px; /* Separates socials from "Inquire" */
}

.nav-divider {
  height: 20px;
  width: 1px;
  background-color: #ddd;
  margin-right: 5px;
}

.nav-icon {
  width: 16px;
  height: 16px;
  color: #1a1a1a;
  transition: color 0.3s;
}

.nav-socials a:hover .nav-icon {
  color: #C6A87C;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px; /* Removed vertical padding, handled by height */
  height: 80px;    /* Fixed height helps with dropdown positioning */
  background: rgba(255, 255, 255, 0.98);
  border-bottom: 1px solid #f0f0f0;
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
}

.logo a { 
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem; 
  font-weight: 700; 
  letter-spacing: 2px;
  color: black; 
  text-decoration: none;
}

.nav-links { 
  display: flex; 
  gap: 40px; 
  list-style: none; 
  align-items: center; 
  height: 100%; /* Important: Links take full height of navbar */
}

.nav-links li {
  height: 100%;
  display: flex;
  align-items: center;
  position: relative; /* Anchor for the dropdown */
}

.nav-links a, .drop-trigger { 
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem; 
  text-transform: uppercase; 
  letter-spacing: 2px;
  color: #1a1a1a;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s;
  text-decoration: none;
}

.nav-links a:hover, .drop-trigger:hover { 
  color: #C6A87C; /* Gold Accent */
}

/* --- DROPDOWN LOGIC --- */

.dropdown-content {
  opacity: 0;
  visibility: hidden; /* Hides it from mouse events when not active */
  position: absolute;
  top: 100%; /* Starts exactly at the bottom of the navbar */
  left: 50%;
  transform: translateX(-50%) translateY(10px); /* Centers it and moves it down slightly */
  
  background-color: white;
  min-width: 200px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  padding: 15px 0;
  border-top: 2px solid #C6A87C; /* Luxury touch */
  
  transition: all 0.3s ease;
  z-index: 1100;
}

/* The Magic Fix: When hovering LI, show Content */
.dropdown:hover .dropdown-content { 
  opacity: 1; 
  visibility: visible;
  transform: translateX(-50%) translateY(0); /* Slides up into place */
}

.dropdown-content a { 
  display: block; 
  padding: 12px 25px; 
  color: #666;
  font-size: 0.7rem;
  text-align: center; /* Center align looks more elegant in dropdowns */
  white-space: nowrap;
}

.dropdown-content a:hover {
  color: #C6A87C;
  background: #fcfcfc;
}

/* --- MOBILE --- */
@media(max-width: 768px) {
  nav { padding: 0 20px; height: 70px; }
  .nav-links { display: none; } /* In a real app, you'd need a hamburger menu here */
}
</style>