import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service'

@Component({
  selector: 'app-selected-item',
  templateUrl: './selected-item.component.html',
  styleUrls: ['./selected-item.component.css']
})
export class SelectedItemComponent implements OnInit {

  itemSelected: any = [];

  constructor(
                private dataService: DataService,
                private route: ActivatedRoute,
                private router: Router
              ) { }

  ngOnInit() {
    this.selectedItem();
  }

  selectedItem() {
    const id = this.route.snapshot.params['id'];
    this.dataService.selectItem(id).subscribe((data: any[]) => {
      this.itemSelected = data
    })
  }

  placeOrder() {
    this.router.navigate(['orders'])
  }
}
