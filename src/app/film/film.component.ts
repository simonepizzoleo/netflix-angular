import { Component, Input, OnInit } from '@angular/core';
import { Film } from '../classes/film.class';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  @Input() film!: Film;
  descriptionMaxLength: number = 69;

  constructor() {}

  ngOnInit(): void {
    this.film.description = this.film.description.substring(0, this.descriptionMaxLength) + '...';
  }

}
