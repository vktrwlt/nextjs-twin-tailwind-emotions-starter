module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-react': {
          runtime: 'automatic',
          importSource: '@emotion/react',
        },
      },
    ],
  ],
  plugins: [
    'babel-plugin-twin', // auto import tw
    '@emotion/babel-plugin',
    'babel-plugin-macros',
  ],
};
