import { Stack, Button } from '@mui/material'

export default function ToastView() {
  return (
    <Stack direction="row" spacing={1}>
      <Button color="success">Success</Button>
      <Button color="info">Info</Button>
      <Button color="warning">Warning</Button>
      <Button color="error">Error</Button>
    </Stack>
  )
}
