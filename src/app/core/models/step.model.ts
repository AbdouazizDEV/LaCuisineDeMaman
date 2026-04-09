/** Cooking step model. */
export interface IStep {
  id: string;
  order: number;
  description: string;
  durationInMinutes?: number;
}
