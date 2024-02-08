const apiSearchFilms= async (searchText:string)=>{
    const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'X-API-KEY': ' NMJ5Z6Y-4X149V8-QZZ8X9B-N1MRM09'}
      };
    const response = await fetch(`https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=1&query%27${searchText}%27`,options);
    const data = await response.json();
      console.log(data.docs);
      
    return data.docs;
}
export default apiSearchFilms