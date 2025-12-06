<script setup>
useHead({
  title: 'Weddings & Love Stories | JN Studios'
})

// SECTION A: Featured Stories (Images 1-3)
// These are the images that will have text next to them (Alternating layout)
const featuredStories = [
  {
    image: '/wedding4.webp',
    couple: 'Sarah & James',
    location: 'The Arlington Estate',
    quote: "We were nervous about being in front of the camera, but Julia made us feel so effortless. Looking at our photos now, we don't just see how we looked; we remember exactly how we felt in that moment. Pure magic."
  },
  {
    image: '/wedding6.webp',
    couple: 'Elena & Mark',
    location: 'Downtown Toronto',
    quote: "JN Studios didn't just capture our wedding; they captured our story. The candid moments during the speeches and the quiet moments during our first look are photos we will cherish for generations."
  },
  {
    image: '/wedding10.webp',
    couple: 'Priya & Anish',
    location: 'Niagara Vineyards',
    quote: "Professional, calming, and incredibly talented. The team managed to organize our large family photos efficiently while still capturing the artistic, romantic shots we dreamed of."
  }
]

// SECTION B: The Gallery Grid (Images 4-12)
// This automatically generates the paths for wedding4.webp through wedding12.webp
const galleryImages = Array.from({ length: 12 }, (_, i) => `/wedding${i + 4}.webp`)
</script>

<template>
  <div class="gallery-page">
    
    <!-- HEADER -->
    <div class="header">
      <h4 class="overline">Love Stories</h4>
      <h1>Weddings & <br><span class="gold-text">Real Moments</span></h1>
      <p class="intro">Authentic. Timeless. Deeply romantic.</p>
    </div>

    <!-- FEATURED STORIES (Text + Image Split) -->
    <div class="stories-container">
      <div 
        v-for="(story, index) in featuredStories" 
        :key="index" 
        class="story-row" 
        :class="{ 'reverse-layout': index % 2 !== 0 }"
      >
        <!-- Image Side -->
        <div class="story-image">
          <img :src="story.image" :alt="`Wedding of ${story.couple}`" />
        </div>

        <!-- Text Side -->
        <div class="story-content">
          <h3 class="couple-name">{{ story.couple }}</h3>
          <p class="location-tag">📍 {{ story.location }}</p>
          <div class="quote-box">
            <span class="quote-mark">“</span>
            <p class="quote-text">{{ story.quote }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- REMAINING GALLERY GRID -->
    <div class="more-work">
      <h3 class="section-title">More Moments</h3>
      <div class="grid">
        <div v-for="(img, index) in galleryImages" :key="index" class="item">
          <img :src="img" loading="lazy" alt="Wedding Detail Shot" />
        </div>
      </div>
    </div>

    <!-- PRICING SECTION -->
    <div class="pricing-section">
      <h2 class="pricing-title">Wedding Packages</h2>
      
      <div class="pricing-grid">
        <!-- Photography Column -->
        <div class="price-card">
          <h3>Photography</h3>
          
          <div class="package">
            <div class="pkg-header">
              <span class="pkg-name">Package 1</span>
              <span class="pkg-price">$1990</span>
            </div>
            <ul>
              <li>6–8 Hours Coverage</li>
              <li>1 Photographer</li>
              <li>400–600 Edited Photos</li>
              <li>Online Gallery & USB</li>
            </ul>
          </div>

          <div class="package">
            <div class="pkg-header">
              <span class="pkg-name">Package 2</span>
              <span class="pkg-price">$2290</span>
            </div>
            <ul>
              <li>12 Hours Coverage</li>
              <li>1 Photographer</li>
              <li>700–1000 Edited Photos</li>
              <li>Online Gallery & USB</li>
            </ul>
          </div>
        </div>

        <!-- Cinema Column -->
        <div class="price-card dark-card">
          <h3>Photo + Video</h3>
          
          <div class="package">
            <div class="pkg-header">
              <span class="pkg-name">Dual Coverage</span>
              <span class="pkg-price">$3790</span>
            </div>
            <ul>
              <li>8 Hours Coverage</li>
              <li>1 Video + 1 Photo</li>
              <li>Highlight Video & Edited Film</li>
              <li>600-800 HQ Photos</li>
            </ul>
          </div>

          <div class="package">
            <div class="pkg-header">
              <span class="pkg-name">Full Day P+V</span>
              <span class="pkg-price">$4500</span>
            </div>
            <ul>
              <li>Up to 12 Hours Coverage</li>
              <li>1 Video + 1 Photo</li>
              <li>Highlight Video & Edited Film</li>
              <li>700-900 HQ Photos</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="cta-wrap">
        <NuxtLink to="/contact" class="btn-gold">Check Availability</NuxtLink>
      </div>
    </div>

  </div>
</template>

<style scoped>
.gallery-page { 
  padding: 60px 5%; 
  max-width: 1400px; 
  margin: 0 auto; 
}

/* HEADER */
.header { text-align: center; margin-bottom: 80px; }
.overline { color: #999; text-transform: uppercase; letter-spacing: 3px; font-size: 0.75rem; margin-bottom: 10px; }
.header h1 { font-family: 'Playfair Display', serif; font-size: 3.5rem; margin-bottom: 10px; color: #1a1a1a; line-height: 1.1; }
.gold-text { color: #C6A87C; font-style: italic; }
.intro { font-family: 'Montserrat', sans-serif; color: #666; font-weight: 300; }

/* --- FEATURED STORIES (The Text + Image Logic) --- */
.stories-container {
  display: flex;
  flex-direction: column;
  gap: 100px; /* Space between stories */
  margin-bottom: 100px;
}

.story-row {
  display: flex;
  align-items: center;
  gap: 60px;
}

/* Zig-Zag Effect: Reverses order for every second item */
.reverse-layout {
  flex-direction: row-reverse;
}

.story-image {
  flex: 1;
}

.story-image img {
  width: 100%;
  height: 500px;
  object-fit: cover;
  display: block;
  /* Optional: Add shadow */
  box-shadow: 10px 10px 0px rgba(198, 168, 124, 0.2); 
}

.story-content {
  flex: 1;
  padding: 0 20px;
}

.couple-name {
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  color: #1a1a1a;
  margin-bottom: 5px;
}

.location-tag {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #C6A87C;
  margin-bottom: 30px;
}

.quote-box {
  position: relative;
}

.quote-mark {
  font-family: 'Playfair Display', serif;
  font-size: 4rem;
  color: #eee;
  position: absolute;
  top: -30px;
  left: -10px;
  z-index: -1;
}

.quote-text {
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-style: italic;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
}

/* --- GRID SECTION --- */
.section-title {
  text-align: center;
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  margin-bottom: 40px;
  color: #ccc; /* Subtle divider title */
}

.grid { 
  display: grid; 
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); 
  gap: 20px; 
  margin-bottom: 100px; 
}
.item img { width: 100%; height: 450px; object-fit: cover; transition: 0.3s; filter: grayscale(10%); }
.item img:hover { transform: scale(1.02); filter: grayscale(0); }

/* --- PRICING STYLES (Unchanged) --- */
.pricing-section { border-top: 1px solid #f0f0f0; padding-top: 80px; }
.pricing-title { text-align: center; font-family: 'Playfair Display', serif; font-size: 2.5rem; margin-bottom: 50px; }
.pricing-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
.price-card { border: 1px solid #eee; padding: 40px; background: #fff; }
.dark-card { background: #fafafa; border-color: #C6A87C; }
.price-card h3 { font-family: 'Montserrat', sans-serif; text-transform: uppercase; letter-spacing: 2px; font-size: 0.9rem; text-align: center; margin-bottom: 40px; color: #C6A87C; font-weight: 600; }
.package { margin-bottom: 40px; }
.pkg-header { display: flex; justify-content: space-between; border-bottom: 1px solid #ddd; padding-bottom: 10px; margin-bottom: 15px; }
.pkg-name { font-family: 'Playfair Display', serif; font-size: 1.2rem; }
.pkg-price { font-family: 'Montserrat', sans-serif; font-weight: 600; font-size: 1.1rem; }
.package ul { list-style: none; padding: 0; }
.package li { font-family: 'Montserrat', sans-serif; font-size: 0.9rem; color: #666; margin-bottom: 8px; }
.package li::before { content: "•"; color: #C6A87C; margin-right: 10px; }
.cta-wrap { text-align: center; margin-top: 40px; }
.btn-gold { background: #C6A87C; color: white; padding: 15px 40px; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 2px; font-weight: 600; text-decoration: none; transition: 0.3s; }
.btn-gold:hover { background: #1a1a1a; }

/* RESPONSIVE */
@media(max-width: 900px) {
  .story-row, .reverse-layout { flex-direction: column; gap: 30px; text-align: center; }
  .pricing-grid { grid-template-columns: 1fr; } 
  .header h1 { font-size: 2.5rem; }
  .story-image img { height: 350px; }
}
</style>