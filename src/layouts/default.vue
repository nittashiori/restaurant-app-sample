<template>
  <div>
    <Header color="default" />
    <Nuxt />
  </div>
</template>

<script>
import Header from '~/components/Modules/Header'

export default {
  components: {
    Header,
  },
}
</script>

<style lang="scss">
html {
  @include font-normal;
  font-size: 16px;
  word-spacing: 1px;
  box-sizing: border-box;
  background: #f8f4f4;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>
