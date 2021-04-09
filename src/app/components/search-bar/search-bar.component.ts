import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchFilterService } from 'app/services/searchFilter.service';

import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private searchFilterService:SearchFilterService) { }

  ngOnInit(): void {
  }

  get filterText():string{
    return this.searchFilterService.filterData;
  }

  set filterText(value: string){
    this.searchFilterService.filterData = value;
  }

}
