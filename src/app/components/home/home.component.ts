import { Component, OnInit } from '@angular/core';
import { DataRecycleService } from '../../services/data-recycle.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataRecycleService: DataRecycleService) { }

  ngOnInit() {
  }



  sitterListPage(){
    this.dataRecycleService.getUsers();
  }
}
