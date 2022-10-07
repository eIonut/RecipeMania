export interface IRecipe {
  aggregateLikes?: number;
  image?: string;
  readyInMinutes?: number;
  servings?: number;
  summary?: string;
  title?: string;
  cuisines?: string[];
  dishTypes?: string[];
}
