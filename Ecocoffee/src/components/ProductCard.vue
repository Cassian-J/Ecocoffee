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
