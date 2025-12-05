<script setup>
const images = [
  '/julia-portrait.jpg',                    // Your real image (The Family)
  '/family-hero.jpg',
  'https://picsum.photos/id/65/600/800',  // Placeholder: Smiling Girl
  'https://picsum.photos/id/342/600/800', // Placeholder: Holiday detail
  'https://picsum.photos/id/1027/600/800', // Placeholder: Portrait
  'https://picsum.photos/id/292/600/800', // Placeholder: Cooking/Lifestyle
]
</script>

<template>
  <div class="page-container">
    
    <!-- HEADER -->
    <div class="header-text">
      <h4 class="overline">Generations & Milestones</h4>
      <h1>Family & <br><span class="gold-text">Lifestyle</span></h1>
    </div>

    <!-- HERO IMAGE FEATURE -->
    <!-- This highlights the brother/sister shot beautifully -->
    <div class="hero-feature">
      <img src="/family-hero.jpg" alt="Brother and Sister Portrait" class="hero-img">
    </div>

    <!-- INTRO TEXT -->
    <div class="intro-section">
      <p class="intro-body">
        Moments flee, but memories remain. We specialize in creating heirloom-quality 
        family portraits that celebrate your bond—from festive holiday traditions to 
        the quiet, unscripted moments of everyday life.
      </p>
      
      <div class="pricing-pill">
        <span>Family Sessions start at $450</span>
      </div>
    </div>

    <!-- THE GALLERY GRID -->
    <div class="gallery-grid">
      <div v-for="(img, index) in images" :key="index" class="gallery-item">
        <div class="image-wrapper">
          <img :src="img" loading="lazy" alt="Family Portrait" />
          <div class="overlay"></div>
        </div>
      </div>
    </div>

    <!-- CTA FOOTER -->
    <div class="mini-cta">
      <h3>Capture your legacy.</h3>
      <NuxtLink to="/contact" class="btn-underline">Inquire About Availability</NuxtLink>
    </div>

  </div>
</template>

<style scoped>
.page-container {
  padding: 80px 5%;
  max-width: 1400px;
  margin: 0 auto;
}

/* HEADER TEXT */
.header-text {
  text-align: center;
  margin-bottom: 40px;
}

.overline {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #999;
  margin-bottom: 15px;
}

.header-text h1 {
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  line-height: 1.1;
  color: #1a1a1a;
}

.gold-text {
  color: #C6A87C;
  font-style: italic;
}

/* HERO FEATURE IMAGE */
.hero-feature {
  width: 100%;
  height: 600px; /* Cinematic height */
  overflow: hidden;
  margin-bottom: 60px;
  border-radius: 4px; /* Subtle softening */
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* Adjust object-position if heads are cut off. 
     '0 20%' moves the focus slightly up to faces */
  object-position: 0 20%; 
  transition: transform 2s ease;
}

.hero-feature:hover .hero-img {
  transform: scale(1.02); /* Very subtle zoom on hover */
}

/* INTRO TEXT */
.intro-section {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 80px auto;
}

.intro-body {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.05rem;
  color: #555;
  line-height: 1.8;
  margin-bottom: 30px;
  font-weight: 300;
}

.pricing-pill {
  display: inline-block;
  background: #f8f8f8;
  padding: 12px 30px;
  border-radius: 50px;
  font-size: 0.8rem;
  color: #1a1a1a;
  letter-spacing: 1px;
  font-weight: 600;
  text-transform: uppercase;
}

/* GRID STYLES */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); /* Slightly wider cards for families */
  gap: 30px;
}

.image-wrapper {
  overflow: hidden;
  height: 400px; 
  position: relative;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.image-wrapper:hover img {
  transform: scale(1.05);
}

/* MINI CTA */
.mini-cta {
  text-align: center;
  margin-top: 100px;
  padding-top: 50px;
  border-top: 1px solid #eee;
}

.mini-cta h3 {
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  margin-bottom: 25px;
  color: #1a1a1a;
}

.btn-underline {
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 2px;
  border-bottom: 1px solid #C6A87C;
  padding-bottom: 5px;
  color: #1a1a1a;
  transition: 0.3s;
}

.btn-underline:hover {
  color: #C6A87C;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .header-text h1 { font-size: 2.5rem; }
  .hero-feature { height: 350px; } /* Smaller on mobile */
  .intro-body { font-size: 0.95rem; }
  .page-container { padding: 60px 20px; }
}
</style>