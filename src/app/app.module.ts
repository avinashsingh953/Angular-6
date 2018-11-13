import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FoodItemComponent } from './food-item/food-item.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { SpecialButtonComponent } from './special-button/special-button.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CartService } from './cart.service';
import { AppRoutingModule } from './/app-routing.module';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { MenuService } from './menu.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FoodItemComponent,
    MainMenuComponent,
    SpecialButtonComponent,
    ShoppingCartComponent,
    OrderHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CartService, MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
