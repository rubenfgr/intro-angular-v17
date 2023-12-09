import {Component, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DeferrableItemComponent} from "./deferrable-item/deferrable-item.component";
import {MatListModule} from "@angular/material/list";

@Component({
  selector: 'app-deferrable-views',
  standalone: true,
  imports: [CommonModule, DeferrableItemComponent, MatListModule],
  templateUrl: './deferrable-views.component.html',
  styleUrl: './deferrable-views.component.scss'
})
export class DeferrableViewsComponent {
  isCheckedDefer = signal(false);

  ngOnInit() {
    setTimeout(() => {
      console.log('isCheckedDefer', this.isCheckedDefer);
      this.isCheckedDefer.set(true);
    }, 3000);
  }
}
