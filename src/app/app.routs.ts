import { NotFoundComponent } from './not-found/not-found.component';
import { OrderSumaryComponent } from './order-sumary/order-sumary.component';
import { OrderComponent } from './order/order.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
/*import { AboutComponent } from './about/about.component';*/
import { HomeComponent } from './home/home.component';
import {Routes} from '@angular/router'

export const ROUTES = [
    {path: '', component: HomeComponent},
    {path: 'about', loadChildren: './about/about.module#AboutModule'},
    {path: 'restaurants', component: RestaurantsComponent},
    {path: 'restaurants/:id', component: RestaurantDetailComponent,
        children:[
            {path:'', redirectTo:'menu', pathMatch:'full'},
            {path:'menu', component: MenuComponent},
            {path:'reviews', component: ReviewsComponent},
        ]},
    {path: 'order', loadChildren: './order/order.module#OrderModule'},
    {path: 'order-sumary', component: OrderSumaryComponent},
    {path: '**', component: NotFoundComponent},
]