const PATH = {
  root: '/',
  component: '/components',
  mirage: '/mirage',
}

const paths = {
  root: PATH.root,
  components: {
    root: PATH.component,
    toast: `${PATH.component}/toast`,
    scrollbar: `${PATH.component}/scrollbar`,
  },
  mirage: {
    root: PATH.mirage,
  },
}

export default paths
