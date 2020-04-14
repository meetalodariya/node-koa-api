const Koa = require("koa");
const app = new Koa();
const config = require("config");
const configConsts = require("./constants");
const routes = require("./routes/routes");

app.use((ctx, next) => {
  ctx.config = config;
  next();
});

app.use(routes.routes());

app.listen(config.get(configConsts.PORT_NUM));
