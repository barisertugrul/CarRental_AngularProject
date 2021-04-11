import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brand } from 'app/models/brand';
import { ListResponseModel } from 'app/models/listResponseModel';
import { ResponseModel } from 'app/models/ResponseModel';
import { SingleResponseModel } from 'app/models/singleResponseModel';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = environment.apiURL;
  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>>{
    let newPath = this.apiUrl + "/brands/getall";
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }

  getBrandById(brandId:number):Observable<SingleResponseModel<Brand>>{
    let newPath = this.apiUrl + "/brands/getbyid?brandId=" + brandId;
    return this.httpClient.get<SingleResponseModel<Brand>>(newPath);
  }

  add(brand:Brand):Observable<ResponseModel>{
    let newPath = this.apiUrl + "/brands/add";
    return this.httpClient.post<ResponseModel>(newPath,brand);
  }

  update(brand:Brand):Observable<ResponseModel>{
    let newPath = this.apiUrl + "/brands/update";
    return this.httpClient.post<ResponseModel>(newPath,brand);
  }

  delete(brand:Brand):Observable<ResponseModel>{
    let newPath = this.apiUrl + "/brands/delete";
    return this.httpClient.post<ResponseModel>(newPath,brand);
  }
}
