import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Color } from 'app/models/color';
import { ListResponseModel } from 'app/models/listResponseModel';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = environment.apiURL + "/colors/getall";
  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>{
    return this.httpClient.get<ListResponseModel<Color>>(this.apiUrl);
  }
}
