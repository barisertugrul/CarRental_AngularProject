import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Brand } from 'app/models/brand';
import { Car } from 'app/models/car';
import { CarDto } from 'app/models/carDto';
import { CarImage } from 'app/models/carImage';
import { Color } from 'app/models/color';
import { BrandService } from 'app/services/brand.service';
import { CarService } from 'app/services/car.service';
import { ColorService } from 'app/services/color.service';
import { SearchFilterService } from 'app/services/searchFilter.service';
import { environment } from 'environments/environment';
import { ToastrService } from 'ngx-toastr';

declare var $: any;

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:CarDto[] = [];
  dataLoaded = false;
  images:CarImage[];
  imageUrl = environment.baseURL;
  filterBrand : Brand = {id:0,name:"All Brands"};
  filterColor : Color = {id:0,name:"All Colors"};
  brands:Brand[]=[]
  colors:Color[]=[]
  currentCar:CarDto;
  carAddForm:FormGroup;
  formLoaded:boolean=false;
  
  constructor(
    private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private searchFilterService:SearchFilterService,
    private toastrService:ToastrService,
    private brandService:BrandService,
    private colorService:ColorService,
    private formBuilder:FormBuilder,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"]);
      }else if(params["colorId"]){
        this.getCarsByColor(params["colorId"]);
      }else{
        this.getCars();
      }
    });
    this.filterText = "";
  }

  getCars(){
    this.carService.getCarsWithDetails().subscribe(response=>{
      this.cars = response.data
      //this.subTitle = "All Cars"
      this.toastrService.success("All Cars")
      this.dataLoaded = true
    });
  }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrandWithDetails(brandId).subscribe(response=>{
      this.cars = response.data
      let message = (brandId < 1)? "All Brands":this.filterBrand.name
      //this.subTitle = "Cars by " + message
      this.dataLoaded = true
      if(this.filterBrand.id > 0){
        this.toastrService.success("Cars listed for " + message)
      }
    });
  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColorWithDetails(colorId).subscribe(response=>{
      this.cars = response.data
      let message = (colorId < 1)? "All Colors":this.filterColor.name + " colored"
      //this.subTitle = "Cars by " + message
      this.dataLoaded = true
      if(this.filterColor.id > 0){
        this.toastrService.success("Cars listed for " + message)
      }
    });
  }

  getCarsByBrandAndColor(){
    this.carService.getCarsByBrandAndColorWithDetails(this.filterBrand.id,this.filterColor.id).subscribe(response=>{
      this.cars = response.data
      let brandMessage = (this.filterBrand.id < 1)? "All Brands":this.filterBrand.name
      let colorMessage = (this.filterColor.id < 1)? "All Colors":this.filterColor.name + " colored"
      //this.subTitle = "Cars by " + brandMessage + " and " + colorMessage
      this.dataLoaded = true
      this.toastrService.success("Cars listed for with " + brandMessage + " and " + colorMessage)
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

  showCarAddForm():void{
    this.getBrands();
    this.getColors();

    $("#modalCarAddForm").modal('show')
    this.createCarAddForm();
  }

  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({
      carId:[0,Validators.required],
      colorId:[0,Validators.required],
      brandId:[0,Validators.required],
      carName:["",Validators.required],
      modelYear:[null,Validators.required],
      dailyPrice:[null,Validators.required],
      description:[""]
    });
    this.formLoaded=true;
  }

  saveChanges(){
    if(this.carAddForm.valid){
      let carModel = Object.assign({}, this.carAddForm.value)
      
      this.carService.add(carModel).subscribe(response => {
        this.toastrService.success(response.message, "Success")
      },responseError=>{
        this.toastrService.error(responseError.error);
      })
    }else{
      this.toastrService.error("Formunuz eksik", "Uyarı")
    }
  }

  openDeleteConfirmForm(car:CarDto, content:any) {
    this.currentCar = car
    this.modalService.open(content, { scrollable: true });
  }

  delete(car:CarDto){
    
    this.carService.getCarById(car.carId).subscribe(response=>{
      let deletedCar:Car = response.data;
      this.carService.delete(deletedCar).subscribe(response => {
        this.toastrService.success(response.message, "Success")
        this.getCars();
      },responseError=>{
        this.toastrService.error(responseError.error);
      })
    });
  }

  rentCar(carId:number){
    
  }

  get filterText():string{
    return this.searchFilterService.filterData;
  }

  set filterText(value: string){
    this.searchFilterService.filterData = value;
  }

  get subTitle(){
    //let filterData = this.searchFilterService.filterData;
    let isFiltered = false;
    let title = "";
    if(this.filterBrand.id > 0 || this.filterColor.id > 0){
      let brandMessage = (this.filterBrand.id < 1)? "All Brands" : this.filterBrand.name
      let colorMessage = (this.filterColor.id < 1)? "All Colors" : this.filterColor.name + " colored"
      title = "Cars by " + brandMessage + " and " + colorMessage
      isFiltered = true
    }
    return (this.filterText.length > 0)?"Search results for \"" + this.filterText + "\""
    :(isFiltered)?title:"All Cars";
  }

  colorFilter(color:Color){
    //console.log("Color ID: " + color.id);
    this.filterColor = color;
  }

  brandFilter(brand:Brand){
    //console.log("Brand ID: " + brand.id);
    this.filterBrand = brand;
  }

}
