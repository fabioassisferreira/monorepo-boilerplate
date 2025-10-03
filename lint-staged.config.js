module.exports = {
  "*.md,*.json,*.{ts,tsx,js,jsx,scss,md,json}": () => "lerna run lint-staged",
};
