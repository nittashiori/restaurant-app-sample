<template>
  <a class="shop-block" :href="href">
    <div class="shop-block__image"><img :src="src" :alt="alt" /></div>
    <div class="shop-block__body">
      <h2 class="shop-block__title">店舗名</h2>
      <Category :label="category" />
      <ul class="shop-info">
        <li class="shop-info__item">{{ address }}</li>
        <li class="shop-info__item">{{ businessHour }}</li>
        <li class="shop-info__item">{{ budget }}</li>
      </ul>
    </div>
  </a>
</template>

<script>
import Category from '~/components/Atoms/Category'
export default {
  components: {
    Category,
  },
  props: {
    href: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    businessHour: {
      type: String,
      required: true,
    },
    budget: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.shop-block {
  --pc-size: 238px;
  --sp-size: 160px;
  display: flex;
  align-items: flex-start;
  padding: 32px;
  background: $white-color;
  box-shadow: 0 18px 32px -12px rgba(45, 45, 45, 0.1);
  @include media(md, max) {
    padding: 16px;
  }
}
.shop-block:hover {
  .shop-block__image {
    border-radius: 20px;
    img {
      transform: scale(1.08);
    }
  }
}
.shop-block__image {
  width: var(--pc-size);
  height: var(--pc-size);
  background: #f9f9f9;
  overflow: hidden;
  transition: all 0.3s ease;
  @include media(md, max) {
    width: var(--sp-size);
    height: var(--sp-size);
  }
  img {
    display: block;
    transition: all 0.4s ease;
  }
}
.shop-block__body {
  width: calc(100% - var(--pc-size) - 40px);
  margin: 0 0 0 40px;
  @include media(md, max) {
    width: calc(100% - var(--sp-size) - 24px);
    margin: 0 0 0 24px;
  }
}
.shop-block__title {
  width: 100%;
  @include fts(15);
  color: $text-color;
  @include media(md, max) {
    @include fts(12.5);
  }
}
.category {
  margin: 16px 0;
}
.shop-info {
  color: $text-color;
  @include media(md, max) {
    @include fts(8.75);
  }
}
.shop-info__item {
  line-height: 1.6;
  &:not(:first-child) {
    margin: 16px 0 0;
  }
}
</style>
