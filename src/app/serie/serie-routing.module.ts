import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarSeriesComponent } from './listar-series/listar-series.component';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';


const routes: Routes = [{
  path: 'series',
  children: [

    {
      path: 'list',
      component: ListarSeriesComponent
    },
    {
      path: ':id',
      component: SerieDetailComponent,
      runGuardsAndResolvers: 'always'
    },

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SerieRoutingModule { }
