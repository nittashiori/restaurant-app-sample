import Th from './index.vue'

export default {
  title: 'Atoms/Th',
  component: Th,
}

export const $default = (argTypes) => ({
  props: Object.keys(argTypes),
  components: { Th },
  template: '<Th>Label</Th>',
})
