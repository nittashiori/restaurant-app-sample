<template>
  <div class="container">
    <div class="shop-header">
      <div class="shop-header__thumb">
        <img :src="shop.photo.pc.l" alt="店舗イメージ" />
      </div>
      <div class="shop-header__info">
        <div class="shop-header__title">{{ shop.name }}</div>
        <div class="shop-header__catch">{{ shop.genre.catch }}</div>
        <Category :label="shop.genre.name" />
      </div>
    </div>
    <div class="coupon-area">
      <Coupon
        class="coupon--pc"
        :url="shop.coupon_urls.pc"
        @onClick="copy(shop.coupon_urls.pc)"
      />
      <Coupon
        class="coupon--sp"
        :url="shop.coupon_urls.sp"
        @onClick="copy(shop.coupon_urls.sp)"
      />
    </div>
    <div class="table-area">
      <TableBlock title="住所" :text="shop.address" />
      <TableBlock title="アクセス" :text="shop.access" />
      <TableBlock title="営業時間" :text="shop.open" />
      <TableBlock title="定休日" :text="shop.close" />
      <TableBlock title="平均予算" :text="shop.budget.average" />
      <TableBlock title="飲み放題" :text="shop.free_drink" />
      <TableBlock title="食べ放題" :text="shop.free_food" />
      <TableBlock title="座席" :text="shop.capacity" />
      <TableBlock title="個室" :text="shop.private_room" />
      <TableBlock title="座敷" :text="shop.tatami" />
      <TableBlock title="備考" :text="shop.shop_detail_memo" />
    </div>
    <div class="button-area">
      <Button label="一覧に戻る" @onClick="back()" />
    </div>
  </div>
</template>

<script>
import Button from '~/components/Atoms/Button'
import Category from '~/components/Atoms/Category'
import Coupon from '~/components/Modules/Coupon'
import TableBlock from '~/components/Modules/TableBlock'

export default {
  components: {
    Button,
    Category,
    Coupon,
    TableBlock,
  },
  async asyncData({ $axios, params, env, redirect }) {
    const baseUrl = env.baseUrl
    const { data } = await $axios
      .get(baseUrl, {
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
    copy(msg) {
      this.$copyText(msg)
      alert('クーポンコードをコピーしました')
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  margin: 60px auto;
  @include media(md, max) {
    margin: 30px auto;
  }
}
.shop-header {
  display: flex;
  --thumb-pc-size: 238px;
  --thumb-sp-size: 120px;
  &__thumb {
    width: var(--thumb-pc-size);
    @include media(md, max) {
      width: var(--thumb-sp-size);
    }
    img {
      width: 100%;
    }
  }
  &__info {
    width: calc(100% - var(--thumb-pc-size) - 40px);
    margin: 0 0 0 40px;
    @include media(md, max) {
      width: calc(100% - var(--thumb-sp-size) - 20px);
      margin: 0 0 0 20px;
    }
  }
  &__title {
    @include fts(25);
    @include font-bold;
    @include media(md, max) {
      @include fts(12.5);
    }
  }
  &__catch {
    margin: 20px 0 0;
    @include font-bold;
    @include media(md, max) {
      @include fts(8.75);
    }
  }
  .category {
    margin: 20px 0 0;
  }
}
.coupon-area {
  margin: 40px 0 60px;
  @include media(md, max) {
    margin: 20px 0 30px;
  }
}
.coupon {
  &--pc {
    display: flex;
    @include media(md, max) {
      display: none;
      border: 1px solid #000;
    }
  }
  &--sp {
    display: none;
    @include media(md, max) {
      display: flex;
    }
  }
}
.button-area {
  display: flex;
  justify-content: center;
  margin: 60px auto 80px;
  @include media(md, max) {
    margin: 30px auto 40px;
  }
}
</style>
