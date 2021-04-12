import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'app/models/brand';
import { BrandService } from 'app/services/brand.service';
import { data } from 'jquery';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-brand-edit',
  templateUrl: './brand-edit.component.html',
  styleUrls: ['./brand-edit.component.css']
})
export class BrandEditComponent implements OnInit {

  brand:Brand;
  brandEditForm:FormGroup;
  subTitle:string="";
  formLoaded:boolean=false;
  constructor(
    private brandService:BrandService,
    private activatedRoute:ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService,
    private formBuilder:FormBuilder,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getBrandById(params["brandId"]);
      }
    });
  }

  getBrandById(brandId: number) {
    this.brandService.getBrandById(brandId).subscribe(response=>{
      this.brand = response.data;
      this.subTitle = "Brand: " + this.brand.name;
      
      this.createBrandEditForm();
    });
  }

  createBrandEditForm(){
    this.brandEditForm = this.formBuilder.group({
      id:[this.brand.id,Validators.required],
      name:[this.brand.name,Validators.required]
    });
    this.formLoaded=true;
  }

  saveChanges(){
    if(this.brandEditForm.valid){
      let brandModel = Object.assign({}, this.brandEditForm.value)
      
      this.brandService.update(brandModel).subscribe(response => {
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
