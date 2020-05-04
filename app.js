const Koa = require("koa");
const app = new Koa();
const config = require("config");
const clientRoutes = require("./routes/clientFarmersRoutes");
const appRoutes = require("./routes/routes");
const json = require("koa-json");
const JsonRes = require("./response/apiResponseFormat");
app.use(json());

app.use(async (ctx, next) => {
  try {
    ctx.state.startTime = new Date();
    ctx.state.config = config;
    await next();
  } catch (err) {
    ctx.app.emit("errorHandler", err, ctx);
  }
});

app.use(clientRoutes.routes());
app.use(appRoutes.routes());
app.use(async (ctx) => {
  if (ctx.state.retData) {
    const returnData = new JsonRes.ReturnData(ctx);
    const jsonResponse = await returnData.getData();
    ctx.body = jsonResponse;
  }
});

app.on("errorHandler", async (err, ctx) => {
  let errObj = {
    status: err.status || 500,
    message: err.message || "Server Error",
  };
  const errorData = new JsonRes.ErrorData(ctx, errObj);
  const jsonResponse = await errorData.getData();
  ctx.body = jsonResponse;
});
app.listen(3000);
