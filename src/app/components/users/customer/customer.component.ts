import { Component, OnInit } from '@angular/core';
import { CustomerDto } from 'app/models/customerDto';
import { CustomerService } from 'app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers:CustomerDto[] = [];
  dataLoaded = false;
  subTitle:string = "";
  
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(){
    this.customerService.getCustomersWithDetails().subscribe(response=>{
      this.customers = response.data
      this.subTitle = "All Customers"
      this.dataLoaded = true
    });
  }

  getFullName(customer:CustomerDto) {
    var fullname = [customer.firstName,customer.lastName].join(" ");
    return fullname;
  }

}
