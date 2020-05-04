const http = require("http");

class JsonFormat {
  constructor(ctx, code, data) {
    this.program = ctx.state.config.program.name;
    this.version = ctx.state.config.program.version;
    this.release = ctx.state.config.program.release;
    this.datatime = new Date().toISOString();
    this.timestamp = new Date().getTime();
    this.status = http.STATUS_CODES[code];
    this.code = code;
    this.message = "OK";
    this.data = data;
    this.duration = new Date() - ctx.state.startTime;
    this.message = "Service is healthy";
  }
}

class ReturnData extends JsonFormat {
  constructor(ctx) {
    super(ctx, 200, ctx.state.retData);
  }

  async getData() {
    return this;
  }
}

class ErrorData extends JsonFormat {
  constructor(ctx, err) {
    super(ctx, err.status, { error: err.message });
  }

  async getData() {
    return this;
  }
}

module.exports = { ReturnData, ErrorData };
