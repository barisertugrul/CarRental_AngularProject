import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'app/models/customer';
import { CustomerDto } from 'app/models/customerDto';
import { ListResponseModel } from 'app/models/listResponseModel';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = environment.apiURL;
  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<ListResponseModel<Customer>>{
    let newPath = this.apiUrl + "/customers/getall";
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }

  getCustomersWithDetails():Observable<ListResponseModel<CustomerDto>>{
    let newPath = this.apiUrl + "/customers/getalldetails";
    return this.httpClient.get<ListResponseModel<CustomerDto>>(newPath);
  }
}
