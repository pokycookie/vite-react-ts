import { useTranslate } from '@/locales'

import { Stack, Button, Container, Typography } from '@mui/material'

export default function LocalView() {
  const { t, changeLang } = useTranslate()

  return (
    <Container>
      <Stack direction="row" spacing={1}>
        <Button onClick={() => changeLang('ko')}>KO</Button>
        <Button onClick={() => changeLang('en')}>EN</Button>
      </Stack>
      <Typography>{t('test')}</Typography>
    </Container>
  )
}
