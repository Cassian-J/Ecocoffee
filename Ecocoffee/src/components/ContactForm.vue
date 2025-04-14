<script>
export default {
  name: "ContactForm",
  data() {
    return {
      nameError: "",
      emailError: "",
      messageError: "",
    };
  },
  methods: {
    handleSubmit() {
      this.nameError = "";
      this.emailError = "";
      this.messageError = "";

      let hasError = false;

      const nameInput = this.$el.querySelector("#name");
      const emailInput = this.$el.querySelector("#email");
      const messageInput = this.$el.querySelector("#message");

      if (!nameInput.value.trim()) {
        this.nameError = "Le nom est requis.";
        hasError = true;
      }

      if (!emailInput.value.trim()) {
        this.emailError = "L'email est requis.";
        hasError = true;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
        this.emailError = "L'adresse email n'est pas valide. Il faut un format email@gmail.com";
        hasError = true;
      }

      if (!messageInput.value.trim()) {
        this.messageError = "Le message est requis.";
        hasError = true;
      }

      if (!hasError) {
        alert("Formulaire envoyé !");
      }
    },
  },
};
</script>

<template>
  <section id="contact" aria-labelledby="contact-form-titre">
    <h2 id="contact-form-titre">Nous contacter</h2>
    <form action="#" method="POST" novalidate @submit.prevent="handleSubmit">
      <fieldset>
        <legend class="sr-only">Informations de contact</legend>
        <label for="name">Prénom et nom (Obligatoire) :</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Entrez votre prénom et votre nom (ex : Gauthier Chicorée)"
          required
          autocomplete="name"
          :aria-describedby="nameError ? 'name-error' : null"
          aria-invalid="nameError ? 'true' : 'false'"
        />
        <span v-if="nameError" id="name-error" role="alert" class="error-message">
          {{ nameError }}
        </span>
      </fieldset>
      <fieldset>
        <legend class="sr-only">Email</legend>
        <label for="email">Email (Obligatoire) :</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Entrez votre email (ex : email@gmail.com)"
          required
          autocomplete="email"
          :aria-describedby="emailError ? 'email-error' : null"
          aria-invalid="emailError ? 'true' : 'false'"
        />
        <span v-if="emailError" id="email-error" role="alert" class="error-message">
          {{ emailError }}
        </span>
      </fieldset>
      <fieldset>
        <legend class="sr-only">Message</legend>
        <label for="message">Message (Obligatoire) :</label>
        <textarea
          id="message"
          name="message"
          placeholder="Entrez votre message"
          required
          :aria-describedby="messageError ? 'message-error' : null"
          aria-invalid="messageError ? 'true' : 'false'"
        ></textarea>
        <span v-if="messageError" id="message-error" role="alert" class="error-message">
          {{ messageError }}
        </span>
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

.error-message {
  color: rgb(165, 39, 39);
  font-weight: bold;
  margin-top: 0.3rem;
  font-size: 1rem;
}

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
