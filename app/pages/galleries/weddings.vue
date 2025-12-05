<script setup>
const images = [
  'https://picsum.photos/id/65/600/800', 
  'https://picsum.photos/id/319/600/400', 
  'https://picsum.photos/id/331/600/600', 
  'https://picsum.photos/id/823/600/800', 
  'https://picsum.photos/id/1011/600/400', 
  'https://picsum.photos/id/1027/600/800'  
]
</script>

<template>
  <div class="gallery-page">
    <div class="header">
      <h1>Weddings & Events</h1>
      <p>Capturing love and celebration.</p>
      <p style="color: #D4AF37; font-weight: bold; margin-top:10px;">Now booking 2025 & 2026 weddings!</p>
    </div>
    <div class="grid">
      <div v-for="(img, index) in images" :key="index" class="item">
        <img :src="img" loading="lazy" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.gallery-page { padding: 60px 40px; }
.header { text-align: center; margin-bottom: 50px; }
.header h1 { font-family: 'Playfair Display', serif; font-size: 3rem; margin-bottom: 10px; }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
.item img { width: 100%; height: 400px; object-fit: cover; transition: 0.3s; }
.item img:hover { transform: scale(1.02); }
</style>