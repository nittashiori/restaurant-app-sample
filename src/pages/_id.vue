<template>
  <div>
    {{ $route.params.id }}
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
}
</script>
