import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'app/models/brand';
import { CarDto } from 'app/models/carDto';
import { CarImage } from 'app/models/carImage';
import { Color } from 'app/models/color';
import { CarService } from 'app/services/car.service';
import { SearchFilterService } from 'app/services/searchFilter.service';
import { environment } from 'environments/environment';
import { ToastrService } from 'ngx-toastr';


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
  
  constructor(private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private searchFilterService:SearchFilterService,
    private toastrService:ToastrService) { }

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

  editCar(carId:Number){

  }

  deleteCar(carId:number){

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
