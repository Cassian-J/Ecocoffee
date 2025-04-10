<script>
  export default {
    name: 'HeroSection'
  }
</script>

<template>
    <header class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <p class="hero-tagline">Du café chaud et écolo !</p>
        <h1 class="hero-title">Ecocoffee</h1>
        <p class="hero-subtitle">Café issu du commerce équitable et écoresponsable !</p>
      </div>
    </header>
</template>

<style scoped>
.hero {
  position: relative;
  background-image: url('/images/hero-background.jpg');
  background-size: cover;
  background-position: center;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2F4F4F;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 2rem;
  max-width: 800px;
}

.hero-title {
  font-size: 3.5rem;
  margin: 1rem 0;
  color: #228B22;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
}
</style>

