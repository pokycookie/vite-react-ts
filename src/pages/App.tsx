import { Icon } from '@iconify/react/dist/iconify.js'
import { ModeButton } from '@/components/theme-button'

import { Card, Container, Typography } from '@mui/material'

export default function App() {
  return (
    <Container sx={{ p: 2 }}>
      <Typography variant="h2">안녕하세요!</Typography>
      <Icon icon="solar:airbuds-case-open-bold" width={20} height={20} />
      <ModeButton />
      <Card>123</Card>
    </Container>
  )
}
