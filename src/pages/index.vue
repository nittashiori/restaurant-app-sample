<template>
  <div class="container">
    <div class="result">
      <p class="search">検索結果（{{ shops.length }}件）</p>
      <div v-if="isError" class="result-error">
        <p class="result-error__title">データの取得に失敗しました。</p>
        <p class="result-error__text">
          環境設定で位置情報を許可して再度リロードしてみてください。
        </p>
      </div>
      <p v-if="isShopsFlag" class="failed">
        申し訳ありません。店舗が見つかりませんでした。
      </p>
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
    <SkeltonList v-if="isSkelton" />
    <Loading v-if="isLoading">読み込み中です</Loading>
  </div>
</template>

<script>
import ShopBlock from '~/components/Modules/ShopBlock'
import Loading from '~/components/Modules/Loading'
import SkeltonList from '~/components/Organisms/SkeltonList'

const getCurrentPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}
export default {
  components: {
    ShopBlock,
    SkeltonList,
    Loading,
  },
  asyncData({ env }) {
    return {
      baseUrl: env.baseUrl,
      apiKey: env.apiKey,
    }
  },
  data() {
    return {
      shops: [],
      isError: false,
      isLoading: true,
      isShopsFlag: false,
      isSkelton: true,
    }
  },
  async mounted() {
    // 現在位置の取得
    const position = await getCurrentPosition().catch(this.setError)
    const { data } = await this.$axios
      .get(this.baseUrl, {
        // パラメータの設定
        params: {
          key: process.env.apiKey,
          lat: position.coords.latitude, // 取得した緯度を設定
          lng: position.coords.longitude, // 取得した経度を設定
          format: 'json',
        },
      })
      .catch((err) => {
        this.setError(err)
        this.isLoading = false
        this.isSkelton = false
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
      this.isLoading = true
      this.isSkelton = true
      setTimeout(() => {
        this.isSkelton = false
      }, 500)
      setTimeout(() => {
        this.isLoading = false
      }, 2000)
      return
    }
    this.isLoading = false
    this.isSkelton = false

    // 店舗が見つからない場合の処理
    if (this.shops.length === 0) {
      this.isShopsFlag = true
      this.isLoading = false
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
      this.isError = true
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
}
.result-error {
  margin: 16px 0;
  &__title {
    text-align: center;
    @include font-bold;
    @include fts(12.5);
  }
  &__text {
    margin-top: 8px;
    @include fts(8.75);
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
  position: fixed;
  top: 0;
  left: 0;
}
</style>
