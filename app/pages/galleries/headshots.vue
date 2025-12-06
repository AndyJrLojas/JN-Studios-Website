<script setup>
useHead({
  title: 'Headshots & Corporate | JN Studios'
})

// 1. The Main Hero Image (The one shown next to the text)
const heroImage = '/headshot7.webp'

// 2. The Corporate Images
const corporateImage = '/corporate2.webp'
const corporateSecondary = '/corporate1.webp'

// 3. The Gallery Grid (Headshots 2 through 11)
const galleryImages = Array.from({ length: 10 }, (_, i) => `/headshot${i + 1}.webp`)
</script>

<template>
  <div class="page-container">

    <!-- SECTION 1: PERSONAL BRANDING (Split Layout like Reference) -->
    <section class="bio-section">
      <div class="bio-image">
        <img :src="heroImage" alt="Professional Headshot Portrait" />
      </div>
      
      <div class="bio-content">
        <h4 class="overline">Personal Branding</h4>
        <h1>The Art of <br><span class="gold-text">First Impressions</span></h1>
        
        <p>
          Hi there, welcome to the professional side of JN Studios.
        </p>
        <p>
          Your headshot is often the first interaction a potential client or employer has with you. 
          It shouldn't just be a picture of your face; it should be a strategic asset that communicates 
          your competence, approachability, and unique personality.
        </p>
        <p>
          My photography style is clean, minimalistic, and focused on capturing your true essence.
          Whether you are a lawyer, an actor, or an entrepreneur, my goal is to create a comfortable 
          environment where your confidence shines through naturally.
        </p>
        
        <div class="action-area">
          <NuxtLink to="/contact" class="btn-outline">Book A Session</NuxtLink>
        </div>
      </div>
    </section>

    <!-- SECTION 2: CORPORATE TEAMS (Reversed Layout) -->
    <section class="corporate-section">
      <div class="bio-content">
        <h4 class="overline">For Companies</h4>
        <h2>Corporate Teams</h2>
        <p>
          Unified branding for your entire team. We provide on-location or in-studio 
          sessions for corporate groups, ensuring a consistent look that aligns with 
          your company values.
        </p>
        <p>
          From executive portraits to group composites, we handle the logistics 
          so you can get back to business.
        </p>
      </div>

      <div class="corporate-images-wrapper">
        <img :src="corporateImage" alt="Corporate Team Photo" class="corp-img-main" />
        <!-- Optional: Display second corporate image smaller or stacked -->
        <!-- <img :src="corporateSecondary" alt="Corporate Team Action" class="corp-img-small" /> -->
      </div>
    </section>

    <!-- SECTION 3: THE PORTFOLIO GRID -->
    <section class="portfolio-section">
      <h3 class="centered-title">Selected Works</h3>
      <div class="gallery-grid">
        <!-- Display Corporate 2 here mixed in, or strictly headshots. 
             Here we display the remaining headshots. -->
        <div v-for="(img, index) in galleryImages" :key="index" class="gallery-item">
          <div class="image-wrapper">
            <img :src="img" loading="lazy" alt="Headshot Portfolio" />
          </div>
        </div>
        
        <!-- Add the second corporate image to the grid as well -->
        <div class="gallery-item">
           <div class="image-wrapper">
            <img :src="corporateSecondary" loading="lazy" alt="Corporate Portfolio" />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA FOOTER -->
    <div class="mini-cta">
      <h3>Ready to elevate your brand?</h3>
      <NuxtLink to="/contact" class="btn-underline">Inquire Now</NuxtLink>
    </div>

  </div>
</template>

<style scoped>
.page-container {
  max-width: 1400px;
  margin: 0 auto;
  padding-bottom: 100px;
}

/* --- SECTION 1 & 2: SPLIT LAYOUTS --- */
.bio-section, .corporate-section {
  display: flex;
  flex-direction: row;
  align-items: center; /* Vertically center the text */
  gap: 60px;
  padding: 80px 5%;
  min-height: 80vh; /* Takes up most of the screen */
}

.corporate-section {
  background-color: #fbfbfb; /* Slight grey background to differentiate */
}

.bio-image, .corporate-images-wrapper {
  flex: 1;
  position: relative;
}

.bio-image img, .corporate-images-wrapper img {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
  /* Optional: Add a subtle shadow like the reference */
  box-shadow: 20px 20px 0px rgba(198, 168, 124, 0.15); 
}

.bio-content {
  flex: 1;
  padding: 0 20px;
}

/* Typography matching the reference */
.overline {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #999;
  margin-bottom: 15px;
}

h1, h2 {
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  line-height: 1.2;
  color: #1a1a1a;
  margin-bottom: 30px;
}

.gold-text {
  color: #C6A87C;
  font-style: italic;
}

.bio-content p {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 20px;
  font-weight: 300;
}

.action-area {
  margin-top: 40px;
}

/* BUTTON STYLES */
.btn-outline {
  border: 1px solid #1a1a1a;
  padding: 15px 40px;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.8rem;
  letter-spacing: 2px;
  transition: all 0.3s ease;
  color: #1a1a1a;
}

.btn-outline:hover {
  background-color: #1a1a1a;
  color: #fff;
}

/* --- PORTFOLIO GRID --- */
.portfolio-section {
  padding: 80px 5%;
}

.centered-title {
  text-align: center;
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  margin-bottom: 50px;
  letter-spacing: 1px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.gallery-item {
  cursor: pointer;
}

.image-wrapper {
  overflow: hidden;
  height: 400px; /* Uniform height */
  position: relative;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
  filter: grayscale(10%);
}

.gallery-item:hover .image-wrapper img {
  transform: scale(1.05);
  filter: grayscale(0%);
}

/* MINI CTA FOOTER */
.mini-cta {
  text-align: center;
  padding-top: 50px;
  border-top: 1px solid #eee;
  margin: 0 5%;
}

.mini-cta h3 {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  margin-bottom: 20px;
}

.btn-underline {
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 2px;
  border-bottom: 1px solid #C6A87C;
  padding-bottom: 5px;
  color: #1a1a1a;
}

/* RESPONSIVE DESIGN */
@media (max-width: 900px) {
  .bio-section, .corporate-section {
    flex-direction: column;
    padding: 60px 20px;
    gap: 40px;
    text-align: center; /* Center text on mobile */
  }

  /* Reverse the order on mobile for corporate so image is on top? 
     Or keep image on bottom. Currently image is second in DOM for corporate. 
     Let's put image first on mobile for consistency */
  .corporate-section {
    flex-direction: column-reverse;
  }

  .bio-image img, .corporate-images-wrapper img {
    box-shadow: none; /* Remove offset shadow on mobile for cleaner look */
  }

  h1, h2 { font-size: 2.2rem; }
}
</style>