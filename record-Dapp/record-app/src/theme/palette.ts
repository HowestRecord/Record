import { PaletteOptions } from '@material-ui/core/styles/createPalette';

const primary = '#7B4DBF';
const primaryLight = '#A466FF';
const secondary = '#33CBCB';
const black = '#1B2127';
const blackLighter = '#252B32';
const blackLight = '#373E44';
const white = '#fff';
const grayDark = '#2F363D';
const grayDarker = '#464D54';
const gray = '#5E666C';
const grayLight = '#8D959B';
const red = '#F71A56';
const yellow = '#F5C92B';
const blue = '#4A97FB';
const green = '#00DA6E';

//light theme
const lightBlack = '#EFF4F9';
const lightDarkGray = '#FFFFFF';
const lightWhite = '#0E1218';
const lightGrayDarker = '#FFFFFF';

export const palette: PaletteOptions = {
  primary: {
    main: primary,
    light: primaryLight,
  },
  secondary: {
    main: secondary,
  },
  black: {
    main: black,
    light: blackLight,
    lighter: blackLighter,
  },
  white: {
    main: white,
  },
  gray: {
    dark: grayDark,
    darker: grayDarker,
    main: gray,
    light: grayLight,
  },
  red: {
    main: red,
  },
  blue: {
    main: blue,
  },
  green: {
    main: green,
  },
  yellow: {
    main: yellow,
  },
  error: {
    main: red,
  },
  success: {
    main: secondary,
  },
  warning: {
    main: yellow,
  },
  text: {
    primary: white,
    secondary: grayLight,
  },
  background: {
    default: black,
    paper: black,
  },
  info: {
    main: primaryLight,
  },
  purple: {
    main: primary,
    light: primaryLight,
  },
};

export const lightPalette: PaletteOptions = {
  ...palette,
  gray: {
    dark: lightDarkGray,
    darker: lightGrayDarker,
    main: gray,
    light: grayLight,
  },
  black: {
    main: lightBlack,
    light: blackLight,
  },
  text: {
    primary: lightWhite,
    secondary: grayLight,
  },
  background: {
    default: lightBlack,
    paper: lightBlack,
  },
};
