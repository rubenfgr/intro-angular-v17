import {ChangeDetectionStrategy, ChangeDetectorRef, Component, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";

@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-blue-300 p-10 grid grid-cols-2 gap-4">
      <mat-card >
        <mat-card-title class="p-4">
          Ciclo de vida de un componente
        </mat-card-title>
        <mat-card-content class="p-4">
          <p>Los componentes de Angular tienen un ciclo de vida que permite que se ejecuten acciones en momentos específicos del ciclo de vida de un componente.</p>
          <p>Estos momentos son:</p>
          <mat-list>
            <mat-list-item>ngOnInit</mat-list-item>
            <mat-list-item>ngOnChanges</mat-list-item>
            <mat-list-item>ngDoCheck</mat-list-item>
            <mat-list-item>ngAfterContentInit</mat-list-item>
            <mat-list-item>ngAfterContentChecked</mat-list-item>
            <mat-list-item>ngAfterViewInit</mat-list-item>
            <mat-list-item>ngAfterViewChecked</mat-list-item>
            <mat-list-item>ngOnDestroy</mat-list-item>
          </mat-list>
        </mat-card-content>
      </mat-card>

      <div class="flex flex-col gap-4">
        <mat-card>
          <mat-card-title class="p-4">
            {{title}}
          </mat-card-title>
        </mat-card>

        <mat-card>
          <mat-card-title class="p-4">
            {{titleSignal()}}
          </mat-card-title>
        </mat-card>
      </div>
    </div>
  `,
})
export class LifeCycleComponent {

  public title = 'Normal. Life Cycle Hooks';
  public titleSignal = signal('Signal. Life Cycle Hooks');

  constructor(private readonly chRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    console.log('ngOnInit');
    // let counter = 0;
    // setInterval(() => {
    //   counter++;
    //   this.title = 'Normal. Life Cycle Hooks ' + counter;
    //   this.titleSignal.update(() => 'Signal. Life Cycle Hooks ' + counter);
    // }, 1000);

    setTimeout(() => {
      console.log('ngOnInit. setTimeout');
      // this.chRef.detectChanges();
    }, 2500);
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
    console.log('===============================');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }


}
