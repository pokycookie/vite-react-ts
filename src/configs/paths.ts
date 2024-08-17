const PATH = {
  root: '/',
  component: '/components',
}

const paths = {
  root: PATH.root,
  components: {
    root: PATH.component,
    toast: `${PATH.component}/toast`,
    scrollbar: `${PATH.component}/scrollbar`,
  },
}

export default paths
