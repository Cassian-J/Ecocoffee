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
  section[aria-labelledby="contact-form-titre"]{
    padding:2rem;
    background: var(--background-light);
  }
  section[aria-labelledby="contact-form-titre"] h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
  }


form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

fieldset {
  border: none;
  padding: 0;
  margin: 0;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 600;
}

input, textarea {
  width: 98.5%;
  padding: 0.8rem 0rem 0.8rem 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

input:focus, textarea:focus {
  border-color: #a1c18b;
  outline: none; 
}

textarea {
  resize: vertical;
  min-height: 120px;
}

button {
  width: 100%;
  background-color: #a1c18b;
  color: #000000;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.1rem;
  transition: background-color 0.3s ease;
}
button:hover {
  background-color: #88b24b;
}

button:active {
  background-color: #7d9e3c;
}

/* Responsivité - Adaptation sur mobile */
@media (max-width: 768px) {
  section[aria-labelledby="contact-form-titre"]{
    background-color: #a1c18b;
    color: #000000;
    padding:2rem;
  }
  .contact-form {                                                                                                                                                                                                                                                            
    padding: 1.5rem;
    margin: 1.5rem auto;
  }

  input, textarea {
    padding: 1rem;
    width: 92%;
    font-size: 1rem;
  }

  button {
    background-color: #ffffff;
    font-size: 1rem;
    padding: 0.8rem 1.5rem;
  }
  button:hover {
    background-color: #ffffff; 
  }

  button:active {
    background-color: #ffffff;
  }
}

@media (max-width: 480px) {
  
  .contact-form {
    padding: 1rem;
  }

  input, textarea {
    padding: 0.8rem;
    font-size: 0.9rem;
  }

  button {
    padding: 0.8rem 1.2rem;
    font-size: 1rem;
  }
}
</style>
