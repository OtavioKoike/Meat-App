import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RestaurantService } from './restaurants.service';
import { Restaurant } from './restaurant/restaurant.model';
import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations'

import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  animations: [
    trigger('toggleSearch', [
      state('hidden', style({
        opacity: 0,
        "max-heigth": "0px"
      })),
      state('visible', style({
        opacity: 1,
        "max-heigth": "70px",
        "margin-top": "20px",
        "margin-bottom": "40px",
      })),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class RestaurantsComponent implements OnInit {

  searchBarState = 'hidden'
  restaurants: Restaurant[]
  searchForm: FormGroup
  searchControl: FormControl

  constructor(private restaurantService: RestaurantService, private fb: FormBuilder) { }

  ngOnInit() {
     this.restaurantService.restaurants().subscribe(restaurants => this.restaurants = restaurants)
     
     this.searchForm = this.fb.group({
       searchControl: this.searchControl
     })

     this.searchControl = this.fb.control('')
     this.searchControl.valueChanges.subscribe(searchTerm => console.log(searchTerm))
  }

  toogleSearch(){
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden'
  }

}
