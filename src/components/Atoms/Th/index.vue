<template>
  <div class="th"><slot></slot></div>
</template>

<style lang="scss" scoped>
.th {
  width: 100%;
  max-width: 160px;
  padding: 24px 16px;
  border-top: 1px solid $primary-color;
  @include font-bold;
  @include media(md, max) {
    max-width: 80px;
    padding: 8px;
    @include fts(8.75);
  }
}
</style>
