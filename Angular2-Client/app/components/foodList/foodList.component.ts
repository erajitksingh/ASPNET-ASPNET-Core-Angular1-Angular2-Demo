import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FoodItem } from '../../models/foodItem';

@Component({
    moduleId: module.id,
    selector: 'foodList',
    templateUrl: './foodList.component.html'
})

export class FoodListComponent {
    public foodItem: FoodItem;
    public searchString: string;

    @Input() foods: FoodItem[];
    @Output() foodSelected = new EventEmitter<FoodItem>();
    @Output() foodDeleted = new EventEmitter<FoodItem>();

    public setFoodItemForEdit = (foodItem: FoodItem): void => {
        this.foodSelected.emit(foodItem);
    }

    public deleteFood = (foodItem: FoodItem): void => {
        this.foodDeleted.emit(foodItem);
    };
}
