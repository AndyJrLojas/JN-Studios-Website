<script setup>
// Placeholder images - In production, replace these with Julia's actual headshots
const images = [
  'https://picsum.photos/id/338/600/800', 
  'https://picsum.photos/id/64/600/800',  
  'https://picsum.photos/id/91/600/800',  
  'https://picsum.photos/id/1027/600/800', 
  'https://picsum.photos/id/342/600/800', 
  'https://picsum.photos/id/203/600/800'  
]
</script>

<template>
  <div class="page-container">
    
    <!-- HEADER / HERO SECTION -->
    <div class="header">
      <h4 class="overline">For Professionals & Entrepreneurs</h4>
      <h1>Headshots & <br><span class="gold-text">Personal Branding</span></h1>
      
      <!-- UPDATED TEXT HERE -->
      <p class="intro">
        Elevate your professional presence. We craft authentic, commanding 
        portraits that reflect your expertise and character.
      </p>
      
      <!-- PRICING SNIPPET -->
      <div class="pricing-pill">
        <span>Sessions starting at $350</span>
      </div>
    </div>

    <!-- THE GALLERY GRID -->
    <div class="gallery-grid">
      <div v-for="(img, index) in images" :key="index" class="gallery-item">
        <div class="image-wrapper">
          <img :src="img" loading="lazy" alt="Professional Headshot" />
          <div class="overlay"></div>
        </div>
      </div>
    </div>

    <!-- CTA FOOTER -->
    <div class="mini-cta">
      <h3>Ready to update your image?</h3>
      <NuxtLink to="/contact" class="btn-underline">Book Your Session</NuxtLink>
    </div>

  </div>
</template>

<style scoped>
.page-container {
  padding: 100px 5%;
  max-width: 1400px;
  margin: 0 auto;
}

/* HEADER STYLES */
.header {
  text-align: center;
  max-width: 700px; /* Kept narrow for readability */
  margin: 0 auto 80px auto;
}

.overline {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #999;
  margin-bottom: 20px;
}

.header h1 {
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  line-height: 1.1;
  color: #1a1a1a;
  margin-bottom: 25px;
}

.gold-text {
  color: #C6A87C;
  font-style: italic;
}

.intro {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.05rem; /* Slightly larger for impact */
  color: #555; /* Slightly darker than #666 for better readability */
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
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.gallery-item {
  position: relative;
  cursor: pointer;
}

.image-wrapper {
  overflow: hidden;
  height: 450px; 
  position: relative;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
  filter: grayscale(10%); 
}

/* Hover Effect: Zoom & Color */
.gallery-item:hover .image-wrapper img {
  transform: scale(1.05);
  filter: grayscale(0%);
}

/* MINI CTA */
.mini-cta {
  text-align: center;
  margin-top: 80px;
  padding-top: 50px;
  border-top: 1px solid #eee;
}

.mini-cta h3 {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  margin-bottom: 20px;
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
  border-color: #1a1a1a;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .header h1 { font-size: 2.5rem; }
  .image-wrapper { height: 350px; }
  .page-container { padding: 60px 20px; }
}
</style>