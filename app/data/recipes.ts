export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian",
    ingredients: [
      "1 pizza dough ball",
      "1/2 cup tomato sauce",
      "125g fresh mozzarella",
      "Fresh basil leaves",
      "Olive oil and salt",
    ],
    steps: [
      "Preheat the oven as hot as it goes.",
      "Stretch the dough into a round base and spread the tomato sauce.",
      "Tear mozzarella over the top and drizzle with olive oil.",
      "Bake for 8 to 10 minutes until the crust blisters.",
      "Top with fresh basil leaves before slicing.",
    ],
  },
  {
    id: "paneer-tikka",
    title: "Paneer Tikka",
    emoji: "🧆",
    minutes: 30,
    difficulty: "Easy",
    cuisine: "Indian",
    ingredients: [
      "250g paneer, cubed",
      "1/2 cup thick yogurt",
      "1 tbsp tikka masala spice blend",
      "1 bell pepper and 1 red onion, cubed",
      "1 tbsp lemon juice",
    ],
    steps: [
      "Whisk yogurt, spices, and lemon juice in a bowl.",
      "Toss paneer, bell pepper, and onion cubes in the marinade for 15 minutes.",
      "Thread onto skewers alternating paneer and veggies.",
      "Grill or pan-sear until charred on all sides.",
    ],
  },
  {
    id: "cold-brew-coffee",
    title: "Cold Brew Coffee",
    emoji: "☕",
    minutes: 10,
    difficulty: "Easy",
    cuisine: "Cafe",
    ingredients: [
      "1/2 cup coarsely ground coffee beans",
      "2 cups cold filtered water",
      "Ice cubes",
      "Milk or oat milk (optional)",
    ],
    steps: [
      "Combine coarse coffee grounds and cold water in a jar.",
      "Stir gently, cover, and steep in the fridge for 12 to 16 hours.",
      "Strain through a fine mesh sieve or coffee filter.",
      "Serve over ice with a splash of milk.",
    ],
  },
  {
    id: "avocado-toast",
    title: "Sourdough Avocado Toast",
    emoji: "🥑",
    minutes: 12,
    difficulty: "Easy",
    cuisine: "Breakfast",
    ingredients: [
      "2 slices sourdough bread",
      "1 ripe avocado",
      "1 tsp lemon juice",
      "Red pepper flakes",
      "Flaky sea salt",
    ],
    steps: [
      "Toast the sourdough slices until golden and crisp.",
      "Mash the avocado with lemon juice and a pinch of salt.",
      "Spread generously over the warm toast.",
      "Finish with red pepper flakes and flaky sea salt.",
    ],
  },
  {
    id: "ramen-bowl",
    title: "Spicy Miso Ramen",
    emoji: "🍜",
    minutes: 45,
    difficulty: "Hard",
    cuisine: "Japanese",
    ingredients: [
      "2 packs ramen noodles",
      "4 cups vegetable or chicken broth",
      "2 tbsp white miso paste",
      "1 tbsp chili garlic sauce",
      "2 soft-boiled eggs and sliced scallions",
    ],
    steps: [
      "Simmer the broth in a pot, then whisk in miso paste and chili garlic sauce.",
      "Boil the ramen noodles separately according to package instructions.",
      "Divide noodles into bowls and ladle the hot miso broth over top.",
      "Garnish with halved soft-boiled eggs and sliced scallions.",
    ],
  },
  {
    id: "berry-pancakes",
    title: "Blueberry Pancakes",
    emoji: "🥞",
    minutes: 20,
    difficulty: "Easy",
    cuisine: "American",
    ingredients: [
      "1 cup all-purpose flour",
      "1 tbsp sugar and 1 tsp baking powder",
      "3/4 cup milk and 1 egg",
      "1/2 cup fresh blueberries",
      "Maple syrup for serving",
    ],
    steps: [
      "Whisk dry ingredients together, then stir in milk and egg until smooth.",
      "Fold in the fresh blueberries gently.",
      "Pour batter onto a lightly greased skillet over medium heat.",
      "Flip when bubbles form on top, cook until golden, and serve with maple syrup.",
    ],
  },
];

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}