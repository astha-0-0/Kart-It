import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  selectedFoods: string[] = [];

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  

  respond(foodName: string) {
    this.selectedFoods.push(foodName);

    // Save the selected food name to the fake JSON API
    this.saveFoodToCart(foodName).subscribe(
      (response) => {
        console.log('Food saved to cart:', response);
      },
      (error) => {
        console.error('Failed to save food to cart:', error);
      }
    );
    this.showSuccessMessage(foodName + ' added to the cart.');
  }

  private saveFoodToCart(foodName: string) {
    // Replace 'http://localhost:3000/cart' with your fake JSON API URL
    return this.http.post('http://localhost:3000/cart', { foodName });
  }

  showSuccessMessage(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000, // Display duration in milliseconds (3 seconds in this case)
      verticalPosition: 'top', // Position of the snack bar (top, bottom)
      horizontalPosition: 'center', // Position of the snack bar (start, center, end)
      panelClass: 'success-snackbar' // Custom CSS class for styling the snack bar
    });
  }

}
