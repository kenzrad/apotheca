const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Remedies collection and inserts the remedies below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/apothecaDB"
);

const remedySeed = [
    {
        id: 1,
        title: ["Face Mask for Moisturized Skin"],
        ingredients: ["1 Tablespoon Pomegranate Paste", "1 Tablespoon Honey"],
        instructions: ["Mix both ingredients to form a paste of medium consistency", "Apply to face and wait for 30 minutes", "Wash off"],
        time: ["~30 Minutes"],
        consistency: "Two to Three Times a Week",
        works: ["Honey moisturizes the skin while the pomegranate keeps it hydrated, making it soft"],
        source: "https://www.stylecraze.com/articles/simple-ways-to-make-pomegranate-face-mask-at-home/"
    },
    {
        id: 2,
        title: ["Face Mask for Acne"],
        ingredients: ["1 Tablespoon Pomegranate Paste", "1 Tablespoon Honey", "1 Tablespoon Yogurt", "1 Tablespoon Green Tea"],
        instructions: ["Blend all ingredients", "Apply to face and massage for 8 minutes", "Leave paste on for another 20 minutes", "Wash off with cold water"],
        time: ["~35 Minutes"],
        consistency: "Twice a Week",
        works: ["Green tea, honey, and pomegranate are excellent sources of antioxidants.They aid skin rejuvenation, brighten up your face, and prevent acne breakouts."],
        source: "https://www.stylecraze.com/articles/simple-ways-to-make-pomegranate-face-mask-at-home/"
    },
    {
        id: 3,
        title: ["Flawless Skin"],
        ingredients: ["1 / 2 Cup Pomegranate Seeds", "3 Tablespoons Yogurt"],
        instructions: ["Make a paste of the pomegranate seeds.", "Add yogurt to it and blend.", "Apply the paste to your face and wait for 20 minutes.", "Wash off"],
        time: ["~35 Minutes"],
        consistency: "Twice a Week",
        works: ["Both yogurt and pomegranate rejuvenate the skin and contain skin brightening agents.This face pack not only makes your skin soft but also reduces marks and blemishes."],
        source: "https://www.stylecraze.com/articles/simple-ways-to-make-pomegranate-face-mask-at-home/"
    },
    {
        id: 4,
        title: ["Face Mask for Revitalizing Skin"],
        ingredients: ["1 / 2 Cup Pomegranate Seeds", "2 Tablespoons Oatmeal Powder"],
        instructions: ["Grind the pomegranate seeds and make a paste.", "Mix the oatmeal powder with the paste and blend well.", "Apply this mask to your face and massage with gentle circular strokes.", "Leave it on for about 30 minutes and then wash with cold water."],
        time: ["~35 Minutes"],
        consistency: "Once a Week",
        works: ["Oatmeal is a gentle exfoliator, and in combination with pomegranate, it makes the skin soft, boosts cell regeneration, and revitalizes the skin."],
        source: "https://www.stylecraze.com/articles/simple-ways-to-make-pomegranate-face-mask-at-home/"
    },

    {
        id: 5,
        title: ["Tighten Area Around Eye"],
        ingredients: ["Coffee Bean Oil"],
        instructions: ["Apply a few drops on your fingers", "Dap oil with ring finger from the outside of inside of outer eye"],
        time: ["~5 Minutes"],
        consistency: "Daily",
        works: ["To decrease puffiness and treat signs of aging"],
        source: "http://blog.levenrose.com/15-surprising-skin-benefits-of-coffee-bean-oil-and-green-coffee-bean-oil/"
    },

    {
        id: 6,
        title: ["Rejuvenating Face Mask"],
        ingredients: ["Mung Bean", "Water"],
        instructions: ["Grind mung beans to form fine powder.", "Add lukewarm water to the powder to make a paste.", "Apply the paste on your face and leave to dry for 10 minutes.", "Scrub for next 10 minutes."],
        time: ["~20 Minutes"],
        consistency: "Twice a Week",
        works: ["At the end, you will be left with cleaner and reduced pores.This deep exfoliating face scrub is an ultimate killer of tan, blackheads, excessive oil and unnatural glare.Undoubtedly, it is one of the best natural scrubs you can use to make your skin radiant!"],
        source: "https://www.stylecraze.com/articles/amazing-benefits-of-mung-beans/#1-anti-aging-benefits"
    },

    {
        id: 7,
        title: ["Rejuvenating Facial Elixier"],
        ingredients: ["10ml Jojoba Oil", "10ml Rosehip Oil"],
        instructions: ["Mix together and use as a moisturizer"],
        time: ["~5 Minutes"],
        consistency: "As Needed",
        works: ["Suitable for all skin types and is a wonderful balancing, healing and rejuvenating blend."],
        source: "https://www.schoolofnaturalskincare.com/how-to-make-an-anti-aging-facial-serum/"
    },

    {
        id: 8,
        title: ["Rosehip Benefits"],
        ingredients: ["Rosehip Oil"],
        instructions: ["Clean and exfoliate your skin", "Apply drops of Rosehip oil onto your clean index finger", "Gently pat oil onto face, eyes, anywhere you have wrinkles"],
        time: ["~5 Minutes"],
        consistency: "Daily / As Needed",
        works: ["Fights wrinkles, prevents acne, and moisturizes skin"],
        source: "https://www.radhabeauty.com/blogs/news/how-to-use-and-apply-rosehip-oil"
    },

    {
        id: 9,
        title: ["Acai and Honey Face Mask"],
        ingredients: ["1 Tablespoon Acai - berry Powder", "1 Teaspoon Honey", "1 Tablespoon Olive Oil"],
        instructions: ["Measure out the acai - berry powder, manuka honey, and olive oil and mix together in a bowl.", "Apply the mixture to clean skin and let it sit for 10 – 15 minutes.", "Rinse with warm water and a washcloth and finish with a moisturizer."],
        time: ["~20 Minutes"],
        consistency: "Once Weekly",
        works: ["Acai Berry fights free radicals and brightens / tightens the face.Honey will lock in moisture and is packed with antioxidants which with repair and protect the skin.Olive Oil will moisturize your skin."],
        source: "https://frommollywithlove.com/2017/06/08/diy-face-mask-acai-manuka-honey/"
    },

    {
        id: 10,
        title: ["Antioxidant Rich Face Mask"],
        ingredients: ["1 Teaspoon Acai Berry Powder", "1 Teaspoon Rose Water"],
        instructions: ["In a small, clean bowl, pour in all your ingredients.Mix thoroughly.", "Now wash your face with your cleanser or whichever gentle soap you use.Pat dry.This step is optional, but highly recommended.Do some facial steaming to open up your pores.", "Time for application! Use your clean finger tips to evenly apply the face mask all over your face.", "Leave the mask on your face for about 10 – 15 minutes.", "Now wash off with a small cotton cloth.No need to use cleanser / soap at this point.", "Pat dry and apply your moisturizer, as usual."],
        time: ["~20 Minutes"],
        consistency: "Once Weekly",
        works: ["Will fight wrinkles and fine lines while reducing puffiness of the face.Will brighten and hydrate the skin"],
        source: "https://beautymunsta.com/diy-acai-berry-face-mask/"
    },

    {
        id: 11,
        title: ["Sun Damaged Skin Soother"],
        ingredients: ["5 Drops Carrot Seed Oil", "1 / 4 Cup Aloe Vera"],
        instructions: ["Mix ingredients together and smooth over sunburn to ease the irritated skin"],
        time: ["~5 Minutes"],
        consistency: "As Needed",
        works: ["Works to soothe sunburn"],
        source: "https://beautymunsta.com/diy-carrot-seed-essential-oil-recipes-for-skin/"
    },

    {
        id: 12,
        title: ["Brightening Night Serum"],
        ingredients: ["2 Tablespoons Jojoba Oil", "7 Drops Carrot Seed Oil", "4 Drops Lemon Oil"],
        instructions: ["Mix ingredients together and spread on your face and neck before bedtime"],
        time: ["~5 Minutes"],
        consistency: "Nightly",
        works: ["This serum is safe for oily and acne prone skin types."],
        source: "https://beautymunsta.com/diy-carrot-seed-essential-oil-recipes-for-skin/"
    },
    {
        id: 13,
        title: ["Anti - Aging Bilberry Mask"],
        ingredients: ["1 / 4 Cup Bilberry", "1 / 4 Teaspoon Aloe Vera", "1 / 4 Teaspoon Olive Oil", "1 / 4 Teaspoon Honey", "1 / 4 Cup Dried Crushed Oats"],
        instructions: ["Blend bilberries, Aloe Vera, olive oil, and honey together.", "Next blend in the crushed oats", "Spread over face and leave it on for 20 minutes"],
        time: ["~25 Minutes"],
        consistency: "Once Weekly",
        works: ["This mask has potent antioxidants and are excellent for aging skin"],
        source: ""
    },
    {
        id: 14,
        title: ["Natural Face Moisturizer"],
        ingredients: ["Almond Oil"],
        instructions: ["Apply a few drops of almond oil onto fingers and add to face and lips."],
        time: ["~5 Minutes"],
        consistency: "Daily / As Needed",
        works: ["Add to your daily routine for additional hydration for your skin"],
        source: "http://untrainedhousewife.com/9-ways-to-use-sweet-almond-oil"
    },

    {
        id: 15,
        title: ["Nourishing Goodness"],
        ingredients: ["2 Egg Whites", "2 Tablespoons Honey", "3 Drops Almond Oil"],
        instructions: ["Mix ingredients and apply to face and neck", "Leave on for 20 minutes then wash off"],
        time: ["~25 Minutes"],
        consistency: "Twice Weekly",
        works: ["Will add nourishment and moisture to the skin"],
        source: "https://theskincareedit.com/2011/08/23/ever-made-your-own-face-mask-whip-up-these-budget-friendly-beauty-treatments-to-get-glowing-the-natural-way-no-birkenstocks-required"
    },

    {
        id: 16,
        title: ["Skin Brightening"],
        ingredients: ["1 Banana", "1 Teaspoon Lemon Juice", "1 Teaspoon Honey"],
        instructions: ["Place the ripe banana in a small mixing bowl and mash it with a fork until you have a lump - free paste.Then mix in the honey and lemon juice and combine all ingredients thoroughly.", "Wash your face with a gentle soap and pat it dry with a soft towel.Using clean fingers, rub the mask into your face.Apply the mask in a slightly thick layer and keep it on for 10 to 15 minutes so that it can soak in.", "When time is up, wash off mask"],
        time: ["~20 Minutes"],
        consistency: "Once Weekly",
        works: ["This skin - brightening banana face mask has three powerful ingredients to hydrate, brighten, and lighten your skin. Honey has skin - lightening properties. Kills bacteria and prevents acne and pimples.Moisturizes skin without making it oily. Lemon Juice is loaded with citric acid, which gently lightens dark skin and evens out discoloration.Also lightens dark spots and acne blemishes."],
        source: "https://bellatory.com/skin/DIY-Banana-Face-Mask-Recipes"
    },

    {
        id: 17,
        title: ["Pimple Fighting"],
        ingredients: ["1 / 2 Teaspoon Baking Soda", "1 Small Banana", "1 / 2 Teaspoon Turmeric Powder"],
        instructions: ["Add all the ingredients in a small bowl. Use a fork to finely mash the banana while mixing the ingredients. If your mixture is too thick, feel free to add a few drops of water.", "Apply this mask with clean fingers to your freshly cleaned and dried face. The baking soda may sting a little, but this is no cause for alarm.", "Keep the mask on for 10 to 15 minutes, then wash off with warm water. After patting your face dry with a clean towel, make sure you moisturize your face to prevent your sebaceous glands (which hydrate skin by producing natural oils) from going into overdrive to make up for the lack of oils."],
        time: ["~20 Minutes"],
        consistency: "Twice Weekly",
        works: ["Use this inexpensive banana face mask that contains turmeric, an ancient dried root herb, and baking soda, the versatile cleanser and exfoliator. Baking Soda breaks down dirt, grime, and excess oil, which clog up pores and cause pimples. Deep-cleanses pores. Tumeric has potent antibacterial properties, which destroy bacteria before they can cause pimples."],
        source: "https://bellatory.com/skin/DIY-Banana-Face-Mask-Recipes"
    },

    {
        id: 18,
        title: ["Wrinkle Removing Face Mask"],
        ingredients: ["1 Banana", "1 Teaspoon Lemon Oil", "1 Teaspoon Yogurt"],
        instructions: ["Start with a clean, dry face.", "Mix all ingredients together and apply to your face, massaging for about 60 seconds.", "After massaging, apply a thick layer to your face and wait 15 minutes.", "Wash face with cold water to keep your pores tight and apply moisturizer."],
        time: ["~20 Minutes"],
        consistency: "Twice Weekly",
        works: ["The nutrients in bananas have the power to significantly reduce the appearance of wrinkles and make the skin look more supple and youthful. In this particular face mask, we are going to going to add other wrinkle-busting ingredients as well to form a powerful combination. Yogurt reduces the appearance of large pores, which make skin look aged. Tightens skin pores. Lemon oil refreshes skin cells and softens harsh lines and wrinkles."],
        source: "https://bellatory.com/skin/DIY-Banana-Face-Mask-Recipes"
    }


];

db.Remedy
    .remove({})
    .then(() => db.Remedy.collection.insertMany(remedySeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });



