import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {ImagesListComponent} from "./images/components/images-list/images-list.component";
import {LifeCycleComponent} from "./life-cycle/life-cycle.component";
import {SignalsComponent} from "./signals/signals.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, ImagesListComponent, LifeCycleComponent, SignalsComponent, MatSidenavModule, MatListModule, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor() {
  }

}
