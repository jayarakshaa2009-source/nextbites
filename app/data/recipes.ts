export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian",
  },
  {
    id: "paneer-tikka",
    title: "Paneer Tikka",
    emoji: "🧆",
    minutes: 30,
    difficulty: "Easy",
    cuisine: "Indian",
  },
  {
    id: "cold-brew-coffee",
    title: "Cold Brew Coffee",
    emoji: "☕",
    minutes: 10,
    difficulty: "Easy",
    cuisine: "Cafe",
  },
  {
    id: "avocado-toast",
    title: "Sourdough Avocado Toast",
    emoji: "🥑",
    minutes: 12,
    difficulty: "Easy",
    cuisine: "Breakfast",
  },
  {
    id: "ramen-bowl",
    title: "Spicy Miso Ramen",
    emoji: "🍜",
    minutes: 45,
    difficulty: "Hard",
    cuisine: "Japanese",
  },
  {
    id: "berry-pancakes",
    title: "Blueberry Pancakes",
    emoji: "🥞",
    minutes: 20,
    difficulty: "Easy",
    cuisine: "American",
  },
];