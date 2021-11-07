module.exports = {
  presets: [
    '@babel/preset-env',
    [
      '@babel/preset-react',
      { runtime: 'automatic', importSource: '@emotion/react' },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['@emotion/babel-plugin'],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    '@babel/plugin-transform-runtime',
  ],
};
