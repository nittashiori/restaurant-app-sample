import Loading from './index.vue'

export default {
  title: 'Modules/Loading',
  component: Loading,
}

export const $default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Loading },
  template: '<Loading>読み込み中です</Loading>',
})
