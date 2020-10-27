import KV from './index.vue'

export default {
  title: 'Atoms/KV',
  component: KV,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { KV },
  template: '<KV v-bind="$props">Label</KV>',
})

export const Default = Template.bind({})
Default.args = {
  src: 'images/kv.jpg',
  alt: 'キービジュアルです',
}
