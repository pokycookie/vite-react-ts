import { useMemo } from 'react'
import { useThemeStore } from '@/stores'
import { Outlet } from 'react-router-dom'
import { Header } from '@/sections/layout'
import { Toaster } from '@/components/toast'
import { darkTheme, lightTheme } from '@/themes/theme'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material'

export default function MainLayout() {
  const { mode } = useThemeStore()

  const theme = useMemo(() => createTheme(mode === 'light' ? lightTheme : darkTheme), [mode])
  const queryClient = useMemo(() => new QueryClient(), [])

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Toaster />
        <Header />
        <Container sx={{ p: 4 }}>
          <Outlet />
        </Container>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
