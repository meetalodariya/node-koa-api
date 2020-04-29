const Koa = require("koa");
const app = new Koa();
const config = require("config");
const configConsts = require("./constants");
const clientRoutes = require("./routes/clientApi");
const appRoutes = require("./routes/routes");
const json = require("koa-json");
app.use(json());

app.use(async (ctx, next) => {
  try {
    ctx.state.config = config;
    await next();
  } catch (err) {
    ctx.app.emit("errorHandler", err, ctx);
  }
});

app.use(clientRoutes.routes());
app.use(appRoutes.routes());
app.on("errorHandler", (err, ctx) => {
  ctx.status = err.status || 500;
  let msg = err.message || "Server Error";
  ctx.body = { error: msg };
});
app.listen(3000);
