<script setup>
useHead({
  title: 'Family & Lifestyle | JN Studios'
})

// 1. Featured Images for the split sections
const heroImage = '/family11.webp'
const lifestyleImage = '/family4.webp'

// 2. The Grid Images (Family 3 to 12)
// We create an array of numbers 3..12 and map them to file paths
const galleryImages = Array.from({ length: 12 }, (_, i) => `/family${i + 1}.webp`)
</script>

<template>
  <div class="page-container">
    
    <!-- HEADER -->
    <div class="header-text">
      <h4 class="overline">Generations & Milestones</h4>
      <h1>Family & <br><span class="gold-text">Lifestyle</span></h1>
      <p class="intro-sub">Cherishing the bond between today and tomorrow.</p>
    </div>

    <!-- SECTION 1: TIMELESS PORTRAITS (Text Left, Image Right) -->
    <section class="split-section">
      <div class="split-content">
        <h2>Timeless Portraits</h2>
        <p>
          There is something powerful about a classic family portrait. It freezes time. 
          Years from now, this image will be the one your children and grandchildren look back on.
        </p>
        <p>
          Whether in-studio or outdoors during the golden hour, we guide you through natural 
          posing to ensure everyone looks their best while still feeling like themselves.
        </p>
        <div class="pricing-pill">
          <span>Sessions start at $450</span>
        </div>
      </div>

      <div class="split-image">
        <img :src="heroImage" alt="Classic Family Portrait" />
      </div>
    </section>

    <!-- SECTION 2: LIFESTYLE / CANDID (Image Left, Text Right) -->
    <section class="split-section reverse-layout">
      <div class="split-image">
        <img :src="lifestyleImage" alt="Candid Family Moment" />
      </div>

      <div class="split-content">
        <h2>Unscripted Joy</h2>
        <p>
          Life isn't always about perfect poses. It's about the messy, beautiful moments in between.
          Our lifestyle sessions are designed to capture your family in your element.
        </p>
        <p>
          Baking cookies in the kitchen, a walk in the park, or simply playing in the backyard. 
          We document the laughter, the movement, and the authentic connections that define your family.
        </p>
        <div class="action-area">
          <NuxtLink to="/contact" class="btn-outline">Book A Session</NuxtLink>
        </div>
      </div>
    </section>

    <!-- THE GALLERY GRID (Images 3-12) -->
    <div class="gallery-wrapper">
      <h3 class="section-title">Gallery Highlights</h3>
      <div class="gallery-grid">
        <div v-for="(img, index) in galleryImages" :key="index" class="gallery-item">
          <div class="image-wrapper">
            <img :src="img" loading="lazy" alt="Family Portfolio" />
          </div>
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
  max-width: 1400px;
  margin: 0 auto;
  padding-bottom: 100px;
}

/* HEADER TEXT */
.header-text {
  text-align: center;
  padding: 80px 20px 60px 20px;
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
  margin-bottom: 20px;
}

.gold-text {
  color: #C6A87C;
  font-style: italic;
}

.intro-sub {
  font-family: 'Montserrat', sans-serif;
  color: #666;
  font-weight: 300;
}

/* --- SPLIT SECTIONS (Text + Image) --- */
.split-section {
  display: flex;
  align-items: center;
  gap: 80px;
  padding: 60px 5%;
  min-height: 70vh;
}

/* Add background to second section for contrast */
.reverse-layout {
  background-color: #fafafa; 
}

.split-image {
  flex: 1;
}

.split-image img {
  width: 100%;
  height: 500px; /* Consistent height for featured images */
  object-fit: cover;
  display: block;
  box-shadow: 15px 15px 0px rgba(198, 168, 124, 0.15); /* Gold shadow effect */
}

.split-content {
  flex: 1;
}

.split-content h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: #1a1a1a;
  margin-bottom: 25px;
}

.split-content p {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 20px;
  font-weight: 300;
}

/* PILL & BUTTONS */
.pricing-pill {
  display: inline-block;
  background: #f4f4f4;
  padding: 10px 25px;
  border-radius: 50px;
  font-size: 0.75rem;
  color: #1a1a1a;
  letter-spacing: 1px;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 10px;
}

.btn-outline {
  display: inline-block;
  border: 1px solid #1a1a1a;
  padding: 12px 35px;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  letter-spacing: 2px;
  transition: all 0.3s ease;
  color: #1a1a1a;
  margin-top: 10px;
}

.btn-outline:hover {
  background-color: #1a1a1a;
  color: #fff;
}

/* --- GALLERY GRID --- */
.gallery-wrapper {
  padding: 80px 5%;
}

.section-title {
  text-align: center;
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  margin-bottom: 50px;
  color: #ccc;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); 
  gap: 20px;
}

.gallery-item {
  cursor: pointer;
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

.gallery-item:hover .image-wrapper img {
  transform: scale(1.05);
}

/* MINI CTA */
.mini-cta {
  text-align: center;
  padding-top: 50px;
  border-top: 1px solid #eee;
  margin: 0 5%;
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

/* RESPONSIVE DESIGN */
@media (max-width: 900px) {
  .header-text h1 { font-size: 2.5rem; }
  
  .split-section {
    flex-direction: column; /* Stack them */
    padding: 60px 20px;
    gap: 40px;
    text-align: center;
    min-height: auto;
  }

  /* On mobile, ensure image comes first for the second section for better flow */
  .reverse-layout {
    flex-direction: column-reverse; 
  }

  .split-image img {
    height: 350px;
    box-shadow: none; /* Remove shadow on mobile for cleanliness */
  }

  .split-content h2 { font-size: 2rem; }
}
</style>