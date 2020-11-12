export interface Result {
    vote_count: number;
    popularity: number;
    id: number;
    video: boolean;
    media_type: string;
    vote_average: number;
    title: string;
    release_date: string;
    original_language: string;
    original_title: string;
    genre_ids: number[];
    backdrop_path: string;
    adult: boolean;
    overview: string;
    poster_path: string;
    original_name: string;
    name: string;
    first_air_date: string;
    origin_country: string[];
}

export interface Movies {
    page: number;
    total_results: number;
    total_pages: number;
    results: Result[];
}
