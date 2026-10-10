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
    tags: ["stew/soup", "slow-cooker"],
    time: "2 hours",
    serves: "2",
    intro: "Uses the gluten free Pioneer brown gravy, which does have beef boullion.",
    ingredients: [
      "1 can of sliced potatoes",
      "1 can of sliced carrots",
      "1 can of peas",
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
	id: "mac-&-cheese-casserole",
	title: "Mac & Cheese Casserole",
	tags: {"high calorie"},
	time: "1.5 hours",
	serves: "2",
	intro: "From Larry Dennis and Chris.",
	ingredients: [
		"1 1/4 cup of gluten free maccaroni about 1000 cal.",
		"8 slices of Velvetta cheese about 560 cal.",
		"2 tbsp butter 100 cal.",
		"salt",
		"1 can corn ~ 310 cal "
	],
	steps: [
		"Cook maccaroni to done but still very hard and chewey.",
		"Heat butter and add accaroni & cheese",
		"After several minutes add the corn and salt WELL.",
		"Put in casserole dish and bake at 400 for 20 minutes."
	],
	notes: "About 985 calories each. Buy bigger pants"
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
    notes: "Served with 225 calories of white rice, 470 per person plus any sauce"
  }

];
