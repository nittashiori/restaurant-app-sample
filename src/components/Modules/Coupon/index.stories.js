import Coupon from './index.vue'

export default {
  title: 'Modules/Coupon',
  component: Coupon,
  argTypes: {
    onClick: { action: 'clicked' },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Coupon },
  template: '<Coupon v-bind="$props" @onClick="onClick" />',
})

export const Default = Template.bind({})
Default.args = {
  href: '/',
  url: 'http://hogehogehogehoge.hoge',
}
