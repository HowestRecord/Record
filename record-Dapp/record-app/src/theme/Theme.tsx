import React, { ReactNode } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createMuiTheme, SimplePaletteColorOptions, ThemeOptions } from '@material-ui/core/styles';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';

import { useThemeOptions } from '../hooks/useThemeOptions/useThemeOptions';

import { typography } from './typography';
import { lightPalette, palette } from './palette';

const defaultTheme = createMuiTheme();

const getDefaultOptions = (palette: PaletteOptions) => ({
  typography,
  overrides: {
    MuiInputLabel: {
      root: {
        '&$focused': {
          color: palette.gray.light,
        },
      },
    },
    MuiSnackbarContent: {
      root: {
        backgroundColor: palette.background?.default,
        color: palette.text?.primary,
      },
    },
    MuiInput: {
      underline: {
        '&:after': {
          borderBottom: `${defaultTheme.spacing(0.125)}px solid ${(palette.primary as SimplePaletteColorOptions).main}`,
        },
        '&$focused:after': {
          transform: 'scaleX(1)',
        },
        '&:before': {
          borderBottom: `${defaultTheme.spacing(0.125)}px solid ${palette.gray.light}`,
        },
        '&:hover:not($disabled):before': {
          borderBottom: `${defaultTheme.spacing(0.125)}px solid ${palette.gray.light}`,
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            borderBottom: `${defaultTheme.spacing(0.125)}px solid ${palette.gray.light}`,
          },
        },
        '&$disabled:before': {
          borderBottomStyle: 'dotted',
        },
      },
    },
    MuiDialogTitle: {
      root: {
        padding: defaultTheme.spacing(6.25, 3.5),
      },
    },
    MuiDialogContent: {
      root: {
        padding: defaultTheme.spacing(0, 3.5),
      },
    },
    MuiDialogActions: {
      root: {
        padding: defaultTheme.spacing(2.25, 3.5, 6.25, 3.5),
      },
    },
    MuiSwitch: {
      colorPrimary: {
        color: (palette.primary as SimplePaletteColorOptions).light,
      },
      root: {
        '&$checked': {
          color: (palette.primary as SimplePaletteColorOptions).main,
        },
      },
    },
  },
});

const themeOptions: ThemeOptions = {
  palette,
  ...getDefaultOptions(palette),
};

const theme = createMuiTheme(themeOptions);

const lightTheme = createMuiTheme({
  palette: lightPalette,
  ...getDefaultOptions(lightPalette),
});

export const Theme = ({ children }: { children: ReactNode }) => {
  const { isDarkTheme } = useThemeOptions();

  return (
    <ThemeProvider theme={isDarkTheme ? theme : lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
