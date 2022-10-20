import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RidepageComponent } from './components/ridepage/ridepage.component';
import { UserlandingpageComponent } from './components/userlandingpage/userlandingpage.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },{
    path: 'userlandingpage',
    component: UserlandingpageComponent
  },{
    path:'ridepage',
    component: RidepageComponent
  },{
    path:'profilepage',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
