import Category from './index.vue'

export default {
  title: 'Atoms/Category',
  component: Category,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Category },
  template: '<Category v-bind="$props" />',
})

export const Primary = Template.bind({})
Primary.args = {
  label: '居酒屋',
}
