import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchFilterService {

  filterData: string = "";
  
  constructor() { }
}
