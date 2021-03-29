import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerDto } from 'app/models/customerDto';
import { ListResponseModel } from 'app/models/listResponseModel';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerDtoService {

  apiUrl = environment.apiURL + "/customers/getalldetails";
  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<ListResponseModel<CustomerDto>>{
    return this.httpClient.get<ListResponseModel<CustomerDto>>(this.apiUrl);
  }
}
