/** Author model used by recipes. */
export interface IAuthor {
  id: string;
  name: string;
  avatarUrl: string;
}

/** User profile model. */
export interface IUser {
  id: string;
  fullName: string;
  email: string;
  avatarUrl: string;
  createdRecipes: number;
  favorites: number;
}
