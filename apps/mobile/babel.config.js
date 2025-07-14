module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module:react-native-dotenv', {
        moduleName: '@env',
        path: '../../.env',        // ← relative to apps/mobile
        allowUndefined: true
      }]
    ]
  };
};
