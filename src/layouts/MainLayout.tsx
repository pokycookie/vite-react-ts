import { useMemo } from 'react'
import { useThemeStore } from '@/stores'
import { Outlet } from 'react-router-dom'
import { darkTheme } from '@/themes/theme/darkTheme'
import { lightTheme } from '@/themes/theme/lightTheme'

import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

export default function MainLayout() {
  const { mode } = useThemeStore()

  const theme = useMemo(() => createTheme(mode === 'light' ? lightTheme : darkTheme), [mode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Outlet />
    </ThemeProvider>
  )
}
