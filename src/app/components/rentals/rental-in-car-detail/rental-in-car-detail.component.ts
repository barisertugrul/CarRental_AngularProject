import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Car } from 'app/models/car';
import { CustomerDto } from 'app/models/customerDto';
import { Rental } from 'app/models/rental';
import { CustomerService } from 'app/services/customer.service';
import { RentalService } from 'app/services/rental.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
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
  amount:number = 0;
  
  constructor(
    private rentalService:RentalService,
    private customerService: CustomerService,
    private toastrService: ToastrService,
    private formBuilder:FormBuilder,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.getCustomers();
    this.createRentAddForm();
  }

  createRentAddForm(){
    this.rentAddForm = this.formBuilder.group({
      customerId:[0,Validators.required],
      carId:[this.car.carId,Validators.required],
      rentStartDate:["",Validators.required],
      rentEndDate:["",Validators.required],
      amount:["",Validators.required]
    });
  }

  rentAdd(){
    if(this.rentAddForm.valid){
      this.rentAddForm.patchValue({"customerId":parseInt(this.rentAddForm.get("customerId").value.toString())});
      let rentalModel = Object.assign({}, this.rentAddForm.value)
      
      this.rentalService.add(rentalModel).subscribe(response => {
        
          this.toastrService.success(response.message, "Success")
          this.toastrService.success("Navigate to  Payment Page", "Navigate");
          this.router.navigate(['/payment', {payTo:response.data}]);
        
      },responseError=>{
        if(responseError.error.ValidationErrors.length>0){
          for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
            this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage, "Validation Error");
          }
        };
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
    this.customerService.getCustomersWithDetails().subscribe(response => {
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
    this.rentAddForm.controls['amount'].setValue(this.totalAmount + (this.totalAmount * this.vatRate/100));
  }

  getRentDaysCount(){
    let dayCount = Math.round((this.dateRangeEnd.getTime() - this.dateRangeStart.getTime()) / (1000 * 60 * 60 * 24));

    return dayCount + 1;
  }
  
  get totalAmount(){
    return this.getRentDaysCount() * this.car.dailyPrice
  }
}
