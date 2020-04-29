import { Component, OnInit } from '@angular/core';
import{SerieService} from '../serie.service';
import { SerieDetail } from '../serieDetail';

@Component({
  selector: 'app-listar-series',
  templateUrl: './listar-series.component.html',
  styleUrls: ['./listar-series.component.css']
})
export class ListarSeriesComponent implements OnInit {

  constructor(private serieService:SerieService) { }

  series: Array<SerieDetail>;
  selectedSerie: SerieDetail;
  selected = false;

  getSeries():void{
    this.serieService.getSeries(
      .subscribe(series => this.series = series);

  }
  ngOnInit() {
    this.getSeries();
  }

}
