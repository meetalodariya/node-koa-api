const Axios = require("./xhr");
const config = require("config");
exports.getMarketById = async (id) => {
  const host = config.get("api.host");
  const xhr = await new Axios(
    host + "farmersmarkets/v1/data.svc/mktDetail?id=" + id,
    "get",
    null,
    { "Content-Type": "application/json" }
  );
  return await xhr.send();
};
