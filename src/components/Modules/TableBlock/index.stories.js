import TableBlock from './index.vue'

export default {
  title: 'Modules/TableBlock',
  component: TableBlock,
}

export const $default = (argTypes) => ({
  props: Object.keys(argTypes),
  components: { TableBlock },
  template: '<TableBlock title="タイトル" text="テキストが入ります" />',
})
