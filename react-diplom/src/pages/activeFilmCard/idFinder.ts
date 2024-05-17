const filmIdFinder= async (searchFilmId:string)=>{
    const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'X-API-KEY': 'HESPSEB-5ZYMM9K-KQMNMW4-404DBWK'}
      };
    const response = await fetch(`https://api.kinopoisk.dev/v1.4/movie/${searchFilmId}`,options);
    const data = await response.json();
    const dataMassiv:any[]=[] 
    dataMassiv.push(data)

      console.log(dataMassiv);
      
    return dataMassiv;
}
export default filmIdFinder