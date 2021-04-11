import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreditCard } from 'app/models/creditCard';
import { ListResponseModel } from 'app/models/listResponseModel';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  apiUrl = environment.apiURL
  constructor(private httpClient:HttpClient) { }

  getCardsByCustomerId(customerId:number):Observable<ListResponseModel<CreditCard>>{
    let newPath = this.apiUrl + "/creditcards/getbycustomerid?customerId=" + customerId;
    return this.httpClient.get<ListResponseModel<CreditCard>>(newPath);
  }
}
