import theme from './theme';

const oldColors = theme.colors;

const colors = {
  ...oldColors,
  primary: colors.background,
  heading: colors.primary,
  body: colors.primary
};

const contrastTheme = {...theme, colors};

export default contrastTheme;
