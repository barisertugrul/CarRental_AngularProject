import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarDto } from 'app/models/carDto';
import { CarImage } from 'app/models/carImage';
import { CarDtoService } from 'app/services/car-dto.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  car:CarDto;
  dataLoaded = false;
  subTitle:string = "";
  images:CarImage[];
  imageUrl = environment.baseURL;
  
  constructor(private carService:CarDtoService,
    private activatedRoute:ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarById(params["carId"]);
      }else{
        this.getCars();
      }
    });
  }

  getCars(){
    this.router.navigate(['/cars']);
  }

  getCarById(carId:number){
    this.carService.getCarById(carId).subscribe(response=>{
      this.car = response.data;
      this.images = this.car.images;
      this.subTitle = "";
      this.dataLoaded = true;
      console.log(this.images);
      console.log(this.car);
    });
  }


  getSlideClass(index:Number){
    if(index == 0){
      return "carousel-item text-center active";
    } else {
      return "carousel-item text-center";
    }
  }
  getSlideNumber(index:Number){
    console.log("index: " + index)
    return index.toString();
  }

}
