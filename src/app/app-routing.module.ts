import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Film } from './classes/film.class';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { GridComponent } from './grid/grid.component';

const routes: Routes = [
	{ path: '', component: GridComponent, title: 'Home' },
	{ path: 'film/:name', component: FilmDetailComponent },
	{ path: '**', redirectTo: '' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule {}