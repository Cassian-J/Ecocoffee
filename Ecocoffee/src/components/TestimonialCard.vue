<template>
  <blockquote>
    <p>"{{ text }}"</p>
    <footer>
      <cite>{{ name }}</cite>
      <img :src="image" alt="" aria-hidden = "true" :width="width" :height="height" role="img" />
    </footer>
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
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

blockquote:hover {
  transform: translateY(-3px);
}

footer {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
}

cite {
  font-style: normal;
  color: var(--secondary-color);
  font-weight: 500;
}

img {
  border-radius: 50%;
  border: 2px solid var(--primary-color);
}
</style>
