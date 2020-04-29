const jwt = require("jsonwebtoken");

exports.getCheck = async (ctx) => {
  const userId = ctx.state.userId;
  ctx.body = { userId: `${userId}`, loggedIn: true };
};

exports.getToken = async (ctx) => {
  const token = jwt.sign({ userId: "12345" }, "meetpatel", { expiresIn: "1h" });
  ctx.body = { token: token };
};
