import { Injectable } from '@angular/core';
import { Observable, delay, map, of } from 'rxjs';
import { recipesMock } from '../../../assets/mock/recipes.mock';
import { IRecipeDetail, IRecipePreview } from '../models/recipe.model';
import { IRecipeService } from './interfaces/recipe.service.interface';

@Injectable()
export class RecipeService implements IRecipeService {
  /** Gets all recipe previews. */
  getAll(): Observable<IRecipePreview[]> {
    return of(recipesMock).pipe(delay(500));
  }

  /** Gets one recipe by id. */
  getById(id: string): Observable<IRecipeDetail | undefined> {
    return of(recipesMock.find((recipe) => recipe.id === id)).pipe(delay(500));
  }

  /** Gets featured recipes. */
  getFeatured(): Observable<IRecipePreview[]> {
    return this.getAll().pipe(map((recipes) => recipes.slice(0, 5)));
  }

  /** Gets previews by category id. */
  getByCategory(categoryId: string): Observable<IRecipePreview[]> {
    return this.getAll().pipe(map((recipes) => recipes.filter((recipe) => recipe.categoryId === categoryId)));
  }

  /** Searches recipes by text. */
  search(query: string): Observable<IRecipePreview[]> {
    const normalized = query.trim().toLowerCase();
    return this.getAll().pipe(
      map((recipes) => recipes.filter((recipe) => recipe.title.toLowerCase().includes(normalized))),
    );
  }
}
