import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AddProductComponent } from './add-product/add-product.component';
import { NgPipesModule } from 'ngx-pipes';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductPipe } from './pips/product.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    DashboardComponent,
    DetailProductComponent,
    EditProductComponent,
    ListProductComponent,
    LoginComponent,
    RegistrationComponent,
    ProductPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterTestingModule,
    NgxPaginationModule,
    NgPipesModule,
    
  ],
  providers: [provideHttpClient(withFetch()),
    provideClientHydration()]
  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
