const Axios = require("./xhr");

exports.getMarketById = async (ctx, id) => {
  const host = ctx.state.config.api.host;
  const xhr = await new Axios(
    host + "farmersmarkets/v1/data.svc/mktDetail?id=" + id,
    "get",
    null,
    { "Content-Type": "application/json" }
  );
  return await xhr.send();
};
