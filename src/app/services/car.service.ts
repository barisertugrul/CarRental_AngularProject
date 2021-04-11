import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from 'app/models/car';
import { CarDto } from 'app/models/carDto';
import { ListResponseModel } from 'app/models/listResponseModel';
import { ResponseModel } from 'app/models/ResponseModel';
import { SingleResponseModel } from 'app/models/singleResponseModel';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = environment.apiURL;
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "/cars/getall";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarById(carId: number):Observable<SingleResponseModel<Car>> {
    let newPath = this.apiUrl + "/cars/getbyid?carId="+carId
    return this.httpClient.get<SingleResponseModel<Car>>(newPath);
  }

  getCarsWithDetails():Observable<ListResponseModel<CarDto>>{
    let newPath = this.apiUrl + "/cars/getalldetails";
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }
  
  getCarDetailsById(carId:number):Observable<SingleResponseModel<CarDto>>{
    let newPath = this.apiUrl + "/cars/getdetailbyid?carId="+carId
    return this.httpClient.get<SingleResponseModel<CarDto>>(newPath);
  }
  
  getCarsByBrandWithDetails(brandId:number):Observable<ListResponseModel<CarDto>>{
    let newPath = this.apiUrl + "/cars/getdetailbybrandid?brandId="+brandId
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }
  
  getCarsByColorWithDetails(colorId:number):Observable<ListResponseModel<CarDto>>{
    let newPath = this.apiUrl + "/cars/getdetailbycolorid?colorId="+colorId
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }
  
  getCarsByBrandAndColorWithDetails(brandId:number,colorId:number):Observable<ListResponseModel<CarDto>>{
    let newPath = this.apiUrl + "/cars/getdetailbybrandandcolorid?brandId=" + brandId +"&colorId="+colorId
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }

  add(car:Car):Observable<ResponseModel>{
    let newPath = this.apiUrl + "/cars/add";
    return this.httpClient.post<ResponseModel>(newPath,car);
  }

  update(car:Car):Observable<ResponseModel>{
    let newPath = this.apiUrl + "/cars/update";
    return this.httpClient.post<ResponseModel>(newPath,car);
  }

  delete(car:Car):Observable<ResponseModel>{
    let newPath = this.apiUrl + "/cars/delete";
    return this.httpClient.post<ResponseModel>(newPath,car);
  }
}
