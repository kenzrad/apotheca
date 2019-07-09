const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Elements collection and inserts the elements below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/apothecaDB"
);

const elementSeed = [
    {
        id: 1,
        name: "Pomegranate",
        image:"/assets/images/elements/pomegranate.png",
        hypoallergenic: false,
        vegan: true, 
        components: ["Vitamin K", "Vitamin C", "Potassium", "Copper", "Zinc", "Iron", "Polyphenols", "Ellagic Acid"],
        benefits: ["Hydrate", "Combat Acne", "Protect", "Renew"],
        category: "kalon",
        home_remedy: [],
        date: new Date(Date.now())

    },
    {
        id: 2,
        name: "Coffee Oil",
        image:"/assets/images/elements/coffee.png",
        hypoallergenic: false,
        vegan: true, 
        components: ["Caffeine", "Vitamin E", "Essential Fatty Acids", "Sterols", "Antioxidants"],
        benefits: ["Soothe", "Combat Acne", "Rejuvenate", "Renew"],
        category: "kalon",
        home_remedy: [],
        date: new Date(Date.now())

    },
    {
        id: 3,
        name: "Mung Bean",
        image:"/assets/images/elements/mungbean.png",
        hypoallergenic: false,
        vegan: true, 
        components: ["Copper", "B Vitamins", "Potassium", "Zinc", "Magnesium"],
        benefits: ["Protect", "Renew", "Exfoliate", "Senstive Skin"],
        category: "kalon",
        home_remedy: [],
        date: new Date(Date.now())

    },
    {
        id: 4,
        name: "Rosehip Oil",
        image:"/assets/images/elements/rosehip.png",
        hypoallergenic: true,
        vegan: true, 
        components: ["Vitamin C", "Vitamin A", "Oleic Acid", "Palmitic Acid", "Linoleic Acid", "Gamma Linoleic Acid", "Vitamin F"],
        benefits: ["Protect", "Renew", "Combat Acne", "Brighten"],
        category: "kalon",
        home_remedy: [],
        date: new Date(Date.now())

    },
    {
        id: 5,
        name: "Acai",
        image:"/assets/images/elements/acai.png",
        hypoallergenic: true,
        vegan: true,
        components: ["Vitamin A", "Vitamin C", "B Vitamins", "Calcium", "Magnesium", "Zinc", "Copper"],
        benefits: ["Renew", "Rejuvenate", "Hydrate", "Protect"],
        category: "kalon",
        home_remedy: [],
        date: new Date(Date.now())

    },
    {
        id: 6,
        name: "Carrot Seed Oil",
        image:"/assets/images/elements/carrot.png",
        hypoallergenic: false,
        vegan: true,
        components: ["Carotol", "Daucene", "Beta-bisabolene", "Daucol"],
        benefits: ["Protects", "Renews"],
        category: "kalon",
        home_remedy: [],
        date: new Date(Date.now())

    },
    {
        id: 7,
        name: "Bilberry",
        image:"/assets/images/elements/bilberry.png",
        hypoallergenic: false,
        vegan: true,
        components: ["Vitamin B", "Vitamin C", "Vitamin E", "Quercetin", "Resueratrol", "Omega 3", "Omega 6"],
        benefits: ["Renew", "Protect", "Rejuvenate"],
        category: "kalon",
        home_remedy: [],
        date: new Date(Date.now())

    },
    {
        id: 8,
        name: "Almond Oil",
        image:"/assets/images/elements/acai.png",
        hypoallergenic: false,
        vegan: true,
        components: ["Vitamin E", "Vitamin A", "Protein", "Potassium", "Zinc"],
        benefits: ["Protect", "Renew", "Brighten"],
        category: "kalon",
        home_remedy: [],
        date: new Date(Date.now())

    },
    {
        id: 9,
        name: "Banana",
        image:"/assets/images/elements/banana.png",
        hypoallergenic: false,
        vegan: true,
        components: ["Potassium", "B Vitamins", "Magnesium", "Vitamin E", "Zinc", "Lectin", "Amino Acids"],
        benefits: ["Hydrate", "Renew", "Rejuvenate", "Protect", "Combat Acne"],
        category: "kalon",
        home_remedy: [],
        date: new Date(Date.now())

    },
    {
        id: 10,
        name: "Watermelon",
        image:"/assets/images/elements/watermelon.png",
        hypoallergenic: false,
        vegan: true, 
        components: [""],
        benefits: [""],
        category: "kalon",
        home_remedy: [],
        date: new Date(Date.now())

    },
    {
        id: 11,
        name: "Apricot",
        image:"/assets/images/elements/apricot.png",
        hypoallergenic: false,
        vegan: true,
        components: ["Vitamin C", "Vitamin A", "Vitamin E", "Vitamin K"],
        benefits: ["Combat Acne"],
        category: "elavo",
        home_remedy: [],
        date: new Date(Date.now())

    },
    {
        id: 12,
        name: "Papaya",
        image:"/assets/images/elements/papaya.png",
        hypoallergenic: false,
        vegan: true, 
        components: ["Vitamin C", "Vitamin A", "Vitamin E", "Pantothenic Acid", "Folate", "Magnesium", "Potassium", "Papin"],
        benefits: ["Exfoliating", "Hydrating", "Combat Acne", "Renew"],
        category: "elavo",
        home_remedy: [],
        date: new Date(Date.now())

    },
    {
        id: 13,
        name: "Tea Tree",
        image:"/assets/images/elements/teatree.png",
        hypoallergenic: false,
        vegan: true, 
        components: ["Terpinen-4-ol"],
        benefits: ["Combat Acne", "Sensitive Skin"],
        category: "elavo",
        home_remedy: [],
        date: new Date(Date.now())

    },
    {
        id: 14,
        name: "Strawberry",
        image:"/assets/images/elements/strawberry.png",
        hypoallergenic: false,
        vegan: true, 
        components: ["Ellagic Acid", "Vitamin C", "Folic Acid", "Fiber"],
        benefits: ["Renew", "Protect", "Combat Acne"],
        category: "elavo",
        home_remedy: [],
        date: new Date(Date.now())

    },
    {
        id: 15,
        name: "Turmeric",
        image:"/assets/images/elements/tumeric.png",
        hypoallergenic: true,
        vegan: true, 
        components: ["Potassium", "Vitamin C", "Vitamin B"],
        benefits: ["Brighten", "Combat Acne", "Protect",],
        category: "elavo",
        home_remedy: [],
        date: new Date(Date.now())

    },
    {
        id: 16,
        name: "Onion Extract",
        image:"/assets/images/elements/onion.png",
        hypoallergenic: true,
        vegan: true, 
        components: ["Flavonoids", "Vitamin A", "Vitamin C", "Vitamin E"],
        benefits: ["Rejuvenate", "Protect", "Combat Acne", "Exfoliate"],
        category: "elavo",
        home_remedy: [],
        date: new Date(Date.now())

    },
    {
        id: 17,
        name: "Castor Oil",
        image:"/assets/images/elements/castor.png",
        hypoallergenic: false,
        vegan: true, 
        components: ["Ricinoleic Acid"],
        benefits: ["Sensitive Skin", "Combat Acne", "Hydrate", "Soothe"],
        category: "elavo",
        home_remedy: [],
        date: new Date(Date.now())

    },
    {
        id: 18,
        name: "Green Tea",
        image:"/assets/images/elements/greentea.png",
        hypoallergenic: false,
        vegan: true, 
        components: ["Vitamin B2", "Vitamin E", "Caffeine", "Tannins", "EGCG"],
        benefits: ["Protect", "Combat Acne", "Renew"],
        category: "elavo",
        home_remedy: [],
        date: new Date(Date.now())

    },

    {
        id: 19,
        name: "Garlic",
        image:"/assets/images/elements/garlic.png",
        hypoallergenic: true,
        vegan: true, 
        components: ["Thiosaulfinates", "Allicin", "Vitamin C", "Vitamin B6", "Copper", "Zinc"],
        benefits: ["Sensitive Skin", "Refreshe", "Combat Acne", "Soothe"],
        category: "elavo",
        home_remedy: [],
        date: new Date(Date.now())

    },
    {
        id: 20,
        name: "Holy Basil",
        components: ["Vitamin K", "Vitamin A", "Copper", "Tulsi"],
        benefits: ["Combat Acne", "Soothe"],
        category: "elavo",
        home_remedy: [],
        date: new Date(Date.now())

    },
    {
        id: 21,
        name: "Tomatoes",
        image:"/assets/images/elements/tomatoes.png",
        hypoallergenic: false,
        vegan: true, 
        components: ["lycopene", "Vitamin C", "Potassium"],
        benefits: ["Rejuvenate", "Brighten", "Renew", "Protect"],
        category: "novo",
        home_remedy: [],
        date: new Date(Date.now())

    },
    {
        id: 22,
        name: "Jojoba Oil",
        image:"/assets/images/elements/jojoba.png",
        hypoallergenic: false,
        vegan: true, 
        components: ["Vitamin E", "Vitamin B", "Copper", "Zinc", "Chromium"],
        benefits: ["Protect", "Hydrate", "Balance"],
        category: "novo",
        home_remedy: [],
        date: new Date(Date.now())

    },

    {
        id: 23,
        name: "Apple Cider Vinegar",
        image:"/assets/images/elements/apple.png",
        hypoallergenic: false,
        vegan: true,
        components: ["Acetic Acid", "Potassium", "Magnesium"],
        benefits: ["Combat Acne"],
        category: "novo",
        home_remedy: [],
        date: new Date(Date.now())

    },

    {
        id: 24,
        name: "Sea Salt",
        image:"/assets/images/elements/salt.png",
        hypoallergenic: true,
        vegan: true, 
        components: ["Magnesium", "Calcium", "Sodium", "Potassium"],
        benefits: ["Hydrate", "Rejuvenate"],
        category: "novo",
        home_remedy: [],
        date: new Date(Date.now())

    },

    {
        id: 25,
        name: "Mango",
        image:"/assets/images/elements/mango.png",
        hypoallergenic: false,
        vegan: true, 
        components: ["Vitamin C", "Vitamin A", "Vitamin B6", "Copper", "Potassium", "Magnesium", "Vitamin E", "Vitamin K"],
        benefits: ["Combat Acne", "Soothe", "Renew", "Rejuvenate", "Exfoliate"],
        category: "novo",
        home_remedy: [],
        date: new Date(Date.now())

    },

    {
        id: 26,
        name: "Hyssop",
        image:"/assets/images/elements/hyssop.png",
        hypoallergenic: false,
        vegan: true, 
        components: ["Limonene", "Eucalptol", "Camphene"],
        benefits: ["Refresh", "Balance", "Sensitive Skin"],
        category: "novo",
        home_remedy: [],
        date: new Date(Date.now())

    },

    {
        id: 27,
        name: "Baking Soda",
        image:"/assets/images/elements/bakingsoda.png",
        hypoallergenic: true,
        vegan: true,
        components: ["Sodium Bicarbonate"],
        benefits: ["Rejuvenate", "Acne Control", "Refresh"],
        category: "novo",
        home_remedy: [],
        date: new Date(Date.now())

    },

    {
        id: 28,
        name: "Witch Hazel",
        image:"/assets/images/elements/witchhazel.png",
        hypoallergenic: true,
        vegan: true, 
        components: ["Gallic Acid", "Tannins"],
        benefits: ["Combat Acne", "Soothe", "Protect"],
        category: "novo",
        home_remedy: [],
        date: new Date(Date.now())

    },

    {
        id: 29,
        name: "Lemon Oil",
        image:"/assets/images/elements/lemon.png",
        hypoallergenic: true,
        vegan: true, 
        components: ["Vitamin C", "Potassium"],
        benefits: ["Renew", "Rejuvenate", "Brighten", "Protect"],
        category: "novo",
        home_remedy: [],
        date: new Date(Date.now())

    },
    {
        id: 30,
        name: "Egg Whites",
        image:"/assets/images/elements/eggs.png",
        hypoallergenic: false,
        vegan: false, 
        components: ["Lysozymes", "Amino Acids", "Potassium"],
        benefits: ["Combat Acne", "Brighten", "Balance"],
        category: "novo",
        home_remedy: [],
        date: new Date(Date.now())

    },
    {
        id: 31,
        name: "Shea Butter",
        image:"/assets/images/elements/sheabutter.png",
        hypoallergenic: true,
        vegan: true, 
        components: ["Stearic Acid", "Oleic Acid"],
        benefits: ["Renew", "Rejuvenate", "Brighten", "Hydrate"],
        category: "bibe",
        home_remedy: [],
        date: new Date(Date.now())

    },
    {
        id: 32,
        name: "Cucumber",
        image:"/assets/images/elements/cucumber.png",
        hypoallergenic: true,
        vegan: true, 
        components: ["Lycopene", "Magnesium", "Potassium", "Biotin"],
        benefits: ["Hydrate", "Brighten"],
        category: "bibe",
        home_remedy: [],
        date: new Date(Date.now())

    },
    {
        id: 33,
        name: "Honey",
        image:"/assets/images/elements/honey.png",
        hypoallergenic: false,
        vegan: false, 
        components: ["Vitamin B2", "Vitamin B3", "Vitamin B5", "Vitamin B6", "Vitamin C", "Potassium"],
        benefits: ["Combat Acne", "Hydrate", "Sensitive Skin", "Brighten"],
        category: "bibe",
        home_remedy: [],
        date: new Date(Date.now())

    },
    {
        id: 34,
        name: "Yogurt",
        image:"/assets/images/elements/yogurt.png",
        hypoallergenic: false,
        vegan: false, 
        components: ["Lactic Acid", "Zinc"],
        benefits: ["Rejuvenate", "Combat Acne", "Brighten"],
        category: "bibe",
        home_remedy: [],
        date: new Date(Date.now())

    },
    {
        id: 35,
        name: "Coconut Oil",
        image:"/assets/images/elements/coconut.png",
        hypoallergenic: true,
        vegan: true, 
        components: ["Lauric Acid", "Medium Chain Triglycerides"],
        benefits: ["Hydrate", "Rejuvenate"],
        category: "bibe",
        home_remedy: [],
        date: new Date(Date.now())

    },
    {
        id: 36,
        name: "Avocado",
        image:"/assets/images/elements/avocado.png",
        hypoallergenic: true,
        vegan: false,
        components: ["Vitamin A", "Vitamin D", "Vitamin E"],
        benefits: ["Hydrate", "Brighten"],
        category: "bibe",
        home_remedy: [],
        date: new Date(Date.now())

    },
    {
        id: 37,
        name: "Oatmeal",
        image:"/assets/images/elements/oatmeal.png",
        hypoallergenic: false,
        vegan: true, 
        components: ["Zinc"],
        benefits: ["Balance", "Hydrate", "Protect", "Combat Acne"],
        category: "bibe",
        home_remedy: [],
        date: new Date(Date.now())

    },
    {
        id: 38,
        name: "Aloe Vera",
        image:"/assets/images/elements/aloe.png",
        hypoallergenic: true,
        vegan: true,
        components: ["Salicylic Acid", "Ligin", "Amino Acids"],
        benefits: ["Renew", "Hydrate", "Rejuvenate"],
        category: "bibe",
        home_remedy: [],
        date: new Date(Date.now())

    },
    {
        id: 39,
        name: "Cranberry Seed Oil",
        image:"/assets/images/elements/cranberry.png",
        hypoallergenic: false,
        vegan: true, 
        components: ["Vitamin C", "Vitamin A", "Vitamin E", "Vitamin K"],
        benefits: ["Hydrate", "Renew", "Rejuvenate", "Protect"],
        category: "bibe",
        home_remedy: [],
        date: new Date(Date.now())

    },
    {
        id: 40,
        name: "Olive Oil",
        components: ["Oleic Acid", "Linoleic Acid"],
        benefits: ["Hydrate", "Protect", "Rejuvenate"],
        category: "bibe",
        home_remedy: [],
        date: new Date(Date.now())

    }


];

db.Element
    .remove({})
    .then(() => db.Element.collection.insertMany(elementSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
