module.exports = {
  preset: 'react-native',
  rootDir: '../',
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-native-gesture-handler|react-native-safe-area-context|react-native-screens|react-native-status-bar-height|react-native-styled-text|react-native-vector-icons)/)',
  ],
};
