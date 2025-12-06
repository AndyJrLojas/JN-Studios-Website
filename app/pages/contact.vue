<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  source: '',
  type: 'Wedding Photography',
  message: ''
})

const submitForm = () => { 
  // In a real app, you would send formData to a backend here
  console.log(formData.value)
  alert("Inquiry Sent! (Demo Only)") 
}
</script>

<template>
  <div class="contact-page">
    
    <!-- LEFT COLUMN: Visual & Status -->
    <div class="visual-col">
      <img src="https://picsum.photos/id/250/900/1200" alt="Camera Detail" class="cover-img">
      <div class="overlay-text">
        <span>Now Booking</span>
        <h3>2025 & 2026</h3>
      </div>
    </div>

    <!-- RIGHT COLUMN: Form -->
    <div class="form-col">
      <div class="form-content">
        <h4 class="sub-head">Start the Conversation</h4>
        <h1 class="main-head">Let's Create <span class="italic-accent">Magic.</span></h1>
        
        <form @submit.prevent="submitForm">
          
          <!-- Name -->
          <div class="input-group">
            <label>Name</label>
            <input v-model="formData.name" type="text" placeholder="Your full name" required />
          </div>

          <!-- Email -->
          <div class="input-group">
            <label>Email Address</label>
            <input v-model="formData.email" type="email" placeholder="you@example.com" required />
          </div>

          <!-- ROW: Source & Type -->
          <div class="row">

            <!-- Inquiry Type -->
            <div class="input-group">
              <label>Inquiry Type</label>
              <select v-model="formData.type">
                <option>Wedding Photography</option>
                <option>Wedding Cinema</option>
                <option>Corporate / Headshots</option>
                <option>Family Session</option>
                <option>Other Project</option>
              </select>
            </div>
            <!-- NEW: How did you hear about us? -->
            <div class="input-group">
              <label>How did you hear about us?</label>
              <select v-model="formData.source" required>
                <option value="" disabled selected>Select an option</option>
                <option>Google Search</option>
                <option>Instagram</option>
                <option>WeddingWire</option>
                <option>BestForBride</option>
                <option>Referral / Friend</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <!-- Message -->
          <div class="input-group">
            <label>Tell me about your vision</label>
            <textarea v-model="formData.message" rows="4" placeholder="Venue details, date, vibes, or specific ideas..."></textarea>
          </div>

          <button type="submit" class="btn-gold">Send Inquiry</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-page { 
  display: flex; 
  min-height: 100vh; 
}

/* --- Left Visual Side --- */
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
  filter: grayscale(20%); 
  transition: transform 10s ease;
}

/* Subtle Zoom Effect */
.visual-col:hover .cover-img {
  transform: scale(1.05);
}

.overlay-text { 
  position: absolute; 
  bottom: 50px; 
  left: 50px; 
  color: white; 
  text-shadow: 0 2px 10px rgba(0,0,0,0.3); 
  z-index: 2;
}

.overlay-text span { 
  font-family: 'Montserrat', sans-serif; 
  text-transform: uppercase; 
  letter-spacing: 3px; 
  font-size: 0.8rem; 
  display: block;
  margin-bottom: 5px;
}

.overlay-text h3 { 
  font-family: 'Playfair Display', serif; 
  font-size: 3rem; 
  margin: 0;
}

/* --- Right Form Side --- */
.form-col { 
  flex: 1.2; 
  background: #ffffff; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  padding: 80px 60px; 
}

.form-content { 
  width: 100%; 
  max-width: 600px; 
}

.sub-head { 
  color: #C6A87C; 
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
  margin-bottom: 40px; 
}

.italic-accent { 
  font-style: italic; 
  font-weight: 400; 
  color: #666; 
}

/* Form Inputs */
.input-group { 
  margin-bottom: 35px; 
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

input, textarea, select { 
  width: 100%; 
  border: none; 
  border-bottom: 1px solid #e0e0e0; 
  padding: 10px 0; 
  font-family: 'Playfair Display', serif; 
  font-size: 1.1rem; 
  color: #1a1a1a; 
  background: transparent; 
  outline: none; 
  border-radius: 0; /* Resets iOS default styles */
}

input::placeholder, textarea::placeholder {
  color: #d1d1d1;
}

input:focus, textarea:focus, select:focus { 
  border-bottom: 1px solid #C6A87C; 
}

/* Button */
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
  width: 100%; 
  transition: background-color 0.3s;
}

.btn-gold:hover { 
  background-color: #b0936a; 
}

/* Responsive */
@media (max-width: 900px) { 
  .contact-page { flex-direction: column; } 
  .visual-col { height: 300px; flex: none; } 
  .form-col { padding: 60px 20px; } 
  .main-head { font-size: 2.5rem; }
  .row { grid-template-columns: 1fr; gap: 0; } 
}
</style>