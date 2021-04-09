import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {NgbDate, NgbCalendar, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngbd-datepicker-range-popup',
  templateUrl: './ngbd-datepicker-range-popup.component.html',
  styleUrls: ['./ngbd-datepicker-range-popup.component.css']
})
export class NgbdDatepickerRangePopupComponent implements OnInit {


  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate | null;
  toDate: NgbDate | null;
  today = this.calendar.getToday();
  
  @Input() controlName:string = "RentDateRange";
  @Output() dateRangeValue = new EventEmitter();
  
  constructor(private calendar: NgbCalendar, public formatter: NgbDateParserFormatter) { }

  ngOnInit(): void {
    // this.fromDate = this.calendar.getToday();
    // this.toDate = this.calendar.getNext(this.calendar.getToday(), 'd', 10);
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
    this.dateRangeValue.emit({"startDate":this.fromDate, "endDate":this.toDate});
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }

}
