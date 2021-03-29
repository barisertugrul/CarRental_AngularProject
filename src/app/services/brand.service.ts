import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brand } from 'app/models/brand';
import { ListResponseModel } from 'app/models/listResponseModel';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = environment.apiURL + "/brands/getall";
  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>>{
    return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl);
  }
}
