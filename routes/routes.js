const Router = require("koa-router");
const controller = require("../controllers/healthcheck");
const { jsonAuth } = require("../middlewares/jwtAuth");
const auth = require("../middlewares/jwtAuth").jsonAuth;
const clientCont = require("../client/farmMarket");

const home = new Router({
  prefix: "/home",
});

home.get("/check", clientCont.getFarmersZip);

home.get("/token", controller.getToken);

module.exports = home;
