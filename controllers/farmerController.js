const farmerClient = require("../client/getFarmerbyZip");

exports.getFarmersZip = async (ctx) => {
  const zip = ctx.params.code;
  const data = await farmerClient.getFarmersbyZip(ctx, zip);
  ctx.body = data;
};
