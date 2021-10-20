import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home/home-layout.component';
import { HOME_ROUTES } from './shared/routes/home.routes';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: HOME_ROUTES,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
