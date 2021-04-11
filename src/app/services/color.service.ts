import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Color } from 'app/models/color';
import { ListResponseModel } from 'app/models/listResponseModel';
import { ResponseModel } from 'app/models/ResponseModel';
import { SingleResponseModel } from 'app/models/singleResponseModel';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = environment.apiURL;
  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>{
    let newPath = this.apiUrl + "/colors/getall";
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }

  getColorById(colorId:number):Observable<SingleResponseModel<Color>>{
    let newPath = this.apiUrl + "/colors/getbyid?colordId=" + colorId;
    return this.httpClient.get<SingleResponseModel<Color>>(newPath);
  }

  add(color:Color):Observable<ResponseModel>{
    let newPath = this.apiUrl + "/colors/add";
    return this.httpClient.post<ResponseModel>(newPath,color);
  }

  update(color:Color):Observable<ResponseModel>{
    let newPath = this.apiUrl + "/colors/update";
    return this.httpClient.post<ResponseModel>(newPath,color);
  }

  delete(color:Color):Observable<ResponseModel>{
    let newPath = this.apiUrl + "/colors/delete";
    return this.httpClient.post<ResponseModel>(newPath,color);
  }
}
