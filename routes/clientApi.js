const Router = require("koa-router");
const clientCont = require("../client/farmMarket");
const { jsonAuth } = require("../middlewares/jwtAuth");
const auth = require("../middlewares/jwtAuth").jsonAuth;
const client = new Router({
  prefix: "/client",
});

client.get("/data/byZip/:code", clientCont.getFarmersZip);

client.get("/data/byId/:id", clientCont.getMarketById);
module.exports = client;
