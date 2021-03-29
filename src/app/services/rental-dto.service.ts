import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from 'app/models/listResponseModel';
import { RentalDto } from 'app/models/rentalDto';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentalDtoService {

  apiUrl = environment.apiURL + "/rentals/getalldetails";
  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<ListResponseModel<RentalDto>>{
    return this.httpClient.get<ListResponseModel<RentalDto>>(this.apiUrl);
  }
}
