<template>
  <div class="header">
    <Logo :color="color" />
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
  .logo {
    max-width: 572px;
    width: 50%;
  }
}
</style>
