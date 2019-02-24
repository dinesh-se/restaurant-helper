import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameRef : ElementRef;
  @ViewChild('amountInput') amountRef : ElementRef;

  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(e) {
    e.preventDefault();
    const ingredientName = this.nameRef.nativeElement.value;
    const ingredientAmount = this.amountRef.nativeElement.value;
    const newIngredient = new Ingredient(ingredientName, ingredientAmount);
    this.shoppinglistService.addIngredient(newIngredient);
  }

}
