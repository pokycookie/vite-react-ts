import paths from '@/configs/paths'
import { Link } from '@/components/link'
import { ModeButton } from '@/components/setting-button'
import { LocaleButton } from '@/components/setting-button/locale-button'

import { Stack, AppBar, Toolbar, Typography } from '@mui/material'

export function Header() {
  return (
    <AppBar position="static" sx={{ boxShadow: 'none' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Stack direction="row" spacing={1}>
          <Link to={paths.root}>
            <Typography variant="h5" color="white">
              S11P2E201
            </Typography>
          </Link>
        </Stack>
        <Stack direction="row" spacing={0.5}>
          <ModeButton />
          <LocaleButton />
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
