const Koa = require("koa");
const app = new Koa();
const mongoose = require("mongoose");
const config = require("config");
const configConsts = require("./constants");

const routes = require("./routes/routes");

app.use(routes.routes());
mongoose.connect(config.get(configConsts.URI)).then((result) => {
  app.listen(config.get(configConsts.PORT_NUM));
});
