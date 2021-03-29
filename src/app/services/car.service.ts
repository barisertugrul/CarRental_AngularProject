import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from 'app/models/car';
import { ListResponseModel } from 'app/models/listResponseModel';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = environment.apiURL + "/cars/getall";
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl);
  }
}
