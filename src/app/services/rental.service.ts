import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from 'app/models/listResponseModel';
import { Rental } from 'app/models/rental';
import { RentalDto } from 'app/models/rentalDto';
import { SingleResponseModel } from 'app/models/singleResponseModel';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = environment.apiURL
  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl + "/rentals/getall";
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  add(rental:Rental):Observable<SingleResponseModel<Rental>>{
    let newPath = this.apiUrl + "/rentals/add";
    return this.httpClient.post<SingleResponseModel<Rental>>(newPath,rental);
  }

  getRentalById(rentalId:number):Observable<SingleResponseModel<Rental>>{
    let newPath = this.apiUrl + "/rentals/getbyid?rentalId=" + rentalId;
    return this.httpClient.get<SingleResponseModel<Rental>>(newPath);
  }

  getRentalsWithDetails():Observable<ListResponseModel<RentalDto>>{
    let newPath = this.apiUrl + "/rentals/getalldetails";
    return this.httpClient.get<ListResponseModel<RentalDto>>(newPath);
  }

  getRentalDetailsById(rentalId:number):Observable<SingleResponseModel<RentalDto>>{
    let newPath = this.apiUrl + "/rentals/getdetailsbyid?rentalId=" + rentalId;
    return this.httpClient.get<SingleResponseModel<RentalDto>>(newPath);
  }
}
