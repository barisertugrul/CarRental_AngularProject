import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Car } from 'app/models/car';
import { CustomerDto } from 'app/models/customerDto';
import { Rental } from 'app/models/rental';
import { CustomerDtoService } from 'app/services/customer-dto.service';
import { RentalService } from 'app/services/rental.service';
import { ToastrService } from 'ngx-toastr';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
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
  rentAddForm:FormGroup;
  dateRangeStart:Date;
  dateRangeEnd:Date;
  dateRange:Object = {
    "startDate": {
    "year": null,
    "month": null,
    "day": null
    },
    "endDate": {
      "year": null,
      "month": null,
      "day": null
    }
  };
  model: NgbDateStruct;
  vatRate: number = 18;
  
  constructor(
    private rentalService:RentalService,
    private customerService: CustomerDtoService,
    private toastrService: ToastrService,
    private formBuilder:FormBuilder
    ) { }

  ngOnInit(): void {
    this.getCustomers();
    this.createRentAddForm();
  }

  createRentAddForm(){
    this.rentAddForm = this.formBuilder.group({
      customerId:[1,Validators.required],
      carId:[this.car.carId,Validators.required],
      rentStartDate:["",Validators.required],
      rentEndDate:["",Validators.required]
    });
  }

  rentAdd(){
    if(this.rentAddForm.valid){
      let rentalModel = Object.assign({}, this.rentAddForm.value)
      this.rentalService.add(rentalModel).subscribe(response => {
        console.log(response)
        if(response.success){
          this.toastrService.success(response.message, "Success")
        }else{
          this.toastrService.error(response.message, "Error")
        }
      },responseError=>{
        console.log(responseError.error);
        this.toastrService.error(responseError.error);
      })
    }else{
      this.toastrService.error("Formunuz eksik", "Uyarı")
    }
  }

  customerChange(){
    let rentalModel = Object.assign({}, this.rentAddForm.value)
    this.selectedCustomer = rentalModel["customerId"]
  }

  showRentForm():void{
    $("#modalRentForm").modal('show')
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe(response => {
      this.customers = response.data;
    })
  }

  getFullName(customer:CustomerDto) {
    var fullname = [customer.firstName,customer.lastName].join(" ");
    return fullname;
  }

  dateRangeValue(range:any){
    this.dateRange = range;
    if(range["startDate"]){
      let startDate:any = range["startDate"]
    this.dateRangeStart = new Date(startDate["year"],startDate["month"]-1,startDate["day"])
    }
    if(range["endDate"]){
      let endDate:any = range["endDate"]
    this.dateRangeEnd = new Date(endDate["year"],endDate["month"]-1,endDate["day"])
    }else{
      this.dateRangeEnd = this.dateRangeStart;
    }
    this.getRentDaysCount()
    this.rentAddForm.controls['rentStartDate'].setValue(this.dateRangeStart);
    this.rentAddForm.controls['rentEndDate'].setValue(this.dateRangeEnd);
  }

  getRentDaysCount(){
    let dayCount = Math.round((this.dateRangeEnd.getTime() - this.dateRangeStart.getTime()) / (1000 * 60 * 60 * 24));

    return dayCount + 1;
  }
  
  get totalAmount(){
    return this.getRentDaysCount() * this.car.dailyPrice
  }
}
