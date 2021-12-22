import { sharedBaseStyle, light, dark } from "./sharedStyleLinkButton";

const Button = {
  baseStyle: {
    ...sharedBaseStyle,
  },
  sizes: {
    sm: {},
    md: {},
    lg: {},
  },
  variants: {
    ...light,
    ...dark,
    // Add here the shared variants from the sharedStyleLinkButton.js
  },
  defaultProps: {
    // size: 'md',
    // variant: 'light',
  },
};

export default Button;
