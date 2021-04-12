import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'app/models/brand';
import { Car } from 'app/models/car';
import { Color } from 'app/models/color';
import { BrandService } from 'app/services/brand.service';
import { CarService } from 'app/services/car.service';
import { ColorService } from 'app/services/color.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {

  car:Car;
  brands:Brand[]=[]
  colors:Color[]=[]
  carEditForm:FormGroup;
  subTitle:string="";
  formLoaded:boolean=false;


  constructor(
    private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private toastrService: ToastrService,
    private formBuilder:FormBuilder,
    private brandService:BrandService,
    private colorService:ColorService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getBrands();
        this.getColors();
        this.getCarById(params["carId"]);
      }
    });
  }

  getCarById(carId: number) {
    this.carService.getCarById(carId).subscribe(response=>{
      this.car = response.data;
      this.subTitle = "Car: " + this.car.carName;
      
      this.createCarEditForm();
    });
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data
    });
  }

  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data
    });
  }

  createCarEditForm() {
    this.carEditForm = this.formBuilder.group({
      carId:[this.car.carId,Validators.required],
      colorId:[this.car.colorId,Validators.required],
      brandId:[this.car.brandId,Validators.required],
      carName:[this.car.carName,Validators.required],
      modelYear:[this.car.modelYear,Validators.required],
      dailyPrice:[this.car.dailyPrice,Validators.required],
      description:[this.car.description]
    });
    this.formLoaded=true;
  }

  saveChanges(){
    if(this.carEditForm.valid){
      let carModel = Object.assign({}, this.carEditForm.value)
      
      this.carService.update(carModel).subscribe(response => {
        this.toastrService.success(response.message, "Success")
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

}
