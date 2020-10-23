import Logo from './index.vue'

export default {
  title: 'Logo',
  component: Logo,
}

export const logo = () => ({
  components: { Logo },
  template: `<Logo />`,
})
