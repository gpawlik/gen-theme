export const fetchPost = async (postId = 16) => {
  const data = await fetch(`http://y.gpawlik.com/wp-json/wp/v2/posts/${postId}`);

  return data.json();
};
