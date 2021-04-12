import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Color } from 'app/models/color';
import { ColorService } from 'app/services/color.service';
import { SearchFilterService } from 'app/services/searchFilter.service';
import { ToastrService } from 'ngx-toastr';

declare var $: any;

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors:Color[] = [];
  dataLoaded = false;
  subTitle:string = "";
  formLoaded:boolean=false;
  colorAddForm: FormGroup;
  currentColor:Color;
  
  constructor(
    private colorService:ColorService,
    private searchFilterService:SearchFilterService,
    private toastrService: ToastrService,
    private formBuilder:FormBuilder,
    private _modalService: NgbModal
    ) { }

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
    return (filterData.length > 0)?"Search results for \"" + filterData + "\"":this.subTitle;
  }

  saveChanges(){
    if(this.colorAddForm.valid){
      let colorModel = Object.assign({}, this.colorAddForm.value)
      
      this.colorService.add(colorModel).subscribe(response => {
        this.toastrService.success(response.message, "Success")
        $("#modalColorAddForm").modal('hide')
        this.getColors();
      },responseError=>{
        if(responseError.error.ValidationErrors.length>0){
          for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
            this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage, "Validation Error");
          }
        };
      })
    }else{
      this.toastrService.error("Formunuz eksik", "Uyarı")
    }
  }

  openDeleteConfirmForm(color:Color, content:any) {
    this.currentColor = color
    this._modalService.open(content);
  }

  delete(color:Color){
    this.colorService.delete(color).subscribe(response => {
      this.toastrService.success(response.message, "Success")
      this.getColors();
    },responseError=>{
      if(responseError.error.ValidationErrors.length>0){
        for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
          this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage, "Validation Error");
        }
      };
    })
  }

}
