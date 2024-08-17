import type { Theme, Components } from '@mui/material'

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    soft: true
  }
}

const MuiButtonBase: Components<Theme>['MuiButtonBase'] = {
  styleOverrides: { root: ({ theme }) => ({ fontFamily: theme.typography.fontFamily }) },
}

const MuiButton: Components<Theme>['MuiButton'] = {
  defaultProps: {
    variant: 'contained',
  },
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      boxShadow: 'none',
      '&:hover': {
        boxShadow: 'none',
      },
    }),
  },
}

export const button = { MuiButtonBase, MuiButton }
