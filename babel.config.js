module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["module-resolver", {
        root: ["."],
        alias: {
          "@screens": "./app/screens",
          "@navigation": "./app/navigation",
          "@components": "./app/components"
        }
      }]
    ]
  };
};
