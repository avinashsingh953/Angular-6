import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {
  selectedFoodItems = [];
  foodItems = [
    {
      id: 1,
      name: 'Burger',
      Description: 'Tasty burger with fries',
      imageUrl: '../../assets/images/food1.jpg'
    },
    {
      id: 2,
      name: 'Salad',
      Description: 'Healthy Salad',
      imageUrl: '../../assets/images/food2.jpg'
    },
    {
      id: 3,
      name: 'Meat',
      Description: 'Smoked Meat',
      imageUrl: '../../assets/images/food3.jpg'
    },
    {
      id: 4,
      name: 'Large Burger',
      Description: 'Large Burger',
      imageUrl: '../../assets/images/food4.jpg'
    },
    {
      id: 5,
      name: 'Roll',
      Description: 'Chicken Roll',
      imageUrl: '../../assets/images/food5.jpg'
    },
    {
      id: 6,
      name: 'Samosa',
      Description: 'Samosa',
      imageUrl: '../../assets/images/food6.jpg'
    },
    {
      id: 7,
      name: 'Cake',
      Description: 'Sweet Cake',
      imageUrl: '../../assets/images/food7.jpg'
    },
    {
      id: 8,
      name: 'Pasta',
      Description: 'Tasty Pasta',
      imageUrl: '../../assets/images/food8.jpg'
    }
  ];
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.selectedItems.subscribe(selectedItems => {
      this.selectedFoodItems = selectedItems;
      // console.log(JSON.stringify(selectedItems));
    });
  }

  AddItemToCart(foodItem: any) {
    // console.log((<HTMLInputElement>event.target).value);
    this.selectedFoodItems.push(foodItem);
    this.cartService.AddItemToCart(this.selectedFoodItems);
  }

  RemoveItemFromCart(foodItem: any) {

  }

}
