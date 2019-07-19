const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Elements collection and inserts the elements below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/apothecadb");

const elementSeed = [
  {
    id: 1,
    name: "Pomegranate",
    image: "/assets/images/elements/pomegranate.png",
    hypoallergenic: false,
    vegan: true,
    components: [3, 1, 12, 13, 14, 16, 19],
    benefits: ["Hydrate", "Combat Acne", "Protect", "Renew"],
    category: "kalon",
    home_remedy: [],
    date: new Date(Date.now())
  },
  {
    id: 2,
    name: "Coffee Oil",
    image: "/assets/images/elements/coffee.png",
    hypoallergenic: false,
    vegan: true,
    components: [35, 2],
    benefits: ["Soothe", "Combat Acne", "Rejuvenate", "Renew"],
    category: "kalon",
    home_remedy: [],
    date: new Date(Date.now())
  },
  {
    id: 3,
    name: "Mung Bean",
    image: "/assets/images/elements/mungbean.png",
    hypoallergenic: false,
    vegan: true,
    components: [13, 10, 12, 14, 15],
    benefits: ["Protect", "Renew", "Exfoliate", "Senstive Skin"],
    category: "kalon",
    home_remedy: [],
    date: new Date(Date.now())
  },
  {
    id: 4,
    name: "Rosehip Oil",
    image: "/assets/images/elements/rosehip.png",
    hypoallergenic: true,
    vegan: true,
    components: [1, 4, 36, 5],
    benefits: ["Protect", "Renew", "Combat Acne", "Brighten"],
    category: "kalon",
    home_remedy: [],
    date: new Date(Date.now())
  },
  {
    id: 5,
    name: "Acai",
    image: "/assets/images/elements/acai.png",
    hypoallergenic: true,
    vegan: true,
    components: [4, 1, 6, 20, 15, 14, 13],
    benefits: ["Renew", "Rejuvenate", "Hydrate", "Protect"],
    category: "kalon",
    home_remedy: [],
    date: new Date(Date.now())
  },
  {
    id: 6,
    name: "Carrot Seed Oil",
    image: "/assets/images/elements/carrot.png",
    hypoallergenic: false,
    vegan: true,
    components: [21],
    benefits: ["Protect", "Renew"],
    category: "kalon",
    home_remedy: [],
    date: new Date(Date.now())
  },
  {
    id: 7,
    name: "Bilberry",
    image: "/assets/images/elements/bilberry.png",
    hypoallergenic: false,
    vegan: true,
    components: [8, 1, 2, 22],
    benefits: ["Renew", "Protect", "Rejuvenate"],
    category: "kalon",
    home_remedy: [],
    date: new Date(Date.now())
  },
  {
    id: 8,
    name: "Almond Oil",
    image: "/assets/images/elements/almond.png",
    hypoallergenic: false,
    vegan: true,
    components: [2, 4, 23, 12, 14],
    benefits: ["Protect", "Renew", "Brighten"],
    category: "kalon",
    home_remedy: [],
    date: new Date(Date.now())
  },
  {
    id: 9,
    name: "Banana",
    image: "/assets/images/elements/banana.png",
    hypoallergenic: false,
    vegan: true,
    components: [12, 8, 15, 2, 14, 24],
    benefits: ["Hydrate", "Renew", "Rejuvenate", "Protect", "Combat Acne"],
    category: "kalon",
    home_remedy: [],
    date: new Date(Date.now())
  },
  {
    id: 10,
    name: "Watermelon",
    image: "/assets/images/elements/watermelon.png",
    hypoallergenic: false,
    vegan: true,
    components: [4, 1, 31],
    benefits: ["Hydrate", "Renew"],
    category: "kalon",
    home_remedy: [],
    date: new Date(Date.now())
  },
  {
    id: 11,
    name: "Apricot",
    image: "/assets/images/elements/apricot.png",
    hypoallergenic: false,
    vegan: true,
    components: [1, 4, 2, 3],
    benefits: ["Combat Acne"],
    category: "elavo",
    home_remedy: [],
    date: new Date(Date.now())
  },
  {
    id: 12,
    name: "Papaya",
    image: "/assets/images/elements/papaya.png",
    hypoallergenic: false,
    vegan: true,
    components: [1, 4, 2, 15, 12, 26],
    benefits: ["Exfoliating", "Hydrating", "Combat Acne", "Renew"],
    category: "elavo",
    home_remedy: [],
    date: new Date(Date.now())
  },
  {
    id: 13,
    name: "Tea Tree",
    image: "/assets/images/elements/teatree.png",
    hypoallergenic: false,
    vegan: true,
    components: [27],
    benefits: ["Combat Acne", "Sensitive Skin"],
    category: "elavo",
    home_remedy: [],
    date: new Date(Date.now())
  },
  {
    id: 14,
    name: "Strawberry",
    image: "/assets/images/elements/strawberry.png",
    hypoallergenic: false,
    vegan: true,
    components: [19, 1, 34],
    benefits: ["Renew", "Protect", "Combat Acne"],
    category: "elavo",
    home_remedy: [],
    date: new Date(Date.now())
  },
  {
    id: 15,
    name: "Turmeric",
    image: "/assets/images/elements/turmeric.png",
    hypoallergenic: true,
    vegan: true,
    components: [12, 1, 7],
    benefits: ["Brighten", "Combat Acne", "Protect"],
    category: "elavo",
    home_remedy: [],
    date: new Date(Date.now())
  },
  {
    id: 16,
    name: "Onion Extract",
    image: "/assets/images/elements/onion.png",
    hypoallergenic: true,
    vegan: true,
    components: [17, 4, 1, 2],
    benefits: ["Rejuvenate", "Protect", "Combat Acne", "Exfoliate"],
    category: "elavo",
    home_remedy: [],
    date: new Date(Date.now())
  },
  {
    id: 17,
    name: "Castor Oil",
    image: "/assets/images/elements/castor.png",
    hypoallergenic: false,
    vegan: true,
    components: [28],
    benefits: ["Sensitive Skin", "Combat Acne", "Hydrate", "Soothe"],
    category: "elavo",
    home_remedy: [],
    date: new Date(Date.now())
  },
  {
    id: 18,
    name: "Green Tea",
    image: "/assets/images/elements/greentea.png",
    hypoallergenic: false,
    vegan: true,
    components: [6, 2, 35, 29],
    benefits: ["Protect", "Combat Acne", "Renew"],
    category: "elavo",
    home_remedy: [],
    date: new Date(Date.now())
  },

  {
    id: 19,
    name: "Garlic",
    image: "/assets/images/elements/garlic.png",
    hypoallergenic: true,
    vegan: true,
    components: [1, 8, 13, 14],
    benefits: ["Sensitive Skin", "Refreshe", "Combat Acne", "Soothe"],
    category: "elavo",
    home_remedy: [],
    date: new Date(Date.now())
  },
  {
    id: 20,
    name: "Holy Basil",
    image: "/assets/images/elements/holybasil.png",
    hypoallergenic: true,
    vegan: true,
    components: [3, 4, 13, 30],
    benefits: ["Combat Acne", "Soothe"],
    category: "elavo",
    home_remedy: [],
    date: new Date(Date.now())
  },
  {
    id: 21,
    name: "Tomatoes",
    image: "/assets/images/elements/tomatoes.png",
    hypoallergenic: false,
    vegan: true,
    components: [31, 1, 12],
    benefits: ["Rejuvenate", "Brighten", "Renew", "Protect"],
    category: "novo",
    home_remedy: [],
    date: new Date(Date.now())
  },
  {
    id: 22,
    name: "Jojoba Oil",
    image: "/assets/images/elements/jojoba.png",
    hypoallergenic: false,
    vegan: true,
    components: [2, 13, 14],
    benefits: ["Protect", "Hydrate", "Balance"],
    category: "novo",
    home_remedy: [],
    date: new Date(Date.now())
  },

  {
    id: 23,
    name: "Apple Cider Vinegar",
    image: "/assets/images/elements/apple.png",
    hypoallergenic: false,
    vegan: true,
    components: [39, 12, 15],
    benefits: ["Combat Acne"],
    category: "novo",
    home_remedy: [],
    date: new Date(Date.now())
  },

  {
    id: 24,
    name: "Sea Salt",
    image: "/assets/images/elements/salt.png",
    hypoallergenic: true,
    vegan: true,
    components: [15, 20, 12],
    benefits: ["Hydrate", "Rejuvenate"],
    category: "novo",
    home_remedy: [],
    date: new Date(Date.now())
  },

  {
    id: 25,
    name: "Mango",
    image: "/assets/images/elements/mango.png",
    hypoallergenic: false,
    vegan: true,
    components: [1, 4, 8, 13, 12, 15, 2, 3],
    benefits: ["Combat Acne", "Soothe", "Renew", "Rejuvenate", "Exfoliate"],
    category: "novo",
    home_remedy: [],
    date: new Date(Date.now())
  },

  {
    id: 26,
    name: "Hyssop",
    image: "/assets/images/elements/hyssop.png",
    hypoallergenic: false,
    vegan: true,
    components: [40],
    benefits: ["Refresh", "Balance", "Sensitive Skin"],
    category: "novo",
    home_remedy: [],
    date: new Date(Date.now())
  },

  {
    id: 27,
    name: "Baking Soda",
    image: "/assets/images/elements/bakingsoda.png",
    hypoallergenic: true,
    vegan: true,
    components: [41],
    benefits: ["Rejuvenate", "Acne Control", "Refresh"],
    category: "novo",
    home_remedy: [],
    date: new Date(Date.now())
  },

  {
    id: 28,
    name: "Witch Hazel",
    image: "/assets/images/elements/witchhazel.png",
    hypoallergenic: true,
    vegan: true,
    components: [38],
    benefits: ["Combat Acne", "Soothe", "Protect"],
    category: "novo",
    home_remedy: [],
    date: new Date(Date.now())
  },

  {
    id: 29,
    name: "Lemon Oil",
    image: "/assets/images/elements/lemon.png",
    hypoallergenic: true,
    vegan: true,
    components: [1, 12],
    benefits: ["Renew", "Rejuvenate", "Brighten", "Protect"],
    category: "novo",
    home_remedy: [],
    date: new Date(Date.now())
  },
  {
    id: 30,
    name: "Egg Whites",
    image: "/assets/images/elements/eggs.png",
    hypoallergenic: false,
    vegan: false,
    components: [24, 12],
    benefits: ["Combat Acne", "Brighten", "Balance"],
    category: "novo",
    home_remedy: [],
    date: new Date(Date.now())
  },
  {
    id: 31,
    name: "Shea Butter",
    image: "/assets/images/elements/sheabutter.png",
    hypoallergenic: true,
    vegan: true,
    components: [36],
    benefits: ["Renew", "Rejuvenate", "Brighten", "Hydrate"],
    category: "bibe",
    home_remedy: [],
    date: new Date(Date.now())
  },
  {
    id: 32,
    name: "Cucumber",
    image: "/assets/images/elements/cucumber.png",
    hypoallergenic: true,
    vegan: true,
    components: [31, 15, 12],
    benefits: ["Hydrate", "Brighten"],
    category: "bibe",
    home_remedy: [],
    date: new Date(Date.now())
  },
  {
    id: 33,
    name: "Honey",
    image: "/assets/images/elements/honey.png",
    hypoallergenic: false,
    vegan: false,
    components: [6, 7, 8, 1, 12],
    benefits: ["Combat Acne", "Hydrate", "Sensitive Skin", "Brighten"],
    category: "bibe",
    home_remedy: [],
    date: new Date(Date.now())
  },
  {
    id: 34,
    name: "Yogurt",
    image: "/assets/images/elements/yogurt.png",
    hypoallergenic: false,
    vegan: false,
    components: [14],
    benefits: ["Rejuvenate", "Combat Acne", "Brighten"],
    category: "bibe",
    home_remedy: [],
    date: new Date(Date.now())
  },
  {
    id: 35,
    name: "Coconut Oil",
    image: "/assets/images/elements/coconut.png",
    hypoallergenic: true,
    vegan: true,
    components: [42],
    benefits: ["Hydrate", "Rejuvenate"],
    category: "bibe",
    home_remedy: [],
    date: new Date(Date.now())
  },
  {
    id: 36,
    name: "Avocado",
    image: "/assets/images/elements/avocado.png",
    hypoallergenic: true,
    vegan: false,
    components: [4, 32, 2],
    benefits: ["Hydrate", "Brighten"],
    category: "bibe",
    home_remedy: [],
    date: new Date(Date.now())
  },
  {
    id: 37,
    name: "Oatmeal",
    image: "/assets/images/elements/oatmeal.png",
    hypoallergenic: false,
    vegan: true,
    components: [14],
    benefits: ["Balance", "Hydrate", "Protect", "Combat Acne"],
    category: "bibe",
    home_remedy: [],
    date: new Date(Date.now())
  },
  {
    id: 38,
    name: "Aloe Vera",
    image: "/assets/images/elements/aloe.png",
    hypoallergenic: true,
    vegan: true,
    components: [24],
    benefits: ["Renew", "Hydrate", "Rejuvenate"],
    category: "bibe",
    home_remedy: [],
    date: new Date(Date.now())
  },
  {
    id: 39,
    name: "Cranberry Seed Oil",
    image: "/assets/images/elements/cranberry.png",
    hypoallergenic: false,
    vegan: true,
    components: [1, 4, 2, 3],
    benefits: ["Hydrate", "Renew", "Rejuvenate", "Protect"],
    category: "bibe",
    home_remedy: [],
    date: new Date(Date.now())
  },
  {
    id: 40,
    name: "Olive Oil",
    image: "/assets/images/elements/oliveoil.png",
    hypoallergenic: true,
    vegan: true,
    components: [36],
    benefits: ["Hydrate", "Protect", "Rejuvenate"],
    category: "bibe",
    home_remedy: [],
    date: new Date(Date.now())
  }
];

db.Element.remove({})
  .then(() => db.Element.collection.insertMany(elementSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
