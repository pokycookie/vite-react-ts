import { useMemo } from 'react'
import { useThemeStore } from '@/stores'
import { Outlet } from 'react-router-dom'
import { Toaster } from '@/components/toast'
import { darkTheme, lightTheme } from '@/themes/theme'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

export default function MainLayout() {
  const { mode } = useThemeStore()

  const theme = useMemo(() => createTheme(mode === 'light' ? lightTheme : darkTheme), [mode])
  const queryClient = useMemo(() => new QueryClient(), [])

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Toaster />
        <Outlet />
      </ThemeProvider>
    </QueryClientProvider>
  )
}
