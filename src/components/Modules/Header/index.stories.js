import Header from './index.vue'

export default {
  title: 'Modules/Header',
  component: Header,
  argTypes: {
    color: {
      control: { type: 'select', options: ['default', 'white', 'primary'] },
    },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Header },
  template: '<Header v-bind="$props" />',
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
