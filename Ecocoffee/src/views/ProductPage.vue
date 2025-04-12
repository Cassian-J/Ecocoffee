<script>
import HeaderSection from '@components/HeaderSection.vue';
import HeroSection from '@components/HeroSection.vue';
import ProductSearch from '@components/ProductSearch.vue';
import ProductCard from '@components/ProductCard.vue';
import ContactForm from '@components/ContactForm.vue';
import FooterSection from '@components/FooterSection.vue';

export default {
  name: 'ProductPage',
  components: {
    HeaderSection,
    HeroSection,
    ProductSearch,
    ProductCard,
    ContactForm,
    FooterSection
  },
  data() {
    return {
      products: [
        {
          name: "Café Moulu Sélection Pur Arabica Bio (250 g)",
          description: "Une sélection premium de grains d'arabica biologiques pour un café riche en saveurs.",
          price: "5.40€",
          image: "/images/products/cafe-moulu-selection.jpg",
          width: 100,
          height: 100
        },
        {
          name: "Café Moulu Guatemala Pur Arabica Bio Équitable (250 g)",
          description: "Café aux notes chocolatées et fruitées des montagnes du Guatemala.",
          price: "7.40€",
          image: "/images/products/cafe-moulu-guatemala.jpg",
          width: 100,
          height: 100
        },
        {
          name: "Café Moulu Honduras Pur Arabica Bio Équitable (250 g)",
          description: "Café doux et léger aux notes de caramel et de noisette.",
          price: "6.40€",
          image: "/images/products/cafe-moulu-honduras.jpg",
          width: 100,
          height: 100
        },
        {
          name: "Café Moulu Colombie Pur Arabica Bio Équitable (250 g)",
          description: "Café équilibré aux notes d'agrumes et de fruits rouges de Colombie.",
          price: "7€",
          image: "/images/products/cafe-moulu-colombie.jpg",
          width: 100,
          height: 100
        },
        {
          name: "Café Moulu Mexique Pur Arabica Bio Équitable (250 g)",
          description: "Café corsé aux notes épicées et boisées du Mexique.",
          price: "6.30€",
          image: "/images/products/cafe-moulu-mexique.jpg",
          width: 100,
          height: 100
        },
        {
          name: "Café Moulu Décaféiné Pur Arabica Bio (250 g)",
          description: "Tout le goût d'un excellent café sans caféine, décaféiné naturellement.",
          price: "6.40€",
          image: "/images/products/cafe-moulu-deca.jpg",
          width: 100,
          height: 100
        }
      ]
    }
  }
}
</script>

<template>
  <main lang="fr" aria-current="Nos produits">
    <HeaderSection />
    <HeroSection />
    <ProductSearch />
    <section aria-labelledby="produits-titre">
      <h2 id="produits-titre">Nos produits :</h2>
      <ul>
        <li v-for="product in products" :key="product.name">
          <ProductCard
            :name="product.name"
            :description="product.description"
            :price="product.price"
            :image="product.image"
          />
        </li>
      </ul>
    </section>
    <ContactForm />
    <FooterSection />
  </main>
</template>

<style scoped>
main {
  max-width: 1200px;
  margin: 0 auto;
}
section[aria-labelledby="produits-titre"]{
  background: #eee3db;
  padding:1rem;
}
h2#produits-titre {
  text-align: center;
  font-size: 2rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  padding: 2rem;
  list-style: none;
}

@media (max-width: 1024px) {
  ul {
    grid-template-columns: repeat(2, 1fr); /* 2 produits par ligne sur tablette */
  }
}

@media (max-width: 768px) {
  section[aria-labelledby="produits-titre"]{
    background: #a1c18b;
  }
  h2#produits-titre{
    color: #000000;
  }
  ul {
    grid-template-columns: 1fr; /* 1 produit par ligne sur mobile */
    padding: 1rem;
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
