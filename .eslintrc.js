module.exports = {
  root: true,
  extends: ["next/core-web-vitals", "prettier"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
  },
};
