<template>
  <article>
    <figure>
      <img :src="image" alt="" aria-hidden = "true" role="img" :width="width" :height="height" />
      <figcaption>
        <h3>{{ name }}</h3>
        <p>{{ description }}</p>
      </figcaption>
    </figure>
  </article>
</template>

<script>
  export default {
    name: "ProductCard",
    props: {
      name: String,
      description: String,
      image: String,
      width: {
        type: [String, Number],
        default: "300",
      },
      height: {
        type: [String, Number],
        default: "300",
      },
    },
  };
</script>

<style scoped>
article {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.image-container {
  width: 33%;
  margin-bottom: 1rem;
}

img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}

h3 {
  color: #2F4F4F;
  margin: 0.5rem 0;
  font-size: 1.2rem;
}

p {
  color: #666;
  font-size: 0.9rem;
}
@media screen and (max-width: 768px) {
  h3{
    color: #000000;
  }
  p{
    color: #000000;
  }
}

</style>
