<script setup>
// 1. GET THE GITHUB CONFIGURATION
const config = useRuntimeConfig()
const baseURL = config.app.baseURL

useHead({
  title: 'JN Studios | Julia Novikova',
  link: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Montserrat:wght@300;400;500&display=swap' }
  ]
})
</script>

<template>
  <div class="home-container">
    
    <!-- SECTION 1: VIDEO HERO -->
    <section class="hero-split">
      <div class="hero-bg-wrapper">
        <!-- FIXED VIDEO PATH -->
        <!-- Note the : before src and the ${baseURL} -->
        <video autoplay muted loop playsinline class="hero-bg">
          <source :src="`${baseURL}hero-reel.mp4`" type="video/mp4">
        </video>
        <div class="warm-overlay"></div>
      </div>
      
      <div class="hero-content fade-in-up">
        <h1 class="hero-title">
          <span class="script-accent">Capture the</span>
          <br>
          ESSENCE
        </h1>
        <p class="hero-subtitle">Timeless Weddings & Professional Headshots</p>
        
        <div class="hero-actions">
          <NuxtLink to="/galleries/weddings" class="btn-transparent">
            View Weddings
          </NuxtLink>
          <div class="divider"></div>
          <NuxtLink to="/galleries/headshots" class="btn-transparent">
            View Headshots
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- SECTION 2: THE PHILOSOPHY -->
    <section class="warm-editorial">
      <div class="container">
        <div class="overlap-grid">
          <div class="image-wrapper reveal-on-scroll">
            
            <!-- FIXED IMAGE PATH -->
            <img :src="`${baseURL}julia-portrait.jpg`" alt="Julia Novikova">
            
            <div class="gold-frame"></div>
          </div>
          
          <div class="text-wrapper">
            <h4 class="overline">The Artist</h4>
            <h2 class="display-heading">Photography with <br><span class="text-gold">Heart & Heritage.</span></h2>
            <p class="body-text">
              I believe that the best photographs aren't forced; they are observed. 
              With an artist's eye and over a decade of experience behind the lens, 
              my approach is calm, detailed, and deeply personal.
            </p>
            <p class="body-text">
              Whether it is the quiet joy of a mother at a wedding or the confident gaze of a professional updating their portfolio, I am here to help you look—and feel—your absolute best.
            </p>
            <div class="signature">Julia Novikova</div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3: SERVICES -->
    <section class="services-clean">
      <div class="section-header">
        <h2 class="serif-title">How can I help you?</h2>
      </div>

      <div class="dual-cards">
        <!-- Card 1: Weddings -->
        <NuxtLink to="/galleries/weddings" class="service-card">
          <div class="img-container">
             <img src="https://picsum.photos/id/338/800/1000" alt="Weddings">
          </div>
          <div class="card-text">
            <h3>Wedding Photography</h3>
            <p>For couples who value family, tradition, and candid moments.</p>
            <span class="link-arrow">View Gallery &rarr;</span>
          </div>
        </NuxtLink>

        <!-- Card 2: Headshots -->
        <NuxtLink to="/galleries/headshots" class="service-card">
           <div class="img-container">
             <img src="https://picsum.photos/id/64/800/1000" alt="Headshots">
           </div>
           <div class="card-text">
            <h3>Professional Headshots</h3>
            <p>Studio or on-location sessions to elevate your professional image.</p>
            <span class="link-arrow">View Gallery &rarr;</span>
          </div>
        </NuxtLink>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* YOUR EXISTING STYLES GO HERE - NO CHANGES NEEDED TO CSS */
/* Just paste the styles you already had for the Home page */
/* --- ANIMATIONS --- */
@keyframes fadeUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

/* --- HERO SECTION --- */
.hero-split {
  position: relative;
  height: 90vh; /* Slightly shorter than full screen feels friendlier */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  color: white;
}

.hero-bg-wrapper {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  z-index: 0;
}

.hero-bg {
  width: 100%; height: 100%;
  object-fit: cover;
}

/* Warm Overlay: Makes it look expensive/welcoming */
.warm-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(60, 50, 40, 0.3), rgba(60, 50, 40, 0.6));
}

.hero-content {
  z-index: 2;
  max-width: 900px;
  animation: fadeUp 1.5s ease-out;
}

.hero-title {
  font-family: 'Playfair Display', serif;
  font-size: 4rem;
  line-height: 1;
  letter-spacing: -1px;
  margin-bottom: 1.5rem;
}

.script-accent {
  font-family: 'Playfair Display', serif; 
  font-style: italic;
  font-size: 2.5rem;
  font-weight: 400;
  color: #e0d0b0; /* Softer gold */
  display: block;
  margin-bottom: 5px;
}

.hero-subtitle {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  letter-spacing: 1px;
  font-weight: 300;
  margin-bottom: 40px;
}

.hero-actions {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
}

.btn-transparent {
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.85rem;
  border-bottom: 1px solid rgba(255,255,255,0.5);
  padding-bottom: 8px;
  transition: 0.3s;
}
.btn-transparent:hover {
  border-color: #C6A87C;
  color: #C6A87C;
}
.divider { width: 1px; height: 20px; background: rgba(255,255,255,0.4); }

/* --- WARM EDITORIAL (About) --- */
.warm-editorial {
  background-color: #f9f9f9; /* Light, clean background */
  color: #333;
  padding: 120px 0;
  overflow: hidden;
}

.container { width: 90%; max-width: 1100px; margin: 0 auto; }

.overlap-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  position: relative;
}

.image-wrapper {
  position: relative;
  z-index: 1;
  width: 90%;
}
.image-wrapper img {
  width: 100%;
  display: block;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.gold-frame {
  position: absolute;
  top: 30px; left: -30px; /* Offset to the left */
  width: 100%; height: 100%;
  border: 1px solid #C6A87C;
  z-index: -1;
}

.text-wrapper {
  margin-left: -80px; 
  z-index: 2;
  background: white; 
  padding: 60px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.05);
}

.overline {
  color: #C6A87C;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 20px;
  font-weight: 600;
}

.display-heading {
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  line-height: 1.1;
  margin-bottom: 25px;
  color: #1a1a1a;
}
.text-gold { color: #C6A87C; font-style: italic; }

.body-text {
  color: #666;
  line-height: 1.8;
  margin-bottom: 20px;
  font-size: 1rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
}

.signature {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 1.5rem;
  margin-top: 30px;
  color: #1a1a1a;
}

/* --- SERVICES SECTION --- */
.services-clean {
  background: white;
  padding: 100px 5%;
}
.section-header { text-align: center; margin-bottom: 60px; }
.serif-title { font-size: 2.5rem; font-family: 'Playfair Display', serif; color: #111; }

.dual-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  max-width: 1000px;
  margin: 0 auto;
}

.service-card {
  display: block;
  text-align: center;
  transition: transform 0.4s ease;
}
.service-card:hover { transform: translateY(-10px); }

.img-container {
  overflow: hidden;
  margin-bottom: 25px;
}
.img-container img {
  width: 100%;
  height: 500px; /* Tall elegant images */
  object-fit: cover;
  transition: transform 0.6s ease;
}
.service-card:hover .img-container img { transform: scale(1.03); }

.card-text h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: #1a1a1a;
}
.card-text p {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 15px;
  line-height: 1.5;
}
.link-arrow {
  color: #C6A87C;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 2px;
  font-weight: 600;
}

/* RESPONSIVE */
@media(max-width: 768px) {
  .hero-title { font-size: 3rem; }
  .overlap-grid { grid-template-columns: 1fr; }
  .text-wrapper { margin-left: 0; margin-top: -50px; padding: 30px; width: 100%; }
  .dual-cards { grid-template-columns: 1fr; gap: 40px; }
  .img-container img { height: 350px; }
  .gold-frame { display: none; } /* Simplify on mobile */
}
</style>