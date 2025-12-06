<script setup>
const currentYear = new Date().getFullYear()
const config = useRuntimeConfig()
const baseURL = config.app.baseURL
</script>

<template>
  <footer class="footer-container">
    <div class="footer-content">
      
      <!-- Column 1: Brand & Awards -->
      <div class="footer-col brand-col">
        <h3 class="footer-logo">JN Studios</h3>
        <p class="tagline">
          Photography & Cinematography with Heart & Heritage.
        </p>
        
        <div class="social-links">
  
            <!-- Instagram Weddings -->
            <a href="https://www.instagram.com/jn_studios_photography_cinema/" target="_blank">
                <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Weddings</span>
            </a>

            <!-- Instagram Portraits -->
            <a href="https://www.instagram.com/jn_studios_portraits" target="_blank">
                <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Portraits</span>
            </a>

            <!-- Facebook -->
            <a href="https://www.facebook.com/JNStudiosPhotographyandCinema" target="_blank">
                <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
            </a>

            <!-- YouTube -->
            <a href="" target="_blank" aria-label="YouTube">
                <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
            </a>
        </div>

        <!-- UPDATED: Best For Bride Badge Image -->
        <div class="awards-section">
            <a href="https://www.bestforbride.com/bridal-shop/15/top-wedding-photographers-in-toronto-and-gta/" target="_blank">
              <img :src="`${baseURL}bestforbride.png`" alt="Best For Bride Winner" class="award-badge">
            </a>
        </div>
      </div>

      <!-- Column 2: Navigation -->
      <div class="footer-col links-col">
        <h4>Explore</h4>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About & Team</NuxtLink></li>
          <li><NuxtLink to="/galleries/weddings">Weddings & Pricing</NuxtLink></li>
          <li><NuxtLink to="/cinematography">Cinematography</NuxtLink></li>
          <li><NuxtLink to="/galleries/headshots">Corporate Headshots</NuxtLink></li>
          <li><NuxtLink to="/blog">Journal</NuxtLink></li>
        </ul>
      </div>

      <!-- Column 3: Contact Info -->
      <div class="footer-col contact-col">
        <h4>Inquire</h4>
        <p>Based in Mississauga, Ontario</p>
        <p>Available Worldwide</p>
        <a href="mailto:julia@jnstudios.demo" class="email-link">julia@jnstudios.demo</a>
        <br>
        <NuxtLink to="/contact" class="btn-footer">Get in Touch &rarr;</NuxtLink>
      </div>

    </div>

    <div class="copyright-bar">
      <p>&copy; {{ currentYear }} JN Studios. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
/* -- BADGE CSS -- */
.awards-section { margin-top: 25px; }

.award-badge {
  width: 130px; /* Adjust size here */
  height: auto;
  transition: transform 0.3s ease;
}

.award-badge:hover {
  transform: scale(1.05); /* Slight zoom effect on hover */
}

/* -- EXISTING FOOTER CSS -- */
.footer-container { background-color: #ffffff; border-top: 1px solid #f0f0f0; padding: 80px 20px 20px; margin-top: auto; }
.footer-content { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1.5fr 1fr 1fr; gap: 60px; margin-bottom: 60px; }
.footer-logo { font-family: 'Playfair Display', serif; font-size: 1.8rem; margin-bottom: 15px; color: #1a1a1a; letter-spacing: 1px; }
.tagline { font-family: 'Montserrat', sans-serif; font-size: 0.9rem; color: #666; margin-bottom: 25px; font-weight: 300; max-width: 300px; line-height: 1.6; }
h4 { font-family: 'Montserrat', sans-serif; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 2px; color: #1a1a1a; margin-bottom: 25px; font-weight: 600; }
ul { list-style: none; padding: 0; }
li { margin-bottom: 12px; }
a { text-decoration: none; font-family: 'Montserrat', sans-serif; font-size: 0.85rem; color: #666; transition: color 0.3s ease; }
a:hover { color: #C6A87C; }
.contact-col p { font-family: 'Montserrat', sans-serif; font-size: 0.85rem; color: #666; margin-bottom: 5px; }
.email-link { display: inline-block; margin-top: 10px; margin-bottom: 20px; color: #1a1a1a; border-bottom: 1px solid #C6A87C; }
.btn-footer { font-family: 'Playfair Display', serif; font-style: italic; font-size: 1.1rem; color: #C6A87C; }
.copyright-bar { border-top: 1px solid #f8f8f8; text-align: center; padding-top: 30px; }
.copyright-bar p { font-family: 'Montserrat', sans-serif; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1px; color: #999; }
@media (max-width: 768px) { .footer-content { grid-template-columns: 1fr; text-align: center; gap: 40px; } .social-links { justify-content: center; } }
.social-links {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  align-items: center;
}

.social-links a {
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 6px; /* Space between Icon and Text */
  text-decoration: none;
}

.social-links a span {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #666;
  transition: color 0.3s ease;
}

.social-icon {
  width: 18px; /* Slightly smaller to match text */
  height: 18px;
  color: #666;
  transition: all 0.3s ease;
}

/* Hover Effect for both Icon and Text */
.social-links a:hover .social-icon,
.social-links a:hover span {
  color: #C6A87C;
}
</style>