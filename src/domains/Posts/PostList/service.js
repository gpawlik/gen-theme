export const fetchPosts = async () => {
  const data = await fetch('http://y.gpawlik.com/wp-json/wp/v2/posts');

  return data.json();
};
