import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-universal',
  templateUrl: './universal.component.html'
})
export class UniversalComponent implements OnInit {

  constructor(private dataService: SharedService, private cd: ChangeDetectorRef) { }
  
  ngOnInit(): void {}

  updateSharedData(value: any) {
    this.dataService.updateData(value);

  }

}
