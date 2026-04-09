import { InjectionToken, Provider } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { FavoriteService } from '../services/favorite.service';
import { RecipeService } from '../services/recipe.service';
import { UserService } from '../services/user.service';
import { ICategoryService } from '../services/interfaces/category.service.interface';
import { IFavoriteService } from '../services/interfaces/favorite.service.interface';
import { IRecipeService } from '../services/interfaces/recipe.service.interface';
import { IUserService } from '../services/interfaces/user.service.interface';

export const API_URL = new InjectionToken<string>('API_URL');
export const RECIPE_SERVICE = new InjectionToken<IRecipeService>('RECIPE_SERVICE');
export const CATEGORY_SERVICE = new InjectionToken<ICategoryService>('CATEGORY_SERVICE');
export const FAVORITE_SERVICE = new InjectionToken<IFavoriteService>('FAVORITE_SERVICE');
export const USER_SERVICE = new InjectionToken<IUserService>('USER_SERVICE');

export const appProviders: Provider[] = [
  { provide: API_URL, useValue: 'https://api.cuisinedemaman.local' },
  { provide: RECIPE_SERVICE, useClass: RecipeService },
  { provide: CATEGORY_SERVICE, useClass: CategoryService },
  { provide: FAVORITE_SERVICE, useClass: FavoriteService },
  { provide: USER_SERVICE, useClass: UserService },
];
