module.exports = {
  // Type check TypeScript files
  "**/*.(ts|tsx)": () => "pnpm tsc --noEmit",

  // // // Lint & Prettify TS and JS files
  // // '**/*.(ts|tsx|js)': (filenames) => [
  // //   `pnpm eslint ${filenames.join(' ')}`,
  // //   `pnpm prettier --write ${filenames.join(' ')}`,
  // // ],

  // // // Prettify only Markdown and JSON files
  // // '**/*.(md|mdx|json)': (filenames) =>
  // //   `pnpm prettier --write ${filenames.join(' ')}`,
}
