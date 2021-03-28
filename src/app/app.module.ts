import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { Navbar1Component } from './navbar1/navbar1.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { DalsPulsesComponent } from './dals-pulses/dals-pulses.component';
import { FloursGrainsComponent } from './flours-grains/flours-grains.component';
import { RiceProductsComponent } from './rice-products/rice-products.component';
import { DryFruitsComponent } from './dry-fruits/dry-fruits.component';
import { SpicesMasalasComponent } from './spices-masalas/spices-masalas.component';
import { CookingoilsComponent } from './cookingoils/cookingoils.component';
import { DairyproductsComponent } from './dairyproducts/dairyproducts.component';
import { SaltComponent } from './salt/salt.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { OthergroceryComponent } from './othergrocery/othergrocery.component';
import { HomecardsComponent } from './homecards/homecards.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MyaddressComponent } from './myaddress/myaddress.component';
import { MyordersComponent } from './myorders/myorders.component';
// import { DalsPulsesComponent } from './dals-pulses/dals-pulses.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    Navbar1Component,
    Navbar2Component,
    CarouselComponent,
    FooterComponent,
    LoginComponent,
    WishlistComponent,
    CartComponent,
    DalsPulsesComponent,
    FloursGrainsComponent,
    RiceProductsComponent,
    DryFruitsComponent,
    SpicesMasalasComponent,
    CookingoilsComponent,
    DairyproductsComponent,
    SaltComponent,
    BreakfastComponent,
    OthergroceryComponent,
    HomecardsComponent,
    UserdashboardComponent,
    MyprofileComponent,
    MyaddressComponent,
    MyordersComponent,
    
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
