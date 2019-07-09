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
        image:"../client/public/assets/images/elements/pomegranate.png",
        hypoallergenic: false,
        vegan: true, 
        components: ["Vitamin K", "Vitamin C", "Potassium", "Copper", "Zinc", "Iron", "Polyphenols", "Ellagic Acid"],
        benefits: ["Hydrates", "Combats Acne", "Protects", "Renews"],
        category: "kalon",
        home_remedy: [],
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }],
        date: new Date(Date.now())

    },
    {
        id: 2,
        name: "Coffee Oil",
        image:"../client/public/assets/images/elements/coffee.png",
        hypoallergenic: false,
        vegan: true, 
        components: ["Caffeine", "Vitamin E", "Essential Fatty Acids", "Sterols", "Antioxidants"],
        benefits: ["Soothes", "Combats Acne", "Rejuvinates", "Renews"],
        category: "kalon",
        home_remedy: [],
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }],
        date: new Date(Date.now())

    },
    {
        id: 3,
        name: "Mung Bean",
        image:"../client/public/assets/images/elements/mungbean.png",
        hypoallergenic: false,
        vegan: true, 
        components: ["Copper", "B Vitamins", "Potassium", "Zinc", "Magnesium"],
        benefits: ["Protects", "Renews", "Exfoliates", "Senstive Skin"],
        category: "kalon",
        home_remedy: [],
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }],
        date: new Date(Date.now())

    },
    {
        id: 4,
        name: "Rosehip Oil",
        image:"../client/public/assets/images/elements/rosehip.png",
        hypoallergenic: true,
        vegan: true, 
        components: ["Vitamin C", "Vitamin A", "Oleic Acid", "Palmitic Acid", "Linoleic Acid", "Gamma Linoleic Acid", "Vitamin F"],
        benefits: ["Protects", "Renews", "Combats Acne", "Brightens"],
        category: "kalon",
        home_remedy: [],
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }],
        date: new Date(Date.now())

    },
    {
        id: 5,
        name: "Acai",
        image:"../client/public/assets/images/elements/acai.png",
        hypoallergenic: true,
        vegan: true,
        components: ["Vitamin A", "Vitamin C", "B Vitamins", "Calcium", "Magnesium", "Zinc", "Copper"],
        benefits: ["Renews", "Rejuvinates", "Hydrates", "Protects"],
        category: "kalon",
        home_remedy: [],
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }],
        date: new Date(Date.now())

    },
    {
        id: 6,
        name: "Carrot Seed Oil",
        image:"../client/public/assets/images/elements/carrot.png",
        hypoallergenic: false,
        vegan: true,
        components: ["Carotol", "Daucene", "Beta-bisabolene", "Daucol"],
        benefits: ["Protects", "Renews"],
        category: "kalon",
        home_remedy: [],
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }],
        date: new Date(Date.now())

    },
    {
        id: 7,
        name: "Bilberry",
        image:"../client/public/assets/images/elements/bilberry.png",
        hypoallergenic: false,
        vegan: true,
        components: ["Vitamin B", "Vitamin C", "Vitamin E", "Quercetin", "Resueratrol", "Omega 3", "Omega 6"],
        benefits: ["Renews", "Protects", "Rejuvinates"],
        category: "kalon",
        home_remedy: [],
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }],
        date: new Date(Date.now())

    },
    {
        id: 8,
        name: "Almond Oil",
        image:"../client/public/assets/images/elements/acai.png",
        hypoallergenic: false,
        vegan: true,
        components: ["Vitamin E", "Vitamin A", "Protein", "Potassium", "Zinc"],
        benefits: ["Protects", "Renews", "Brightens"],
        category: "kalon",
        home_remedy: [],
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }],
        date: new Date(Date.now())

    },
    {
        id: 9,
        name: "Banana",
        image:"../client/public/assets/images/elements/banana.png",
        hypoallergenic: false,
        vegan: true,
        components: ["Potassium", "B Vitamins", "Magnesium", "Vitamin E", "Zinc", "Lectin", "Amino Acids"],
        benefits: ["Hydrates", "Renews", "Rejuvinates", "Protects", "Combats Acne"],
        category: "kalon",
        home_remedy: [],
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }],
        date: new Date(Date.now())

    },
    {
        id: 10,
        name: "Watermelon",
        image:"../client/public/assets/images/elements/watermelon.png",
        hypoallergenic: false,
        vegan: true, 
        components: [""],
        benefits: [""],
        category: "kalon",
        home_remedy: [],
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }],
        date: new Date(Date.now())

    },
    {
        id: 11,
        name: "Apricot",
        image:"../client/public/assets/images/elements/apricot.png",
        hypoallergenic: false,
        vegan: true,
        components: ["Vitamin C", "Vitamin A", "Vitamin E", "Vitamin K"],
        benefits: ["Combats Acne"],
        category: "elavo",
        home_remedy: [],
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }],
        date: new Date(Date.now())

    },
    {
        id: 12,
        name: "Papaya",
        image:"../client/public/assets/images/elements/papaya.png",
        hypoallergenic: false,
        vegan: true, 
        components: ["Vitamin C", "Vitamin A", "Vitamin E", "Pantothenic Acid", "Folate", "Magnesium", "Potassium", "Papin"],
        benefits: ["Exfoliating", "Hydrating", "Combats Acne", "Renews"],
        category: "elavo",
        home_remedy: [],
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }],
        date: new Date(Date.now())

    },
    {
        id: 13,
        name: "Tea Tree",
        image:"../client/public/assets/images/elements/teatree.png",
        hypoallergenic: false,
        vegan: true, 
        components: ["Terpinen-4-ol"],
        benefits: ["Combats Acne", "Sensitive Skin"],
        category: "elavo",
        home_remedy: [],
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }],
        date: new Date(Date.now())

    },
    {
        id: 14,
        name: "Strawberry",
        image:"../client/public/assets/images/elements/strawberry.png",
        hypoallergenic: false,
        vegan: true, 
        components: ["Ellagic Acid", "Vitamin C", "Folic Acid", "Fiber"],
        benefits: ["Renews", "Protects", "Combats Acne"],
        category: "elavo",
        home_remedy: [],
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }],
        date: new Date(Date.now())

    },
    {
        id: 15,
        name: "Turmeric",
        image:"../client/public/assets/images/elements/tumeric.png",
        hypoallergenic: true,
        vegan: true, 
        components: ["Potassium", "Vitamin C", "Vitamin B"],
        benefits: ["Brightens", "Combats Acne", "Protects",],
        category: "elavo",
        home_remedy: [],
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }],
        date: new Date(Date.now())

    },
    {
        id: 16,
        name: "Onion Extract",
        image:"../client/public/assets/images/elements/onion.png",
        hypoallergenic: true,
        vegan: true, 
        components: ["Flavonoids", "Vitamin A", "Vitamin C", "Vitamin E"],
        benefits: ["Rejuvinates", "Protects", "Combats Acne", "Exfoliates"],
        category: "elavo",
        home_remedy: [],
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }],
        date: new Date(Date.now())

    },
    {
        id: 17,
        name: "Castor Oil",
        image:"../client/public/assets/images/elements/castor.png",
        hypoallergenic: false,
        vegan: true, 
        components: ["Ricinoleic Acid"],
        benefits: ["Sensitive Skin", "Combats Acne", "Hydrates", "Soothes"],
        category: "elavo",
        home_remedy: [],
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }],
        date: new Date(Date.now())

    },
    {
        id: 18,
        name: "Green Tea",
        image:"../client/public/assets/images/elements/greentea.png",
        hypoallergenic: false,
        vegan: true, 
        components: ["Vitamin B2", "Vitamin E", "Caffeine", "Tannins", "EGCG"],
        benefits: ["Protects", "Combats Acne", "Renews"],
        category: "elavo",
        home_remedy: [],
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }],
        date: new Date(Date.now())

    },

    {
        id: 19,
        name: "Garlic",
        image:"../client/public/assets/images/elements/garlic.png",
        hypoallergenic: true,
        vegan: true, 
        components: ["Thiosaulfinates", "Allicin", "Vitamin C", "Vitamin B6", "Copper", "Zinc"],
        benefits: ["Sensitive Skin", "Refreshes", "Combats Acne", "Soothes"],
        category: "elavo",
        home_remedy: [],
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }],
        date: new Date(Date.now())

    },
    {
        id: 20,
        name: "Holy Basil",
        components: ["Vitamin K", "Vitamin A", "Copper", "Tulsi"],
        benefits: ["Combats Acne", "Soothes"],
        category: "elavo",
        home_remedy: [],
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }],
        date: new Date(Date.now())

    },
    {
        id: 21,
        name: "Tomatoes",
        image:"../client/public/assets/images/elements/tomatoes.png",
        hypoallergenic: false,
        vegan: true, 
        components: ["lycopene", "Vitamin C", "Potassium"],
        benefits: ["Rejuvinate", "Brighten", "Renews", "Protects"],
        category: "novo",
        home_remedy: [],
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }],
        date: new Date(Date.now())

    },
    {
        id: 22,
        name: "Jojoba Oil",
        image:"../client/public/assets/images/elements/jojoba.png",
        hypoallergenic: false,
        vegan: true, 
        components: ["Vitamin E", "Vitamin B", "Copper", "Zinc", "Chromium"],
        benefits: ["Protects", "Hydrates", "Balances"],
        category: "novo",
        home_remedy: [],
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }],
        date: new Date(Date.now())

    },

    {
        id: 23,
        name: "Apple Cider Vinegar",
        image:"../client/public/assets/images/elements/apple.png",
        hypoallergenic: false,
        vegan: true,
        components: ["Acetic Acid", "Potassium", "Magnesium"],
        benefits: ["Combats Acne"],
        category: "novo",
        home_remedy: [],
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }],
        date: new Date(Date.now())

    },

    {
        id: 24,
        name: "Sea Salt",
        image:"../client/public/assets/images/elements/salt.png",
        hypoallergenic: true,
        vegan: true, 
        components: ["Magnesium", "Calcium", "Sodium", "Potassium"],
        benefits: ["Hydrating", "Rejuvinating"],
        category: "novo",
        home_remedy: [],
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }],
        date: new Date(Date.now())

    },

    {
        id: 25,
        name: "Mango",
        image:"../client/public/assets/images/elements/mango.png",
        hypoallergenic: false,
        vegan: true, 
        components: ["Vitamin C", "Vitamin A", "Vitamin B6", "Copper", "Potassium", "Magnesium", "Vitamin E", "Vitamin K"],
        benefits: ["Combats Acne", "Soothes", "Renews", "Rejuvinates", "Exfoliates"],
        category: "novo",
        home_remedy: [],
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }],
        date: new Date(Date.now())

    },

    {
        id: 26,
        name: "Hyssop",
        image:"../client/public/assets/images/elements/hyssop.png",
        hypoallergenic: false,
        vegan: true, 
        components: ["Limonene", "Eucalptol", "Camphene"],
        benefits: ["Refreshes", "Balances", "Sensitive Skin"],
        category: "novo",
        home_remedy: [],
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }],
        date: new Date(Date.now())

    },

    {
        id: 27,
        name: "Baking Soda",
        image:"../client/public/assets/images/elements/bakingsoda.png",
        hypoallergenic: true,
        vegan: true,
        components: ["Sodium Bicarbonate"],
        benefits: ["Rejuvinating", "Acne Control", "Refreshes"],
        category: "novo",
        home_remedy: [],
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }],
        date: new Date(Date.now())

    },

    {
        id: 28,
        name: "Witch Hazel",
        image:"../client/public/assets/images/elements/witchhazel.png",
        hypoallergenic: true,
        vegan: true, 
        components: ["Gallic Acid", "Tannins"],
        benefits: ["Combats Acne", "Soothes", "Protects"],
        category: "novo",
        home_remedy: [],
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }],
        date: new Date(Date.now())

    },

    {
        id: 29,
        name: "Lemon Oil",
        image:"../client/public/assets/images/elements/lemon.png",
        hypoallergenic: true,
        vegan: true, 
        components: ["Vitamin C", "Potassium"],
        benefits: ["Renews", "Rejuvinate", "Brighten", "Protect"],
        category: "novo",
        home_remedy: [],
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }],
        date: new Date(Date.now())

    },
    {
        id: 30,
        name: "Egg Whites",
        image:"../client/public/assets/images/elements/eggs.png",
        hypoallergenic: false,
        vegan: false, 
        components: ["Lysozymes", "Amino Acids", "Potassium"],
        benefits: ["Combats Acne", "Brighten", "Balances"],
        category: "novo",
        home_remedy: [],
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }],
        date: new Date(Date.now())

    },
    {
        id: 31,
        name: "Shea Butter",
        image:"../client/public/assets/images/elements/sheabutter.png",
        hypoallergenic: true,
        vegan: true, 
        components: ["Stearic Acid", "Oleic Acid"],
        benefits: ["Renews", "Rejuvinates", "Brightens", "Hydrates"],
        category: "bibe",
        home_remedy: [],
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }],
        date: new Date(Date.now())

    },
    {
        id: 32,
        name: "Cucumber",
        image:"../client/public/assets/images/elements/cucumber.png",
        hypoallergenic: true,
        vegan: true, 
        components: ["Lycopene", "Magnesium", "Potassium", "Biotin"],
        benefits: ["Hydrates", "Brightens"],
        category: "bibe",
        home_remedy: [],
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }],
        date: new Date(Date.now())

    },
    {
        id: 33,
        name: "Honey",
        image:"../client/public/assets/images/elements/honey.png",
        hypoallergenic: false,
        vegan: false, 
        components: ["Vitamin B2", "Vitamin B3", "Vitamin B5", "Vitamin B6", "Vitamin C", "Potassium"],
        benefits: ["Combats Acne", "Hydrates", "Sensitive Skin", "Brightens"],
        category: "bibe",
        home_remedy: [],
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }],
        date: new Date(Date.now())

    },
    {
        id: 34,
        name: "Yogurt",
        image:"../client/public/assets/images/elements/yogurt.png",
        hypoallergenic: false,
        vegan: false, 
        components: ["Lactic Acid", "Zinc"],
        benefits: ["Rejuvinates", "Combats Acne", "Brightens"],
        category: "bibe",
        home_remedy: [],
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }],
        date: new Date(Date.now())

    },
    {
        id: 35,
        name: "Coconut Oil",
        image:"../client/public/assets/images/elements/coconut.png",
        hypoallergenic: true,
        vegan: true, 
        components: ["Lauric Acid", "Medium Chain Triglycerides"],
        benefits: ["Hydrates", "Rejuvinates"],
        category: "bibe",
        home_remedy: [],
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }],
        date: new Date(Date.now())

    },
    {
        id: 36,
        name: "Avocado",
        image:"../client/public/assets/images/elements/avocado.png",
        hypoallergenic: true,
        vegan: false,
        components: ["Vitamin A", "Vitamin D", "Vitamin E"],
        benefits: ["Hydrates", "Brightens"],
        category: "bibe",
        home_remedy: [],
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }],
        date: new Date(Date.now())

    },
    {
        id: 37,
        name: "Oatmeal",
        image:"../client/public/assets/images/elements/oatmeal.png",
        hypoallergenic: false,
        vegan: true, 
        components: ["Zinc"],
        benefits: ["Balances", "Hydrates", "Protects", "Combats Acne"],
        category: "bibe",
        home_remedy: [],
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }],
        date: new Date(Date.now())

    },
    {
        id: 38,
        name: "Aloe Vera",
        image:"../client/public/assets/images/elements/aloe.png",
        hypoallergenic: true,
        vegan: true,
        components: ["Salicylic Acid", "Ligin", "Amino Acids"],
        benefits: ["Renews", "Hydrates", "Rejuvinates"],
        category: "bibe",
        home_remedy: [],
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }],
        date: new Date(Date.now())

    },
    {
        id: 39,
        name: "Cranberry Seed Oil",
        image:"../client/public/assets/images/elements/cranberry.png",
        hypoallergenic: false,
        vegan: true, 
        components: ["Vitamin C", "Vitamin A", "Vitamin E", "Vitamin K"],
        benefits: ["Hydrates", "Renews", "Rejuvinates", "Protects"],
        category: "bibe",
        home_remedy: [],
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }],
        date: new Date(Date.now())

    },
    {
        id: 40,
        name: "Olive Oil",
        components: ["Oleic Acid", "Linoleic Acid"],
        benefits: [""],
        category: "bibe",
        home_remedy: [],
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }],
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
