// module.exports = {
//   devServer: {
//     port: 8081
//   }
// }

const path = require("path");
const vueSrc = "./src";
module.exports = ({
  // devServer: {
  //   port: 8081
  // },
  runtimeCompiler: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, vueSrc)
      },
      extensions: ['.js', '.vue', '.json']
    }
  },
});