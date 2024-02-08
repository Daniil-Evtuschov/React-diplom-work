export interface aboutUserProps{
    userName : string;
    onClick?: () => void;
}

export interface filmsCardsProps{
    id:number;
    votes: string;
    poster: string;
    filmTitle:string;
    filmDescription?:string;
    filmsGeners:string;
    year?:string;
}

//интерфейс для кинопоиска
// export interface filmsCardsInt{ 
//     ageRating: number;
//     alternativeName: string;
//     backdrop: {
//       previewUrl: string;
//       url: string;
//     };
//     countries: {
//       name: string;
//     }[];
//     description: string;
//     enName: string;
//     genres: {
//       name: string;
//     }[];
//     id: number;
//     isSeries: boolean;
//     logo: {
//       url: string;
//     };
//     movieLength: number;
//     name: string;
//     names: {
//       name: string;
//       language?: string;
//       type?: string | null;
//     }[];
//     poster: {
//       previewUrl: string;
//       url: string;
//     };
//     rating: {
//       await: number | null;
//       filmCritics: number;
//       imdb: number;
//       kp: number;
//       russianFilmCritics: number;
//     };
//     ratingMpaa: string;
//     seriesLength: number | null;
//     shortDescription: string;
//     status: null;
//     ticketsOnSale: boolean;
//     top10: null;
//     top250: number;
//     totalSeriesLength: number | null;
//     type: string;
//     typeNumber: number;
//     votes: {
//       await: number;
//       filmCritics: number;
//       imdb: number;
//       kp: number;
//       russianFilmCritics: number;
//     };
//     year: number;
// } 


//интерфейс для  omdbapi 
export interface filmsCardsInt{
    Poster:string;
    Title:string;
    Type:string;
    imdbID:string; 
    Year:string;
    favorite:boolean;
}


export interface ActionsTypInt{
    type: string;
    payload?:filmsCardsInt[]
}

export interface InitialStateInt{
    payload?:ActionsTypInt
    filmsCard: filmsCardsInt[]
    activeFilmCard?:filmsCardsInt[]
    favorite:boolean
}


