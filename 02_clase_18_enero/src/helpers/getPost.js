const getPost = async (userId) => {
  const url = "https://jsonplaceholder.typicode.com/posts?userId=" + userId;
  const response = await fetch(url);
  const posts = await response.json();
  return posts;
};

export default getPost;
