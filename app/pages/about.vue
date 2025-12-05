<script setup>
const config = useRuntimeConfig()
const baseURL = config.app.baseURL

// Updated Stats: 
// "10k+" is great social proof for weddings (shows she can handle pressure)
const stats = [
  { label: 'Total Experience', value: '15+ Yrs' }, 
  { label: 'Portraits Taken', value: '10k+' }, 
  { label: 'Studio Management', value: '7 Years' }
]
</script>

<template>
  <div class="about-page">
    
    <div class="content-wrapper">
      
      <!-- LEFT COLUMN: The Image -->
      <div class="visual-col">
        <div class="sticky-frame">
          <img :src="`${baseURL}JuliaPortrait.jpeg`" alt="Julia Novikova" class="portrait">
          <div class="outline-box"></div>
        </div>
      </div>

      <!-- RIGHT COLUMN: The Story -->
      <div class="text-col">
        <h4 class="overline">The Founder</h4>
        <h1 class="name-header">Julia <br><span class="serif-italic">Novikova</span></h1>
        
        <!-- TWEAK: Changed "Visual Strategist" (too corporate) to "Portrait Photographer" to cover all bases -->
        <h3 class="role-subtitle">Professional Portrait & Event Photographer</h3>

         <div class="bio-body">
          <!-- PARAGRAPH 1: The "Artist" Hook (Kept exactly as you liked it) -->
          <p class="lead-paragraph">
            I believe that the best photographs aren't forced; they are observed. 
            With an artist's eye and over a decade of experience behind the lens, 
            my approach is calm, detailed, and deeply personal.
          </p>

          <!-- PARAGRAPH 2: The "Background" (Kept, but frames experience as reliability) -->
          <p>
            My background sets me apart in the industry. Before establishing JN Studios, 
            I spent seven years in <strong>Business Development and Franchise Operations</strong>, 
            managing a high-volume commercial photography studio. Leading a large team 
            and overseeing thousands of sessions taught me the importance of 
            operational excellence, consistency, and strict quality control.
          </p>

          <!-- PARAGRAPH 3: The "Bridge" (UPDATED: Connects business skill to Weddings/Family) -->
          <p>
            I bring that same level of <strong>discipline and organization</strong> to every shoot. 
            Whether I am capturing a high-stakes corporate headshot, a chaotic wedding day, 
            or a candid family moment, I balance artistic intuition with structured execution. 
            My goal is to make the process effortless for you, ensuring the experience is 
            stress-free and the results are timeless.
          </p>

          <!-- PARAGRAPH 4: The Closing (UPDATED: Lists the specific services) -->
          <p>
            Based in <strong>Mississauga</strong> and serving the entire GTA, I specialize in 
            <strong>corporate branding, weddings, and family portraiture</strong>, helping 
            clients look their absolute best—no matter the occasion.
          </p>
        </div>

        <!-- The Stats Grid -->
        <div class="stats-grid">
          <div v-for="(stat, i) in stats" :key="i" class="stat-item">
            <span class="stat-value">{{ stat.value }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>

        <!-- Signature -->
        <div class="sign-off">
          <span class="text-sig">Julia Novikova</span>
        </div>

      </div>
    </div>

  </div>
</template>

<!-- CSS remains exactly the same -->
<style scoped>
/* Keep your existing CSS exactly as is */
.about-page {
  background-color: #fff;
  min-height: 100vh;
  padding: 100px 5%;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.8fr 1fr;
  gap: 80px;
}

/* -- LEFT COLUMN -- */
.visual-col { position: relative; }

.sticky-frame {
  position: sticky;
  top: 120px;
  padding-bottom: 50px;
}

.portrait {
  width: 100%;
  height: auto;
  display: block;
  position: relative;
  z-index: 2;
  filter: grayscale(10%) sepia(5%);
  box-shadow: 20px 20px 0px #f4f4f4;
}

.outline-box {
  position: absolute;
  top: -20px; left: -20px;
  width: 100%; height: 100%;
  border: 1px solid #C6A87C;
  z-index: 1;
}

/* -- RIGHT COLUMN -- */
.text-col { padding-top: 20px; }

.overline {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #999;
  margin-bottom: 15px;
}

.name-header {
  font-family: 'Playfair Display', serif;
  font-size: 4.5rem;
  line-height: 0.9;
  color: #1a1a1a;
  margin-bottom: 15px;
}

.serif-italic {
  font-style: italic;
  font-weight: 400;
  color: #C6A87C;
}

.role-subtitle {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 50px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

/* -- BODY TEXT -- */
.bio-body { margin-bottom: 50px; }

.lead-paragraph {
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  line-height: 1.6;
  color: #1a1a1a;
  margin-bottom: 30px;
}

p {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 25px;
  font-weight: 300;
}

strong { font-weight: 600; color: #1a1a1a; }

/* -- STATS GRID -- */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding-top: 30px;
  border-top: 1px solid #eee;
  margin-bottom: 40px;
}

.stat-value {
  display: block;
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: #C6A87C;
}

.stat-label {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #999;
}

.text-sig {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 1.5rem;
  color: #1a1a1a;
}

/* -- RESPONSIVE -- */
@media (max-width: 900px) {
  .content-wrapper { grid-template-columns: 1fr; gap: 50px; }
  .sticky-frame { position: static; max-width: 400px; margin: 0 auto; }
  .name-header { font-size: 3.5rem; }
  .stats-grid { text-align: center; }
}
</style>