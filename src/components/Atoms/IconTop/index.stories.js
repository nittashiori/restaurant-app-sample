import IconTop from './index.vue'

export default {
  title: 'Atoms/IconTop',
  component: IconTop,
  argTypes: {
    color: {
      control: { type: 'select', options: ['default', 'white', 'primary'] },
    },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { IconTop },
  template: '<IconTop v-bind="$props" />',
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
