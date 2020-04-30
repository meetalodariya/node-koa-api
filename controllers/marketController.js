const farmerMarketClient = require("../client/getMarketByid");

exports.getMarketById = async (ctx, farmerId) => {
  const id = farmerId || ctx.params.id;
  const result = await farmerMarketClient.getMarketById(ctx, id);
  ctx.body = result;
};
