const Router = require("koa-router");
const controller = require("../controllers/controller");
const { jsonAuth } = require("../middlewares/jwtAuth");
const auth = require("../middlewares/jwtAuth").jsonAuth;

const home = new Router({
  prefix: "/home",
});

home.get("/check", auth, controller.getCheck);

home.get("/token", controller.getToken);

module.exports = home;
