import paths from '@/configs/paths'
import { Link } from 'react-router-dom'

import { List, ListItem, Container } from '@mui/material'

export default function MainView() {
  return (
    <Container>
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
      </List>
    </Container>
  )
}
