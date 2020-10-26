<template>
  <div class="category">{{ label }}</div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.category {
  display: inline-block;
  padding: 8px 16px;
  background: $white-color;
  border: 2px solid $primary-color;
  border-radius: 100px;
  @include font-bold;
  text-align: center;
  color: $primary-color;
  @include fts(8.75);
  line-height: 1;
}
</style>
