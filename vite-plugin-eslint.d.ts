declare module 'vite-plugin-eslint' {
  import { Plugin } from 'vite'

  function eslint(options?: {
    cache?: boolean
    include?: string[]
    exclude?: string[]
  }): Plugin

  export default eslint
}
