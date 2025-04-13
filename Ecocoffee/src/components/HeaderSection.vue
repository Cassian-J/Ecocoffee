<template>
  <nav class="header">
    <a href="#nos-cafes" class="skip-link" aria-label="Aller directement voir les produits">Aller aux produits</a>
    <a href="#contact" class="skip-link" aria-label="Aller directement au formulaire de contact">Aller au formulaire de contact</a>

    <ul class="nav-links">
      <li :class="{ active: $route.path === '/' }">
        <router-link to="/" aria-current="page">Accueil</router-link>
      </li>
      <li :class="{ active: $route.path === '/produits' }">
        <router-link to="/produits" aria-current="page">Nos produits</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'HeaderSection'
}
</script>

<style scoped>
.skip-link {
  position: absolute;
  left: -999px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
  z-index: 1000;
  background: #000;
  color: #fff;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
}

.skip-link:focus {
  left: 1rem;
  top: 1rem;
  width: auto;
  height: auto;
}

.header {
  background: #f8f8f8;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-links {
  display: flex;
  justify-content: center; 
  gap: 2rem;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%; 
}

.nav-links li {
  text-align: center; 
}

.nav-links a {
  color: #000000;
  text-decoration: none;
  font-weight: 500;
  display: block; 
  padding: 0.5rem 1rem; 
}

.nav-links li.active a {
  border-bottom: 2px solid #000000; 
  font-weight: bold;
}

@media (max-width: 768px) {
  .nav-links {
    flex-direction: row; 
    justify-content: space-around;
  }
  .header {
    background-color: #a1c18b;
  }
}
</style>
