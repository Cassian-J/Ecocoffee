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
  color: #FFFFFF;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  height: auto;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 2rem;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-title {
  align-self: center;
  display: inline-block;
  font-size: 3.5rem;
  margin: 0;
  color: #FFFFFF;
  background-color:#000000;
  padding: 0.4rem 0.8rem;
  border-radius: 1rem;
  line-height: 1;
}
.hero-subtitle{
  margin-top:2rem;
  background-color:#000000;
  padding: 0rem 0.2rem;
  border-radius: 5px;
}
.hero-tagline {
  align-self: center;
  background-color: #000000;
  padding: 0 0.3rem;
  border-radius: 5px;
  line-height: 1.2;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
}
</style>

