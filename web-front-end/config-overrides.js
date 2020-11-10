const path =require('path') 
const {
  override,
  fixBabelImports,
  addWebpackResolve,
  addWebpackAlias,
  addDecoratorsLegacy
} = require("customize-cra");

module.exports = override(
  fixBabelImports("import ", {
    libraryName: "antd-mobile",
    style: "css",
  }),
  addWebpackResolve({
    extensions: [".js", ".json", ".jsx",".css"],
  }),
  addWebpackAlias({
<<<<<<< HEAD
    "@": path.resolve(__dirname, "./src/"),
    "@a": path.resolve(__dirname, "./src/assets/ "),
    "@c":path.resolve(__dirname,"./src/components"),
    "@u":path.resolve(__dirname,"./src/utils")
=======
    "@": path.resolve(__dirname, "src/"),
    "@a":path.resolve(__dirname,"src/assets/"),
    "@c":path.resolve(__dirname,"src/components/"),
    "@h":path.resolve(__dirname,"src/home/"),
    "@u":path.resolve(__dirname,"src/utils/"),
>>>>>>> master
  }),
  addDecoratorsLegacy()
);
