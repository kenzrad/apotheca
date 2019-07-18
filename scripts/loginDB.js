const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Remedies collection and inserts the remedies below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/apothecadb"
);

const loginSeed = [
    {

        userName: "bananawarner",
        password: "bootcamp2019",
        firstName: "Anna",
        vegan: false,
        hypoallergenic: false,
        libraOverall: "Kalon",
        libraCategories: [{
            kalon: 4,
            novo: 1,
            elavo: 2,
            bibe: 1
        }],
        elements: [
            {
                id: 1,
                name: "Pomegranate",
                image: "/assets/images/elements/pomegranate.png",
                hypoallergenic: false,
                vegan: true,
                components: [3, 1, 12, 13, 14, 16, 19],
                benefits: ["Hydrate", "Combat Acne", "Protect", "Renew"],
                category: "kalon",
                home_remedy: [1],
                date: new Date(Date.now())

            },
            {
                id: 1,
                name: "Pomegranate",
                image: "/assets/images/elements/pomegranate.png",
                hypoallergenic: false,
                vegan: true,
                components: [3, 1, 12, 13, 14, 16, 19],
                benefits: ["Hydrate", "Combat Acne", "Protect", "Renew"],
                category: "kalon",
                home_remedy: [1],
                date: new Date(Date.now())

            },
            {
                id: 2,
                name: "Coffee Oil",
                image: "/assets/images/elements/coffee.png",
                hypoallergenic: false,
                vegan: true,
                components: [41, 2],
                benefits: ["Soothe", "Combat Acne", "Rejuvenate", "Renew"],
                category: "kalon",
                home_remedy: [5],
                date: new Date(Date.now())

            },
            {
                id: 3,
                name: "Mung Bean",
                image: "/assets/images/elements/mungbean.png",
                hypoallergenic: false,
                vegan: true,
                components: [13, 12, 14, 15],
                benefits: ["Protect", "Renew", "Exfoliate", "Senstive Skin"],
                category: "kalon",
                home_remedy: [6],
                date: new Date(Date.now())

            },
            {
                id: 1,
                name: "Pomegranate",
                image: "/assets/images/elements/pomegranate.png",
                hypoallergenic: false,
                vegan: true,
                components: [3, 1, 12, 13, 14, 16, 19],
                benefits: ["Hydrate", "Combat Acne", "Protect", "Renew"],
                category: "kalon",
                home_remedy: [1],
                date: new Date(Date.now())

            },
            {
                id: 1,
                name: "Pomegranate",
                image: "/assets/images/elements/pomegranate.png",
                hypoallergenic: false,
                vegan: true,
                components: [3, 1, 12, 13, 14, 16, 19],
                benefits: ["Hydrate", "Combat Acne", "Protect", "Renew"],
                category: "kalon",
                home_remedy: [1],
                date: new Date(Date.now())

            },
            {
                id: 2,
                name: "Coffee Oil",
                image: "/assets/images/elements/coffee.png",
                hypoallergenic: false,
                vegan: true,
                components: [41, 2],
                benefits: ["Soothe", "Combat Acne", "Rejuvenate", "Renew"],
                category: "kalon",
                home_remedy: [5],
                date: new Date(Date.now())

            },
            {
                id: 3,
                name: "Mung Bean",
                image: "/assets/images/elements/mungbean.png",
                hypoallergenic: false,
                vegan: true,
                components: [13, 12, 14, 15],
                benefits: ["Protect", "Renew", "Exfoliate", "Senstive Skin"],
                category: "kalon",
                home_remedy: [6],
                date: new Date(Date.now())

            },
            {
                id: 2,
                name: "Coffee Oil",
                image: "/assets/images/elements/coffee.png",
                hypoallergenic: false,
                vegan: true,
                components: [41, 2],
                benefits: ["Soothe", "Combat Acne", "Rejuvenate", "Renew"],
                category: "kalon",
                home_remedy: [5],
                date: new Date(Date.now())

            },
            {
                id: 3,
                name: "Mung Bean",
                image: "/assets/images/elements/mungbean.png",
                hypoallergenic: false,
                vegan: true,
                components: [13, 12, 14, 15],
                benefits: ["Protect", "Renew", "Exfoliate", "Senstive Skin"],
                category: "kalon",
                home_remedy: [6],
                date: new Date(Date.now())

            },

        ],
        components: [
            {
                id: 1,
                component: "Vitamin C",
                description: "a key ingredient found in many anti-aging skin care products, due to it’s cancer-fight antioxidant properties and its role in collagen production. Vitamin C is found at  high levels in the epidermis and the dermis layers of the skin. This vitamin can aid the treatment of dry skin, redness and irritation, wrinkles, and age spots.",
                source: "https://www.healthline.com/health/4-best-vitamins-for-skin"
            },
            {
                id: 2,
                component: "Vitamin E",
                description: "this component is an antioxidant which largely helps protect the skin against harmful UV light. This vitamin aids in photoprotections, which refers to the ability of the body to reduce sun damage. This gives vitamin E great anti-aging properties, and will help prevent dark spots and wrinkles. The body naturally produces vitamin E through sebum. If skin is on the dryer side, vitamin E would be beneficial to counteract the lack of sebum and moisturize the skin. This component also helps combat skin inflammation.",
                source: "https://www.healthline.com/health/4-best-vitamins-for-skin)"
            },
            {
                id: 3,
                component: "Vitamin K",
                description: "this vitamin is known to help reduce scaring, dark spots, and help alleviate dark circles under your eyes. Vitamin K strengthens capillaries, increases circulation, and reduces fluid retention to brighten and rejuvenate skin. This will strengthen and increase skin resiliency.",
                source: "https://www.lovelyskin.com/blog/p/5-vitamin-k-benefits-for-your-skin)"
            },
            {
                id: 12,
                component: "Potassium",
                description: "although potassium cannot be absorbed through your skin, it can enhance the moisture and improve the feel and complexion of your skin. Potassium can be found in many skin care products to help adjust and balance pH, and help aid in moisturizing the skin.",
                source: "https://www.ironmountainhotsprings.com/mineral-spotlight-potassium/"
            },
            {
                id: 13,
                component: "Copper",
                description: "Copper is known to aid in reducing the effects of aging. As we grow older, the production of collagen and something called copper peptides reduce. These components are important in healthy elasticity of skin. Copper will bind with the protein fragments in the skin and will encourage blood vessel growth, promote skin regeneration, stimulate collagen, and boost antioxidant activities. It is also known to help repair and protect skin from UV damage. This component will also promote the production of Hyaluronic acid which keeps the skin hydrated, and a smooth, plump, supple appearance.",
                source: "https://beverlyhillsmd.com/anti-aging-benefits-copper/"
            },
            {
                id: 14,
                component: "Zinc",
                description: "zinc is known to be a powerful protectant again sun’s UV light. Unlike other chemical sunscreen ingredients that absorb into the skin, Zinc can help create a layer that stops UV light from penetrating your skin altogether. It is also great for reducing inflammation and soothe irritated skin. It’s an anti-microbial which can regulate immunity and stimulate the production of new cells.",
                source: "https://www.canyonranch.com/blog/beauty/the-skin-benefits-of-zinc/"
            },
            {
                id: 15,
                component: "Magnesium",
                description: "This component can improve the skin’s overall appearance by balancing the production of sebum, which is can cause oil build up linked to acne and other irritants. It can also even out the skin tone for those who suffer from Rosacea, or other skin conditions.",
                source: "https://medium.com/@dghayal1/magnesium-for-skin-why-its-the-best-acne-and-wrinkle-fighting-supplement-465eb54e8bbe"
            },
            {
                id: 16,
                component: "Polyphenols",
                description: "this vitamin contains chemo preventive properties that possess anti-inflammatory, immunomodulatory and antioxidant properties to prevent UV-induced skin photodamage. This component can help improve our skin’s natural defense against oxidative stress, preventing skin from aging and could inhibit skin cancer.",
                source: "https://www.dermstore.com/blog/top_ten/antioxidants-in-skin-care/"
            },
            {
                id: 19,
                component: "Ellagic Acid",
                description: "This polyphenol compound help protect the skin from oxidative stress induced by UV light and other natural aging processes. It can also reduce inflammation and inhibits matrix metalloproteinase (MMP), which is an enzyme that starts collagen breakdown. This component will help maintain and can improve skin’s elasticity and fight wrinkles and fine lines. It also helps brighten dull skin and can fight age spots.",
                source: "https://www.halecosmeceuticals.com/ellagic-acid/"
            },
            {
                id: 41,
                component: "caffeine",
                description: "caffeine in skin products claims that it will improve the look of cellulite or puffy eyes. Applied to skin, caffeine may have soothing and antioxidant properties, especially when skin is exposed to UV light",
                source: "https://www.paulaschoice.com/ingredient-dictionary/antioxidants/caffeine.html"
            }
        ],
        remedies: [
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
            }
        ]
    }
]



db.Login
    .remove({})
    .then(() => db.Login.collection.insertMany(loginSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });