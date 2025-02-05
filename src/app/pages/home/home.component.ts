import { Component, inject, OnInit } from '@angular/core';
import { MealsService } from '../../services/meals/meals.service';
import { IMeals } from '../../shared/interfaces/imeals';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  private readonly Meal=inject(MealsService);
    selectedCategory: string = '';
  isLoading:boolean=true;
  Meals:IMeals[]=[]
  getMeal(cat:string)
  {
    this.selectedCategory=cat;
    this.isLoading = true;
    this.Meal.getMeals(cat).subscribe({
      next:(res) => {
        this.Meals=res.meals;
        this.isLoading = false;
      },
      error:(err) => {
        console.log(err);
        
      }
    })
  }
  onMealChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedCategory = selectElement.value;
    this.getMeal(selectedCategory);
  }
  ngOnInit(): void {
    this.selectedCategory = '';
    this.getMeal(this.selectedCategory);
  };
}
