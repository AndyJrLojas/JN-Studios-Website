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

    <footer>
      <p>&copy; 2025 JN Studios. Based in Mississauga, Ontario.</p>
    </footer>
  </div>
</template>

<style>
/* -- PERMANENT THEME VARIABLES -- */
:root {
  --bg-color: #ffffff;
  --text-color: #1a1a1a;       /* Soft Black */
  --nav-bg: rgba(255, 255, 255, 0.98);
  --accent: #C5A059;           /* Luxury Muted Gold */
  --border: #f0f0f0;           /* Very light gray for subtle lines */
  --gray-text: #666666;
}

/* Global Resets */
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: 'Montserrat', sans-serif;
  background-color: var(--bg-color);
  color: var(--text-color);
  -webkit-font-smoothing: antialiased; /* Makes fonts look thinner/crisper on Mac */
}

h1, h2, h3, h4 { font-family: 'Playfair Display', serif; }
a { text-decoration: none; color: inherit; transition: 0.3s; }

.app-wrapper { min-height: 100vh; display: flex; flex-direction: column; }
main { flex: 1; }

footer {
  text-align: center;
  padding: 60px 20px;
  color: var(--gray-text);
  font-size: 0.75rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-top: 1px solid var(--border);
}
/* -- THEME VARIABLES -- */
:root {
  --bg-color: #ffffff;
  --text-dark: #111111;
  --text-light: #f4f4f4;
  --gold-accent: #C6A87C; /* The specific "Mango" beige-gold */
  --font-serif: 'Playfair Display', serif;
  --font-sans: 'Montserrat', sans-serif;
}

/* Typography Classes for that "Magazine" look */
h1.hero-title {
  font-family: var(--font-serif);
  font-size: 4rem;
  line-height: 1.1;
  text-transform: uppercase;
  letter-spacing: 2px;
}

h1.hero-title .italic-accent {
  font-style: italic;
  text-transform: lowercase;
  font-weight: 400;
  font-family: var(--font-serif);
  display: block; /* Puts it on its own line */
  font-size: 3.5rem;
  margin-bottom: -10px; /* Pulls the text closer together */
  color: #e0e0e0;
}

/* The Solid Gold Button */
.btn-gold {
  background-color: var(--gold-accent);
  color: white;
  padding: 15px 35px;
  text-transform: uppercase;
  font-family: var(--font-sans);
  font-size: 0.75rem;
  letter-spacing: 2px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  margin-top: 30px;
}

.btn-gold:hover {
  background-color: #b0936a;
  transform: translateY(-2px);
}
</style>