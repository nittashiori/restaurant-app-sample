import SkeltonBlock from './index.vue'

export default {
  title: 'Modules/SkeltonBlock',
  component: SkeltonBlock,
}

export const $default = (argTypes) => ({
  props: Object.keys(argTypes),
  components: { SkeltonBlock },
  template: '<SkeltonBlock />',
})
