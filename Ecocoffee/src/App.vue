<script>
export default {
  name: 'Ecocoffee',
}
</script>

<template>
  <router-view />
</template>

<style>
:root {
  --primary-color: #228B22;
  --secondary-color: #2F4F4F;
  --background-light: #F8F8F8;
}

body {
  margin: 0; 
  font-family: 'Segoe UI', system-ui, sans-serif;
  line-height: 1.6;
  color: var(--secondary-color);
  width: 100vw; 
  overflow-x: hidden; 
}

#app {
  width: 100%; 
  overflow: hidden;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
</style>