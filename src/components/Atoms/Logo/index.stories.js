import Logo from './index.vue'

export default {
  title: 'Atoms/Logo',
  component: Logo,
  argTypes: {
    color: {
      control: { type: 'select', options: ['default', 'white', 'primary'] },
    },
    onClick: { action: 'clicked' },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Logo },
  template: '<Logo v-bind="$props" @onClick="onClick" />',
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
