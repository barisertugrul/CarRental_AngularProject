import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Color } from 'app/models/color';
import { ColorService } from 'app/services/color.service';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})
export class ColorListComponent implements OnInit {

  colors:Color[] = [];
  currentColor:Color = {id:0,name:"All Colors"};
  dataLoaded = false;
  subTitle:string = "";
  @Input() filterType:string = "Single";
  @Output() colorFilter = new EventEmitter();
  
  constructor(private colorService:ColorService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getColors();
  }
  
  selectColor(colorId: number) {
    let selected = this.colors.find(c => c.id ==colorId)
    if(selected === null){
      selected =  {id:0,name:"All Colors"}
    }
    this.setCurrentColor(selected)
  }

  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data
      this.activatedRoute.params.subscribe(params=>{
        if(params["colorId"]){
          this.selectColor(params["colorId"]);
        }
      });
      this.subTitle = this.currentColor.name
      this.dataLoaded = true
      this.colorFilter.emit(this.currentColor);
    });
  }

  setCurrentColor(color:Color){
    this.currentColor = color;
    this.colorFilter.emit(color);
    console.log("Current Color: " + this.currentColor.name)
  }

  getColorClass(color:Color){
    if(color.id == this.currentColor.id){
      return "dropdown-item active"
    }else{
      return "dropdown-item"
    }
  }

  getRouterLink(colorId=0){
    if(this.filterType === "Multiple"){
      return null;
    }else{
      if(colorId === 0){
        return "/cars"
      }else{
        return "/cars/color/" + colorId;
      }
    }
  }

}
