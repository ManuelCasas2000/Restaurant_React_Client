// VITE_API_URL: import.meta.env.VITE_API_URL

module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
    plugins: [
        function () {
          return {
            visitor: {
              MetaProperty(path) {
                path.replaceWithSourceString('process')
              },
            },
          }
        },
      ]
};