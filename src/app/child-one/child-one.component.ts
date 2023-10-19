import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss']
})
export class ChildOneComponent implements OnInit {

  public sharedData!: string;

  constructor(private dataService: SharedService,private cd:ChangeDetectorRef ) {}

  ngOnInit() {
    this.dataService.data$.subscribe(data => {
      this.sharedData = data;
     
    });
  }
}
