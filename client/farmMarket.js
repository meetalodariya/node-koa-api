const Axios = require("../utils/xhr");

exports.getFarmersZip = async (ctx) => {
  const host = ctx.state.config.api.host;
  const zip = ctx.params.code;
  const xhr = await new Axios(
    host + "farmersmarkets/v1/data.svc/zipSearch?zip=" + zip,
    "get",
    null,
    { "Content-Type": "application/json" }
  );
  const result = await xhr.send();
  ctx.body = result;
};

exports.getMarketById = async (ctx) => {
  const host = ctx.state.config.api.host;
  const id = ctx.params.id;
  const xhr = await new Axios(
    host + "farmersmarkets/v1/data.svc/mktDetail?id=" + id,
    "get",
    null,
    { "Content-Type": "application/json" }
  );
  const result = await xhr.send();
  ctx.body = result;
};
