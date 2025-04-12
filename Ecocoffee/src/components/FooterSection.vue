<script>
  export default {
    name: "FooterSection",
  };
</script>

<template>
    <footer>
      <section aria-labelledby="contact-titre">
        <h3 id="contact-titre">Contact :</h3>
        <address>
          <p>123 Anywhere St., Any City, ST 12345</p>
          <p>Téléphone : <a href="tel:+33123456789">123-456-7890</a></p>
          <p>Email : <a href="mailto:hello@reallygreatsite.com">hello@reallygreatsite.com</a></p>
          <p>Réseaux sociaux : @reallygreatsite</p>
          <p>Visit our coffee house today!</p>
        </address>
      </section>
      <section aria-labelledby="horaires-titre">
        <h3 id="horaires-titre">Heures d'ouverture :</h3>
        <ul>
          <li><strong>Lundi–Vendredi :</strong> 9h00–17h00</li>
          <li><strong>Samedi :</strong> 10h00–14h00</li>
          <li><strong>Dimanche :</strong> Fermé</li>
        </ul>
      </section>
      <p>© 2024 par Vraiment Super Site</p>
    </footer>
</template>

<style scoped>
footer {
  background: #000000;
  background-image: url('/images/contact.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  position: relative;
  overflow: hidden; 
}

footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  z-index: 1; 
}

footer > * {
  position: relative;
  z-index: 2; 
}

address p {
  margin: 0.5rem 0;
}

a {
  color: #90EE90;
}
</style>
