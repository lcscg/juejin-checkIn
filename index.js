const axios = require("axios");

const { cookie, aid, uuid, _signature, PUSH_PLUS_TOKEN } = {
  cookie: "",
  aid: "",
  uuid: "",
  _signature: "",
};

const BASEURL = "https://api.juejin.cn/growth_api/v1/check_in"; // 掘金签到api
const PUSH_URL = "http://www.pushplus.plus/send"; // pushplus 推送api

const URL = `${BASEURL}?aid=${aid}&uuid=${uuid}&_signature=${_signature}`;

const HEADERS = {
  cookie,
  "user-agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36 Edg/92.0.902.67",
};

// 签到
async function signIn() {
  const res = await axios({
    url: BASEURL,
    method: "post",
    headers: { Cookie: cookie },
  });
  choujiang();
}
// 抽奖
async function choujiang() {
  const res = await axios({
    url: "https://api.juejin.cn/growth_api/v1/lottery/draw",
    method: "post",
    headers: { Cookie: cookie },
  });
}
exports.handler = async (event, context, callback) => {
  signIn();
};
