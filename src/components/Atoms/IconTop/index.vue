<template>
  <div class="icon-top" :style="style">
    <svg viewBox="0 0 64 64">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M62 32c0 16.569-13.431 30-30 30C15.431 62 2 48.569 2 32 2 15.431 15.431 2 32 2c16.569 0 30 13.431 30 30zm2 0c0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0c17.673 0 32 14.327 32 32zM32.148 16.849l.707.707 11.817 11.817-1.414 1.414-10.11-10.11v28.866h-2V20.677l-10.11 10.11-1.414-1.414 11.817-11.817.707-.707z"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
    },
  },
  computed: {
    style() {
      return {
        color: this.color,
      }
    },
  },
}
</script>

<style scoped lang="scss">
.icon-top {
  width: 64px;
  color: $black-color;
  svg {
    fill: currentColor;
  }
}
</style>
