import { toast } from 'sonner'
import { Icon } from '@iconify/react/dist/iconify.js'
import { ModeButton } from '@/components/theme-button'

import { Button, Container, Typography } from '@mui/material'

export default function App() {
  const onToast = () => {
    toast.success('Hello')
    toast.info('Hello')
    toast.warning('Hello')
    toast.error('Hello')
  }

  return (
    <Container sx={{ p: 2 }}>
      <Typography variant="h2">안녕하세요!</Typography>
      <Button onClick={onToast}>
        <Icon icon="solar:airbuds-case-open-bold" width={20} height={20} />
      </Button>
      <ModeButton />
    </Container>
  )
}
