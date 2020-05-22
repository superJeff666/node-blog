const redis = require("redis");

//创建客户端
const redisClient = redis.createClient(6379, "127.0.0.1");
redisClient.on("error", err => {
  console.log(err);
});

//测试
redisClient.set("myname", "jeff", redis.print);
redisClient.get("myname", (err, val) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("val", val);

  //退出
  redisClient.quit();
});