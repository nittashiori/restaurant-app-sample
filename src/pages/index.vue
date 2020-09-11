<template>
  <div class="container">
    <section>
      <h1>検索結果（{{ shops.length }}件）</h1>
      <p v-if="error">データの取得に失敗しました。</p>
      <ul>
        <li v-for="shop in shops" :key="shop.id">
          <p>{{ shop.id }}</p>
          <p>{{ shop.name }}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shops: [],
      error: false,
    }
  },
  mounted() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.$axios('http://localhost:3000/api/gourmet/v1/', {
        // パラメータの設定
        params: {
          key: process.env.apikey,
          lat: position.coords.latitude, // 取得した緯度を設定
          lng: position.coords.longitude, // 取得した経度を設定
          format: 'json',
        },
      })
        .then(this.setShop)
        .catch(this.setError)
    }, this.setError)
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
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
