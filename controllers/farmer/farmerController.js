const farmerClient = require("../../client/getFarmerbyZip");
const batchCaller = require("../../lib/batchCalls").getBatchCall;
const getMarketById = require("../../client/getMarketByid").getMarketById;
const farmerResponse = require("./farmResponse").getFormatted;

exports.getFarmersZip = async (ctx, next) => {
  let batchSize = ctx.state.config.api.batch_size;
  const zip = ctx.params.code;
  const { results: clients } = await farmerClient.getFarmersbyZip(ctx, zip);
  const marketDetails = await batchCaller(batchSize, clients, getMarketById);
  ctx.state.retData = await farmerResponse(clients, marketDetails);
  next();
};
