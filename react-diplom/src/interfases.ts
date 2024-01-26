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