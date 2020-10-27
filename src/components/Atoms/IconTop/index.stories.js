import IconTop from './index.vue'

export default {
  title: 'Atoms/IconTop',
  component: IconTop,
  argTypes: {
    color: { control: 'color' },
  },
}

export const $default = (argTypes) => ({
  props: Object.keys(argTypes),
  components: { IconTop },
  template: '<IconTop v-bind="$props" />',
})
