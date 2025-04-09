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
        <a href="#nos-cafes" class="btn">
          Nos Cafés
          <span class="btn-icon">→</span>
        </a>
      </div>
    </header>
</template>

<style scoped>
.hero {
  background-image: url('/images/hero-background.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  color: white;
}
</style>
