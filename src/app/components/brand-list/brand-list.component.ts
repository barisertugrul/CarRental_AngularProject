import { Component, OnInit } from '@angular/core';
import { Brand } from 'app/models/brand';
import { BrandService } from 'app/services/brand.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {

  brands:Brand[] = [];
  currentBrand:Brand = {id:0,name:"Brands"};
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

  setCurrentBrand(brand:Brand){
    this.currentBrand = brand;
  }

  getBrandClass(brand:Brand){
    if(brand.id == this.currentBrand.id){
      return "dropdown-item active"
    }else{
      return "dropdown-item"
    }
  }

}
