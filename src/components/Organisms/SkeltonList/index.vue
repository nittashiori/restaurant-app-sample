<template>
  <div class="skelton-list">
    <SkeltonBlock />
    <SkeltonBlock />
    <SkeltonBlock />
    <SkeltonBlock />
    <SkeltonBlock />
    <SkeltonBlock />
    <SkeltonBlock />
    <SkeltonBlock />
    <SkeltonBlock />
    <SkeltonBlock />
  </div>
</template>

<script>
import SkeltonBlock from '~/components/Modules/SkeltonBlock'
export default {
  components: {
    SkeltonBlock,
  },
}
</script>

<style lang="scss" scoped>
.skelton-list {
  & > * {
    &:not(:first-child) {
      margin: 32px 0 0;
      @include media(md, max) {
        margin: 20px 0 0;
      }
    }
  }
}
</style>
