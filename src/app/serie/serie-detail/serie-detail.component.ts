import { Component, OnInit,  Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SerieDetail } from '../serieDetail';
import { SerieService } from '../serie.service';


@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css']
})
export class SerieDetailComponent implements OnInit {

  @Input() serieDetail: SerieDetail;

  constructor(
    private route: ActivatedRoute,
    private serieService: SerieService
  ) {
  }

  isCollapsed = true;
  serieId: number;

  getBookDetail(): void {
    this.serieService.getSerieDetail(this.serieId)
      .subscribe(serieDetail => {
        this.serieDetail = serieDetail;
      });
  }
  ngOnInit() {
    if (this.serieDetail === undefined) {
      console.log('routerLink');
      this.serieId = +this.route.snapshot.paramMap.get('id');
      this.getBookDetail();

    } else {
      console.log('Input');
      console.log(this.serieDetail.id);
    }
  }}
