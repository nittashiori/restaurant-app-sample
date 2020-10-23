import Logo from './index.vue'

export default {
  title: 'Atoms/Logo',
  component: Logo,
  argTypes: {
    color: { control: 'color' },
  },
}

export const logo = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Logo },
  template: '<Logo v-bind="$props" />',
})
