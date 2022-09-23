import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapsulesComponent } from './components/capsules/capsules.component';
import { IndexComponent } from './components/index/index.component';
import { RocketsComponent } from './components/rockets/rockets.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'capsules',
    component: CapsulesComponent,
  },
  {
    path: 'rockets',
    component: RocketsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routerComponents = [
  IndexComponent,
  CapsulesComponent,
  RocketsComponent,
];
