const { login } = require("../controller/user");
const { SuccessModel, ErrorModel } = require("../model/resModel");
const { set } = require("../db/redis");

const handleUserRouter = (req, res) => {
  const method = req.method;

  //登陆
  if (method === "POST" && req.path === "/api/user/login") {
    const { username, password } = req.body;
    const result = login(username, password);
    return result.then(data => {
      if (data.username) {
        //设置session
        req.session.username = data.username;
        req.session.realname = data.realname;

        //同步到 redis
        set(req.sessionId, req.session);

        console.log("session", req.session);

        return new SuccessModel();
      } else {
        return new ErrorModel("登陆失败");
      }
    });
  }

  // //登陆验证的测试
  // if (method === "GET" && req.path === "/api/user/login-test") {
  //   if (req.session.username) {
  //     return Promise.resolve(new SuccessModel());
  //   }
  //   return Promise.resolve(new ErrorModel("尚未登陆"));
  // }
};

module.exports = handleUserRouter;
