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

const getDetail = id => {
  return {
    id: 1,
    title: "标题1",
    content: "内容1",
    createTime: 1589897900718,
    author: "jeff"
  };
};

const newBlog = (blogData = {}) => {
  console.log("newBlog");
  return {
    id: 3
  };
};

const updateBlog = (id, blogData = {}) => {
  console.log("update", id, blogData);
  return true;
};

const deleteBlog = id => {
  return true;
};

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  deleteBlog
};
