<script>
import HeaderSection from "@components/HeaderSection.vue";
import HeroSection from '@components/HeroSection.vue';
import ProductCard from "@components/ProductCard.vue";
import TestimonialCard from "@components/TestimonialCard.vue";
import ContactForm from '@components/ContactForm.vue';
import FooterSection from "@components/FooterSection.vue";

export default {
  name: "App",
  components: {
    HeaderSection,
    HeroSection,
    ProductCard,
    TestimonialCard,
    ContactForm,
    FooterSection,
  },
  data() {
    return {
      products: [
        {
          name: "Café en grains 100% Arabica",
          description: "Arômes riches et subtils pour une dégustation parfaite.",
          image: "/images/cafe-grain.jpg",
          width: 300,
          height: 300
        },
        {
          name: "Café moulu bio",
          description: "Idéal pour les amateurs de café respectueux de l'environnement.",
          image: "/images/cafe-moulu.jpg",
          width: 300,
          height: 300
        },
        {
          name: "Capsules biodégradables",
          description: "Compatibles avec vos machines, elles allient praticité et éthique.",
          image: "/images/capsules.jpg",
          width: 300,
          height: 300
        },
      ],
      testimonials: [
        {
          text: "Un café savoureux avec une démarche éthique, je ne peux plus m'en passer !",
          name: "Sophie Coffee",
          image: "/images/customers/sophie.jpg",
          width: 100,
          height: 100
        },
        {
          text: "Enfin un café qui respecte à la fois l'environnement et les producteurs !",
          name: "Chloé Café",
          image: "/images/customers/chloe.jpg",
          width: 100,
          height: 100
        },
        {
          text: "Livraison rapide et un goût incomparable. Bravo Café Équitable !",
          name: "Gauthier Chicorée",
          image: "/images/customers/gauthier.jpg",
          width: 100,
          height: 100
        },
      ],
    };
  },
};
</script>

<template>
  <main lang="fr" aria-current="Accueil">
    <HeaderSection />
    <HeroSection />
    <section class="valeur-et-engagement" aria-labelledby="valeurs-titre">
      <h2 id="valeurs-titre">Nos valeurs et notre engagement :</h2>
      <section class="valeurs-layout">
        <article class="valeurs-text">
          <p>
            Chez Ecocoffee, nous croyons en un commerce respectueux des producteurs,
            des consommateurs et de l'environnement.
          </p>
          <p>
            Nous nous engageons à offrir un café d'exception, cultivé selon des
            pratiques durables et équitables.
          </p>
          <p>
            Chaque grain de café provient de coopératives certifiées, garantissant
            une juste rémunération aux agriculteurs et une culture respectueuse de
            la biodiversité.
          </p>
        </article>
        <article class="valeurs-image">
          <img class="decoration-valeur" src="/images/before-products.jpg" alt="" aria-hidden="true" role="img" />
        </article>
      </section>
    </section>
    <section id="nos-cafes" aria-labelledby="produits-titre">
      <h2 id="produits-titre">Nos produits phares :</h2>
      <ul class="product-list">
        <li v-for="product in products" :key="product.name">
          <ProductCard
            :name="product.name"
            :description="product.description"
            :image="product.image"
            :alt="product.alt"
            :width="product.width"
            :height="product.height"
          />
        </li>
      </ul>
      <img src="/images/separate.jpg" alt="" aria-hidden="true" role="img" class="separate"/>
    </section>
    <section aria-labelledby="avis-titre">
      <h2 id="avis-titre">Avis clients :</h2>
      <ul>
        <li v-for="testimonial in testimonials" :key="testimonial.name">
          <TestimonialCard
            :text="testimonial.text"
            :name="testimonial.name"
            :image="testimonial.image"
            :alt="testimonial.alt"
            :width="testimonial.width"
            :height="testimonial.height"
          />
        </li>
      </ul>
    </section>
    <ContactForm />
    <FooterSection />
  </main>
</template>

<style scoped>
/*global part*/
main {
  max-width: 1200px;
  margin: 0 auto;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; 
}
body {
  margin: 0; 
  padding: 0; 
}

/*avis*/
section[aria-labelledby="avis-titre"] {
  background-color: #eee3db;
  padding: 2rem;
  text-align: center;
  h2{
    text-align: center;
    margin-bottom: 2rem;
    font-size: 1.8rem;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0 auto;
  }
  
}

/*valeur et engagement*/
section[aria-labelledby="valeurs-titre"] {
  padding: 2rem;
  text-align: center;

  margin: 0;
}
.valeurs-layout {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem; 
}

/* Nos produits phares */
#nos-cafes {
  background-color:#eee3db;
  position: relative;
  overflow: hidden;
  text-align: center;
  padding-top:3%;
}
#produits-titre {
  margin-bottom: 2rem;
}
.separate {
    width: 100%;
    height: auto; 
    display: block;
    margin: 0; 
    padding: 0; 
    object-fit: cover; 
    box-sizing: border-box;
  }
  
.product-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 0;
  padding: 0;
  margin: 0;
  list-style: none;
}

.product-list li {
  margin-right: 2rem;
  flex: 0 0 auto; 
  width: 300px; 
  display: flex;
  justify-content: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}


@media screen and (max-width: 768px) {
  #nos-cafes {
    background: #a1c18b;
    color: #000000;
  }
  section[aria-labelledby="avis-titre"] {
    background: #a1c18b;
    color: #000000;
  }
  .separate {
    width: 100%;
    height: auto; 
    display: block;
    margin: 0; 
    padding: 0; 
    object-fit: cover; 
    box-sizing: border-box;
  }
  
  
  .grid {
    grid-template-columns: 1fr;
  }

  .product-list {
    flex-direction: column; 
    align-items: center; 
    grid-template-columns: 1fr;
  }

  .product-list li {
    margin-bottom: 2rem;
    margin-right: 0;
    width: 100%; 
  }
  .valeurs-layout {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  section[aria-labelledby="valeurs-titre"] {
    background: #a1c18b;
    color: #000000;
  }
  .valeurs-text {
    max-width: 100%;
  }

  .valeurs-image {
    max-width: 100%;
    margin-top: 1rem;
  }

  .decoration-valeur {
    width: 100%;
    height: auto;
  }
  main{
    background:#a1c18b;
  }
}
@media screen and (min-width: 769px) {
  .valeurs-layout {
    flex-direction: row;
    text-align: left; 
    margin-left:2rem;
  }
  section[aria-labelledby="valeurs-titre"] {
    background: var(--background-light);
  }
  .valeurs-text {
    flex: 1;
  }

  .valeurs-image {
    flex: 1; 
  }

  .decoration-valeur {
    width: 75%;
    height: auto;
  }
}
</style>
