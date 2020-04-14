const configConsts = require("../constants");

exports.getCheck = async (ctx) => {
  ctx.body = `
  Server is running on: ${ctx.config.dbconfig.port}
  URI : ${ctx.config.dbconfig.uri}
  `;
};
