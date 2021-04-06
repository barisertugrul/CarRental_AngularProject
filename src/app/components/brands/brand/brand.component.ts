import { Component, OnInit } from '@angular/core';
import { Brand } from 'app/models/brand';
import { BrandService } from 'app/services/brand.service';
import { SearchFilterService } from 'app/services/searchFilter.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:Brand[] = [];
  dataLoaded = false;
  subTitle:string = "";
  
  constructor(private brandService:BrandService,
    private searchFilterService:SearchFilterService) { }

  ngOnInit(): void {
    this.getBrands();
    this.filterText = "";
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data
      this.subTitle = "All Brands"
      this.dataLoaded = true
    });
  }

  get filterText():string{
    return this.searchFilterService.filterData;
  }

  set filterText(value: string){
    this.searchFilterService.filterData = value;
  }

  get searchResultText(){
    let filterData = this.searchFilterService.filterData;
    return (filterData.length > 0)?"Search results for \"" + filterData + "\"":"All Brands";
  }

}
