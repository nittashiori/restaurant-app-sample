<template>
  <div class="header">
    <Logo color="white" />
  </div>
</template>

<script>
import Logo from '~/components/Atoms/Logo'

export default {
  components: {
    Logo,
  },
  props: {
    color: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  padding: 20px 40px;
  background: $primary-color;
  @include media(md, max) {
    padding: 16px 20px;
  }
  .logo {
    max-width: 480px;
    min-width: 200px;
    width: 32%;
  }
}
</style>
