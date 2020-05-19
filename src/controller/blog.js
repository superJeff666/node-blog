const getList = (author, keyword) => {
  //先返回假数据
  return [
    {
      id: 1,
      title: "标题1",
      content: "内容1",
      createTime: 1589897900718,
      author: "jeff"
    },
    {
      id: 2,
      title: "标题2",
      content: "内容2",
      createTime: 1589897900719,
      author: "tom"
    }
  ];
};

const getDetail =  (id) => {
    return {
        id: 1,
        title: "标题1",
        content: "内容1",
        createTime: 1589897900718,
        author: "jeff"
      }
}

module.exports = {
  getList,
  getDetail
};
