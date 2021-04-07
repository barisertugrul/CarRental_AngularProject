import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Car } from 'app/models/car';

@Component({
  selector: 'app-rental-in-car-detail',
  templateUrl: './rental-in-car-detail.component.html',
  styleUrls: ['./rental-in-car-detail.component.css']
})
export class RentalInCarDetailComponent implements OnInit {
  @Input() car: Car;
  
  constructor() { }

  ngOnInit(): void {
  }

}
