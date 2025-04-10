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
  