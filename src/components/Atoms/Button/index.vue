<template>
  <button class="button" @click="onClick">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  methods: {
    onClick() {
      this.$emit('onClick')
    },
  },
}
</script>

<style scoped lang="scss">
.button {
  display: block;
  padding: 16px 0;
  background: none;
  border: none;
  color: $text-color;
  position: relative;
  &::after {
    content: '';
    width: 100%;
    height: 2px;
    background: $text-color;
    position: absolute;
    bottom: -4px;
    left: 0;
    transform: scale(1, 1);
  }
  &:hover {
    &::after {
      animation: flow-line 0.6s ease;
    }
  }
}

@keyframes flow-line {
  0% {
    transform-origin: right top;
    transform: scale(1, 1);
  }
  49% {
    transform-origin: right top;
    transform: scale(0, 1);
  }
  50% {
    transform-origin: left top;
    transform: scale(0, 1);
  }
  100% {
    transform-origin: left top;
    transform: scale(1, 1);
  }
}
</style>
