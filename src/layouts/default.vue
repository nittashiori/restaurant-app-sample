<template>
  <div ref="targetContent">
    <Header color="default" @onClick="backTop()" />
    <Nuxt />
    <ButtonTop color="white" @onClick="startScroll()" />
  </div>
</template>

<script>
import Header from '~/components/Modules/Header'
import ButtonTop from '~/components/Modules/ButtonTop'

export default {
  components: {
    Header,
    ButtonTop,
  },
  methods: {
    startScroll() {
      this.$refs.targetContent.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    },
    backTop() {
      return this.$router.push(`/`)
    },
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

.button-top {
  margin: 40px 0 0;
}
.page-enter-active {
  transition: all 0.4s ease;
}
.page-leave-active {
  transition: all 0.4s ease;
}
.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translateX(-5%);
}
</style>
