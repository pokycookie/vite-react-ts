import COLOR from '@/configs/color'

import { alpha, type TypeAction, type PaletteOptions } from '@mui/material'

export const baseAction: Partial<TypeAction> = {
  hover: alpha(COLOR.grey[500], 0.08),
  selected: alpha(COLOR.grey[500], 0.16),
  focus: alpha(COLOR.grey[500], 0.24),
  disabled: alpha(COLOR.grey[500], 0.24),
  disabledBackground: alpha(COLOR.grey[500], 0.24),
  hoverOpacity: 0.08,
  disabledOpacity: 0.48,
}

export const basePalette: PaletteOptions = {
  primary: { ...COLOR.primary },
  secondary: { ...COLOR.secondary },
  success: { ...COLOR.success },
  info: { ...COLOR.info },
  warning: { ...COLOR.warning },
  error: { ...COLOR.error },
  grey: { ...COLOR.grey },
  common: { ...COLOR.common },
  divider: COLOR.grey[500],
}

export const lightPalette: PaletteOptions = {
  ...basePalette,
  text: {
    primary: COLOR.grey[800],
    secondary: COLOR.grey[600],
    disabled: COLOR.grey[500],
  },
  background: {
    paper: '#FFFFFF',
    default: '#FFFFFF',
  },
  action: {
    ...baseAction,
    active: COLOR.grey[600],
  },
}

export const darkPalette: PaletteOptions = {
  ...basePalette,
  text: {
    primary: '#FFFFFF',
    secondary: COLOR.grey[500],
    disabled: COLOR.grey[600],
  },
  background: {
    paper: COLOR.grey[800],
    default: COLOR.grey[900],
  },
  action: {
    ...baseAction,
    active: COLOR.grey[500],
  },
}
