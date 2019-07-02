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
        components: ["Vitamin K", "Vitamin C", "Potassium", "Copper", "Zinc", "Iron", "Polyphenols", "Ellagic Acid"],
        benefits: ["Hydrates", "Combats Acne", "Protects", "Renews"],
        category: "kalon",
        home_remedy: 1,
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }]
    },
    {
        id: 2,
        name: "Coffee Oil",
        components: ["Caffeine", "Vitamin E", "Essential Fatty Acids", "Sterols", "Antioxidants"],
        benefits: ["Soothes", "Combats Acne", "Rejuvinates", "Renews"],
        category: "kalon",
        home_remedy: 2,
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }]
    },
    {
        id: 3,
        name: "Mung Bean",
        components: ["Copper", "B Vitamins", "Potassium", "Zinc", "Magnesium"],
        benefits: ["Protects", "Renews", "Exfoliates", "Senstive Skin"],
        category: "kalon",
        home_remedy: 3,
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }]
    },
    {
        id: 4,
        name: "Rosehip Oil",
        components: ["Vitamin C", "Vitamin A", "Oleic Acid", "Palmitic Acid", "Linoleic Acid", "Gamma Linoleic Acid", "Vitamin F"],
        benefits: ["Protects", "Renews", "Combats Acne", "Brightens"],
        category: "kalon",
        home_remedy: 4,
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }]
    },
    {
        id: 5,
        name: "Acai",
        components: ["Vitamin A", "Vitamin C", "B Vitamins", "Calcium", "Magnesium", "Zinc", "Copper"],
        benefits: ["Renews", "Rejuvinates", "Hydrates", "Protects"],
        category: "kalon",
        home_remedy: 5,
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }]
    },
    {
        id: 6,
        name: "Carrot Seed Oil",
        components: ["Carotol", "Daucene", "Beta-bisabolene", "Daucol"],
        benefits: ["Protects", "Renews"],
        category: "kalon",
        home_remedy: 6,
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }]
    },
    {
        id: 7,
        name: "Bilberry",
        components: ["Vitamin B", "Vitamin C", "Vitamin E", "Quercetin", "Resueratrol", "Omega 3", "Omega 6"],
        benefits: ["Renews", "Protects", "Rejuvinates"],
        category: "kalon",
        home_remedy: 7,
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }]
    },
    {
        id: 8,
        name: "Almond Oil",
        components: ["Vitamin E", "Vitamin A", "Protein", "Potassium", "Zinc"],
        benefits: ["Protects", "Renews", "Brightens"],
        category: "kalon",
        home_remedy: 8,
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }]
    },
    {
        id: 9,
        name: "Banana",
        components: ["Potassium", "B Vitamins", "Magnesium", "Vitamin E", "Zinc", "Lectin", "Amino Acids"],
        benefits: ["Hydrates", "Renews", "Rejuvinates", "Protects", "Combats Acne"],
        category: "kalon",
        home_remedy: 9,
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }]
    },
    {
        id: 10,
        name: "Watermelon",
        components: [""],
        benefits: [""],
        category: "kalon",
        home_remedy: 1,
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }]
    },
    {
        id: 11,
        name: "Apricot",
        components: ["Vitamin C", "Vitamin A", "Vitamin E", "Vitamin K"],
        benefits: ["Combats Acne"],
        category: "elavo",
        home_remedy: 11,
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }]
    },
    {
        id: 12,
        name: "Papaya",
        components: ["Vitamin C", "Vitamin A", "Vitamin E", "Pantothenic Acid", "Folate", "Magnesium", "Potassium", "Papin"],
        benefits: ["Exfoliating", "Hydrating", "Combats Acne", "Renews"],
        category: "elavo",
        home_remedy: 12,
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }]
    },
    {
        id: 13,
        name: "Tea Tree",
        components: ["Terpinen-4-ol"],
        benefits: ["Combats Acne", "Sensitive Skin"],
        category: "elavo",
        home_remedy: 13,
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }]
    },
    {
        id: 14,
        name: "Strawberry",
        components: ["Ellagic Acid", "Vitamin C", "Folic Acid", "Fiber"],
        benefits: ["Renews", "Protects", "Combats Acne"],
        category: "elavo",
        home_remedy: 14,
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }]
    },
    {
        id: 15,
        name: "Turmeric",
        components: ["Potassium", "Vitamin C", "Vitamin B"],
        benefits: ["Brightens", "Combats Acne", "Protects",],
        category: "elavo",
        home_remedy: 15,
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }]
    },
    {
        id: 16,
        name: "Onion Extract",
        components: ["Flavonoids", "Vitamin A", "Vitamin C", "Vitamin E"],
        benefits: ["Rejuvinates", "Protects", "Combats Acne", "Exfoliates"],
        category: "elavo",
        home_remedy: 16,
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }]
    },
    {
        id: 17,
        name: "Castor Oil",
        components: ["Ricinoleic Acid"],
        benefits: ["Sensitive Skin", "Combats Acne", "Hydrates", "Soothes"],
        category: "elavo",
        home_remedy: 17,
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }]
    },
    {
        id: 18,
        name: "Green Tea",
        components: ["Vitamin B2", "Vitamin E", "Caffeine", "Tannins", "EGCG"],
        benefits: ["Protects", "Combats Acne", "Renews"],
        category: "elavo",
        home_remedy: 18,
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }]
    },
    {
        id: 19,
        name: "Garlic",
        components: ["Thiosaulfinates", "Allicin", "Vitamin C", "Vitamin B6", "Copper", "Zinc"],
        benefits: ["Sensitive Skin", "Refreshes", "Combats Acne", "Soothes"],
        category: "elavo",
        home_remedy: 19,
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }]
    },
    {
        id: 20,
        name: "Holy Basil",
        components: ["Vitamin K", "Vitamin A", "Copper", "Tulsi"],
        benefits: ["Combats Acne", "Soothes"],
        category: "elavo",
        home_remedy: 20,
        products: [{
            name: "",
            src: "",
            price: "",
            tags: ""
        }]
    },


];

db.Apotheca
    .remove({})
    .then(() => db.Apotheca.collection.insertMany(elementSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
