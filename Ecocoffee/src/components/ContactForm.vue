<script>
  export default {
    name: "ContactForm",
  };
</script>

<template>
    <section aria-labelledby="contact-form-titre">
      <h2 id="contact-form-titre">Nous contacter</h2>
      <form action="#" method="POST">
        <fieldset>
          <legend class="sr-only">Informations de contact</legend>
          <label for="name">Nom :</label>
          <input type="text" id="name" name="name" placeholder="Entrez votre nom" required autocomplete="name" aria-live="polite"/>
        </fieldset>
        <fieldset>
          <legend class="sr-only">Email</legend>
          <label for="email">Email :</label>
          <input type="email" id="email" name="email" placeholder="Entrez votre email" required autocomplete="email" aria-live="polite"/>
        </fieldset>
        <fieldset>
          <legend class="sr-only">Message</legend>
          <label for="message">Message :</label>
          <textarea id="message" name="message" placeholder="Entrez votre message" required aria-live="polite"></textarea>
        </fieldset>
        <button type="submit">Envoyer</button>
      </form>
    </section>
</template>

<style scoped>
.contact-form {
  background: var(--background-light);
  padding: 2rem;
  margin: 2rem auto;
  max-width: 600px;
  border-radius: 8px;
}

.form-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--secondary-color);
  font-weight: 500;
}

input, textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #228B22;
  border-radius: 4px;
  background: white;
}

button {
  background: var(--primary-color);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.3s;
}

button:hover {
  opacity: 0.9;
}

@media (max-width: 480px) {
  .contact-form {
    padding: 1rem;
  }
}
</style>
