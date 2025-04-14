<script>
export default {
  name: 'ProductSearch',
};
</script>

<template>
  <section aria-labelledby="product-search-section">
    <h2 id="product-search-section">Recherche et filtres des produits</h2>
    <form aria-labelledby="search-form-legend">
      <fieldset>
        <legend id="search-form-legend">Rechercher un produit</legend>
        <label for="search-input">Rechercher par nom</label>
        <input 
          type="text" 
          id="search-input" 
          placeholder="Entrez un nom de produit" 
          aria-label="Rechercher par nom de produit" 
        />
      </fieldset>
    </form>
    <form aria-labelledby="filters-form-legend">
      <fieldset>
        <legend id="filters-form-legend">Filtres</legend>
        <label for="category-filter">Catégorie :</label>
        <select id="category-filter" aria-label="Filtrer par catégorie de produit">
          <option value="">Toutes les catégories</option>
          <option value="cafe-moulu">Café Moulu</option>
          <option value="cafe-grain">Café en Grains</option>
          <option value="capsules">Capsules</option>
        </select>
        <label for="price-filter">Prix :</label>
        <select id="price-filter" aria-label="Filtrer par prix">
          <option value="">Tous les prix</option>
          <option value="low-to-high">Prix croissant</option>
          <option value="high-to-low">Prix décroissant</option>
        </select>
        <label for="availability-filter">Disponibilité :</label>
        <select id="availability-filter" aria-label="Filtrer par disponibilité">
          <option value="">Toutes les disponibilités</option>
          <option value="in-stock">En stock</option>
          <option value="out-of-stock">Rupture de stock</option>
        </select>
      </fieldset>
    </form>
  </section>
</template>

<style scoped>
section {
  padding:2rem;
  background: var(--background-light);
}

h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
}

.form-style {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

fieldset {
  border: 1px solid #000000;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 600;
}

input, select {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  height: 48px;
  box-sizing: border-box;
}

input:focus, select:focus {
  border-color: #a1c18b;
  outline: none;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (max-width: 768px) {
  section {
    background-color: #a1c18b;
    color: #000000;
  }

  input,
  select {
    padding: 1rem;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  input,
  select {
    padding: 0.8rem;
    font-size: 0.9rem;
  }
}
</style>