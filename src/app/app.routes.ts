import {Routes} from '@angular/router';
import {ImagesListComponent} from "./images/components/images-list/images-list.component";
import {LifeCycleComponent} from "./life-cycle/life-cycle.component";
import {SignalsComponent} from "./signals/signals.component";
import {NavigationComponent} from "./navigation/navigation.component";
import {DeferrableViewsComponent} from "./deferrable-views/deferrable-views.component";

export const routes: Routes = [
  {path: 'life-cycle', title: 'Ciclo de vida', component: LifeCycleComponent},
  {path: 'images', title: 'Imagenes', component: ImagesListComponent},
  {path: 'signals', title: 'Señales', component: SignalsComponent},
  {path: 'navigation/:id', title: 'Navegación', component: NavigationComponent},
  {path: 'deferrable-views', title: 'Vistas diferidas', component: DeferrableViewsComponent},
  {path: '**', redirectTo: 'life-cycle'}
];
