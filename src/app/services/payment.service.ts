import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payment } from 'app/models/payment';
import { ResponseModel } from 'app/models/ResponseModel';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  apiUrl = environment.apiURL
  constructor(private httpClient:HttpClient) { }

  pay(payment:Payment):Observable<ResponseModel>{
    let newPath = this.apiUrl + "/payments/pay";
    return this.httpClient.post<ResponseModel>(newPath,payment);
  }
}
