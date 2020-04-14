const config = require("config");
const configConsts = require("../constants");

exports.getCheck = async (ctx) => {
  ctx.body = `
  Server is running on: ${config.get(configConsts.PORT_NUM)}
  URI : ${config.get(configConsts.URI)}
  `;
};
