const apiSearchFilms= async (searchText:string)=>{

    const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'X-API-KEY': '4HWWDX9-66EMDB2-JSFQVHE-R0WBRZ2'}
      };
    const response = await fetch(`https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=1&query=%27${searchText}%27`,options);
    const data = await response.json();
      console.log(data.docs);
      
    return data.docs;
}
export default apiSearchFilms