const Koa = require("koa");
const app = new Koa();
const config = require("config");
const configConsts = require("./constants");
const routes = require("./routes/routes");
const json = require("koa-json");
app.context.configs = config;
app.use(json());

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.app.emit("errorHandler", err, ctx);
  }
});

app.use(routes.routes());

app.on("errorHandler", (err, ctx) => {
  ctx.status = err.status || 500;
  let msg = err.message || "Server Error";
  ctx.body = { error: msg };
});
app.listen(config.get(configConsts.PORT_NUM));
