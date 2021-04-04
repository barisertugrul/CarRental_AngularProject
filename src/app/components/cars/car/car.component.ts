import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDto } from 'app/models/carDto';
import { CarImage } from 'app/models/carImage';
import { CarDtoService } from 'app/services/car-dto.service';
import { SearchFilterService } from 'app/services/searchFilter.service';
import { environment } from 'environments/environment';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:CarDto[] = [];
  dataLoaded = false;
  subTitle:string = "";
  images:CarImage[];
  imageUrl = environment.baseURL;
  
  constructor(private carService:CarDtoService,
    private activatedRoute:ActivatedRoute,
    private searchFilterService:SearchFilterService) { }

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
    this.carService.getCars().subscribe(response=>{
      this.cars = response.data
      this.subTitle = "All Cars"
      this.dataLoaded = true
    });
  }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars = response.data
      this.subTitle = "Cars by Brand"
      this.dataLoaded = true
    });
  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.cars = response.data
      this.subTitle = "Cars by Color"
      this.dataLoaded = true
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

  get searchResultText(){
    let filterData = this.searchFilterService.filterData;
    return (filterData.length > 0)?"Search results for \"" + filterData + "\"":"All Cars";
  }

}
