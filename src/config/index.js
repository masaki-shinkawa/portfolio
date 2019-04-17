const getConfig = () => {
  try {
    const defaultConfig = require("./default.js");
    const env = require(`./${process.env.VUE_APP_MODE}.js`);
    return { ...defaultConfig.default, ...env.default };
  } catch (error) {
    return require("./default.js").default;
  }
};

export default getConfig();
