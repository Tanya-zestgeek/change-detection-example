import { ChangeDetectorRef, Component, OnInit, SimpleChanges } from '@angular/core';
import Swal from 'sweetalert2';
import { SharedService } from '../shared.service';
import { Subject, distinctUntilChanged, takeUntil } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {
  public sharedData!: string;
  public changeDetectedAfterInit: boolean = false;
  private ngUnsubscribe = new Subject<void>();

  constructor(private SharedService: SharedService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.SharedService.data$.pipe(
      distinctUntilChanged(), // Prevent processing if the data hasn't changed
      takeUntil(this.ngUnsubscribe) // Unsubscribe when the component is destroyed
    ).subscribe((data: any) => {
      this.sharedData = data;
      if (this.changeDetectedAfterInit) {
        this.showChangeToast(data);
      } else {
        this.changeDetectedAfterInit = true;
      }
    })
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  private showChangeToast(data: any) {
    Swal.fire({
      toast: true,
      icon: 'info',
      position: 'top-right',
      showConfirmButton: false,
      timer: 2000,
      title: `Universal Component has changed Initial value to: ${data}`,
    });
  }


}
