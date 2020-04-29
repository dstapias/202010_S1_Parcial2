import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { SerieDetail } from './serieDetail';

@Injectable({
  providedIn: 'root'
})
export class SerieService {


  private apiUrl = environment.baseUrl;
  constructor(private http: HttpClient){}

  getSeries(): Observable<Array<SerieDetail>> {
    return this.http.get<Array<SerieDetail>>(this.apiUrl);
  }


  getSerieDetail(serieId): Observable<SerieDetail>{
    return this.http.get<SerieDetail>(`${this.apiUrl}/${serieId}`);
  }




}
