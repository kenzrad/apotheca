const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Remedies collection and inserts the remedies below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/apothecadb");

const remedySeed = [
  {
    id: 1,
    title: ["Face Mask for Moisturized Skin"],
    ingredients: ["1 Tablespoon Pomegranate Paste", "1 Tablespoon Honey"],
    instructions: [
      "Mix both ingredients to form a paste of medium consistency",
      "Apply to face and wait for 30 minutes",
      "Wash off"
    ],
    time: ["~30 Minutes"],
    consistency: "Two to Three Times a Week",
    works: [
      "Honey moisturizes the skin while the pomegranate keeps it hydrated, making it soft."
    ],
    source:
      "https://www.stylecraze.com/articles/simple-ways-to-make-pomegranate-face-mask-at-home/"
  },
  {
    id: 2,
    title: ["Face Mask for Acne"],
    ingredients: [
      "1 Tablespoon Pomegranate Paste",
      "1 Tablespoon Honey",
      "1 Tablespoon Yogurt",
      "1 Tablespoon Green Tea"
    ],
    instructions: [
      "Blend all ingredients",
      "Apply to face and massage for 8 minutes",
      "Leave paste on for another 20 minutes",
      "Wash off with cold water"
    ],
    time: ["~35 Minutes"],
    consistency: "Twice a Week",
    works: [
      "Green tea, honey, and pomegranate are excellent sources of antioxidants.They aid in skin rejuvenation, brighten up your face, and prevent acne breakouts."
    ],
    source:
      "https://www.stylecraze.com/articles/simple-ways-to-make-pomegranate-face-mask-at-home/"
  },
  {
    id: 3,
    title: ["Flawless Skin"],
    ingredients: ["1 / 2 Cup Pomegranate Seeds", "3 Tablespoons Yogurt"],
    instructions: [
      "Make a paste of the pomegranate seeds.",
      "Add yogurt to it and blend.",
      "Apply the paste to your face and wait for 20 minutes.",
      "Wash off"
    ],
    time: ["~35 Minutes"],
    consistency: "Twice a Week",
    works: [
      "Both yogurt and pomegranate rejuvenate the skin and contain skin brightening agents.This face pack not only makes your skin soft but also reduces marks and blemishes."
    ],
    source:
      "https://www.stylecraze.com/articles/simple-ways-to-make-pomegranate-face-mask-at-home/"
  },
  {
    id: 4,
    title: ["Face Mask for Revitalizing Skin"],
    ingredients: [
      "1 / 2 Cup Pomegranate Seeds",
      "2 Tablespoons Oatmeal Powder"
    ],
    instructions: [
      "Grind the pomegranate seeds and make a paste.",
      "Mix the oatmeal powder with the paste and blend well.",
      "Apply this mask to your face and massage with gentle circular strokes.",
      "Leave it on for about 30 minutes and then wash with cold water."
    ],
    time: ["~35 Minutes"],
    consistency: "Once a Week",
    works: [
      "Oatmeal is a gentle exfoliator, and when combined with pomegranate, it makes the skin soft, boosts cell regeneration, and revitalizes the skin."
    ],
    source:
      "https://www.stylecraze.com/articles/simple-ways-to-make-pomegranate-face-mask-at-home/"
  },

  {
    id: 5,
    title: ["Tighten Area Around Eye"],
    ingredients: ["Coffee Bean Oil"],
    instructions: [
      "Apply a few drops on your fingers",
      "Dap oil with ring finger from the outside of inside of outer eye"
    ],
    time: ["~5 Minutes"],
    consistency: "Daily",
    works: ["To decrease puffiness and treat signs of aging."],
    source:
      "http://blog.levenrose.com/15-surprising-skin-benefits-of-coffee-bean-oil-and-green-coffee-bean-oil/"
  },

  {
    id: 6,
    title: ["Rejuvenating Face Mask"],
    ingredients: ["Mung Bean", "Water"],
    instructions: [
      "Grind mung beans to form fine powder.",
      "Add lukewarm water to the powder to make a paste.",
      "Apply the paste on your face and leave to dry for 10 minutes.",
      "Scrub for next 10 minutes."
    ],
    time: ["~20 Minutes"],
    consistency: "Twice a Week",
    works: [
      "In the end, you will be left with cleaner and reduced pores. This deep exfoliating face scrub is an ultimate killer of tan, blackheads, excessive oil and unnatural glare. Undoubtedly, it is one of the best natural scrubs you can use to make your skin radiant!"
    ],
    source:
      "https://www.stylecraze.com/articles/amazing-benefits-of-mung-beans/#1-anti-aging-benefits"
  },

  {
    id: 7,
    title: ["Rejuvenating Facial Elixier"],
    ingredients: ["10ml Jojoba Oil", "10ml Rosehip Oil"],
    instructions: ["Mix together and use as a moisturizer"],
    time: ["~5 Minutes"],
    consistency: "As Needed",
    works: [
      "Suitable for all skin types and is a wonderful, balancing, healing and rejuvenating blend."
    ],
    source:
      "https://www.schoolofnaturalskincare.com/how-to-make-an-anti-aging-facial-serum/"
  },

  {
    id: 8,
    title: ["Rosehip Benefits"],
    ingredients: ["Rosehip Oil"],
    instructions: [
      "Clean and exfoliate your skin",
      "Apply drops of Rosehip oil onto your clean index finger",
      "Gently pat oil onto face, eyes, anywhere you have wrinkles"
    ],
    time: ["~5 Minutes"],
    consistency: "Daily / As Needed",
    works: ["Fights wrinkles, prevents acne, and moisturizes skin."],
    source:
      "https://www.radhabeauty.com/blogs/news/how-to-use-and-apply-rosehip-oil"
  },

  {
    id: 9,
    title: ["Acai and Honey Face Mask"],
    ingredients: [
      "1 Tablespoon Acai - berry Powder",
      "1 Teaspoon Honey",
      "1 Tablespoon Olive Oil"
    ],
    instructions: [
      "Measure out the acai - berry powder, manuka honey, and olive oil and mix together in a bowl.",
      "Apply the mixture to clean skin and let it sit for 10 – 15 minutes.",
      "Rinse with warm water and a washcloth and finish with a moisturizer."
    ],
    time: ["~20 Minutes"],
    consistency: "Once Weekly",
    works: [
      "Acai Berry fights free radicals and brightens/tightens the face. Honey will lock in moisture and is packed with antioxidants which repair and protect the skin. Olive Oil will moisturize your skin."
    ],
    source:
      "https://frommollywithlove.com/2017/06/08/diy-face-mask-acai-manuka-honey/"
  },

  {
    id: 10,
    title: ["Antioxidant Rich Face Mask"],
    ingredients: ["1 Teaspoon Acai Berry Powder", "1 Teaspoon Rose Water"],
    instructions: [
      "In a small, clean bowl, pour in all your ingredients.Mix thoroughly.",
      "Now wash your face with your cleanser or whichever gentle soap you use. Pat dry. This step is optional, but highly recommended.Do some facial steaming to open up your pores.",
      "Time for application! Use your clean finger tips to evenly apply the face mask all over your face.",
      "Leave the mask on your face for about 10 – 15 minutes.",
      "Now wash off with a small cotton cloth.No need to use cleanser / soap at this point.",
      "Pat dry and apply your moisturizer, as usual."
    ],
    time: ["~20 Minutes"],
    consistency: "Once Weekly",
    works: [
      "Will fight wrinkles and fine lines while reducing puffiness of the face. Will brighten and hydrate the skin."
    ],
    source: "https://beautymunsta.com/diy-acai-berry-face-mask/"
  },

  {
    id: 11,
    title: ["Sun Damaged Skin Soother"],
    ingredients: ["5 Drops Carrot Seed Oil", "1 / 4 Cup Aloe Vera"],
    instructions: [
      "Mix ingredients together and smooth over sunburn to ease the irritated skin"
    ],
    time: ["~5 Minutes"],
    consistency: "As Needed",
    works: ["Works to soothe sunburn."],
    source:
      "https://beautymunsta.com/diy-carrot-seed-essential-oil-recipes-for-skin/"
  },

  {
    id: 12,
    title: ["Brightening Night Serum"],
    ingredients: [
      "2 Tablespoons Jojoba Oil",
      "7 Drops Carrot Seed Oil",
      "4 Drops Lemon Oil"
    ],
    instructions: [
      "Mix ingredients together and spread on your face and neck before bedtime"
    ],
    time: ["~5 Minutes"],
    consistency: "Nightly",
    works: ["This serum is safe for oily and acne prone skin types."],
    source:
      "https://beautymunsta.com/diy-carrot-seed-essential-oil-recipes-for-skin/"
  },
  {
    id: 13,
    title: ["Anti - Aging Bilberry Mask"],
    ingredients: [
      "1 / 4 Cup Bilberry",
      "1 / 4 Teaspoon Aloe Vera",
      "1 / 4 Teaspoon Olive Oil",
      "1 / 4 Teaspoon Honey",
      "1 / 4 Cup Dried Crushed Oats"
    ],
    instructions: [
      "Blend bilberries, Aloe Vera, olive oil, and honey together.",
      "Next blend in the crushed oats",
      "Spread over face and leave it on for 20 minutes"
    ],
    time: ["~25 Minutes"],
    consistency: "Once Weekly",
    works: [
      "This mask has potent antioxidants and is excellent for aging skin."
    ],
    source: ""
  },
  {
    id: 14,
    title: ["Natural Face Moisturizer"],
    ingredients: ["Almond Oil"],
    instructions: [
      "Apply a few drops of almond oil onto fingers and add to face and lips."
    ],
    time: ["~5 Minutes"],
    consistency: "Daily / As Needed",
    works: ["Add to your daily routine for additional hydration of your skin."],
    source: "http://untrainedhousewife.com/9-ways-to-use-sweet-almond-oil"
  },

  {
    id: 15,
    title: ["Nourishing Goodness"],
    ingredients: ["2 Egg Whites", "2 Tablespoons Honey", "3 Drops Almond Oil"],
    instructions: [
      "Mix ingredients and apply to face and neck",
      "Leave on for 20 minutes then wash off"
    ],
    time: ["~25 Minutes"],
    consistency: "Twice Weekly",
    works: ["Will add nourishment and moisture to the skin"],
    source:
      "https://theskincareedit.com/2011/08/23/ever-made-your-own-face-mask-whip-up-these-budget-friendly-beauty-treatments-to-get-glowing-the-natural-way-no-birkenstocks-required"
  },

  {
    id: 16,
    title: ["Skin Brightening"],
    ingredients: ["1 Banana", "1 Teaspoon Lemon Juice", "1 Teaspoon Honey"],
    instructions: [
      "Place the ripe banana in a small mixing bowl and mash it with a fork until you have a lump - free paste.Then mix in the honey and lemon juice and combine all ingredients thoroughly.",
      "Wash your face with a gentle soap and pat it dry with a soft towel.Using clean fingers, rub the mask into your face.Apply the mask in a slightly thick layer and keep it on for 10 to 15 minutes so that it can soak in.",
      "When time is up, wash off mask"
    ],
    time: ["~20 Minutes"],
    consistency: "Once Weekly",
    works: [
      "This skin - brightening banana face mask has three powerful ingredients to hydrate, brighten, and lighten your skin. Honey has skin - lightening properties, kills bacteria and prevents acne and pimples. It moisturizes skin without making it oily. Lemon Juice is loaded with citric acid, which gently lightens dark skin and evens out discoloration. Also lightens dark spots and acne blemishes."
    ],
    source: "https://bellatory.com/skin/DIY-Banana-Face-Mask-Recipes"
  },

  {
    id: 17,
    title: ["Pimple Fighting"],
    ingredients: [
      "1 / 2 Teaspoon Baking Soda",
      "1 Small Banana",
      "1 / 2 Teaspoon Turmeric Powder"
    ],
    instructions: [
      "Add all the ingredients in a small bowl. Use a fork to finely mash the banana while mixing the ingredients. If your mixture is too thick, feel free to add a few drops of water.",
      "Apply this mask with clean fingers to your freshly cleaned and dried face. The baking soda may sting a little, but this is no cause for alarm.",
      "Keep the mask on for 10 to 15 minutes, then wash off with warm water. After patting your face dry with a clean towel, make sure you moisturize your face to prevent your sebaceous glands (which hydrate skin by producing natural oils) from going into overdrive to make up for the lack of oils."
    ],
    time: ["~20 Minutes"],
    consistency: "Twice Weekly",
    works: [
      "Use this inexpensive banana face mask that contains turmeric, an ancient dried root herb, and baking soda, the versatile cleanser and exfoliator. Baking Soda breaks down dirt, grime, and excess oil, which clogs up pores and causes pimples. Deep-cleanses pores. Tumeric has potent antibacterial properties, which destroy bacteria before they can cause pimples."
    ],
    source: "https://bellatory.com/skin/DIY-Banana-Face-Mask-Recipes"
  },

  {
    id: 18,
    title: ["Wrinkle Removing Face Mask"],
    ingredients: ["1 Banana", "1 Teaspoon Lemon Oil", "1 Teaspoon Yogurt"],
    instructions: [
      "Start with a clean, dry face.",
      "Mix all ingredients together and apply to your face, massaging for about 60 seconds.",
      "After massaging, apply a thick layer to your face and wait 15 minutes.",
      "Wash face with cold water to keep your pores tight and apply moisturizer."
    ],
    time: ["~20 Minutes"],
    consistency: "Twice Weekly",
    works: [
      "The nutrients in bananas have the power to significantly reduce the appearance of wrinkles and make the skin look more supple and youthful. In this particular face mask, we are going to add other wrinkle-busting ingredients as well to form a powerful combination. Yogurt reduces the appearance of large pores, which make skin look aged. Tightens skin pores. Lemon oil refreshes skin cells and softens harsh lines and wrinkles."
    ],
    source: "https://bellatory.com/skin/DIY-Banana-Face-Mask-Recipes"
  },
  {
    id: 19,
    title: ["Hydrating Mask"],
    ingredients: ["4 - 5 Apricots", "3 Tablespoons Yogurt", "1 Teaspoon Honey"],
    instructions: [
      "Place apricots into boiling water for 60 seconds, then remove apricots and plunge them into icy water for 1 - 2 minutes, remove and place onto cutting board.",
      "Slice through the skin lengthwise and remove the peel off the skin.",
      "Place all ingredients in blender and mix until creamy."
    ],
    time: ["~30 Minutes"],
    consistency: "Twice Weekly",
    works: [
      "Apricots provide excellent moisture to the skin which promotes soft, supple skin. They also help maintain skin clarity and elasticity. Yogurt can help with premature aging and reduce discoloration, and honey is a great anti - aging agent and helps keep skin hydrated."
    ],
    source: "https://shwinandshwin.com/2014/05/diy-hydrating-apricot-mask.html"
  },

  {
    id: 20,
    title: ["Oil Smash Mask"],
    ingredients: ["1 / 2 Apricot", "1 Strawberry", "3 Tablespoons Water"],
    instructions: [
      "Puree the apricot and strawberry together and mix with the water.",
      "Massage onto face, and leave on for 10 minutes.",
      "Wash off with cold water."
    ],
    time: ["~15 Minutes"],
    consistency: "Once Weekly",
    works: [
      "Apricots are high in skin - strengthening and damage - fighting antioxidants, while strawberries help battle oil control."
    ],
    source: "https://www.simplecareproducts.com/blog/diy-apricot-face-mask"
  },

  {
    id: 21,
    title: ["Rejuvenating Mask"],
    ingredients: ["4 Tablespoons Blended Papaya", "1 Tablespoon Honey"],
    instructions: [
      "Mix the ingredients together.",
      "Massage onto face and leave for 10 minutes.",
      "Wash off with cold water."
    ],
    time: ["~15 Minutes"],
    consistency: "Twice Weekly",
    works: [
      "The mixture of papaya and honey will rejuvenate dull skin, as well has hydrating the skin to make it brighter."
    ],
    source: "https://www.blueosa.com/how-to-make-a-homemade-papaya-facial-mask/"
  },

  {
    id: 22,
    title: ["Face Mask"],
    ingredients: ["1 / 2 Cup Papaya", "1 / 2 Teaspoon Turmeric Powder"],
    instructions: [
      "Blend the papaya and turmeric together to make a puree.",
      "Apply a this layer to your face and let the mask dry for 15 minutes.",
      "Gently wash off the mask with lukewarm water and a washcloth"
    ],
    time: ["~20 Minutes"],
    consistency: "Once Weekly",
    works: [
      "The turmeric in this papaya face mask recipe adds a dash of antimicrobial properties to the mix to keep your skin healthy, clear, and wrinkle - free."
    ],
    source: "https://www.siobeauty.com/blogs/news/papaya-face-masks"
  },
  {
    id: 23,
    title: ["Face Mask"],
    ingredients: [
      "1 / 2 Unpeeled Cucumber",
      "1 / 4 Cup Banana",
      "1 / 4 Cup Papaya"
    ],
    instructions: [
      "Blend ingredients together until a paste is made.",
      "Apply the mixture to your face and wait 15 Minutes.",
      "Gently wash off the mask with lukewarm water and a washcloth"
    ],
    time: ["~20 Minutes"],
    consistency: "Once Weekly",
    works: [
      "This mask is hydrating for dull and dried out skin. This will help with any inflammation and soothe irritated skin, plus will give it a boost of moisture."
    ],
    source: "https://www.siobeauty.com/blogs/news/papaya-face-masks"
  },
  {
    id: 24,
    title: ["Spot Treatment"],
    ingredients: ["5 Drops Tea Tree Oil", "30 Drops Witch Hazel"],
    instructions: [
      "Gently mix the two ingredients in a bottle.",
      "Use a cotton swab to apply to spots on the face"
    ],
    time: ["~5 Minutes"],
    consistency: "Daily",
    works: [
      "These ingredients will act as a drying agent to acne to help reduce the spread of a breakout and even hinder the beginning of a breakout."
    ],
    source: "https://australian-bodycare.com/uk/tea-tree-oil-face/"
  },
  {
    id: 25,
    title: ["Facial Cleanser"],
    ingredients: [
      "1 / 4 Cup Castor Oil",
      "1 / 4 Cup Jojoba Oil",
      "15 Drops Tea Tree Oil"
    ],
    instructions: [
      "Add all four ingredients into a clean bowl and whisk together.",
      "Store in a clean glass jar with a lid.",
      "Wet your fingertips in the oil and gently massage into the skin then clean with water"
    ],
    time: ["~10"],
    consistency: "Every Other Day",
    works: [
      "This cleanser will have powerful anti - inflammatory, cleansing, and healing properties. It will also moisturize which will be great for dry or irritable skin. It will clear away any bacteria and be perfect for fighting acne."
    ],
    source:
      "https://www.onesweetmess.com/2013/07/02/homemade-tea-tree-oil-facial-cleanser/"
  },
  {
    id: 26,
    title: ["Face Toner"],
    ingredients: [
      "1.5 Ounce Apple Cider Vinegar",
      "1.5 Ounce Water",
      "6 Drops Tea Tree Oil"
    ],
    instructions: [
      "Mix ingredients into a spray bottle.",
      "Spritz on to face or onto a cotton pad to swipe on face for a toner.",
      "Moisturize after."
    ],
    time: ["~10"],
    consistency: "Every Other Day",
    works: [
      "Skin toner is an essential part of beauty treatment, but many women skip it without knowing its importance. Toning of the skin is necessary for removing the bit of dirt or oil that your cleanser may have missed along with nourishing, hydrating and restoring the pH balance of the skin. Combined with neutralizing apple cider vinegar, tea tree oil has amazing antiseptic and anti - inflammatory properties and makes a fantastic skin toner that is completely natural."
    ],
    source:
      "http://www.womensok.com/5-homemade-skin-care-products-with-tea-tree-oil/"
  },
  {
    id: 27,
    title: ["Exfoliation Mask"],
    ingredients: [
      "1 / 4 White Onion",
      "Small Handful of Holy Basil",
      "3 Tablespoon Water",
      "2 Tablespoon Honey"
    ],
    instructions: [
      "Blend all ingredients together and chill mixture overnight",
      "Once 12 hours have passed, massage mixture onto face.",
      "Wait for 20 minutes, and wash off with lukewarm water"
    ],
    time: ["~12 Hours"],
    consistency: "Twice Weekly",
    works: [
      "This mask works to hydrate your skin, but also has great anti - inflammatory and acne fighting properties. This mask should only be used after the mixture has been chilled. This mask is made for people with acne prone skin."
    ],
    source:
      "https://www.vivawoman.net/2009/02/diy-beauty-onion-mask-for-a-bad-breakout/"
  },
  {
    id: 28,
    title: ["Cooling Toner"],
    ingredients: [
      "1 / 4 Cup Cooled Green Tea",
      "2 Tablespoon Cucumber Juice",
      "1 Tablespoon Aloe Vera"
    ],
    instructions: [
      "Blend all ingredients thoroughly.",
      "Apply to face as a toner."
    ],
    time: ["~10 Minutes"],
    consistency: "Daily",
    works: ["Cooling, soothing toner for every skin tone."],
    source: "https://www.youbeauty.com/beauty/green-tea-beauty-recipes/"
  },
  {
    id: 29,
    title: ["Hydration Mask"],
    ingredients: [
      "2 Tablespoons Watermelon Juice",
      "1 Tablespoon Lemon Juice",
      "1 Teaspoon Honey"
    ],
    instructions: [
      "Mix all ingredients together.",
      "Apply to face and neck, leave on for 15 minutes, then wash off with water."
    ],
    time: ["~20"],
    consistency: "Three Times Weekly",
    works: [
      "If you have dry skin, then bring this face mask to your rescue. Lemon will gently exfoliate your dry, dead skin cells, whereas honey and watermelon juice will moisturise and hydrate your rough skin."
    ],
    source:
      "https://food.ndtv.com/food-drinks/summer-care-4-diy-watermelon-juice-face-masks-for-a-flawless-skin-1833253"
  },
  {
    id: 30,
    title: ["Blackhead Buster"],
    ingredients: [
      "2 Cloves Garlic",
      "1 Tablespoon Ground Oatmeal",
      "1 Drop Tea Tree",
      "3 Drops Lemon Juice",
      "1 Tablespoon Honey"
    ],
    instructions: [
      "Mix all ingredients except honey in a small bowl, then slowly add in the honey until the consistency is viscous.",
      "Spread a thin layer of paste onto clean skin. After letting it sit for two minutes, gently exfoliate your face for one minute, then rinse with warm water."
    ],
    time: ["~15"],
    consistency: "Three Times Weekly",
    works: [
      "These ingredients together will help fight blackheads and reduce breakouts."
    ],
    source: "https://www.beautylish.com/a/vpqzj/diy-garlic-beauty-recipes"
  },
  {
    id: 31,
    title: ["Pore Purifier"],
    ingredients: ["1 Tomato", "1 Clove Garlic"],
    instructions: [
      "Combine mashed tomato and garlic, then spread a thin layer onto your face.",
      " After 20 minutes, wash your face with lukewarm water and seal your pores with a final splash of cold water."
    ],
    time: ["~25 Minutes"],
    consistency: "Twice Weekly",
    works: [
      "Tomato and garlic both have fantastic antiseptic qualities, making them appropriate ingredients for clogged skin."
    ],
    source: "https://www.beautylish.com/a/vpqzj/diy-garlic-beauty-recipes"
  },
  {
    id: 32,
    title: ["Balancing Mask"],
    ingredients: ["2 Teaspoons Sea Salt", "4 Teaspoons Honey"],
    instructions: [
      "Mix ingredients together.",
      "Apply evenly to clean, dry skin, avoiding eye area. Let stand for 10 to 15 minutes. Before rinsing, soak a washcloth in very warm water, and gently wring out.",
      "Lay the warm washcloth on your face for 30 seconds. Use your fingers to gently exfoliate in a circular motion while rinsing your skin thoroughly with tepid water."
    ],
    time: ["~25"],
    consistency: "Three Times Weekly",
    works: [
      "Both salt and honey have anti-inflammatory properties to soothe skin and calm breakouts and irritation. They also help to balance oil production and retain hydration in the layers of skin where it's needed most."
    ],
    source: "https://www.womenshealthmag.com/beauty/a19953014/salt-beauty-uses/"
  },
  {
    id: 33,
    title: ["Extra Hydration Mask"],
    ingredients: [
      "1 Ripe Mango",
      "2 Tablespoons Avocado",
      "2 Tablespoons Honey"
    ],
    instructions: [
      "Cut the mango into pieces and then mash them thoroughly.",
      "Add avocado and honey to this and blend well.",
      "Spread it evenly on your face and neck. Let it dry. Once completely dry, wash off with water."
    ],
    time: ["~30"],
    consistency: "Three Times Weekly",
    works: [
      "This mask keeps your skin hydrated and soft. Honey helps in lightening blemishes and scars. Avocado and mango calm sensitive skin and unclog the skin pores."
    ],
    source:
      "https://www.stylecraze.com/articles/mango-face-packs-that-work-wonders-for-your-skin/#gref"
  },
  {
    id: 34,
    title: ["Hyssop Toner"],
    ingredients: ["1 Tablespoon Hyssop", "1 Cup Water"],
    instructions: [
      "Boil water with hyssop for 10 minutes, then strain.",
      "Let mixture cool.",
      "After cleansing your skin apply the toner with a cotton ball."
    ],
    time: ["~15 Minutes"],
    consistency: "Daily",
    works: [
      "Hyssop, a member of the mint family, also makes an excellent herbal toner. In folk medicine it’s considered good for the complexion."
    ],
    source:
      "https://www.besthealthmag.ca/best-you/home-remedies/natural-home-remedies-oily-skin/"
  },
  {
    id: 35,
    title: ["Wrinkle Cream"],
    ingredients: [
      "2 Tablespoon Coconut Oil",
      "1/4 Cup Almond Oil",
      "1 Tablespoon Shea Butter",
      "3 Drops Rosehip Oil"
    ],
    instructions: [
      "Take a jar and put the ingredients in them.",
      "In a pan, heat water till it starts boiling. Place the jar inside the pan. Do not cover the jar. Let the jar remain there till the ingredients are melted completely. Keep stirring occasionally.",
      "After the melting process is over and the mixture is suitably mixed, pour it into a small jar.Let it cool down so that the cream starts hardening."
    ],
    time: ["~30"],
    consistency: "Twice Daily",
    works: [
      "The sweet almond oil makes the skin soft and revitalizes it. It also improves the complexion and the tone of the skin. The coconut oil has antioxidant properties, which is really effective for anti-aging. The Shea butter has anti-inflammatory properties, which work wonders on the skin."
    ],
    source: "https://stylenrich.com/diy-wrinkle-cream/"
  },
  {
    id: 36,
    title: ["Hydrating Mask"],
    ingredients: [
      "15 Cranberries",
      "2 Tablespoons Honey",
      "2 Tablespoons Jojoba Oil"
    ],
    instructions: [
      "Rinse the cranberries well. Puree the cranberries with honey in a blender to form a paste.",
      "Once you have a thick paste, get the mixture out and add the oil.",
      "Apply the mask on your face and neck. Leave it on for 10 mins and relax.",
      "Massage in circular motions on the cheeks and the chin.Follow by massaging onto your nose and the forehead to gently exfoliate dead skin cells.",
      "Rinse it off with cold water and dab the skin with a clean towel"
    ],
    time: ["~15 Minutes"],
    consistency: "Daily",
    works: [
      "The cranberries will keep your skin healthy and cleanse the skin without stripping away any natural oils. A little honey to the mixture is good for reducing spots and redness and the argan oil will keep your skin moisturised in the dry weather."
    ],
    source:
      "https://www.femina.in/beauty/skin/diy-cranberry-facial-mask-for-winter-skincare-70826.html"
  }
];

db.Remedy.remove({})
  .then(() => db.Remedy.collection.insertMany(remedySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
