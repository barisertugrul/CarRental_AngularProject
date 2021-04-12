import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarDto } from 'app/models/carDto';
import { CreditCard } from 'app/models/creditCard';
import { CreditCardExtend } from 'app/models/creditCardExtend';
import { Payment } from 'app/models/payment';
import { Rental } from 'app/models/rental';
import { CarService } from 'app/services/car.service';
import { CreditCardService } from 'app/services/credit-card.service';
import { CustomerService } from 'app/services/customer.service';
import { PaymentService } from 'app/services/payment.service';
import { RentalService } from 'app/services/rental.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  rental:Rental;
  car:CarDto;
  cardAddForm: FormGroup;
  cards: CreditCard[];
  card : CreditCardExtend;
  formLoaded: boolean = false;
  isSave:boolean=false;
  paymentModel:Payment;
  currentCard:CreditCard;
  testCards:CreditCardExtend[];

  constructor(
    private paymentService: PaymentService,
    private rentalService:RentalService,
    private carService: CarService,
    private creditCardService:CreditCardService,
    private toastrService: ToastrService,
    private formBuilder:FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['payTo']) {
        this.setRental(params['payTo']);
      }
      
    })

  }

  setRental(rentalId:number){
    this.rentalService.getRentalById(rentalId).subscribe(response=>{
      this.rental = response.data
      this.getCar();
      this.setTestCards();
      this.getCardsByCustomer();
      this.createCreditCardAddForm();
    });
  }

  getCar(){
    this.carService.getCarDetailsById(this.rental.carId).subscribe(response=>{
      this.car = response.data
    });
  }

  getCardsByCustomer(){
    this.creditCardService.getCardsByCustomerId(this.rental.customerId).subscribe(response=>{
      this.cards = response.data
    });
  }

  createCreditCardAddForm(){
    this.cardAddForm = this.formBuilder.group({
      customerId:[this.rental.customerId],
      cardHolder:["",Validators.required],
      cardNumber:["",Validators.required],
      expYear:["0",Validators.required],
      expMonth:["0",Validators.required],
      cvv:["",Validators.required]
    });
    this.formLoaded = true;
  }

  saveCheck(check:boolean){
    this.isSave = check;
    console.log(this.isSave);
  }

  pay(){
    if(this.cardAddForm.valid){
      this.card = Object.assign({}, this.cardAddForm.value)
      console.log(this.card);
      let copy:Payment={
        payCard:this.card,
        isSave:this.isSave,
        rentalId:this.rental.id
      }
      this.paymentModel= Object.assign({}, copy)
      this.paymentService.pay(this.paymentModel).subscribe(response => {
        console.log(response)
          this.toastrService.success(response.message, "Success")
          this.router.navigate(['/payment/success', JSON.stringify(this.paymentModel)]);
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

  setCurrentCard(card:CreditCard){
    this.currentCard = card;

    let extendsCard:any = (({ id, ...o }) => o)(card);
    
    extendsCard["cvv"]=""
    this.cardAddForm.setValue(extendsCard);
    
  }

  getCardClass(card:CreditCard){
    if(card == this.currentCard){
      return "list-group-item clickable active"
    }else{
      return "list-group-item clickable"
    }
  }

  removeCard(card:CreditCard){
    //TODO remove
    console.log(card)
  }

  updateCard(card:CreditCard){
    //TODO update
    console.log(card)
  }

  setTestCards(){
    this.testCards = [
      {id : 1, customerId:1, cardNumber : "4894554325580030", cardHolder : "JOHN SMITH", expYear : "2020", expMonth : "11", cvv : "771"},
      {id : 2, customerId:1, cardNumber : "5549605095686021", cardHolder : "JANE DOE", expYear : "2021", expMonth : "02", cvv : "423"},
      {id : 3, customerId:1, cardNumber : "4475056018091405", cardHolder : "MICHAEL JAEL", expYear : "2021", expMonth : "04", cvv : "268"},
      {id : 4, customerId:1, cardNumber : "4896710544369175", cardHolder : "LINDA MINA", expYear : "2023", expMonth : "08", cvv : "804"},
      {id : 5, customerId:1, cardNumber : "4920365481084617", cardHolder : "BATMAN", expYear : "2022", expMonth : "01", cvv : "130"},
      {id : 6, customerId:1, cardNumber : "6761246013978692", cardHolder : "SPIDERMAN", expYear : "2022", expMonth : "01", cvv : "777"},
      {id : 7, customerId:1, cardNumber : "5170404878973517", cardHolder : "SUPERMAN", expYear : "2023", expMonth : "02", cvv : "541"},
      {id : 8, customerId:1, cardNumber : "6364730111104487", cardHolder : "MARLON BRANDO", expYear : "2024", expMonth : "03", cvv : "032"},
      {id : 9, customerId:1, cardNumber : "8691005000077342", cardHolder : "GEORGE BORCH", expYear : "2021", expMonth : "04", cvv : "101"},
      {id : 10, customerId:1, cardNumber : "5170414892267044", cardHolder : "BLACK BROWN", expYear : "2020", expMonth : "05", cvv : "315"},
      {id : 11, customerId:1, cardNumber : "4475048941745546", cardHolder : "CHARLIE BROWN", expYear : "2025", expMonth : "06", cvv : "123"},
      {id : 12, customerId:1, cardNumber : "4603460017289108", cardHolder : "ALBERT EINSTEIN", expYear : "2022", expMonth : "07", cvv : "621"}
    ]
  }

  fillForm(card:CreditCardExtend){
    let fillCard:any = (({ id, ...o }) => o)(card);

    this.cardAddForm.setValue(fillCard);
  }

}
