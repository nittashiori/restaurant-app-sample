<template>
  <div>
    {{ $route.params.id }}
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params, env, redirect }) {
    try {
      // データ取得
      const { data } = await $axios.get(
        'http://localhost:3000/api/gourmet/v1/',
        {
          params: {
            key: process.env.apikey,
            id: params.id,
            format: 'json',
          },
        }
      )
      // 対象データがない場合は一覧ページに戻る
      if (data.results.shop.length <= 0) {
        redirect('/')
      }
      return {
        shop: data.results.shop[0],
        error: undefined,
      }
    } catch (error) {
      return {
        shop: undefined,
        error: {
          message: 'データの取得に失敗しました',
        },
      }
    }
  },
}
</script>
