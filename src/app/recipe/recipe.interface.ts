export interface IRecipe {
  aggregateLikes?: number;
  image?: string;
  readyInMinutes?: number;
  servings?: number;
  summary?: string;
  instructions?: string;
  title?: string;
  cuisines?: string[];
  dishTypes?: string[];
  extendedIngredients?: [{
    image?: string;
    name?: string;
    measures?: { us?: { amount?: number;
        unitShort?: string;}

    }
  }
  ];
}
