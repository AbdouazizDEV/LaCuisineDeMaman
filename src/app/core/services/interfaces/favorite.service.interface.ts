import { Observable } from 'rxjs';
import { IRecipePreview } from '../../models/recipe.model';

/** Favorites write/read contract. */
export interface IFavoriteService {
  /** Gets all favorite recipe previews. */
  getAll(): Observable<IRecipePreview[]>;
  /** Adds a recipe to favorites. */
  add(recipeId: string): Observable<void>;
  /** Removes a recipe from favorites. */
  remove(recipeId: string): Observable<void>;
  /** Checks if recipe is favorite. */
  isFavorite(recipeId: string): Observable<boolean>;
}
