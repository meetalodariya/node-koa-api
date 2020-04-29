const axios = require("axios");

class Axios {
  constructor(url, method, body, headers) {
    this.url = url;
    this.method = method;
    this.body = body || null;
    this.headers = headers;
  }

  async send() {
    let res = await axios({
      method: this.method,
      data: this.body,
      url: this.url,
      headers: this.headers,
    });
    return res.data;
  }
}

module.exports = Axios;
