import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarDto } from 'app/models/carDto';
import { ListResponseModel } from 'app/models/listResponseModel';
import { SingleResponseModel } from 'app/models/singleResponseModel';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarDtoService {

  apiUrl = environment.apiURL;
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<CarDto>>{
    let newPath = this.apiUrl + "/cars/getalldetails";
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }
  
  getCarById(carId:number):Observable<SingleResponseModel<CarDto>>{
    let newPath = this.apiUrl + "/cars/getdetailbyid?carId="+carId
    return this.httpClient.get<SingleResponseModel<CarDto>>(newPath);
  }
  
  getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDto>>{
    let newPath = this.apiUrl + "/cars/getdetailbybrandid?brandId="+brandId
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }
  
  getCarsByColor(colorId:number):Observable<ListResponseModel<CarDto>>{
    let newPath = this.apiUrl + "cars/getdetailbycolorid?colorId="+colorId
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }
}
