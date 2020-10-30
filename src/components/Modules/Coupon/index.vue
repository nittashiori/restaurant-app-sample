<template>
  <div class="coupon">
    <div class="coupon__title">クーポン</div>
    <div class="coupon__body">
      <a :href="href" class="coupon__link" @click="onClick">{{ url }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true,
    },
    url: {
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
.coupon {
  width: 100%;
  display: flex;
  --title-width: 136px;
  @include media(md, max) {
    flex-direction: column;
  }
  &__title {
    width: var(--title-width);
    padding: 12px 16px;
    @include fts(8.75);
    @include font-bold;
    color: $white-color;
    text-align: center;
    background: $primary-color;
    border-radius: 4px 0 0 4px;
    @include media(md, max) {
      width: 100%;
      border-radius: 4px 4px 0 0;
    }
  }
  &__body {
    width: calc(100% - var(--title-width));
    border: 1px solid $border-color;
    border-radius: 0 4px 4px 0;
    @include media(md, max) {
      width: 100%;
      border-radius: 0 0 4px 4px;
    }
  }
  &__link {
    display: block;
    width: 100%;
    padding: 12px 16px;
    @include fts(8.75);
    line-height: 1.6;
    color: $text-color;
    transition: all 0.3s ease;
    &:hover {
      background: lighten($primary-color, 53%);
    }
  }
}
</style>
