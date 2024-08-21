import paths from '@/configs/paths'
import { Link } from '@/components/link'
import { useTranslate } from '@/locales'

import { List, Button, ListItem, Container } from '@mui/material'

export default function MainView() {
  const { t } = useTranslate('paths')

  return (
    <Container>
      <List>
        <ListItem sx={{ p: 0 }}>
          <Link sx={{ color: (theme) => theme.palette.text.primary }} to={paths.components.toast}>
            <Button variant="soft">{t('components.toast')}</Button>
          </Link>
        </ListItem>
        <ListItem sx={{ p: 0 }}>
          <Link
            sx={{ color: (theme) => theme.palette.text.primary }}
            to={paths.components.scrollbar}
          >
            <Button variant="soft">{t('components.scrollbar')}</Button>
          </Link>
        </ListItem>
        <ListItem sx={{ p: 0 }}>
          <Link sx={{ color: (theme) => theme.palette.text.primary }} to={paths.mirage.root}>
            <Button variant="soft">{t('mirage')}</Button>
          </Link>
        </ListItem>
        <ListItem sx={{ p: 0 }}>
          <Link sx={{ color: (theme) => theme.palette.text.primary }} to={paths.locale.root}>
            <Button variant="soft">{t('locale')}</Button>
          </Link>
        </ListItem>
      </List>
    </Container>
  )
}
