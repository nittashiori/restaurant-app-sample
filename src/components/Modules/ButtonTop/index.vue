<template>
  <a :class="classes" @click="onClick">
    <IconTop :color="color" />
    <div class="button-top__text">上部に戻る</div>
  </a>
</template>

<script>
import IconTop from '~/components/Atoms/IconTop'

export default {
  components: {
    IconTop,
  },
  props: {
    color: {
      type: String,
      required: true,
    },
  },
  computed: {
    classes() {
      return {
        [`button-top`]: true,
        [`button-top--${this.color}`]: true,
      }
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
.button-top {
  display: block;
  width: 80px;
  cursor: pointer;
  &--default {
    color: $text-color;
  }
  &--white {
    color: $white-color;
  }
  &--primary {
    color: $primary-color;
  }
  .icon-top {
    margin: auto;
  }
  &__text {
    margin: 8px 0 0;
    @include font-bold;
    @include fts(8.75);
    text-align: center;
  }
}
</style>
