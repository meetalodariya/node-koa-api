const Router = require("koa-router");

const router = Router();

router.get("/check", (ctx) => {
  ctx.body = "hello this is middleware";
});

module.exports = router;
