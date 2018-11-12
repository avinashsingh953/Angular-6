import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FoodItemComponent } from './food-item/food-item.component';
import { OrderHistoryComponent } from './order-history/order-history.component';

const routes: Routes = [
  { path: '', component: FoodItemComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'orders', component: OrderHistoryComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
