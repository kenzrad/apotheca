const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Components collection and inserts the componenets below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/apothecadb"
);

const componentSeed = [
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
        id: 4,
        component: "Vitamin A",
        description: "this component is key for anti-aging. With compounds such as retinal, retinol, and retinoic acid, this vitamin can do wonders for rejuvenating skin. First and foremost, this component can protect against UV damage which will slow signs of aging. It encourages healthy skin cell production and growth and will stimulate fibroblasts. Fibroblasts are the cells that are responsible for developing the tissue that keeps skin firm and healthy. Vitamin A is known to smooth wrinkles and stimulate collagen production, as well as combat acne, which will even the skins tone and keep it glowing.",
        source: "https://www.canyonranch.com/blog/beauty/the-skin-benefits-of-vitamin-a/"
    },
    {
        id: 5,
        component: "Vitamin F",
        description: "this vitamin is comprised of an essential fatty acid called linoleic acid. This acid is rich in Omega-6. This component is known as lipids, which are incredibly important in terms of maintaining a strong and healthy stratum corneum (the protective outer layer of the skin). Skin that lacks vitamin F can look dry, dull, scaly, and possibly be acne prone. These are all signs of a weak stratum corneum. Vitamin F will aid in the rejuvenation and hydration of skin.",
        source: "https://www.byrdie.com/vitamin-f-for-skin"
    },
    {
        id: 6,
        component: "Vitamin B2",
        description: "also known as riboflavin, aids in healthy cell turnover which leads to bright, radiating, healthy, glowing skin. Riboflavin is important to those who are prone to acne. It helps maintain the mucus secretion of the skin to prevent acne breakouts and dry skin.",
        source: "https://www.skinstore.com/blog/skincare/b-vitamins/"
    },
    {
        id: 7,
        component: "Vitamin B3",
        description: "also known as Niacin. This helps treat rosacea, acne. Eczema, hyperpigmentation, aging and dry skin. B3 can improve the appearance of the completion by softening and smoothing the skin, to reduce the looks of redness and wrinkles.",
        source: "https://www.skinstore.com/blog/skincare/b-vitamins/"
    },
    {
        id: 8,
        component: "Vitamin B6",
        description: "also known as Pyridoxine, can aid in balancing the skin to reduce and prevent acne breakouts.",
        source: "https://www.skinstore.com/blog/skincare/b-vitamins/"
    },
    {
        id: 9,
        component: "Vitamin B7",
        description: "also known as Biotin, this revitalizes the skin and evens out the complexion while combatting the harmful effects of free radicals. This will help maintain the skin’s production of fats to help plump, and hydrate the complexion and reduce signs of premature aging. Also good for fighting inflammation and side effects of skin conditions. ",
        source: "https://www.skinstore.com/blog/skincare/b-vitamins/"
    },
    {
        id: 10,
        component: "Vitamin B9",
        description: "also known as Folic Acid, essential vitamin for cell production and tissue growth. This ensures healthy, radiant skin. This reduces the occurrence of breakouts and contributes to glowing, healthy skin that looks clear, plump, and radiant.",
        source: "https://www.skinstore.com/blog/skincare/b-vitamins/"
    },
    {
        id: 11,
        component: "Vitamin B12",
        description: "also known as Cobalamin. This regulates the pigmentation of skin and can prevent dark spots. Can assist body the growth of healthy cells and can repair damaged skin.",
        source: "https://www.skinstore.com/blog/skincare/b-vitamins/"
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
        id: 17,
        component: "Flavonoids",
        description: "This component has been known to treat rosacea, reduce inflammation and oxidative stress. Flavonoids absorb UV light and can influence cellular functions to prevent photoaging and damage. This can help in stimulation of collagen, which will delay aging.",
        source: "https://www.dermstore.com/blog/top_ten/antioxidants-in-skin-care/"
    },
    {
        id: 18,
        component: "Resveratrol",
        description: "This is an antimicrobial component that can protect skin from pollution, infection, and UV damage. This antioxidant can boost the activity of mitochondria in the cells which will promote longer cell life. This keeps skin youthful and fresh looking.",
        source: "https://www.dermstore.com/blog/top_ten/antioxidants-in-skin-care/"
    },
    {
        id: 19,
        component: "Ellagic Acid",
        description: "This polyphenol compound help protect the skin from oxidative stress induced by UV light and other natural aging processes. It can also reduce inflammation and inhibits matrix metalloproteinase (MMP), which is an enzyme that starts collagen breakdown. This component will help maintain and can improve skin’s elasticity and fight wrinkles and fine lines. It also helps brighten dull skin and can fight age spots.",
        source: "https://www.halecosmeceuticals.com/ellagic-acid/"
    },
    {
        id: 20,
        component: "Calcium",
        description: "This component is usually found in the epidermis, the outermost layer of the skin. It plays an important role as a barrier function to repair and replenish skin. Calcium helps slow down the aging process and the thinning of the epidermis by facilitating the proliferation of keratinocytes, which helps the turnover rate of skin, helping it stay youthful and radiant.",
        source: "https://www.lorealparisusa.com/ingredient-library/calcium.aspx"
    },
    {
        id: 21,
        component: "Carotol",
        description: "Used to help brighten and rejuvenate the skin.",
        source: "https://theidleman.com/blogs/grooming/carrot-seed-oil-beneficial-skin"
    },
    {
        id: 22,
        component: "Omega-3",
        description: "This essential fatty acid has powerful anti-inflammatory properties which can help protect the skin from harmful effects of the sun. This can also improve the look of fine lines and wrinkles by helping collagen production and skin elasticity. It can also help bolster the lipid content in the barrier layer of the skin which can improve moisture retention in the skin to keep skin hydrated and healthy.",
        source: "https://www.canyonranch.com/blog/beauty/the-skin-benefits-of-omega-3-fatty-acids/"
    },
    {
        id: 23,
        component: "Protein (collagen)",
        description: "is the most plentiful protein in the skin making up 75-80%. Collagen is important for reducing wrinkles and fine lines, and overtime the body’s ability to produce collagen is reduced.",
        source: "https://my.clevelandclinic.org/health/articles/10978-skin"
    },
    {
        id: 24,
        component: "Protein (elastin)",
        description: "Elastin is found within collagen. It is responsible for giving skin structure which helps keep skins elasticity, preventing fine lines and wrinkles.",
        source: "https://my.clevelandclinic.org/health/articles/10978-skin"
    },
    {
        id: 25,
        component: "Protein (Keratin)",
        description: "this is the main protein in your skin. This form the rigidity of skin and helps protect the barrier your skin offers.",
        source: "https://my.clevelandclinic.org/health/articles/10978-skin"
    },
    {
        id: 26,
        component: "Amino Acids",
        description: "amino acids play an important role in creating and maintaining smooth, healthy. Younger-looking skin.",
        source: "https://www.paulaschoice.com/expert-advice/skincare-advice/anti-aging-wrinkles/amino-acids-for-skin.html"
    },
    {
        id: 27,
        component: "Amino Acids (arginine)",
        description: "plays a role in repairing visible skin damage",
        source: "https://www.paulaschoice.com/expert-advice/skincare-advice/anti-aging-wrinkles/amino-acids-for-skin.html"
    },
    {
        id: 28,
        component: "Amino Acids (methionine)",
        description: "neutralizes damaging substances before they can harm skin",
        source: "https://www.paulaschoice.com/expert-advice/skincare-advice/anti-aging-wrinkles/amino-acids-for-skin.html"
    },
    {
        id: 29,
        component: "Amino Acids (lysine)",
        description: "helps visibly firm skin’s surface by reinforcing its supportive elements",
        source: "https://www.paulaschoice.com/expert-advice/skincare-advice/anti-aging-wrinkles/amino-acids-for-skin.html"
    },
    {
        id: 30,
        component: "Amino Acids (histidine)",
        description: "has antioxidant ability and can soothe skin",
        source: "https://www.paulaschoice.com/expert-advice/skincare-advice/anti-aging-wrinkles/amino-acids-for-skin.html"
    },
    {
        id: 30,
        component: "Amino Acids (proline, leucine, and glycine)",
        description: "diminish look of fine lines and wrinkles",
        source: "https://www.paulaschoice.com/expert-advice/skincare-advice/anti-aging-wrinkles/amino-acids-for-skin.html"
    },
    {
        id: 31,
        component: "Papain",
        description: "this is an enzyme that is very effective in skin renewal and skin lightening. It can also function as an exfoliator, skin softener, and moisturizer. This can remove dead skin cells and plump the skin to fight acne and combat free radicals, thus preventing premature aging.",
        source: "https://www.hylunia.com/ingredient-dictionary/papain-from-papaya-2"
    },
    {
        id: 32,
        component: "Terpinen-4-ol",
        description: "serves as an active therapeutic agent in treatment of several microbicidal disorders. This can help aid the treatment of acne.",
        source: "http://ayurvedicoils.com/tag/health-benefits-of-terpinen-4-ol"
    },
    {
        id: 33,
        component: "Ricinoleic acid ",
        description: "Has antiviral and antibacterial properties that help fight skin infections. It can sooth irritated skin and its anti-inflammatory properties help calm sensitive skin. It inhibits the growth of harmful microbes with helps protect the skin against invading viruses and bacteria. This component can help pull excess dirt for the epidermis layer of the skin to keep it healthy and clean.",
        source: "https://thenakedchemist.com/the-benefits-of-castor-oil-in-skincare/"
    },
    {
        id: 34,
        component: "EGCG",
        description: "is a powerful antioxidant that has major free radical fighting abilities. It is given to be more potent than vitamin A and C. by neutralizing free radicals that are produced by UV light, this component can prevent DNA damage and harmful tumor formations. It also helps our bodies produce more interleukin which is a natural growth factor that repairs damage skin.",
        source: "https://www.100percentpure.com/blogs/feed/the-egcg-routine"
    },
    {
        id: 35,
        component: "Tulsi",
        description: "This component can be used to purify and cleanse the skin due to its detoxifying properties. It is known to soothe inflammation, help treat acne and scars, skin infections, lighten dark spots, and improve skins texture.",
        source: "https://www.rewardme.in/beauty/skin-and-body/10-astonishing-benefits-of-tulsi-for-skin-hair"
    },
    {
        id: 36,
        component: "Lycopene",
        description: "this component is known for it’s ability to combat acne. It is a powerful antioxidant and anti-inflammatory that helps protect skin from environmental agents that can contribute to clogged pores and breakouts.",
        source: "https://www.refinery29.com/en-us/lycopene"
    }

];

db.Component
    .remove({})
    .then(() => db.Component.collection.insertMany(componentSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
