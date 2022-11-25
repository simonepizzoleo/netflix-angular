import { Injectable } from '@angular/core';
import { Film } from '../classes/film.class';

@Injectable({
	providedIn: 'root'
})

export class FilmsService {

	// Store all Films in this Array
	films: Film[] = [];

	constructor() {

		// Fetch Films from external API
		const API_KEY = '3cafd4d9cc19c3427bd43a82ab0ae89f';
		const URL_TO_FETCH = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;

		fetch(URL_TO_FETCH)
		.then((res) => res.json())
		.then((data) => {

			const FILMS = data.results;

			for (const FILM of FILMS) {

				const FILM_IMAGE = `https://image.tmdb.org/t/p/original${FILM.poster_path}`;
				const FILM_TITLE: string = FILM.name ?? FILM.title;

				this.films.push(
					new Film(FILM_IMAGE, FILM_TITLE, FILM.overview)
				);

			}

		});

	}

}