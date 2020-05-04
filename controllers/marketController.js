const farmerMarketClient = require("../client/getMarketByid");

exports.getMarketById = async (ctx) => {
  const id = ctx.params.id;
  const result = await farmerMarketClient.getMarketById(ctx, id);
  ctx.body = result;
};
