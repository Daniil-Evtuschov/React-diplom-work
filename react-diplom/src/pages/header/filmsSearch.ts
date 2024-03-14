const apiSearchFilms= async (searchText:string)=>{

    const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'X-API-KEY': 'NWYX0HC-FCZ46D4-P3ENBBE-ZM0HMHB'}
      };
    const response = await fetch(`https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=1&query=%27${searchText}%27`,options);
    const data = await response.json();
      console.log(data.docs);
      
    return data.docs;
}
export default apiSearchFilms