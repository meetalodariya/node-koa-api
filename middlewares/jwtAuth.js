const jwt = require("jsonwebtoken");

exports.jsonAuth = async (ctx, next) => {
  const authHeader = ctx.header.authorization;
  if (!authHeader) {
    const error = new Error("Authorization failed");
    error.status = 401;
    throw error;
  }
  const token = authHeader.split(" ")[1];
  decodedToken = jwt.verify(token, "meetpatel");
  if (!decodedToken) {
    const error = new Error("Authorization failed");
    error.status = 401;
    throw error;
  }
  ctx.state.userId = decodedToken.userId;
  next();
};
