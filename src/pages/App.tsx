import { Icon } from '@iconify/react/dist/iconify.js'
import { ModeButton } from '@/components/theme-button'

import { Button, Container, Typography } from '@mui/material'

export default function App() {
  return (
    <Container sx={{ p: 2 }}>
      <Typography variant="h2">안녕하세요!</Typography>
      <Button>
        <Icon icon="solar:airbuds-case-open-bold" width={20} height={20} />
      </Button>
      <ModeButton />
    </Container>
  )
}
