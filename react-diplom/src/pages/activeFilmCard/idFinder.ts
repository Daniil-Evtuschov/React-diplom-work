const filmIdFinder= async (searchFilmId:string)=>{
    const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'X-API-KEY': 'KZQBXH4-DRJ4JMQ-P29RH66-FYG0S14'}
      };
    const response = await fetch(`https://api.kinopoisk.dev/v1.4/movie/${searchFilmId}`,options);
    const data = await response.json();
    const dataMassiv:any[]=[] 
    dataMassiv.push(data)

      console.log(dataMassiv);
      
    return dataMassiv;
}
export default filmIdFinder