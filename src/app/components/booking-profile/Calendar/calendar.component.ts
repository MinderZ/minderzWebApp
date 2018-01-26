import { Component } from "@angular/core";
import * as moment from "moment";

@Component({
  selector: "app-calendar",
  templateUrl: "./calender.component.html",
  styleUrls: ["./calendar.component.css"]
})
export class CalendarComponent {
  serviceMap: Map<string, Array<any>> = new Map<string, Array<any>>();
  selectedCalendar: Array<CalendarDate>;
  calendarIndex:number = 0;
  showPrevArrow: boolean = false;
  showNextArrow: boolean = true;
  calendarToUse:string;
  daysInMonth = moment().daysInMonth();
  currentDate = moment();
  testMonth: any;
  displayDate = moment();

  constructor() {}

  ngOnInit() {
    this.generateCalendar();
    //Generates one calendar and copies to rest of the map
    this.serviceMap["DogWalking"] =this.generateCalendar();
    this.serviceMap["DropInVist"] =this.generateCalendar();
    this.serviceMap["HouseSitting"] =this.generateCalendar();
    this.serviceMap["PetBoarding"] =this.generateCalendar();

    this.switchCalendar("DogWalking");
    this.setMonth(0);

    console.log(this.serviceMap);
  }

  generateCalendar(): Array<CalendarDate> {
    var currentDate = moment();
    var empty = false;
    var currentMonth = moment().month();
    let calendar = new Array();
    for (let monthIndex = 0; monthIndex < 12; monthIndex++) {
        let month = new Array();
        empty = false;
        for (let day = 0; day < 35; day++) {
            if (!(day < currentDate.daysInMonth())) {
            empty = true;
            }
            month.push({month: currentDate.format('MMMM'), date:day,isSelected: false,isToday:false,isFullyBooked:false,isEmpty: empty,numBooked: 0});
        }
        currentDate = moment(currentDate).add(1, "months");
        calendar.push(month);
    }
    if(this.currentDate.format('MMMM') === moment().format('MMMM')){
       calendar = this.setToday(calendar);
    }

    return calendar;
  }


  setToday(calendar: Array<any>) {
    var currDay = Number(moment().format("DD"));
    var currMonth = Number(moment().format("MM"));

    calendar[currMonth-1][currDay-1].isToday = true;
    return calendar;
  }



  prevMonth(): void {
    var counter = this.calendarIndex;
    if((counter == 0)){
        this.displayArrows(this.calendarIndex);
    }else{
        this.displayDate = moment(this.displayDate).subtract(1,"months")
        this.calendarIndex--;
        this.displayArrows(this.calendarIndex);
        this.setMonth(this.calendarIndex)
    }
  }

  nextMonth(): void {
    var counter = this.calendarIndex;
    if((counter == 11)){
        this.displayArrows(this.calendarIndex);
    }else{
        this.displayDate = moment(this.displayDate).add(1,"months")
        this.calendarIndex++;
        this.displayArrows(this.calendarIndex);
        this.setMonth(this.calendarIndex)

    }
  }

  displayArrows(index: number){
      if( index == 0){
          this.showPrevArrow = false;
          this.showNextArrow = true;
      }
      if(index > 0 && index < 11){
        this.showPrevArrow = true;
        this.showNextArrow = true;
      }
      if(index == 11){
          this.showNextArrow = false;
          this.showPrevArrow = true;
      }
  }

  getSelectedCalendar(){
      console.log(this.selectedCalendar);
    return this.selectedCalendar;
  }

  setMonth(monthToUse: number) {
    this.selectedCalendar = this.serviceMap[this.calendarToUse][monthToUse];
  }

  switchCalendar(calendarName: string) {
    this.calendarToUse = calendarName;
    this.selectedCalendar = this.serviceMap[calendarName][Number(this.displayDate.format(('MM'))) - 1];
    console.log('Map', this.serviceMap);

  }

  select(Day: CalendarDate) {
    this.selectedCalendar[Day.date].isSelected = !this.selectedCalendar[Day.date].isSelected;
  }


  saveSelectedDates(){

  }


}

export interface CalendarDate {
  month:string;
  date: number;
  isSelected?: boolean;
  isEmpty?: boolean;
  isToday?: boolean;
  isFullyBooked?: boolean;
  numBooked: number;
}
