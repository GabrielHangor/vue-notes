<template>
  <div class="message">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    message: { type: String, required: true },
  },
  name: "Message",
};
</script>

<style lang="scss" scoped>
.message {
  text-align: center;
  padding: 1.2rem;
}

p {
  color: red;
}
</style>
