exports.getFormat = async (ctx, detailArray, duration) => {
  let json = {
    program: ctx.state.config.program.name,
    version: ctx.state.config.program.version,
    release: ctx.state.config.program.release,
    datatime: new Date().toISOString(),
    timestamp: new Date().getTime(),
    status: "success",
    code: "200",
    message: "OK",
    data: {
      marketPlaces: detailArray,
    },
    duration: new Date() - duration,
    message: "The service is healthy",
  };
  return json;
};
