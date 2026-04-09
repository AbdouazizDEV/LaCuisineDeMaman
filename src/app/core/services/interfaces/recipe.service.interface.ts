import { Observable } from 'rxjs';
import { IRecipeDetail, IRecipePreview } from '../../models/recipe.model';

/** Read operations for recipes. */
export interface IRecipeReadService {
  /** Gets all recipes. */
  getAll(): Observable<IRecipePreview[]>;
  /** Gets one recipe by id. */
  getById(id: string): Observable<IRecipeDetail | undefined>;
  /** Gets featured recipes. */
  getFeatured(): Observable<IRecipePreview[]>;
  /** Gets recipes by category. */
  getByCategory(categoryId: string): Observable<IRecipePreview[]>;
  /** Searches recipes by a text query. */
  search(query: string): Observable<IRecipePreview[]>;
}

/** Write operations for recipes. */
export interface IRecipeWriteService {}

/** Recipe service contract. */
export interface IRecipeService extends IRecipeReadService, IRecipeWriteService {}
