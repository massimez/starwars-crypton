export function addToFavorite(character) {
  const favs = getFavorites()?getFavorites():[];
  localStorage.setItem('fav', JSON.stringify([ character , ...favs]));
}

export function getFavorites() {
  const data = localStorage.getItem("fav");
  if(!data) return []
  return JSON.parse(data);
}

export function deleteFavorite(character) {
  localStorage.setItem("fav", [character]);
  const data = localStorage.getItem("fav");
  console.log(data);
}

export function clearFavorite(character) {
  localStorage.setItem("fav", [character]);
  const data = localStorage.getItem("fav");
  console.log(data);
}
