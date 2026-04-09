import { IIngredient } from './ingredient.model';
import { IStep } from './step.model';
import { IAuthor } from './user.model';

export type RecipeDifficulty = 'easy' | 'medium' | 'hard';

/** Compact recipe shape for cards/lists. */
export interface IRecipePreview {
  id: string;
  title: string;
  imageUrl: string;
  categoryId: string;
  cookingTimeInMinutes: number;
  difficulty: RecipeDifficulty;
  rating: number;
}

/** Full recipe detail shape. */
export interface IRecipeDetail extends IRecipePreview {
  description: string;
  author: IAuthor;
  servings: number;
  calories: number;
  proteins: number;
  ingredients: IIngredient[];
  steps: IStep[];
}

/** Base recipe union alias. */
export type IRecipe = IRecipePreview | IRecipeDetail;
