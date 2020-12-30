import * as createPalette from '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createPalette' {
  export interface SimplePaletteColorOptions {
    light?: string;
    lighter?: string;
    main: string;
    dark?: string;
    darker?: string;
    contrastText?: string;
  }

  interface PaletteOptions {
    green: createPalette.SimplePaletteColorOptions;
    red: createPalette.SimplePaletteColorOptions;
    black: createPalette.SimplePaletteColorOptions;
    white: createPalette.SimplePaletteColorOptions;
    gray: createPalette.SimplePaletteColorOptions;
    yellow: createPalette.SimplePaletteColorOptions;
    blue: createPalette.SimplePaletteColorOptions;
    purple: createPalette.SimplePaletteColorOptions;
  }

  export interface Palette {
    green: createPalette.SimplePaletteColorOptions;
    red: createPalette.SimplePaletteColorOptions;
    black: createPalette.SimplePaletteColorOptions;
    white: createPalette.SimplePaletteColorOptions;
    gray: createPalette.SimplePaletteColorOptions;
    yellow: createPalette.SimplePaletteColorOptions;
    blue: createPalette.SimplePaletteColorOptions;
    purple: createPalette.SimplePaletteColorOptions;
  }
}

declare module '@material-ui/core/styles/createTypography' {
  interface FontStyle {
    fontWeightBolder: React.CSSProperties['fontWeight'];
    secondaryFontFamily: React.CSSProperties['fontFamily'];
  }
}
