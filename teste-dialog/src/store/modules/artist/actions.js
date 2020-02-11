export function searchArtist(name) {
  return {
    type: "@artist/SEARCH_REQUEST",
    name
  };
}
