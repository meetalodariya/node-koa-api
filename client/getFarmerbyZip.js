const Axios = require("../utils/xhr");

exports.getFarmersbyZip = async (ctx, zip) => {
  const host = ctx.state.config.api.host;
  const xhr = await new Axios(
    host + "farmersmarkets/v1/data.svc/zipSearch?zip=" + zip,
    "get",
    null,
    { "Content-Type": "application/json" }
  );
  return await xhr.send();
};
