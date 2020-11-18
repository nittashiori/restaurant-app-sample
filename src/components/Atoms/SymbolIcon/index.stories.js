import SymbolIcon from './index.vue'

export default {
  title: 'Atoms/SymbolIcon',
  component: SymbolIcon,
  argTypes: {
    color: {
      control: { type: 'select', options: ['default', 'white', 'primary'] },
    },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SymbolIcon },
  template: '<SymbolIcon v-bind="$props" />',
})

export const Default = Template.bind({})
Default.args = {
  color: 'default',
}

export const White = Template.bind({})
White.args = {
  color: 'white',
}

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
}
