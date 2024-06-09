import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";


export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  "@babel/plugin-transform-private-property-in-object",
  "next/core-web-vitals",
  "eslint:recommended", "plugin:react/recommended", "plugin:prettier/recommended",
  ...fixupConfigRules(pluginReactConfig),
  {
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      "react/react-in-jsx-scope": "off"
    },
  }
];