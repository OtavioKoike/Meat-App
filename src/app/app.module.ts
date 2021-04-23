/*import { CoreModule } from './core/core.module';*/
import { SharedModule } from './shared/shared.module';
/*import { OrderServer } from './order/order.service';*/
/*import { ShoppingCartService } from './restaurant-detail/shopping-cart/shopping-cart.service';*/
/*import { RestaurantService } from './restaurants/restaurants.service';*/
import { ROUTES } from './app.routs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';

import{FormsModule, ReactiveFormsModule} from '@angular/forms'
import{LocationStrategy, HashLocationStrategy} from '@angular/common'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
/*import { AboutComponent } from './about/about.component';*/
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
/*import { OrderComponent } from './order/order.component';*/
/*import { InputComponent } from './shared/input/input.component';*/
/*import { RadioComponent } from './shared/radio/radio.component';*/
/*import { OrderItemsComponent } from './order/order-items/order-items.component';*/
/*import { DeliveryCostsComponent } from './order/delivery-costs/delivery-costs.component';*/
import { OrderSumaryComponent } from './order-sumary/order-sumary.component';
import { NotFoundComponent } from './not-found/not-found.component';
/*import { RatingComponent } from './shared/rating/rating.component';*/
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    /*AboutComponent,*/
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    /*OrderComponent,*/
    /*InputComponent,*/
    /*RadioComponent,*/
    /*OrderItemsComponent,*/
    /*DeliveryCostsComponent,*/
    OrderSumaryComponent,
    NotFoundComponent,
    /*RatingComponent,*/
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules}),
    /*FormsModule,*/
    /*ReactiveFormsModule,*/
    SharedModule.forRoot(),
    /*CoreModule,*/
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
    /*RestaurantService,*/
    /*ShoppingCartService,*/ 
    /*OrderServer*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
