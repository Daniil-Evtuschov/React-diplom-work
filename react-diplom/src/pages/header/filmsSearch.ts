const apiSearchFilms= async (searchText:string)=>{

    const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'X-API-KEY': 'KZQBXH4-DRJ4JMQ-P29RH66-FYG0S14'}
      };
    const response = await fetch(`https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=4&query=%27${searchText}%27`,options);
    const data = await response.json();
      console.log(data.docs);
      
    return data.docs;
}
export default apiSearchFilms