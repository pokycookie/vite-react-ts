import paths from '@/configs/paths'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react/dist/iconify.js'
import { ModeButton } from '@/components/theme-button'

import { List, Card, ListItem, Container, Typography } from '@mui/material'

export default function MainView() {
  return (
    <Container>
      <Typography variant="h2">안녕하세요!</Typography>
      <Icon icon="solar:airbuds-case-open-bold" width={20} height={20} />
      <ModeButton />
      <Card>123</Card>

      <List>
        <ListItem>
          <Link to={paths.components.toast}>toast</Link>
        </ListItem>
        <ListItem>
          <Link to={paths.components.scrollbar}>scrollbar</Link>
        </ListItem>
        <ListItem>
          <Link to={paths.mirage.root}>mirage</Link>
        </ListItem>
        <ListItem>
          <Link to={paths.locale.root}>locale</Link>
        </ListItem>
      </List>
    </Container>
  )
}
