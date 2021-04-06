import { Component, OnInit } from '@angular/core';
import { CustomerDto } from 'app/models/customerDto';
import { CustomerDtoService } from 'app/services/customer-dto.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers:CustomerDto[] = [];
  dataLoaded = false;
  subTitle:string = "";
  
  constructor(private customerService:CustomerDtoService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(){
    this.customerService.getCustomers().subscribe(response=>{
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
