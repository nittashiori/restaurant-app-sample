import ButtonTop from './index.vue'

export default {
  title: 'Modules/ButtonTop',
  component: ButtonTop,
  argTypes: {
    color: {
      control: { type: 'select', options: ['default', 'white'] },
    },
    onClick: { action: 'clicked' },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ButtonTop },
  template: '<ButtonTop v-bind="$props" @onClick="onClick" />',
})

export const Default = Template.bind({})
Default.args = {
  color: 'default',
}

export const White = Template.bind({})
White.args = {
  color: 'white',
}

// export const Primary = Template.bind({})
// Primary.args = {
//   color: 'primary',
// }
