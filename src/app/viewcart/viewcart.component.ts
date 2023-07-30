import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface FoodItem {
  id: number;
  name: string;
}

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent {
  foodItems: FoodItem[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchFoodItems();
  }

  fetchFoodItems() {
    // Replace 'http://localhost:3000/cart' with the custom JSON Server route for "cart"
    this.http.get<FoodItem[]>('http://localhost:3000/cart').subscribe(
      (response) => {
        this.foodItems = response;
      },
      (error) => {
        console.error('Failed to fetch food items:', error);
      }
    );
  }

  

}
