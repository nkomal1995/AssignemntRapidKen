import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardViewComponent } from './employee/card-view/card-view.component';
import { EmployeeComponent } from './employee/employee.component';
import { ViewComponent } from './employee/view/view.component';
import { ErrPageComponent } from './err-page/err-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{ path: '',   redirectTo: '/login', pathMatch: 'full' },
{path:'login' ,component:LoginComponent},
{path:'header' , component:HeaderComponent},
{path:'footer',component:FooterComponent},
{path:'employee',component:EmployeeComponent},
{path:'listView',component:ViewComponent},
{path:'cardView',component:CardViewComponent},
{path:'error',component:ErrPageComponent},



// { path: '**', component: LoginComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
