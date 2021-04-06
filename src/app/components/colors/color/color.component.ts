import { Component, OnInit } from '@angular/core';
import { Color } from 'app/models/color';
import { ColorService } from 'app/services/color.service';
import { SearchFilterService } from 'app/services/searchFilter.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors:Color[] = [];
  dataLoaded = false;
  subTitle:string = "";
  
  constructor(private colorService:ColorService,
    private searchFilterService:SearchFilterService) { }

  ngOnInit(): void {
    this.getColors();
    this.filterText = "";
  }

  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data
      this.subTitle = "All Colors"
      this.dataLoaded = true
    });
  }

  get filterText():string{
    let filterData = this.searchFilterService.filterData;
    return filterData;
  }

  set filterText(value: string){
    this.searchFilterService.filterData = value;
  }

  get searchResultText(){
    let filterData = this.searchFilterService.filterData;
    return (filterData.length > 0)?"Search results for \"" + filterData + "\"":"All Colors";
  }

}
