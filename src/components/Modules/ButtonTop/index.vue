<template>
  <a :class="classes" @click="onClick">
    <div class="button-top__inner">
      <IconTop :color="color" />
      <div class="button-top__text">上部に戻る</div>
    </div>
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
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 40px 0;
  transition: all 0.3s ease;
  cursor: pointer;
  &--default {
    color: $text-color;
    background: $white-color;
    &:hover {
      background: darken($white-color, 5%);
    }
  }
  &--white {
    color: $white-color;
    background: $primary-color;
    &:hover {
      background: darken($primary-color, 5%);
    }
  }
  &__inner {
    width: 80px;
  }
  &__text {
    margin: 8px 0 0;
    @include font-bold;
    @include fts(8.75);
    text-align: center;
  }
  .icon-top {
    margin: auto;
    transition: all 0.3s ease;
  }
  &:hover {
    .icon-top {
      transform: translateY(-8px);
    }
  }
}
</style>
