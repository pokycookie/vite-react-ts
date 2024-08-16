import { useMemo } from 'react'
import { Toaster } from 'sonner'
import { useThemeStore } from '@/stores'
import { Outlet } from 'react-router-dom'
import { darkTheme } from '@/themes/theme/dark-theme'
import { lightTheme } from '@/themes/theme/light-theme'

import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

export default function MainLayout() {
  const { mode } = useThemeStore()

  const theme = useMemo(() => createTheme(mode === 'light' ? lightTheme : darkTheme), [mode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Toaster />
      <Outlet />
    </ThemeProvider>
  )
}
