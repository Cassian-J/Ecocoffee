<template>
  <blockquote>
    <section>
      <img :src="image" alt="" aria-hidden = "true" :width="width" :height="height" role="img" />
      <article>
        <cite>{{ name }}</cite>
        <p>"{{ text }}"</p>
      </article>
    </section>
  </blockquote>
</template>

<script>
  export default {
    name: "TestimonialCard",
    props: {
      text: String,
      name: String,
      image: String,
      width: {
        type: [String, Number],
        default: "100",
      },
      height: {
        type: [String, Number],
        default: "100",
      },
    },
  };
</script>

<style scoped>
blockquote {
  background: #684b38;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  color: white;
}

blockquote:hover {
  transform: translateY(-3px);
}

section {
  display: flex;
  flex-direction: row; 
  align-items: flex-start; 
  gap: 1rem;
  color: white;
  width:100%;
}

img {
  border-radius: 5%; 
  border: 2px solid #000000; 
  object-fit: cover; 
}

cite {
  font-style: normal;
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-size: 1.2rem; 
}

p {
  font-size: 1rem;
  margin: 0;
  max-width: 400px; 
  white-space: nowrap;
}
article{
  margin-top: 1rem;
  display: flex;
  flex-direction: column; 
  align-items: flex-start; 
}

@media screen and (max-width: 768px) {
  
  p{
    font-size: 10px;
    white-space: normal;
  }
  
  article {
    margin-top: 0;
    align-items: center; 
  }
  cite{
    
    font-size: 15px;
  }
}
</style>
