import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: any = [];

  constructor(private dataService: DataService) { }

  ngOnInit(){
    this.dataService.sendGetRequest().subscribe((data: any[]) => { // when the application initializes we  subscribe to the sendRequestMethod and what is being passed in the subscribe is another variable called data
      this.products = data; // we have assigned the information collected on subcribe which is now stored in data and essentially pushed it into the products array.
    });
  }

}
