<template>
  <div class="contact-page">
    
    <!-- Left Side: The Mood -->
    <div class="visual-col">
      <img src="https://picsum.photos/id/250/900/1200" alt="Camera Detail" class="cover-img">
      <div class="overlay-text">
        <span>Now Booking</span>
        <h3>2025 & 2026</h3>
      </div>
    </div>

    <!-- Right Side: The Inquiry -->
    <div class="form-col">
      <div class="form-content">
        <h4 class="sub-head">Start the Conversation</h4>
        <h1 class="main-head">Let's Create <span class="italic-accent">Magic.</span></h1>
        
        <p class="intro-text">
          Whether you are planning a wedding in the GTA or refining your corporate brand identity, 
          I’d love to hear your story. Please fill out the form below.
        </p>

        <form @submit.prevent="submitForm">
          <div class="input-group">
            <label>Name</label>
            <input type="text" placeholder="Your full name" required />
          </div>

          <div class="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="you@example.com" required />
          </div>

          <div class="row">
            <div class="input-group">
              <label>Event Date (Optional)</label>
              <input type="text" placeholder="MM/DD/YYYY" />
            </div>
            <div class="input-group">
              <label>Inquiry Type</label>
              <select>
                <option>Wedding Photography</option>
                <option>Corporate Branding</option>
                <option>Family Session</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div class="input-group">
            <label>Tell me about your vision</label>
            <textarea rows="4" placeholder="Venue details, vibes, or specific ideas..."></textarea>
          </div>

          <button type="submit" class="btn-gold">Send Inquiry</button>
        </form>

        <div class="direct-contact">
          <p>Prefer email? <a href="mailto:julia@jnstudios.demo">julia@jnstudios.demo</a></p>
          <p class="location">Based in Mississauga, ON • Available Worldwide</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
const submitForm = () => {
  alert("This is a demo form. In a real app, this would send data to your backend!");
}
</script>

<style scoped>
/* -- LAYOUT -- */
.contact-page {
  display: flex;
  min-height: 100vh;
}

/* -- LEFT COLUMN (VISUAL) -- */
.visual-col {
  flex: 1;
  position: relative;
  background-color: #f4f4f4;
  overflow: hidden;
}

.cover-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(20%); /* Slight mute for elegance */
}

.overlay-text {
  position: absolute;
  bottom: 50px;
  left: 50px;
  color: white;
  text-shadow: 0 2px 10px rgba(0,0,0,0.3);
}

.overlay-text span {
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 0.8rem;
}

.overlay-text h3 {
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  margin-top: 5px;
}

/* -- RIGHT COLUMN (FORM) -- */
.form-col {
  flex: 1.2; /* Slightly wider than the image */
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 60px;
}

.form-content {
  width: 100%;
  max-width: 550px;
}

/* -- TYPOGRAPHY -- */
.sub-head {
  color: #C6A87C; /* Your Gold Accent */
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.75rem;
  margin-bottom: 15px;
  font-weight: 600;
}

.main-head {
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  line-height: 1;
  color: #1a1a1a;
  margin-bottom: 30px;
}

.italic-accent {
  font-style: italic;
  font-weight: 400;
  color: #666; /* Softer contrast for the accent word */
}

.intro-text {
  color: #666;
  line-height: 1.6;
  margin-bottom: 50px;
  font-size: 0.95rem;
}

/* -- FORM STYLING -- */
.input-group {
  margin-bottom: 35px;
  position: relative;
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

label {
  display: block;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #999;
  margin-bottom: 10px;
}

/* The Luxury Input Style: No Box, Just a Line */
input, textarea, select {
  width: 100%;
  border: none;
  border-bottom: 1px solid #e0e0e0; /* Very light gray line */
  padding: 10px 0;
  font-family: 'Playfair Display', serif; /* Serif inputs feel expensive */
  font-size: 1.1rem;
  color: #1a1a1a;
  background: transparent;
  transition: border-color 0.3s ease;
  outline: none;
}

select {
  border-radius: 0;
  cursor: pointer;
}

/* Active State: The Gold Glow */
input:focus, textarea:focus, select:focus {
  border-bottom: 1px solid #C6A87C;
}

/* Placeholder styling */
::placeholder {
  color: #ccc;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  font-style: normal;
}

/* -- BUTTON -- */
.btn-gold {
  background-color: #C6A87C;
  color: white;
  padding: 18px 45px;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  letter-spacing: 2px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%; /* Full width button */
}

.btn-gold:hover {
  background-color: #b0936a;
}

/* -- FOOTER DETAILS -- */
.direct-contact {
  margin-top: 50px;
  text-align: center;
  border-top: 1px solid #f0f0f0;
  padding-top: 30px;
}

.direct-contact p {
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 5px;
}

.direct-contact a {
  color: #1a1a1a;
  text-decoration: none;
  border-bottom: 1px solid #C6A87C;
}

.location {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 15px;
}

/* -- RESPONSIVE -- */
@media (max-width: 900px) {
  .contact-page { flex-direction: column; }
  .visual-col { height: 300px; flex: none; }
  .form-col { padding: 50px 20px; }
  .row { grid-template-columns: 1fr; gap: 0; }
  .main-head { font-size: 2.5rem; }
}
</style>