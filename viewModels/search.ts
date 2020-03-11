import { SpawnSyncOptionsWithBufferEncoding } from "child_process";

export type PageType = number;
export type TotalType = number;

//search Movie https://developers.themoviedb.org/3/search/search-movies
export type MovieResult = {
	poster_path: string | null;
	adult: boolean;
	overview: string;
	release_date: string;
	genre_ids: number[]; 
	id: number;
	original_title: string;
	original_language: string;
	title: string;
	backdrop_path: string | null;
	popularity: number;
	vote_count: number;
	video: boolean;
	vote_average: number;
}
export type MovieList = {
	page: number;
	results: MovieResult[];
	total_results: number;
	total_pages: number;
}
export type CommonType = Omit<MovieList, 'results'>
//search TV https://developers.themoviedb.org/3/search/search-tv-shows
export type TVResult = {
	poster_path: string | null;
	popularity: number;
	id: number;
	backdrop_path: string | null;
	vote_average: number;
	overview: string; 
	first_air_date: string;
	origin_country: string[];
	genre_ids: number[];
	original_language: string;
	vote_count: number;
	name: string;
	original_name: string;
}
export type TVList = {results: TVResult[]} & CommonType

//Search People  https://developers.themoviedb.org/3/search/search-people
export type PeopleResult = {
	profile_path : string | null;
	adult: boolean;
	id: number;
	known_for : TVResult | MovieResult;
	name: string;
	popularity: number;
}
export type PeopleList = {
	results:PeopleResult[];	
} & CommonType

//Search Keywords https://developers.themoviedb.org/3/search/search-keywords
export type KeyResult = {
	id: number;
	name: string;
}
export type KeyList = {
	results: KeyResult[];
} & Omit<MovieList, 'results'>

//Search Multi  https://developers.themoviedb.org/3/search/multi-search
export type Multiresult = {
	results: TVResult | MovieResult | PeopleResult
} & CommonType