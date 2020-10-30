import ShopBlock from './index.vue'

export default {
  title: 'Modules/ShopBlock',
  component: ShopBlock,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ShopBlock },
  template: '<ShopBlock v-bind="$props" />',
})

export const Default = Template.bind({})
Default.args = {
  href: '#',
  src: 'images/shop-image-dummy.jpg',
  alt: '店舗イメージ',
  category: '居酒屋',
  address: '埼玉県あいうえお市かきくけこ1-23-4 さしすせそビル1F',
  businessHour:
    '月～水、金～日、祝日、祝前日: 11:30～14:30 （料理L.O. 14:00 ドリンクL.O. 14:00）16:00～22:00 （料理L.O. 21:30 ドリンクL.O. 21:30）',
  budget: '昼約700円・夜2000円～3000円',
}
