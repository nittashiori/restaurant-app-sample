<template>
  <div class="td"><slot></slot></div>
</template>

<style lang="scss" scoped>
.td {
  max-width: 100%;
  padding: 24px 16px;
  border-top: 1px solid $border-color;
  @include font-normal;
}
</style>
