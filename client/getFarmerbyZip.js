const Axios = require("./xhr");

exports.getFarmersbyZip = async (ctx, zip) => {
  const host = ctx.state.config.api.host;
  const xhr = await new Axios(
    host + "farmersmarkets/v1/data.svc/zipSearch?zip=" + zip,
    "get",
    null,
    { "Content-Type": "application/json" }
  );
  let res = await xhr.send();
  if (res.results[0].id == "Error") {
    let err = new Error(res.results[0].marketname);
    err.status = 404;
    throw err;
  }
  return res;
};
