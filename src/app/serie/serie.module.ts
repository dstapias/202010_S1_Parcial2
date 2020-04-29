import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieRoutingModule } from './serie-routing.module';
import { ListarSeriesComponent } from './listar-series/listar-series.component';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';

@NgModule({
  imports: [
    CommonModule,
    SerieRoutingModule,
  ],
  declarations: [ListarSeriesComponent, SerieDetailComponent],
  exports: [ListarSeriesComponent],
})



export class SerieModule {

}
