import Td from './index.vue'

export default {
  title: 'Atoms/Td',
  component: Td,
}

export const $default = (argTypes) => ({
  props: Object.keys(argTypes),
  components: { Td },
  template: '<Td>テキストが入ります</Td>',
})
