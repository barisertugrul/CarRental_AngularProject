import { Component, OnInit } from '@angular/core';
import { Brand } from 'app/models/brand';
import { BrandService } from 'app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:Brand[] = [];
  dataLoaded = false;
  subTitle:string = "";
  
  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data
      this.subTitle = "All Brands"
      this.dataLoaded = true
    });
  }

}
