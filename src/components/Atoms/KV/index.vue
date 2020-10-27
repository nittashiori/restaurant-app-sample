<template>
  <div class="kv">
    <img class="kv-image" :src="src" :alt="alt" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.kv {
  width: 100%;
  max-width: 1152px;
}
.kv-image {
  width: 100%;
}
</style>
