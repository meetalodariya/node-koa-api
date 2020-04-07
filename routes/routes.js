const Router = require("koa-router");
const controller = require("../controllers/controller");

const home = new Router({
  prefix: "/home",
});

home.get("/check", controller.getCheck);

module.exports = home;
