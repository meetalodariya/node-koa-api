const Router = require("koa-router");
const farmerController = require("../controllers/farmer/farmerController");
const marketController = require("../controllers/marketController");
const { jsonAuth } = require("../middlewares/jwtAuth");
const auth = require("../middlewares/jwtAuth").jsonAuth;
const client = new Router({
  prefix: "/client",
});

client.get("/data/farmer/byZip/:code", farmerController.getFarmersZip);

client.get("/data/farmermarkets/byId/:id", marketController.getMarketById);

module.exports = client;
