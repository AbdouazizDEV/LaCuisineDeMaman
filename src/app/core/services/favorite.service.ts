import { Injectable, signal } from '@angular/core';
import { Observable, delay, map, of } from 'rxjs';
import { recipesMock } from '../../../assets/mock/recipes.mock';
import { IRecipePreview } from '../models/recipe.model';
import { IFavoriteService } from './interfaces/favorite.service.interface';

@Injectable()
export class FavoriteService implements IFavoriteService {
  private readonly favoriteIds = signal<Set<string>>(new Set(['rec-1', 'rec-4']));

  /** Gets all favorite recipes. */
  getAll(): Observable<IRecipePreview[]> {
    return of(recipesMock).pipe(
      map((recipes) => recipes.filter((recipe) => this.favoriteIds().has(recipe.id))),
      delay(500),
    );
  }

  /** Adds a favorite recipe id. */
  add(recipeId: string): Observable<void> {
    this.favoriteIds.update((ids) => new Set(ids).add(recipeId));
    return of(void 0).pipe(delay(150));
  }

  /** Removes a favorite recipe id. */
  remove(recipeId: string): Observable<void> {
    this.favoriteIds.update((ids) => {
      const copy = new Set(ids);
      copy.delete(recipeId);
      return copy;
    });
    return of(void 0).pipe(delay(150));
  }

  /** Checks favorite state. */
  isFavorite(recipeId: string): Observable<boolean> {
    return of(this.favoriteIds().has(recipeId)).pipe(delay(80));
  }
}
