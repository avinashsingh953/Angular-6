import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  foodItems = [];
  constructor(private cartService: CartService) {
    console.log('shopping cart initialized');
  }

  ngOnInit() {
    this.cartService.selectedItems.subscribe(selectedItems => {
      this.foodItems = selectedItems;
      console.log(JSON.stringify(selectedItems));
    });
  }

}
