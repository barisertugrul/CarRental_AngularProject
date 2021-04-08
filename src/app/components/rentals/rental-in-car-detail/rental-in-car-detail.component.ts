import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Car } from 'app/models/car';
import { CustomerDto } from 'app/models/customerDto';
import { Rental } from 'app/models/rental';
import { CustomerDtoService } from 'app/services/customer-dto.service';
import { RentalService } from 'app/services/rental.service';
import { ToastrService } from 'ngx-toastr';
import {FormGroup, FormControl} from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-rental-in-car-detail',
  templateUrl: './rental-in-car-detail.component.html',
  styleUrls: ['./rental-in-car-detail.component.css']
})
export class RentalInCarDetailComponent implements OnInit {
  @Input() car: Car;

  rentals: Rental[] = [];
  customers: CustomerDto[];
  selectedCustomer:string = "0";
  
  constructor(
    private rentalService:RentalService,
    private customerService: CustomerDtoService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  showRentForm():void{
    $("#modalRentForm").modal('show')
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe(response => {
      this.customers = response.data;
      this.customers.forEach(customer => {
        console.log(customer.firstName)
      });
    })
  }

  getFullName(customer:CustomerDto) {
    var fullname = [customer.firstName,customer.lastName].join(" ");
    return fullname;
  }

}
