const farmerClient = require("../client/getFarmerbyZip");
const getMarketById = require("../client/getMarketByid").getMarketById;
const getFormat = require("../lib/jsonFormat").getFormat;
exports.getFarmersZip = async (ctx) => {
  let duration = new Date();
  let batchSize = ctx.state.config.api.batch_size;
  let dataBatch = [];
  const zip = ctx.params.code;
  const data = await farmerClient.getFarmersbyZip(ctx, zip);
  const clients = data.results;
  for (let i = 0; i < batchSize; i++) {
    let { marketdetails } = await getMarketById(ctx, clients[i].id);
    let details = {
      address: marketdetails.Address,
      maps: {
        google: marketdetails.GoogleLink,
      },
      products: marketdetails.Products,
      schedule: marketdetails.Schedule,
    };
    let combinedData = {
      id: clients[i].id,
      marketName: clients[i].marketname,
      marketDetails: { ...details },
    };
    dataBatch[i] = { ...combinedData };
  }
  const returnData = await getFormat(ctx, dataBatch, duration);
  ctx.body = returnData;
};
