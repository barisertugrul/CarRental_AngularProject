import { Component, OnInit, Type } from '@angular/core';
import { Brand } from 'app/models/brand';
import { BrandService } from 'app/services/brand.service';
import { SearchFilterService } from 'app/services/searchFilter.service';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirmComponent } from 'app/components/modal-confirm/modal-confirm.component';
declare var $: any;

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:Brand[] = [];
  dataLoaded = false;
  subTitle:string = "";
  formLoaded:boolean=false;
  brandAddForm: FormGroup;
  currentBrand:Brand;
  withAutofocus = `<button type="button" ngbAutofocus class="btn btn-danger"
      (click)="modal.close('Ok click')">Ok</button>`;

  constructor(private brandService:BrandService,
    private searchFilterService:SearchFilterService,
    private toastrService: ToastrService,
    private formBuilder:FormBuilder,
    private _modalService: NgbModal
    ) { }

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
    return (filterData.length > 0)?"Search results for \"" + filterData + "\"":this.subTitle;
  }

  showBrandAddForm():void{
    $("#modalBrandAddForm").modal('show')
    this.createBrandAddForm();
  }

  createBrandAddForm(){
    this.brandAddForm = this.formBuilder.group({
      id:[0,Validators.required],
      name:["",Validators.required]
    });
    this.formLoaded=true;
  }

  saveChanges(){
    if(this.brandAddForm.valid){
      let brandModel = Object.assign({}, this.brandAddForm.value)
      
      this.brandService.add(brandModel).subscribe(response => {
        this.toastrService.success(response.message, "Success")
        $("#modalBrandAddForm").modal('hide')
        this.getBrands();
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

  openDeleteConfirmForm(brand:Brand, content:any) {
    this.currentBrand = brand
    this._modalService.open(content);
  }

  delete(brand:Brand){
    this.brandService.delete(brand).subscribe(response => {
      this.toastrService.success(response.message, "Success")
      this.getBrands();
    },responseError=>{
      if(responseError.error.ValidationErrors.length>0){
        for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
          this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage, "Validation Error");
        }
      };
    })
  }

}
