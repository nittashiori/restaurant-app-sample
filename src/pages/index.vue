<template>
  <div>
    <header>
      <Header color="default" />
    </header>
    <div class="kv-wrap">
      <KV :src="require('~/assets/images/kv.jpg')" alt="キービジュアルです" />
      <p class="kv-copy">
        近くにあるお店を<span class="kv-copy--rotate">10</span>件表示します
      </p>
    </div>
    <div class="container">
      <div class="result">
        <p>検索結果（{{ shops.length }}件）</p>
        <p v-if="error" class="result--error">データの取得に失敗しました。</p>
      </div>
      <div class="shop-list">
        <ShopBlock
          v-for="shop in shops"
          :key="shop.id"
          :src="shop.photo.pc.l"
          :alt="shop.id"
          :shopname="shop.name"
          :category="shop.genre.name"
          :address="shop.address"
          :business-hour="shop.open"
          :budget="shop.budget.average"
          @onClick="accessDetail(shop)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Modules/Header'
import KV from '~/components/Atoms/KV'
import ShopBlock from '~/components/Modules/ShopBlock'

const getCurrentPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}
export default {
  components: {
    Header,
    KV,
    ShopBlock,
  },
  data() {
    return {
      shops: [],
      error: false,
    }
  },
  async mounted() {
    // 現在位置の取得
    const position = await getCurrentPosition().catch(this.setError)
    const { data } = await this.$axios(
      'http://localhost:3000/api/gourmet/v1/',
      {
        // パラメータの設定
        params: {
          key: process.env.apikey,
          lat: position.coords.latitude, // 取得した緯度を設定
          lng: position.coords.longitude, // 取得した経度を設定
          format: 'json',
        },
      }
    ).catch((err) => {
      this.setError(err)
    })
    // 店の一覧を設定
    this.shops = data.results.shop
  },
  methods: {
    // レスポンスあとの処理
    setShop(res) {
      this.shops = res.data.results.shop
    },
    // エラーが発生した場合の処理
    setError(err) {
      console.log(err)
      this.error = true
    },
    accessDetail(shop) {
      this.$router.push(`/${shop.id}`)
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
}
.kv-wrap {
  display: flex;
  flex-direction: row-reverse;
  position: relative;
  @include media(md, max) {
    flex-direction: column;
  }
  &::before {
    display: block;
    content: '';
    width: 100%;
    height: calc(100% - 80px);
    background: $primary-color;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    @include media(md, max) {
      height: 100%;
    }
  }
  &::after {
    display: block;
    content: 'Hot Pepper\AGourmet';
    white-space: pre;
    color: $white-color;
    font-size: 10vw;
    line-height: 0.9;
    font-family: $font-en;
    opacity: 0.1;
    position: absolute;
    bottom: 70px;
    left: 0;
    z-index: -1;
    @include media(md, max) {
      content: 'Hot Pepper Gourmet';
      font-size: 10vw;
      bottom: -5px;
    }
  }
}
.kv {
  width: 100%;
  max-width: 800px;
  margin: 0 80px;
  @include media(md, max) {
    max-width: calc(100% - 40px);
    margin: auto;
  }
}
.kv-copy {
  width: 10vw;
  margin: 40px auto;
  @include font-bold;
  color: $white-color;
  writing-mode: vertical-rl;
  @include media(md, max) {
    width: 100%;
    text-align: center;
    writing-mode: horizontal-tb;
  }
  &--rotate {
    display: inline-block;
    transform: rotate(-90deg);
    line-height: 1.2;
    @include media(md, max) {
      transform: rotate(0);
    }
  }
}
.result {
  margin: 40px auto;
  &--error {
    color: $primary-color;
    @include font-bold;
  }
}
.shop-block {
  &:not(:first-child) {
    margin: 32px 0 0;
  }
}
</style>
