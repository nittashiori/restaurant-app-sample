<template>
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
</template>

<script>
import ShopBlock from '~/components/Modules/ShopBlock'

const getCurrentPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}
export default {
  components: {
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
.result {
  margin: 40px auto;
  @include media(md, max) {
    margin: 20px auto;
  }
  &--error {
    text-align: center;
    @include font-bold;
    @include fts(12.5);
  }
}
.shop-block {
  &:not(:first-child) {
    margin: 32px 0 0;
  }
}
</style>
