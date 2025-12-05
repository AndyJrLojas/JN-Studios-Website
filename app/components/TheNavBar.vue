<template>
  <nav>
    <div class="logo">
      <NuxtLink to="/">JN STUDIOS</NuxtLink>
    </div>
    
    <ul class="nav-links">
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
      
      <!-- RENAMED TO GALLERIES -->
      <li class="dropdown">
        <span class="drop-trigger">Galleries ▾</span>
        
        <!-- Dropdown Menu -->
        <div class="dropdown-content">
          <NuxtLink to="/galleries/weddings">Weddings</NuxtLink>
          <NuxtLink to="/galleries/headshots">Headshots</NuxtLink>
          <!-- Added New Category for the Kids Image -->
          <NuxtLink to="/galleries/families">Family & Lifestyle</NuxtLink>
        </div>
      </li>
      
      <li><NuxtLink to="/contact">Inquire</NuxtLink></li>
    </ul>
  </nav>
</template>

<style scoped>
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