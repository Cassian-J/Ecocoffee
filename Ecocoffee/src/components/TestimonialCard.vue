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
