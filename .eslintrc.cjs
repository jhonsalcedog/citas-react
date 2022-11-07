const settings = require('@condor-labs/eslint-config/config');
settings.rules['no-unreachable-loop'] = 'warn';
settings.parser = '@babel/eslint-parser';
settings.parserOptions.requireConfigFile = false;
if (!settings.extends.includes('plugin:react/recommended')) {
  settings.extends.push('plugin:react/recommended');
}
if (!settings.extends.includes('plugin:jsx-a11y/recommended')) {
  settings.extends.push('plugin:jsx-a11y/recommended');
}
if (!settings.extends.includes('plugin:react/jsx-runtime')) {
  settings.extends.push('plugin:react/jsx-runtime');
}
settings.settings.react = { version: 'detect' };
settings.parserOptions.ecmaFeatures.jsx = true;
if (!settings.parserOptions.babelOptions.presets.includes('@babel/preset-react')) {
  settings.parserOptions.babelOptions.presets.push('@babel/preset-react');
}
module.exports = settings;
