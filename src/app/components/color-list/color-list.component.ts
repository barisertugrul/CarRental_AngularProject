import { Component, OnInit } from '@angular/core';
import { Color } from 'app/models/color';
import { ColorService } from 'app/services/color.service';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})
export class ColorListComponent implements OnInit {

  colors:Color[] = [];
  currentColor:Color = {id:0,name:"Colors"};
  dataLoaded = false;
  subTitle:string = "";
  
  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColors();
  }

  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data
      this.subTitle = "All Colors"
      this.dataLoaded = true
    });
  }

  setCurrentColor(color:Color){
    this.currentColor = color;
  }

  getColorClass(color:Color){
    if(color.id == this.currentColor.id){
      return "dropdown-item active"
    }else{
      return "dropdown-item"
    }
  }

}
