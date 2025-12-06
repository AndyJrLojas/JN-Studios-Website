<script setup>
// Mock Blog Data
const posts = [
  { title: "Winter Wedding at The Arlington", category: "Weddings", img: "https://picsum.photos/id/103/600/800" },
  { title: "Top 5 Tips for Headshots", category: "Tips", img: "https://picsum.photos/id/64/600/400" },
  { title: "Romantic Golden Hour Session", category: "Engagements", img: "https://picsum.photos/id/331/600/700" },
  { title: "Why You Need a Second Shooter", category: "Advice", img: "https://picsum.photos/id/180/600/500" },
  { title: "Elegant Black Tie Affair", category: "Weddings", img: "https://picsum.photos/id/250/600/800" },
  { title: "Studio Lighting 101", category: "Behind the Scenes", img: "https://picsum.photos/id/342/600/400" },
]
</script>

<template>
  <div class="blog-page">
    <div class="blog-header">
      <h1>The Journal</h1>
      <p>Stories, Tips, and Real Weddings.</p>
    </div>

    <!-- MASONRY LAYOUT -->
    <div class="masonry-grid">
      <div v-for="(post, index) in posts" :key="index" class="blog-card">
        <img :src="post.img" :alt="post.title">
        <div class="card-info">
          <span class="cat">{{ post.category }}</span>
          <h3>{{ post.title }}</h3>
          <span class="read-more">Read Story &rarr;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blog-page { padding: 80px 5%; max-width: 1400px; margin: 0 auto; }
.blog-header { text-align: center; margin-bottom: 60px; }
.blog-header h1 { font-family: 'Playfair Display', serif; font-size: 3.5rem; color: #1a1a1a; margin-bottom: 10px; }
.blog-header p { font-family: 'Montserrat', sans-serif; color: #666; letter-spacing: 1px; }

/* The Masonry Magic */
.masonry-grid {
  column-count: 3;
  column-gap: 30px;
}

.blog-card {
  break-inside: avoid; /* Prevents card from being cut in half */
  margin-bottom: 30px;
  background: white;
  transition: transform 0.3s ease;
}
.blog-card:hover { transform: translateY(-5px); }

.blog-card img { width: 100%; display: block; border-radius: 2px; }
.card-info { padding: 20px 0; text-align: center; }

.cat { font-family: 'Montserrat', sans-serif; font-size: 0.65rem; text-transform: uppercase; letter-spacing: 2px; color: #C6A87C; display: block; margin-bottom: 10px; font-weight: 600; }
.blog-card h3 { font-family: 'Playfair Display', serif; font-size: 1.4rem; color: #1a1a1a; margin-bottom: 10px; line-height: 1.2; }
.read-more { font-family: 'Montserrat', sans-serif; font-size: 0.75rem; color: #999; border-bottom: 1px solid #eee; transition: 0.3s; }
.blog-card:hover .read-more { color: #1a1a1a; border-color: #C6A87C; }

@media (max-width: 900px) { .masonry-grid { column-count: 2; } }
@media (max-width: 600px) { .masonry-grid { column-count: 1; } }
</style>