import { useThemeStore } from '@/stores'
import { Icon } from '@iconify/react/dist/iconify.js'

import { Button, Container, Typography } from '@mui/material'

export default function App() {
  const { toggle } = useThemeStore()

  return (
    <Container sx={{ p: 2 }}>
      <Typography variant="h2">안녕하세요!</Typography>
      <Button onClick={toggle}>
        <Icon icon="solar:airbuds-case-open-bold" width={20} height={20} />
      </Button>
    </Container>
  )
}
