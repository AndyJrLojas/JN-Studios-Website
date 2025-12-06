<script setup>
const config = useRuntimeConfig()
const baseURL = config.app.baseURL
</script>

<template>
  <div class="pricing-page">
    
    <!-- HEADER -->
    <header class="page-header">
      <h4 class="overline">Investment</h4>
      <h1>Pricing & <span class="gold-text">Services</span></h1>
      <p class="intro">Transparent pricing for professional headshots and timeless weddings.</p>
    </header>

    <!-- SECTION 1: HEADSHOTS (Styled like your image) -->
    <section class="headshots-section">
      <h2 class="section-title">PER-PERSON PRICING & SERVICES</h2>
      
      <div class="headshot-grid">
        
        <!-- CARD 1: BASIC -->
        <div class="pricing-card">
          <div class="card-image">
            <img :src="`${baseURL}headshot9.webp`" alt="Basic Headshot" /> 
          </div>
          <div class="card-content">
            <h3>Basic Headshot Session</h3>
            <div class="price">$299 <span class="tax">+HST</span></div>
            <p class="description">A simple, polished session for a clean and professional look.</p>
            
            <div class="divider"></div>
            
            <div class="features">
              <span class="feature-title">What's Included?</span>
              <ul>
                <li>One look</li>
                <li>Guided posing and expression coaching</li>
                <li>Professional lighting setup</li>
                <li><strong>One retouched image included</strong></li>
                <li>High-resolution + web-ready file(s)</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- CARD 2: ESSENTIAL -->
        <div class="pricing-card featured-card">
          <div class="card-image">
            <img :src="`${baseURL}headshot6.webp`" alt="Essential Headshot" />
          </div>
          <div class="card-content">
            <h3>Essential Headshot Session</h3>
            <div class="price">$449 <span class="tax">+HST</span></div>
            <p class="description">A fuller experience with more variety, expression and creative direction.</p>
            
            <div class="divider"></div>
            
            <div class="features">
              <span class="feature-title">What's Included?</span>
              <ul>
                <li>Up to two looks</li>
                <li>More variety in posing, angles and expression</li>
                <li>Professional lighting setups</li>
                <li><strong>Two retouched images included</strong></li>
              </ul>
            </div>
          </div>
        </div>

        <!-- CARD 3: BRANDING -->
        <div class="pricing-card">
          <div class="card-image">
            <img :src="`${baseURL}headshot7.webp`" alt="Branding Session" />
            <!-- Replace with actual image path or use placeholder: https://picsum.photos/id/129/500/500 -->
          </div>
          <div class="card-content">
            <h3>Branding Portrait Session</h3>
            <div class="price creative-fee">Creative Fee: $600 <span class="tax">+HST</span></div>
            <p class="description">A modern branding session designed to show personality, style and presence.</p>
            
            <div class="divider"></div>
            
            <div class="features">
              <span class="feature-title">What's Included?</span>
              <p class="disclaimer">The creative fee covers production and the photographer's time; <strong>photos are sold separately.</strong></p>
              <ul>
                <li>Up to 2 hour session</li>
                <li>Multiple looks</li>
                <li>Detailed planning consultation</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- SECTION 2: WEDDING PACKAGES -->
    <section class="wedding-section">
      <h2 class="section-title">WEDDING PHOTOGRAPHY PACKAGES</h2>
      
      <div class="pkg-container">
        <!-- Package 1 -->
        <div class="wedding-card">
          <div class="pkg-header">
            <h3>Package 1</h3>
            <div class="pkg-price">$1990</div>
          </div>
          <ul class="pkg-list">
            <li>6–8 Hours Coverage</li>
            <li>1 Photographer</li>
            <li>400–600 Edited Photos</li>
            <li>Online Photo Gallery</li>
            <li>USB Drive</li>
          </ul>
          <NuxtLink to="/contact" class="btn-outline">Inquire Package 1</NuxtLink>
        </div>

        <!-- Package 2 -->
        <div class="wedding-card dark-mode">
          <div class="pkg-header">
            <h3>Package 2</h3>
            <div class="pkg-price">$2290</div>
          </div>
          <ul class="pkg-list">
            <li>12 Hours Coverage</li>
            <li>1 Photographer</li>
            <li>700–1000 Edited Photos</li>
            <li>Online Photo Gallery</li>
            <li>USB Drive</li>
          </ul>
          <NuxtLink to="/contact" class="btn-solid">Inquire Package 2</NuxtLink>
        </div>
      </div>
    </section>

    <!-- SECTION 3: PHOTO + VIDEO -->
    <section class="combo-section">
      <h2 class="section-title">PHOTO + VIDEO COLLECTIONS</h2>
      
      <div class="pkg-container">
        <!-- Combo 1 -->
        <div class="wedding-card">
          <div class="pkg-header">
            <h3>Photography + Video</h3>
            <div class="pkg-price">$3790</div>
          </div>
          <ul class="pkg-list">
            <li>8 Hours Coverage</li>
            <li>1 Videographer + 1 Photographer</li>
            <li>600–800 HQ Edited Photos</li>
            <li>Edited Wedding Film</li>
            <li>Highlight Video</li>
            <li>Online Gallery & USB</li>
          </ul>
          <NuxtLink to="/contact" class="btn-outline">Inquire Combo</NuxtLink>
        </div>

        <!-- Combo 2 -->
        <div class="wedding-card gold-border">
          <div class="pkg-header">
            <h3>Full Day Photo + Video</h3>
            <div class="pkg-price">$4500</div>
          </div>
          <ul class="pkg-list">
            <li>Up to 12 Hours Coverage</li>
            <li>1 Videographer + 1 Photographer</li>
            <li>700–900 HQ Edited Photos</li>
            <li>Edited Wedding Film</li>
            <li>Highlight Video</li>
            <li>Online Gallery & USB</li>
          </ul>
          <NuxtLink to="/contact" class="btn-outline">Inquire Full Day</NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
.pricing-page {
  padding-bottom: 100px;
}

/* HEADER STYLES */
.page-header {
  text-align: center;
  padding: 80px 20px 60px;
  background-color: #fcfcfc;
  border-bottom: 1px solid #f0f0f0;
}
.overline {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #999;
  margin-bottom: 15px;
}
.page-header h1 {
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  margin-bottom: 20px;
  color: #1a1a1a;
}
.gold-text { color: #C6A87C; font-style: italic; }
.intro {
  font-family: 'Montserrat', sans-serif;
  color: #666;
  font-weight: 300;
  max-width: 500px;
  margin: 0 auto;
}

/* GENERAL SECTION STYLES */
section {
  padding: 80px 5%;
  max-width: 1400px;
  margin: 0 auto;
}
.section-title {
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 2px;
  margin-bottom: 60px;
  text-transform: uppercase;
  color: #1a1a1a;
  position: relative;
  padding-bottom: 20px;
}
.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 1px;
  background-color: #C6A87C;
}

/* --- HEADSHOT SECTION --- */
.headshot-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  align-items: flex-start;
}

.pricing-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  /* Soft shadow like the example image */
  box-shadow: 0 10px 40px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
}
.pricing-card:hover {
  transform: translateY(-5px);
}

.card-image {
  height: 300px;
  width: 100%;
  background-color: #eee;
}
.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.card-content {
  padding: 30px;
  text-align: center;
}

.card-content h3 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  text-transform: uppercase;
  margin-bottom: 15px;
  color: #000;
}

.price {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: #1a1a1a;
  margin-bottom: 15px;
}
.creative-fee { font-size: 1.5rem; } /* Slightly smaller for long text */
.tax { font-size: 0.9rem; font-family: 'Montserrat', sans-serif; color: #666; font-weight: 400; }

.description {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  color: #444;
  line-height: 1.5;
  margin-bottom: 25px;
  min-height: 45px; /* Aligns dividers */
}

.divider {
  height: 1px;
  background-color: #eee;
  margin-bottom: 25px;
  width: 100%;
}

.features {
  text-align: left;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
}

.feature-title {
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #1a1a1a;
}
.feature-title::before {
  content: '^'; /* Simple chevron representation */
  display: inline-block;
  transform: rotate(180deg);
  margin-right: 8px;
  font-weight: bold;
}

.features ul {
  list-style: none;
  padding: 0;
}
.features li {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  color: #555;
  margin-bottom: 8px;
  padding-left: 15px;
  position: relative;
  line-height: 1.4;
}
.features li::before {
  content: '•';
  color: #C6A87C;
  position: absolute;
  left: 0;
}
.disclaimer {
  font-size: 0.8rem;
  font-family: 'Montserrat', sans-serif;
  color: #1a1a1a;
  margin-bottom: 10px;
  line-height: 1.4;
}

/* --- WEDDING & VIDEO SECTIONS --- */
.wedding-section { background-color: #fff; }
.combo-section { background-color: #fcfcfc; }

.pkg-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
}

.wedding-card {
  border: 1px solid #e0e0e0;
  padding: 50px 40px;
  text-align: center;
  background: white;
  display: flex;
  flex-direction: column;
}

.dark-mode {
  background-color: #1a1a1a;
  color: white;
  border: none;
}
.gold-border {
  border: 2px solid #C6A87C;
}

.pkg-header {
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;
  margin-bottom: 30px;
}
.dark-mode .pkg-header { border-bottom-color: #333; }

.pkg-header h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  margin-bottom: 10px;
  letter-spacing: 1px;
}

.pkg-price {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 1.4rem;
  color: #C6A87C;
}

.pkg-list {
  list-style: none;
  padding: 0;
  margin-bottom: 40px;
  flex-grow: 1; /* Pushes button to bottom */
}
.pkg-list li {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  padding: 10px 0;
  color: #555;
}
.dark-mode .pkg-list li { color: #ccc; }

/* BUTTONS */
.btn-outline, .btn-solid {
  display: inline-block;
  padding: 15px 30px;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 2px;
  transition: 0.3s;
  cursor: pointer;
  text-decoration: none;
}
.btn-outline {
  border: 1px solid #1a1a1a;
  color: #1a1a1a;
}
.btn-outline:hover {
  background: #1a1a1a;
  color: #fff;
}
.btn-solid {
  background: #C6A87C;
  color: white;
  border: 1px solid #C6A87C;
}
.btn-solid:hover {
  background: white;
  color: #C6A87C;
}

@media (max-width: 768px) {
  .page-header h1 { font-size: 2.5rem; }
  .headshot-grid { grid-template-columns: 1fr; }
  .pkg-container { grid-template-columns: 1fr; }
}
</style>