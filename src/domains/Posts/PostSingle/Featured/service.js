export const fetchFeatured = async imageId => {
  const data = await fetch(`http://y.gpawlik.com/wp-json/wp/v2/media/${imageId}`);

  return data.json();
};
