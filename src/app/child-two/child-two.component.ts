import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.scss']
})
export class ChildTwoComponent implements OnInit {

  public sharedData!: string;

  constructor(private dataService: SharedService) { }

  ngOnInit() {

    this.dataService.data$.subscribe(data => {
      this.sharedData = data;
    });
  }
}
