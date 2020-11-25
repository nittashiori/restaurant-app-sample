import TableLinkBlock from './index.vue'

export default {
  title: 'Modules/TableLinkBlock',
  component: TableLinkBlock,
}

export const $default = (argTypes) => ({
  props: Object.keys(argTypes),
  components: { TableLinkBlock },
  template:
    '<TableLinkBlock title="タイトル" text="テキストが入ります" href="https://google.com" linktext="googleへ飛ぶ" />',
})
