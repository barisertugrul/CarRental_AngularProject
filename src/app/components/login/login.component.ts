import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  toUrl:any="/dashboard"
  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthService,
    private toastrService: ToastrService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.createLoginForm();
    if(this.activatedRoute.snapshot.params["toUrl"]){
      this.toUrl=this.activatedRoute.snapshot.paramMap.get('toUrl')
      console.log(this.toUrl)
    }
    
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email: ["",Validators.required],
      password: ["",Validators.required]
    })
  }

  login(){
    if(this.loginForm.valid){
      //console.log(this.loginForm.value);
      let loginModel = Object.assign({},this.loginForm.value)

      this.authService.login(loginModel).subscribe(response => {
        this.toastrService.info(response.message)
        //TODO service içine taşı
        localStorage.setItem("token",response.data.token)
        this.router.navigate([this.toUrl])
      },responseError=>{
          this.toastrService.error(responseError.error.message);
      })
    }
  }

}
