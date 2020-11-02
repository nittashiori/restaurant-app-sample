<template>
  <div class="td"><slot></slot></div>
</template>

<style lang="scss" scoped>
.td {
  width: 100%;
  padding: 24px 16px;
  border-top: 1px solid $border-color;
  @include font-normal;
  line-height: 1.6;
  @include media(md, max) {
    padding: 12px 8px;
    @include fts(8.75);
  }
}
</style>
