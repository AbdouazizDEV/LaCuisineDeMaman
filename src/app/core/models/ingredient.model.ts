/** Ingredient line for recipe detail. */
export interface IIngredient {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  checked?: boolean;
}
