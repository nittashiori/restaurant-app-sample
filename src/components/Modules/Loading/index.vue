<template>
  <div class="loading">
    <div class="loading__inner">
      <div class="loading__animation"><SymbolIcon color="white" /></div>
      <div class="loading__typo"><slot></slot></div>
    </div>
  </div>
</template>

<script>
import SymbolIcon from '~/components/Atoms/SymbolIcon'

export default {
  components: {
    SymbolIcon,
  },
}
</script>

<style lang="scss" scoped>
.loading {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}
.loading__inner {
  @include flex(wrap, flex-start, center);
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}
.loading__animation .symbol {
  width: 80px;
  color: $white-color;
  text-align: center;
  animation: jump 1.6s linear infinite;
  svg {
    fill: currentColor;
  }
}
@keyframes jump {
  0% {
    transform: scale(1, 1) translate(0%, 0%);
  }
  10% {
    transform: scale(1.1, 0.95) translate(0%, 5%);
  }
  40% {
    transform: scale(1.2, 0.8) translate(0%, 10%);
  }
  50% {
    transform: scale(1, 1) translate(0%, 0%);
  }
  60% {
    transform: scale(0.95, 1.2) translate(0%, -40%);
  }
  75% {
    transform: scale(0.95, 1.2) translate(0%, -15%);
  }
  85% {
    transform: scale(1.2, 0.85) translate(0%, 10%);
  }
  100% {
    transform: scale(1, 1) translate(0%, 0%);
  }
}
.loading__typo {
  margin-top: 16px;
  color: $white-color;
}
</style>
