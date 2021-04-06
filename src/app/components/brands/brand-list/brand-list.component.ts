import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'app/models/brand';
import { BrandService } from 'app/services/brand.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {

  brands:Brand[] = [];
  currentBrand:Brand = {id:0,name:"All Brands"};
  dataLoaded = false;
  subTitle:string = "";
  @Input() filterType:string = "Single";
  @Output() brandFilter = new EventEmitter();
  
  constructor(private brandService:BrandService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getBrands();
  }
  
  selectBrand(brandId: number) {
    let selected = this.brands.find(b => b.id == brandId)
    if(selected === null){
      selected =  {id:0,name:"All Brands"}
    }
    this.setCurrentBrand(selected)
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data
      this.activatedRoute.params.subscribe(params=>{
        if(params["brandId"]){
          this.selectBrand(params["brandId"]);
        }
      });
      this.subTitle = this.currentBrand.name
      this.dataLoaded = true
      this.brandFilter.emit(this.currentBrand);
    });
  }

  setCurrentBrand(brand:Brand){
    this.currentBrand = brand;
    this.brandFilter.emit(brand);
  }

  getBrandClass(brand:Brand){
    if(brand.id == this.currentBrand.id){
      return "dropdown-item active"
    }else{
      return "dropdown-item"
    }
  }

  getRouterLink(brandId=0){
    if(this.filterType === "Multiple"){
      return null;
    }else{
      if(brandId === 0){
        return "/cars"
      }else{
        return "/cars/brand/" + brandId;
      }
    }
  }

}
