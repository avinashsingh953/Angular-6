import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems = new BehaviorSubject([]);
  selectedItems = this.cartItems.asObservable();

  constructor() { }

  AddItemToCart(food: any) {
    this.cartItems.next(food);
  }
}
