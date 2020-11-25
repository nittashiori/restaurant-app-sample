<template>
  <header class="header">
    <Logo color="white" @onClick="onClick" />
  </header>
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
  methods: {
    onClick() {
      this.$emit('onClick')
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  padding: 16px 40px;
  background: $primary-color;
  @include media(md, max) {
    padding: 12px 20px;
  }
  .logo {
    max-width: 480px;
    min-width: 200px;
    width: 28%;
    cursor: pointer;
  }
}
</style>
