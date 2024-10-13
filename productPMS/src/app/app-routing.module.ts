import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DetailProductComponent } from './detail-product/detail-product.component';

const routes: Routes = [

// Routing Configuration

{path: '', component:ListProductComponent},
{path: 'list-product', component:ListProductComponent},
{path: 'abc', component: RegistrationComponent},
{path: 'login', component: LoginComponent},
{path: 'dashboard', component: DashboardComponent},
{path: 'dashboard/logout', component: LoginComponent},
{path: 'register', component: RegistrationComponent},
{path: 'add-product', component: AddProductComponent},
{path: 'edit/:id', component:EditProductComponent},
{path: 'detail/:id', component:DetailProductComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
