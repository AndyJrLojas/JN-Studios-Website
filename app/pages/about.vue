<script setup>
import { onMounted } from 'vue'

const config = useRuntimeConfig()
const baseURL = config.app.baseURL

// 1. STATS DATA
const stats = [
  { label: 'Total Experience', value: '15+ Yrs' }, 
  { label: 'Portraits Taken', value: '10k+' }, 
  { label: 'Studio Management', value: '7 Years' }
]

// 2. WEDDING WIRE LOGIC
useHead({
  script: [
    { 
      src: 'https://cdn1.weddingwire.ca/js/wp-widget.js?symfnw-CA1067142-1-20251205-003_www_m_', 
      async: true, 
      defer: true 
    }
  ]
})

onMounted(() => {
  const checkWidget = setInterval(() => {
    if (window.wpShowReviews) {
      window.wpShowReviews(1580, "red");
      clearInterval(checkWidget);
    }
  }, 500);
  setTimeout(() => clearInterval(checkWidget), 5000);
})
</script>

<template>
  <div class="page-container">
    
    <!-- SECTION 1: THE FOUNDER (White Background) -->
    <section class="founder-section">
      <div class="content-wrapper">
        
        <!-- LEFT COLUMN: Image Only (Badge Removed) -->
        <div class="visual-col">
          <div class="sticky-frame">
            <img :src="`${baseURL}JuliaPortrait.jpeg`" alt="Julia Novikova" class="portrait">
            <div class="outline-box"></div>
          </div>
        </div>

        <!-- RIGHT COLUMN: Story & Stats -->
        <div class="text-col">
          <h4 class="overline">The Founder</h4>
          <h1 class="name-header">Julia <br><span class="serif-italic">Novikova</span></h1>
          <h3 class="role-subtitle">Professional Portrait & Event Photographer</h3>

           <div class="bio-body">
            <p class="lead-paragraph">
              I believe that the best photographs aren't forced; they are observed. 
              With an artist's eye and over a decade of experience behind the lens, 
              my approach is calm, detailed, and deeply personal.
            </p>

            <p>
              My background sets me apart in the industry. Before establishing JN Studios, 
              I spent seven years in <strong>Business Development and Franchise Operations</strong>, 
              managing a high-volume commercial photography studio. Leading a large team 
              and overseeing thousands of sessions taught me the importance of 
              operational excellence, consistency, and strict quality control.
            </p>

            <p>
              I bring that same level of <strong>discipline and organization</strong> to every shoot. 
              Whether I am capturing a high-stakes corporate headshot, a chaotic wedding day, 
              or a candid family moment, I balance artistic intuition with structured execution. 
              My goal is to make the process effortless for you, ensuring the experience is 
              stress-free and the results are timeless.
            </p>

            <p>
              Based in <strong>Mississauga</strong> and serving the entire GTA, I specialize in 
              <strong>corporate branding, weddings, and family portraiture</strong>, helping 
              clients look their absolute best—no matter the occasion.
            </p>
          </div>

          <!-- UPDATED: Stats Grid + Badge -->
          <div class="stats-container">

            <!-- Added: Badge as the 4th item -->
            <div class="stat-badge-wrapper">
               <a href="https://www.bestforbride.com/bridal-shop/15/top-wedding-photographers-in-toronto-and-gta/" target="_blank">
                  <img :src="`${baseURL}bestforbride.png`" alt="Best For Bride Award" class="badge-img">
               </a>
            </div>
            
            <!-- Loop through text stats -->
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
    </section>

    <!-- SECTION 2: THE TEAM -->
    <section class="team-section">
      <div class="team-content">
        <h4 class="overline-center">Team & Expertise</h4>
        <h2 class="section-title">The JN Studios <span class="gold-italic">Collective</span></h2>
        
        <div class="team-text-block">
          <p>
            Photography is an art, but covering a large-scale event is a logistical feat. 
            While Julia personally oversees the creative direction and client experience of every project, 
            <strong>we do not work alone.</strong>
          </p>
          <p>
            For comprehensive wedding packages, cinema productions, and large corporate mandates, 
            we deploy a trusted team of senior associate photographers and cinematographers. 
            These professionals are vetted for their skill, professionalism, and ability to 
            execute the JN Studios aesthetic flawlessly.
          </p>
          <p>
            This allows us to be in two places at once—capturing the groom’s reaction while 
            simultaneously photographing the bride’s procession—ensuring no moment is missed.
          </p>
        </div>
      </div>
    </section>

    <!-- SECTION 3: REVIEWS -->
    <section class="reviews-section">
      <div class="reviews-wrapper">
         <div id="wp-widget-reviews">
            <div id="wp-widget-preview">
                Read <a href="https://www.weddingwire.ca/wedding-photography/jn-studios--e1580/reviews" rel="nofollow">View reviews:</a> in &nbsp;
                <a href='https://www.weddingwire.ca' rel="nofollow">
                    <img src="https://cdn1.weddingwire.ca/assets/img/logos/gen_logoHeader.svg" height="20" alt="WeddingWire">
                </a>
            </div>
          </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* PAGE STRUCTURE */
.page-container { width: 100%; }

/* --- SECTION 1: FOUNDER --- */
.founder-section { background-color: #fff; padding: 100px 5%; }
.content-wrapper { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 0.8fr 1fr; gap: 80px; }

/* Founder: Left Col */
.visual-col { position: relative; }
.sticky-frame { position: sticky; top: 120px; padding-bottom: 50px; }
.portrait { width: 100%; height: auto; display: block; position: relative; z-index: 2; filter: grayscale(10%) sepia(5%); box-shadow: 20px 20px 0px #f4f4f4; }
.outline-box { position: absolute; top: -20px; left: -20px; width: 100%; height: 100%; border: 1px solid #C6A87C; z-index: 1; }

/* Founder: Right Col */
.text-col { padding-top: 20px; }
.overline { font-family: 'Montserrat', sans-serif; font-size: 0.75rem; letter-spacing: 3px; text-transform: uppercase; color: #999; margin-bottom: 15px; }
.name-header { font-family: 'Playfair Display', serif; font-size: 4.5rem; line-height: 0.9; color: #1a1a1a; margin-bottom: 15px; }
.serif-italic { font-style: italic; font-weight: 400; color: #C6A87C; }
.role-subtitle { font-family: 'Montserrat', sans-serif; font-weight: 400; font-size: 1.1rem; color: #666; margin-bottom: 50px; padding-bottom: 20px; border-bottom: 1px solid #eee; }

/* Bio Text */
.bio-body { margin-bottom: 50px; }
.lead-paragraph { font-family: 'Playfair Display', serif; font-size: 1.4rem; line-height: 1.6; color: #1a1a1a; margin-bottom: 30px; }
p { font-family: 'Montserrat', sans-serif; font-size: 1rem; line-height: 1.8; color: #555; margin-bottom: 25px; font-weight: 300; }
strong { font-weight: 600; color: #1a1a1a; }

/* --- UPDATED STATS SECTION CSS --- */
.stats-container {
  display: flex; /* Use flex instead of grid for mixed content */
  justify-content: space-between;
  align-items: center; /* Vertically center the badge with the numbers */
  flex-wrap: wrap; /* Allow wrapping on small screens */
  gap: 30px;
  padding-top: 30px;
  border-top: 1px solid #eee;
  margin-bottom: 40px;
}

.stat-item {
  flex: 1; /* Stats take up equal space */
  min-width: 100px;
}

.stat-value { display: block; font-family: 'Playfair Display', serif; font-size: 2rem; color: #C6A87C; }
.stat-label { font-family: 'Montserrat', sans-serif; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1px; color: #999; }

/* Badge specific styling */
.stat-badge-wrapper {
  flex: 0 0 auto; /* Don't stretch the badge */
}

.badge-img {
  width: 90px; /* Adjusted to look balanced next to text stats */
  height: auto;
  transition: transform 0.3s ease;
}

.badge-img:hover {
  transform: scale(1.1);
}

.text-sig { font-family: 'Playfair Display', serif; font-style: italic; font-size: 1.5rem; color: #1a1a1a; }

/* --- REST OF CSS --- */
.team-section { background-color: #f9f9f9; padding: 100px 5%; text-align: center; border-top: 1px solid #f0f0f0; }
.team-content { max-width: 800px; margin: 0 auto; }
.overline-center { font-family: 'Montserrat', sans-serif; font-size: 0.75rem; letter-spacing: 3px; text-transform: uppercase; color: #999; margin-bottom: 15px; }
.section-title { font-family: 'Playfair Display', serif; font-size: 3rem; color: #1a1a1a; margin-bottom: 40px; }
.gold-italic { color: #C6A87C; font-style: italic; }
.team-text-block p { font-size: 1.05rem; color: #444; margin-bottom: 25px; }
.reviews-section { background-color: #fff; padding: 80px 5%; border-top: 1px solid #f0f0f0; }
.reviews-wrapper { max-width: 1000px; margin: 0 auto; min-height: 200px; }

/* RESPONSIVE */
@media (max-width: 900px) {
  .content-wrapper { grid-template-columns: 1fr; gap: 50px; }
  .sticky-frame { position: static; max-width: 400px; margin: 0 auto; }
  .name-header { font-size: 3.5rem; }
  
  /* Stack stats on mobile */
  .stats-container { justify-content: flex-start; gap: 40px; }
  .stat-badge-wrapper { width: 100%; text-align: left; } /* Move badge to its own line on tiny screens if needed */
  
  .section-title { font-size: 2.5rem; }
}
</style>