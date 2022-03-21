const overrides = require("../src/theme/index");
export const parameters = {
  chakra: {
    overrides,
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
