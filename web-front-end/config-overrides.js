const path =require('path') 
const {
  override,
  fixBabelImports,
  addWebpackResolve,
  addWebpackAlias,
  addDecoratorsLegacy
} = require("customize-cra");

function resolve(dir) {
  return path.join(__dirname, dir)
}

const customize = () => (config, env) => {
  config.resolve.alias['@'] = resolve('src')
  if (env === 'production') {
      config.externals = {
          'react': 'React',
          'react-dom': 'ReactDOM'
      }
  }
  return config
};

module.exports = override(
  fixBabelImports("import ", {
    libraryName: "antd-mobile",
    style: "css",
  }),
  addWebpackResolve({
    extensions: [".js", ".json", ".jsx",".css"],
  }),
  addWebpackAlias({
    "@": path.resolve(__dirname, "src/"),
    "@a":path.resolve(__dirname,"src/assets/"),
    "@c":path.resolve(__dirname,"src/components/"),
    "@h":path.resolve(__dirname,"src/home/"),
    "@u":path.resolve(__dirname,"src/utils/")
  }),
  addDecoratorsLegacy(),
  customize()

);
