export function addToFavorite(character) {
  const favs = getFavorites()?getFavorites():[];
  localStorage.setItem('fav', JSON.stringify([ character , ...favs]));
}

export function getFavorites() {
  const data = localStorage.getItem("fav");
  if(!data) return []
  return JSON.parse(data);
}

