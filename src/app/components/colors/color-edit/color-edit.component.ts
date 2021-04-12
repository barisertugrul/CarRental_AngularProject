import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Color } from 'app/models/color';
import { ColorService } from 'app/services/color.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-color-edit',
  templateUrl: './color-edit.component.html',
  styleUrls: ['./color-edit.component.css']
})
export class ColorEditComponent implements OnInit {

  color:Color;
  colorEditForm:FormGroup;
  subTitle:string="";
  formLoaded:boolean=false;

  constructor(
    private colorService:ColorService,
    private activatedRoute:ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["colorId"]){
        this.getColorById(params["colorId"]);
      }
    });
  }
  getColorById(colorId: number) {
    this.colorService.getColorById(colorId).subscribe(response=>{
      this.color = response.data;
      this.subTitle = "Color: " + this.color.name;
      
      this.createColorEditForm();
    });
  }
  createColorEditForm() {
    this.colorEditForm = this.formBuilder.group({
      id:[this.color.id,Validators.required],
      name:[this.color.name,Validators.required]
    });
    this.formLoaded=true;
  }

  saveChanges(){
    if(this.colorEditForm.valid){
      let colorModel = Object.assign({}, this.colorEditForm.value)
      
      this.colorService.update(colorModel).subscribe(response => {
        this.toastrService.success(response.message, "Success")
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

}
