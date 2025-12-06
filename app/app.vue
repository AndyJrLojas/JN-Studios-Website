<script setup>
useHead({
  title: 'JN Studios | Julia Novikova',
  link: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Montserrat:wght@300;400;500&display=swap' }
  ]
})
</script>

<template>
  <div class="app-wrapper">
    <TheNavBar />
    
    <main>
      <NuxtPage />
    </main>

    <!-- REPLACE THE OLD FOOTER HTML WITH THIS COMPONENT -->
    <TheFooter />
    
  </div>
</template>

<style>
/* -- PERMANENT THEME VARIABLES -- */
:root {
  --bg-color: #ffffff;
  --text-color: #1a1a1a;       
  --nav-bg: rgba(255, 255, 255, 0.98);
  --accent: #C5A059;           
  --border: #f0f0f0;           
  --gray-text: #666666;
}

/* Global Resets */
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: 'Montserrat', sans-serif;
  background-color: var(--bg-color);
  color: var(--text-color);
  -webkit-font-smoothing: antialiased; 
}

h1, h2, h3, h4 { font-family: 'Playfair Display', serif; }
a { text-decoration: none; color: inherit; transition: 0.3s; }

.app-wrapper { min-height: 100vh; display: flex; flex-direction: column; }
main { flex: 1; }

/* NOTE: You can remove the old 'footer' CSS block from here 
   since the styles are now scoped inside TheFooter.vue */
</style>