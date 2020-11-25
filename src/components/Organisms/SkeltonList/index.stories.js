import SkeltonList from './index.vue'

export default {
  title: 'Organisms/SkeltonList',
  component: SkeltonList,
}

export const $default = (argTypes) => ({
  props: Object.keys(argTypes),
  components: { SkeltonList },
  template: '<SkeltonList />',
})
