<template>
  <div class="container">
    <div class="result">
      <p>検索結果（{{ shops.length }}件）</p>
      <p v-if="error" class="result--error">データの取得に失敗しました。</p>
      <p v-if="shopsFlag">申し訳ありません。店舗が見つかりませんでした。</p>
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
    <Loading v-if="loading">読み込み中です</Loading>
  </div>
</template>

<script>
import ShopBlock from '~/components/Modules/ShopBlock'
import Loading from '~/components/Modules/Loading'

const getCurrentPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}
export default {
  components: {
    ShopBlock,
    Loading,
  },
  asyncData({ env }) {
    return {
      baseUrl: env.baseUrl,
    }
  },
  data() {
    return {
      shops: [],
      error: false,
      loading: true,
      shopsFlag: false,
    }
  },
  async mounted() {
    // 現在位置の取得
    const position = await getCurrentPosition().catch(this.setError)
    const { data } = await this.$axios(this.baseUrl, {
      // パラメータの設定
      params: {
        key: process.env.apikey,
        lat: position.coords.latitude, // 取得した緯度を設定
        lng: position.coords.longitude, // 取得した経度を設定
        format: 'json',
      },
    }).catch((err) => {
      this.setError(err)
    })
    // 店の一覧を設定
    this.shops = data.results.shop

    const keyName = 'visited'
    const keyValue = true
    // sessionStorageにアクセス履歴を残す
    if (!sessionStorage.getItem(keyName)) {
      // sessionStorageにキーと値を追加
      sessionStorage.setItem(keyName, keyValue)

      // 初回アクセス時の処理
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)
      return
    }
    this.loading = false

    // 店舗が見つからない場合の処理
    if (this.shops.length === 0) {
      this.shopsFlag = true
    }
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
    @include media(md, max) {
      margin: 20px 0 0;
    }
  }
}
.loading {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
