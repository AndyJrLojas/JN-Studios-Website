<script setup>
const config = useRuntimeConfig()
const baseURL = config.app.baseURL
</script>

<template>
  <div class="cinema-page">
    <div class="video-hero">
      <!-- Reusing your hero video here or a different one -->
      <video autoplay muted loop playsinline class="bg-video">
        <source :src="`${baseURL}hero-reel.mp4`" type="video/mp4">
      </video>
      <div class="overlay">
        <h1>Cinematography</h1>
        <p>Motion. Emotion. Memories.</p>
      </div>
    </div>

    <div class="cinema-content">
      <div class="text-block">
        <h2>Your Love in Motion</h2>
        <p>
          Photography freezes a moment, but cinematography captures the feeling. 
          The trembling in your voice during vows, the laughter during speeches, 
          and the movement of your first dance.
        </p>
        <p>
          We offer dual-coverage packages so your photo and video teams work in 
          perfect harmony.
        </p>
      </div>

      <!-- Video Examples Grid (Placeholders) -->
      <div class="video-grid">
        <div class="video-card">
           <div class="thumb">
             <img src="https://picsum.photos/id/158/800/600" alt="Wedding Film">
             <div class="play-btn">▶</div>
           </div>
           <h3>Sarah & Michael</h3>
           <span>Liberty Grand, Toronto</span>
        </div>
        <div class="video-card">
           <div class="thumb">
             <img src="https://picsum.photos/id/192/800/600" alt="Wedding Film">
             <div class="play-btn">▶</div>
           </div>
           <h3>Elena & David</h3>
           <span>Graydon Hall Manor</span>
        </div>
      </div>
      
      <div class="cta-center">
        <NuxtLink to="/galleries/weddings" class="btn-underline">View Pricing Packages</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.video-hero { position: relative; height: 60vh; overflow: hidden; display: flex; align-items: center; justify-content: center; }
.bg-video { width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0; }
.overlay { position: relative; z-index: 2; text-align: center; color: white; background: rgba(0,0,0,0.3); padding: 40px; width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: center;}
.overlay h1 { font-family: 'Playfair Display', serif; font-size: 4rem; margin-bottom: 10px; }
.overlay p { font-family: 'Montserrat', sans-serif; letter-spacing: 3px; text-transform: uppercase; font-size: 0.9rem; }

.cinema-content { padding: 80px 5%; max-width: 1000px; margin: 0 auto; }
.text-block { text-align: center; margin-bottom: 60px; max-width: 700px; margin-left: auto; margin-right: auto; }
.text-block h2 { font-family: 'Playfair Display', serif; font-size: 2.5rem; margin-bottom: 20px; color: #1a1a1a; }
.text-block p { font-family: 'Montserrat', sans-serif; font-size: 1rem; color: #666; line-height: 1.8; margin-bottom: 20px; }

.video-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-bottom: 60px; }
.video-card { cursor: pointer; }
.thumb { position: relative; overflow: hidden; margin-bottom: 15px; }
.thumb img { width: 100%; display: block; transition: 0.3s; }
.play-btn { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 3rem; opacity: 0.8; transition: 0.3s; }
.video-card:hover .thumb img { transform: scale(1.05); }
.video-card:hover .play-btn { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
.video-card h3 { font-family: 'Playfair Display', serif; font-size: 1.5rem; margin-bottom: 5px; color: #1a1a1a; }
.video-card span { font-family: 'Montserrat', sans-serif; font-size: 0.8rem; color: #888; text-transform: uppercase; }

.cta-center { text-align: center; }
.btn-underline { border-bottom: 1px solid #C6A87C; text-transform: uppercase; letter-spacing: 2px; color: #1a1a1a; padding-bottom: 5px; font-size: 0.8rem; font-weight: 600; }
@media(max-width: 768px) { .video-grid { grid-template-columns: 1fr; } .overlay h1 { font-size: 3rem; } }
</style>