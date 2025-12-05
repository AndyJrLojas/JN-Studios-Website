<template>
  <div class="page-container">
    <div class="about-grid">
      <div class="image-col">
        <img src="https://picsum.photos/id/338/600/800" alt="Julia Novikova">
      </div>
      <div class="text-col">
        <h1>About Julia Novikova</h1>
        <h3 class="role">Founder & Lead Photographer | JN Studios</h3>
        
        <p>
          With over 8 years of experience as a professional photographer, I operate at the intersection of 
          <strong>visual arts and business strategy</strong>. My background in marketing and franchise coordination 
          allows me to offer a unique blend of creativity and operational excellence.
        </p>
        
        <p>
          Based in <strong>Mississauga, Ontario</strong>, I specialize in helping brands tell their stories 
          and couples capture their most important moments.
        </p>

        <div class="credentials">
          <div class="cred-item">
            <h4>Education</h4>
            <p>Humber College (2012-2013)</p>
            <p>Riga Business School</p>
          </div>
          <div class="cred-item">
            <h4>Experience</h4>
            <p>JN Studios (2017 - Present)</p>
            <p>Snap Photo Studio (7+ Years)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container { padding: 80px 10%; }
.about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 50px; align-items: center; }
.image-col img { width: 100%; border-radius: 4px; filter: grayscale(20%); }
h1 { color: #D4AF37; margin-bottom: 10px; }
.role { font-weight: 300; color: #aaa; margin-bottom: 30px; letter-spacing: 1px; }
p { line-height: 1.8; margin-bottom: 20px; color: #ddd; }
.credentials { display: flex; gap: 40px; margin-top: 40px; border-top: 1px solid #333; padding-top: 20px; }
h4 { color: #fff; margin-bottom: 10px; text-transform: uppercase; font-size: 0.9rem; }
.cred-item p { margin-bottom: 5px; font-size: 0.9rem; color: #888; }

@media(max-width: 768px) { .about-grid { grid-template-columns: 1fr; } }
</style>