<template>
  <div class="th"><slot></slot></div>
</template>

<style lang="scss" scoped>
.th {
  max-width: 160px;
  padding: 24px 16px;
  border-top: 1px solid $primary-color;
  @include font-bold;
}
</style>
