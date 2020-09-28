<template>
  <div>
    <ul>
      <li>PC用クーポン：{{ shop.coupon_urls.pc }}</li>
      <li>SP用クーポン：{{ shop.coupon_urls.sp }}</li>
      <li>店名：{{ shop.name }}</li>
      <li><img :src="shop.photo.pc.l" /></li>
      <li>営業時間：{{ shop.open }}</li>
      <li>定休日：{{ shop.close }}</li>
      <li>アクセス：{{ shop.access }}</li>
      <li>住所：{{ shop.address }}</li>
      <li>最寄り駅：{{ shop.station_name }}</li>
      <li>説明：{{ shop.catch }}</li>
      <li>ジャンル：{{ shop.genre.name }}</li>
      <li>ジャンル、キャッチ：{{ shop.genre.catch }}</li>
      <li>飲み放題：{{ shop.free_drink }}</li>
      <li>食べ放題：{{ shop.free_food }}</li>
      <li>
        平均ディナー予算：{{ shop.budget.average }}<br />{{ shop.budget_memo }}
      </li>
      <li>席数：{{ shop.capacity }}</li>
      <li>個室：{{ shop.private_room }}</li>
      <li>座敷：{{ shop.tatami }}</li>
      <li>備考：{{ shop.shop_detail_memo }}</li>
      <!-- <li>{{ shop }}</li> -->
    </ul>
    <button @click="back()">一覧に戻る</button>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params, env, redirect }) {
    const { data } = await $axios
      .get('http://localhost:3000/api/gourmet/v1/', {
        params: {
          key: process.env.apikey,
          id: params.id,
          format: 'json',
        },
      })
      .catch((err) => {
        return err.data
      })
    return {
      shop: data.results.shop[0],
    }
  },
  methods: {
    back() {
      return this.$router.push(`/`)
    },
  },
}
</script>
