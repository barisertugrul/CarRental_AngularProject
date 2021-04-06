import { Component, OnInit } from '@angular/core';
import { RentalDto } from 'app/models/rentalDto';
import { RentalDtoService } from 'app/services/rental-dto.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentals:RentalDto[] = [];
  dataLoaded = false;
  subTitle:string = "";

  constructor(private rentalService:RentalDtoService) { }
  
  ngOnInit(): void {
    this.getRentals();
  }

  getRentals(){
    this.rentalService.getRentals().subscribe(response=>{
      this.rentals = response.data
      this.subTitle = "All Rentals"
      this.dataLoaded = true
    });
  }

  getFullName(rental:RentalDto) {
    var fullname = [rental.firstName,rental.lastName].join(" ");
    return fullname;
  }

}
