import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Film } from '../classes/film.class';
import { FilmsService } from '../services/films.service';

@Component({
	selector: 'app-grid',
	templateUrl: './grid.component.html',
	styleUrls: ['./grid.component.scss'],
	encapsulation: ViewEncapsulation.None
})

export class GridComponent implements OnInit {

	films: Film[];

	constructor(private filmsService: FilmsService) {
		this.films = filmsService.films;
	}

	ngOnInit(): void {}

}