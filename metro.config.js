module.exports = {
  resolver: {
    sourceExts: ["jsx", "js", "ts", "tsx"], // Extensiones de archivo para resolver
    extraNodeModules: {
      // Mapeo de rutas de importación personalizadas
      "@src": `${__dirname}/src`,
      "@assets": `${__dirname}/assets`,
      "@components": `${__dirname}/components`,
      "@config": `${__dirname}/config`,
      "@routes": `${__dirname}/routes`,
      "@hooks": `${__dirname}/hooks`,
      "@screens": `${__dirname}/screens`,
      "@services": `${__dirname}/services`,
      "@styles": `${__dirname}/styles`,
      "@utils": `${__dirname}/utils`,
    },
  },
};
