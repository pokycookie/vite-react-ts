import type { ThemeOptions } from '@mui/material'

import { darkPalette, lightPalette } from '@/themes/palette'

import { components } from './components'

export const lightTheme: ThemeOptions = {
  palette: {
    mode: 'light',
    ...lightPalette,
  },
  components,
}

export const darkTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    ...darkPalette,
  },
  components,
}
