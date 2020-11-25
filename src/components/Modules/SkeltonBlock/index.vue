<template>
  <div class="shop-block">
    <div class="shop-block__image"></div>
    <div class="shop-block__body">
      <h2 class="shop-block__title"></h2>
      <div class="category"></div>
      <ul class="shop-info">
        <li class="shop-info__item"></li>
        <li class="shop-info__item"></li>
        <li class="shop-info__item"></li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.shop-block {
  --pc-size: 238px;
  --sp-size: 100px;
  display: flex;
  align-items: flex-start;
  padding: 32px;
  background: $white-color;
  box-shadow: 0 6px 12px -6px rgba(45, 45, 45, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  @include media(md, max) {
    padding: 16px;
  }
}
.shop-block__image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--pc-size);
  height: var(--pc-size);
  background: $border-color;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
  @include media(md, max) {
    width: var(--sp-size);
    height: var(--sp-size);
  }
  &::before {
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(#fff, 0.5),
      transparent
    );
    position: absolute;
    top: 0;
    left: 0;
    animation: skeleton-animation 1.2s linear infinite;
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
    width: calc(100% - var(--sp-size) - 16px);
    margin: 0 0 0 16px;
  }
}
.shop-block__title {
  width: 400px;
  height: 24px;
  background: $border-color;
  position: relative;
  @include media(md, max) {
    width: 100%;
  }
  &::before {
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(#fff, 0.5),
      transparent
    );
    position: absolute;
    top: 0;
    left: 0;
    animation: skeleton-animation 1.2s linear infinite;
  }
}
.category {
  width: 80px;
  height: 20px;
  margin: 16px 0;
  background: $border-color;
  position: relative;
  &::before {
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(#fff, 0.5),
      transparent
    );
    position: absolute;
    top: 0;
    left: 0;
    animation: skeleton-animation 1.2s linear infinite;
  }
}
.shop-info {
  color: $text-color;
  @include media(md, max) {
    @include fts(8.75);
  }
}
.shop-info__item {
  width: 100%;
  height: 16px;
  background: $border-color;
  position: relative;
  @include media(md, max) {
    height: 14px;
  }
  &:not(:first-child) {
    margin: 16px 0 0;
  }
  &::before {
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(#fff, 0.5),
      transparent
    );
    position: absolute;
    top: 0;
    left: 0;
    animation: skeleton-animation 1.2s linear infinite;
  }
}
@keyframes skeleton-animation {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
