import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css']
})
export class PaymentSuccessComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  

  getCars(){
    this.router.navigate(['/dashboard']);
  }

}
