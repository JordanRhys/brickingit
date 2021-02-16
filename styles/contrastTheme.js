import theme from './theme';

const oldColors = theme.colors;

const colors = {
  ...oldColors,
  background: oldColors.primary,
  primary: oldColors.background,
  heading: oldColors.background,
  body: oldColors.background,
};

const contrastTheme = {
  ...theme,
  colors,
};

export default contrastTheme;
