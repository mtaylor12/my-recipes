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
    tags: ["meal"],
    time: "2 hours",
    serves: "2",
    intro: "Uses the gluten free Pioneer brown gravy, which does have beef boullion.",
    ingredients: [
      "1 can of sliced potatoes",
      "1 can of sliced carrots",
      "1 can of peas",
      "30 calories of fresh chopped onions",
      "1/2 tsp of chicken boullion",
      "1/2 package of Piooner gluten free brown gravy"
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
	id: "mac-and-cheese-casserole",
	title: "Mac & Cheese Casserole",
	tags: ["high calorie", "meal"],
	time: "1.5 hours",
	serves: "2",
	intro: "From Larry and Chris.",
	ingredients: [
		"1 1/4 cup of gluten free maccaroni ~ 1000 cal.",
		"8 slices of Velvetta cheese ~ 560 cal.",
		"2 tbsp butter ~ 100 cal.",
		"salt",
		"1 can corn ~ 310 cal "
	],
	steps: [
		"Cook maccaroni to done but still very hard and chewey.",
		"Heat butter and add accaroni & cheese",
		"After several minutes add the corn and salt WELL.",
		"Put in casserole dish and bake at 400 for 20 minutes."
	],
	notes: "About 985 calories each."
	},

  {
    id: "gluten-free-bread",
    title: "Gluten Free Bread",
    tags: ["bread"],
    time: "1.5 hours",
    serves: "many",
    intro: "Gluten free sliced bread.",
    ingredients: [
      "3 cups of gluten free flour",
      "1 tbsp instant yeast",
      "2 tbsp sugar",
      "1/2 cup instant milk powder",
      "2 tbsp instant potato flakes",
      "1 egg (put in warm/hot water before adding)",
      "1 3/4 cup of water (slightly warmer than room temp) - add a little more if dry",
      "1 tbsp butter, softened (2 becomes more moist, if wanted)",
      "1 1/2 tsp psyllium husk powder"
    ],
    steps: [
      "---REGULAR OVEN---",
      "Place bread in oven on warm for 25 minutes to double it's size",
      "After 25 minutes, switch to 350 degrees, and bake for 45-50 minutes",
      "---TOASTER OVEN---",
      "If using small oven, to double size at first, place on warm for 20 minutes",
      "If using small oven, 400 degrees for 45 minutes, 20 minutes of it on broil, 25 on bake",
      "CONTINUE BELOW",
      "Invert onto cooling rack and cool completely before slicing",
      "Best fresh or slice and place in freezer ziplock removing all air, put in toaster or microwwave to eat."
    ],
    notes: "Around 1802 total, if 20 slices at 3/4 inch thick - about 90 cal. a slice"
  },

  {
    id: "gluten-free-chocolate-chip-cookies",
    title: "Gluten Free Chocolate Chip Cookies",
    tags: ["dessert"],
    time: "30 minutes",
    serves: "It makes about 15-16 cookies",
    intro: "Gluten free chocolate chip cookies.",
    ingredients: [
      "1 cup of flour",
      "1/4 tsp of salt",
      "2 tsp vanilla flavoring",
      "1 egg",
      "1 1/2 tbsp softened butter",
      "3/4 cup of brown sugar",
      "6 servings of chocolate chips, at 70 cal. each ~ 420 calories",
      "2 tbsp of milk powder (what 1/2 cup of milk would be) ~ 40 cal."
    ],
    steps: [
      "Mix dry ingredients first, then liquid ones.",
      "Should be soft and squishy, like thick pancake batter.",
      "Spoon onto cookie sheet with 1.5 tbsp scoop.",
      "Do not add water unless necessary",
      "Bake in oven for 10-12 minutes at 350 degrees"
    ],
    notes: "Around 1536 total calories, or 768 if split for 2 people)"
  },

  {
    id: "oatmeal-raisin-pb-cookies",
    title: "Oatmeal Raisin PB Cookies",
    tags: ["dessert"],
    time: "30 minutes",
    serves: "around 18 cookies",
    intro: "Yummy oatmeal raisin cookies, gluten free!",
    ingredients: [
      "1/2 cup sugar",
      "1/2 cup peanut butter",
      "1 egg",
      "1/2 cup raisins",
      "1 cup gluten free oats"
    ],
    steps: [
      "Preheat oven to 350 degrees",
      "Bake for 10-12 minutes",
      "Spoon them on cookie sheet for 1.5 tablespoon scoop."
    ],
    notes: "These do not need to be flattened - total calories of mix around 1690, if 18 cookies 94 cal. each."
  },

  {
    id: "pan-fried-tofu",
    title: "Pan Fried Tofu",
    tags: ["meal"],
    time: "1 hour",
    serves: "2",
    intro: "Tofu lightly fried.",
    ingredients: [
      "1 package of extra firm tofu",
      "2 tbsp of corn starch",
      "salt",
      "PAM spray",
      "2 tsp of salt",
      "Kraft Sweet and Sour sauce",
      "Great Value Sweet Chili sauce"
      
    ],
    steps: [
      "Open the tofu, and press it between plates for about 20-30 minutes",
      "Cut it horizontally, then cut into about 1 inch squares",
      "Put the corn starch into a very small bowl.",
      "Heat the skillet to a low-medium heat",
      "Once ready to start cooking, spray with PAM and a little salt right ont he pan",
      "Dip each piece into the corn starch, just two sides, and place on the pan",
      "Once all pieces are on the pan, let cook on Low-Medium for about 10 minutes",
      "Spray all the pieces, and then flip them over for another 10 minutes or so using thongs",
      "Once they have cooked, if time is available, flip them onto any side that is still white",
      "Usually takes about 20 minutes to finish cooking."
    ],
    notes: "Served with 225 calories of white rice, 470 per person (plus any sauce)"
  }

];
