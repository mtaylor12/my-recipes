/**
 * recipes.js — Add all your recipes here.
 *
 * Each recipe is an object in the RECIPES array.
 * Fields:
 *   id        — unique slug, used in the URL (no spaces, use hyphens)
 *   title     — recipe name
 *   tags      — array of tag strings (lowercase, use hyphens for spaces)
 *   time      — e.g. "30 mins", "1 hour"
 *   serves    — e.g. "4", "2–3"
 *   intro     — one or two sentences about the recipe (optional)
 *   ingredients — array of strings
 *   steps     — array of strings (each step is one item)
 *   notes     — optional extra tips string
 */

const RECIPES = [




    {
    id: "harty-har-stew",
    title: "Harty Har Stew",
    tags: ["stew", "low-calorie", "slow-cooker"],
    time: "2 hours",
    serves: "2",
    intro: "Uses the gluten free Pioneer brown gravy, which does have beef boullion.",
    ingredients: [
      "1 can of sliced potatoes",
      "1 can of sliced carrots",
      "1 can of peas",
      "1/2 tsp of chicken boullion",
      "1/2 package of Piooner gluten free brown gravy",
      "Fresh basil to serve"
    ],
    steps: [
      "Save the juice from the potatoes, and if needed, some of the carrot juice.",
      "Pour all of the can of peas (juice included) into the cooker.",
      "Put all of the potatoes and carrots into the cooker.",
      "Put 1/2 tsp of chicken boullion.",
      "Cook for at least 1 hour on high or longer on low, and about 30 minutes before serving, mix the 1/2 package of gravy with the saved juice, mix well, and pour into cooker."
    ],
    notes: "255 each"
  },

      {
    id: "banana-ketchup",
    title: "Banana Ketchup",
    tags: ["condiment"],
    time: "1 hour",
    serves: "many",
    intro: "Homemade version of banana ketchup.",
    ingredients: [
      "3 bananas",
      "1.5+ peppers, preferably yellow, red, or orange",
      "1 1/2 tsp garlic powder",
      "2 tsp of salt",
      "1/4 tsp cayenne",
      "1/2 tsp onion powder",
      "1 tsp of paprika",
      "1 tsp of citric acid",
      "1 tsp annato powder",
      "1/2 cup water (or more)",
      "1/2 cup of vinegar",
      "red food coloring if wanted"
    ],
    steps: [
      "Microwave 1/2 cup of water until hot, then add and mix in annato powder",
      "Chop bananas and peppers",
      "Place all ingredients, except food coloring, in a sauce pan and bring to simmer 10-15 minutes until peppers are soft.",
      "Blend in blender once cooler until soft",
      "Add food coloring, if wanted, to desired redness."
    ],
    notes: "Around 16 calories per tbsp"
  },

  {
    id: "chicken-soup",
    title: "Classic Chicken Soup",
    tags: ["comfort-food"],
    time: "1 hour",
    serves: "4–6",
    intro: "Simple and restorative. Great for a cold day or when you're under the weather.",
    ingredients: [
      "1 whole chicken or 4 bone-in thighs",
      "3 carrots, sliced",
      "3 celery stalks, sliced",
      "1 onion, diced",
      "3 cloves garlic",
      "6 cups chicken broth",
      "Salt, pepper, fresh parsley"
    ],
    steps: [
      "Place chicken in a large pot with broth and enough water to cover. Bring to a boil.",
      "Skim any foam from the surface, then reduce to a simmer.",
      "Add onion, garlic, carrots, and celery. Simmer 45 minutes.",
      "Remove chicken, shred the meat, and return it to the pot. Discard bones.",
      "Season to taste, stir in fresh parsley, and serve."
    ],
    notes: "Add egg noodles or rice in the last 10 minutes if you like a heartier soup."
  }

];
