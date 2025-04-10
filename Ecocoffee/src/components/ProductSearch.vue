<script>
export default {
  name: 'ProductSearch',
};
</script>

<template>
    <section aria-labelledby="product-search-section">
      <h2 id="product-search-section">Recherche et filtres des produits</h2>
      <form aria-labelledby="product-search-bar">
        <fieldset>
          <legend>Rechercher un produit</legend>
          <label for="search-input">Rechercher par nom</label>
          <input type="text" id="search-input" placeholder="Entrez un nom de produit" aria-label="Rechercher par nom de produit"/>
        </fieldset>
      </form>
      <form aria-labelledby="product-filters">
        <fieldset>
          <legend>Filtres</legend>
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

  