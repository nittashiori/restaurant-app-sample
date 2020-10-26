import Button from './index.vue'

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: '<Button v-bind="$props" @onClick="onClick" />',
})

export const Primary = Template.bind({})
Primary.args = {
  label: 'Button',
}
