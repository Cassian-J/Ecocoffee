<template>
  <nav class="header">
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
  color: #228b22;
  text-decoration: none;
  font-weight: 500;
  display: block; 
  padding: 0.5rem 1rem; 
}


.nav-links li.active a {
  border-bottom: 2px solid #228b22; 
  font-weight: bold;
}


@media (max-width: 768px) {
  .nav-links {
    flex-direction: row; 
    justify-content: space-around;
  }
}
</style>
