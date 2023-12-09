import {Component, Input, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-deferrable-item',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './deferrable-item.component.html',
  styleUrl: './deferrable-item.component.scss'
})
export class DeferrableItemComponent {

  @Input() trigger = 'N/A';
  title = signal('TITLE');
  content = signal('CONTENT');

  ngOnInit() {
    console.log('trigger', this.trigger);
  }

  doAction() {
    console.log('doAction', this.title, this.content);
    this.title.set('TITLE + ' + Math.random());
    this.content.set('CONTENT + ' + Math.random());
  }
}
