const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Components collection and inserts the componenets below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/apothecadb");

const componentSeed = [
  {
    id: 1,
    component: "Vitamin C",
    description:
      "Vitamin C is key ingredient found in many anti-aging skin care products due to its cancer-fighting antioxidant properties and its role in collagen production. Vitamin C is found naturally at high levels in the epidermis and the dermis layers of the skin. This vitamin can aid the treatment of dry skin, redness and irritation, wrinkles, and age spots.",
    source: "https://www.healthline.com/health/4-best-vitamins-for-skin"
  },
  {
    id: 2,
    component: "Vitamin E",
    description:
      "Vitamin E is an antioxidant which largely helps protect the skin against harmful UV radiation. It does this by contributing to 'photo-protection', which refers to the ability of the body to reduce sun damage. Protection from sun damage is critical to anti-aging, preventing dark spots and wrinkles. The body naturally produces vitamin E through sebum, though sebum production is decreased in dry skin. Applying Vitamin E supplements to dry skin can counteract the lack of sebum and moisturize the skin. Vitamin E also helps combat skin inflammation and reduce scarring.",
    source: "https://www.healthline.com/health/4-best-vitamins-for-skin)"
  },
  {
    id: 3,
    component: "Vitamin K",
    description:
      "Vitamin K is proven to help reduce tissue scaring and dark spots, and can alleviate dark circles under your eyes. Vitamin K strengthens capillaries, increases circulation, and reduces fluid retention to brighten and rejuvenate skin. This will strengthen and increase skin resiliency.",
    source:
      "https://www.lovelyskin.com/blog/p/5-vitamin-k-benefits-for-your-skin)"
  },
  {
    id: 4,
    component: "Vitamin A",
    description:
      "Vitamin A is key for anti-aging. With compounds such as retinal, retinol, and retinoic acid, this vitamin can do wonders for rejuvenating skin. First and foremost, this component can protect against UV damage which will slow signs of aging. It encourages healthy skin cell production, growth, and will stimulate fibroblasts. Fibroblasts are the cells that are responsible for developing the tissue that keeps skin firm and healthy. Vitamin A is known to smooth wrinkles and stimulate collagen production, as well as combat acne, which will even the skin's tone and keep it glowing.",
    source:
      "https://www.canyonranch.com/blog/beauty/the-skin-benefits-of-vitamin-a/"
  },
  {
    id: 5,
    component: "Vitamin F",
    description:
      "Vitamin F is comprised of an essential fatty acid called linoleic acid. This acid is rich in Omega-6. This component is known as lipids, which are incredibly important in terms of maintaining a strong and healthy stratum corneum (the protective outer layer of the skin). Skin that lacks vitamin F can look dry, dull, scaly, and possibly be acne prone. These are all signs of a weak stratum corneum. Vitamin F will aid in the rejuvenation and hydration of skin.",
    source: "https://www.byrdie.com/vitamin-f-for-skin"
  },
  {
    id: 6,
    component: "Vitamin B2",
    description:
      "Vitamin B2 known as riboflavin, it aids in healthy cell turnover which leads to bright, radiating, healthy, glowing skin. Riboflavin is important to those who are prone to acne. It helps maintain the mucus secretion of the skin to prevent acne breakouts and dry skin.",
    source: "https://www.skinstore.com/blog/skincare/b-vitamins/"
  },
  {
    id: 7,
    component: "Vitamin B3",
    description:
      "Vitamin B3, or Niacin, helps treat rosacea, acne, eczema, hyperpigmentation, aging and dry skin. B3 can improve the appearance of the completion by softening and smoothing the skin, to reduce the looks of redness and wrinkles.",
    source: "https://www.skinstore.com/blog/skincare/b-vitamins/"
  },
  {
    id: 8,
    component: "Vitamin B6",
    description:
      "Vitamin B6, also known as Pyridoxine, can aid in balancing the skin to reduce and prevent acne breakouts.",
    source: "https://www.skinstore.com/blog/skincare/b-vitamins/"
  },
  {
    id: 9,
    component: "Vitamin B7",
    description:
      "Vitamin B7, or Biotin, revitalizes the skin and evens out the complexion while combatting the harmful effects of free radicals. This will help maintain the skin’s production of fats to help plump, and hydrate the complexion and reduce signs of premature aging. It is also good for fighting inflammation and side effects of skin conditions. ",
    source: "https://www.skinstore.com/blog/skincare/b-vitamins/"
  },
  {
    id: 10,
    component: "Vitamin B9",
    description:
      "Vitamin B9, also known as Folic Acid, is an essential vitamin for cell production and tissue growth. This ensures healthy, radiant skin. Vitamin B9 reduces the occurrence of breakouts and contributes to glowing, healthy skin that looks clear, plump, and radiant.",
    source: "https://www.skinstore.com/blog/skincare/b-vitamins/"
  },
  {
    id: 11,
    component: "Vitamin B12",
    description:
      "Vitamin B12, also known as Cobalamin, regulates the pigmentation of skin and can prevent dark spots. Can assist the growth of healthy cells and can repair damaged skin.",
    source: "https://www.skinstore.com/blog/skincare/b-vitamins/"
  },
  {
    id: 12,
    component: "Potassium",
    description:
      "Potassium can be found in many skin care products to help adjust and balance pH, as well as help aid in moisturizing the skin. Although potassium cannot be absorbed through your skin, it can enhance the moisture and improve the feel and complexion of your skin.",
    source:
      "https://www.ironmountainhotsprings.com/mineral-spotlight-potassium/"
  },
  {
    id: 13,
    component: "Copper",
    description:
      "Copper is known to aid in reducing the effects of aging. As we grow older, the production of collagen and something called copper peptides will reduce. These components are important in healthy elasticity of skin. Copper will bind with the protein fragments in the skin and will encourage blood vessel growth, promote skin regeneration, stimulate collagen, and boost antioxidant activities. It is also known to help repair and protect skin from UV damage. This component will also promote the production of Hyaluronic acid which keeps the skin hydrated, and a smooth, plump, supple appearance.",
    source: "https://beverlyhillsmd.com/anti-aging-benefits-copper/"
  },
  {
    id: 14,
    component: "Zinc",
    description:
      "Zinc is known to be a powerful protectant against the sun’s UV light. Unlike other chemical sunscreen ingredients that absorb into the skin, Zinc can help create a layer that stops UV light from penetrating your skin altogether. It is also great for reducing inflammation and soothing irritated skin. It’s an anti-microbial which can regulate immunity and stimulate the production of new cells.",
    source: "https://www.canyonranch.com/blog/beauty/the-skin-benefits-of-zinc/"
  },
  {
    id: 15,
    component: "Magnesium",
    description:
      "Magnesium can improve the skin’s overall appearance by balancing the production of sebum, which can cause oil build up linked to acne and other irritants. It can also even out the skin tone for those who suffer from Rosacea, or other skin conditions.",
    source:
      "https://medium.com/@dghayal1/magnesium-for-skin-why-its-the-best-acne-and-wrinkle-fighting-supplement-465eb54e8bbe"
  },
  {
    id: 16,
    component: "Polyphenols",
    description:
      "Polyphenols are vitamins that contain chemo preventive properties that possess anti-inflammatory, immunomodulatory and antioxidant properties to prevent UV-induced skin photodamage. This component can help improve our skin’s natural defense against oxidative stress, preventing skin from aging and could inhibit skin cancer.",
    source: "https://www.dermstore.com/blog/top_ten/antioxidants-in-skin-care/"
  },
  {
    id: 17,
    component: "Flavonoids",
    description:
      "Flavonoids are known to treat rosacea, reduce inflammation and oxidative stress. Flavonoids absorb UV light and can influence cellular functions to prevent photoaging and damage. This can help in stimulation of collagen, which will delay aging.",
    source: "https://www.dermstore.com/blog/top_ten/antioxidants-in-skin-care/"
  },
  {
    id: 18,
    component: "Resveratrol",
    description:
      "Resveratrol is an antimicrobial component that can protect skin from pollution, infection, and UV damage. This antioxidant can boost the activity of mitochondria in the cells which will promote longer cell life. This keeps skin youthful and fresh looking.",
    source: "https://www.dermstore.com/blog/top_ten/antioxidants-in-skin-care/"
  },
  {
    id: 19,
    component: "Ellagic Acid",
    description:
      "Ellagic Acid is a polyphenol compound that helps protect the skin from oxidative stress induced by UV light and other natural aging processes. It can also reduce inflammation and inhibits matrix metalloproteinase (MMP), which is an enzyme that starts collagen breakdown. This component will help maintain and can improve skin’s elasticity, fight wrinkles, and fine lines. It also helps brighten dull skin and can fight age spots.",
    source: "https://www.halecosmeceuticals.com/ellagic-acid/"
  },
  {
    id: 20,
    component: "Calcium",
    description:
      "Calcium is usually found in the epidermis, the outermost layer of the skin. It plays an important role as a barrier function to repair and replenish skin. Calcium helps slow down the aging process and the thinning of the epidermis by facilitating the proliferation of keratinocytes, which helps the turnover rate of skin, helping it stay youthful and radiant.",
    source: "https://www.lorealparisusa.com/ingredient-library/calcium.aspx"
  },
  {
    id: 21,
    component: "Carotol",
    description:
      "Carotol is used to help brighten and rejuvenate the skin. The antioxidants in carotol repair the damages done to your tissues by oxidants (free radicals) and stop them from doing further harm. Additionally, carotol can aid in detox of the skin, liver, and kidneys.",
    source:
      "https://theidleman.com/blogs/grooming/carrot-seed-oil-beneficial-skin"
  },
  {
    id: 22,
    component: "Omega-3",
    description:
      "Omega-3 is an essential fatty acid that has powerful anti-inflammatory properties which can help protect the skin from harmful effects of the sun. This can also improve the look of fine lines and wrinkles by helping collagen production and skin elasticity. It can also help bolster the lipid content in the barrier layer of the skin which can improve moisture retention in the skin to keep skin hydrated and healthy.",
    source:
      "https://www.canyonranch.com/blog/beauty/the-skin-benefits-of-omega-3-fatty-acids/"
  },
  {
    id: 23,
    component: "Proteins",
    description:
      "Certain proteins, when applied topically, can stimulate the formation of collagen and elastin while promoting cell renewal. Glutamine regulates acid-base balance and helps make the skin firm.",
    source:
      "http://skinbiotonix.com/role-of-proteins-amino-acids-for-skin-health/"
  },
  {
    id: 24,
    component: "Amino Acids",
    description:
      "Amino acids play an important role in creating and maintaining smooth, healthy, younger-looking skin. They reduce the depth of fine lines and wrinkles while improving moisture retention.",
    source:
      "https://www.paulaschoice.com/expert-advice/skincare-advice/anti-aging-wrinkles/amino-acids-for-skin.html"
  },
  {
    id: 25,
    component: "Amino Acids (proline, leucine, and glycine)",
    description:
      "Proline, Leucine, and Glycine amino acids diminish the look of fine lines and wrinkles.",
    source:
      "https://www.paulaschoice.com/expert-advice/skincare-advice/anti-aging-wrinkles/amino-acids-for-skin.html"
  },
  {
    id: 26,
    component: "Papain",
    description:
      "Papain is an enzyme that is very effective in skin renewal and skin lightening. It can also function as an exfoliator, skin softener, and moisturizer. This can remove dead skin cells and plump the skin to fight acne and combat free radicals, thus preventing premature aging.",
    source: "https://www.hylunia.com/ingredient-dictionary/papain-from-papaya-2"
  },
  {
    id: 27,
    component: "Terpinen-4-ol",
    description:
      "Terpinen-4-ol serves as an active therapeutic agent in treatment of several microbicidal disorders. This can help aid the treatment of acne.",
    source: "http://ayurvedicoils.com/tag/health-benefits-of-terpinen-4-ol"
  },
  {
    id: 28,
    component: "Ricinoleic acid ",
    description:
      "Ricinoleic acid has antiviral and antibacterial properties that help fight skin infections. It can sooth irritated skin and its anti-inflammatory properties help calm sensitive skin. It inhibits the growth of harmful microbes wich helps protect the skin against invading viruses and bacteria. This component can help pull excess dirt from the epidermis layer of the skin to keep it healthy and clean.",
    source:
      "https://thenakedchemist.com/the-benefits-of-castor-oil-in-skincare/"
  },
  {
    id: 29,
    component: "EGCG",
    description:
      "EGCG is a powerful antioxidant that has major free radical fighting abilities. It is given to be more potent than Vitamin A and Vitamin C by neutralizing free radicals that are produced by UV light, this component can prevent DNA damage and harmful tumor formations. It also helps our bodies produce more interleukin which is a natural growth factor that repairs damage skin.",
    source: "https://www.100percentpure.com/blogs/feed/the-egcg-routine"
  },
  {
    id: 30,
    component: "Tulsi",
    description:
      "Tulsi can be used to purify and cleanse the skin due to its detoxifying properties. It is known to soothe inflammation, help treat acne and scars, heal skin infections, lighten dark spots, and improve skins texture.",
    source:
      "https://www.rewardme.in/beauty/skin-and-body/10-astonishing-benefits-of-tulsi-for-skin-hair"
  },
  {
    id: 31,
    component: "Lycopene",
    description:
      "Lycopene is known for it’s ability to combat acne. It is a powerful antioxidant and anti-inflammatory that helps protect skin from environmental agents that can contribute to clogged pores and breakouts.",
    source: "https://www.refinery29.com/en-us/lycopene"
  },
  {
    id: 32,
    component: "Vitamin D",
    description:
      "Vitamin D, also known as calcitriol, contributes to skin cell growth, skin repair, and metabolism. It optimizes the skin’s immune system and helps destroy free radicals that can cause premature aging.",
    source:
      "https://www.lifeextension.com/magazine/2010/6/optimal-skin-protection-with-vitamin-d/page-01"
  },
  {
    id: 33,
    component: "Terpinen-4-ol",
    description:
      "Terpinen-4-ol appears to increase the activity of your white blood cells, which help fight germs and other foreign invaders.",
    source: "https://www.healthline.com/nutrition/tea-tree-oil"
  },
  {
    id: 34,
    component: "Folic Acid",
    description:
      "Folic Acid, also known as vitamin B9, plays a vital role in helping to maintain the skin’s natural beauty. May also provide increased hydration by bolstering skin - barrier function. This can improve moisture, retention, and alleviate skin dryness",
    source: "https://www.lorealparisusa.com/ingredient-library/folic-acid.aspx"
  },
  {
    id: 35,
    component: "Caffeine",
    description:
      "Caffeine in skin products claim that it will improve the look of cellulite or puffy eyes. Applied to skin, caffeine may have soothing and antioxidant properties, especially when skin is exposed to UV light",
    source:
      "https://www.paulaschoice.com/ingredient-dictionary/antioxidants/caffeine.html"
  },
  {
    id: 36,
    component: "Oleic Acid",
    description:
      "Oleic Acid is a godsend for dry, aging skin since it penetrates easily and deeply into the skin’s surface, replenishing lost moisture that naturally comes with age, also helps the moisture from evaporating.",
    source:
      "https://luxebotanics.com/blogs/luxe-botanics/facial-oils-are-you-using-the-correct-percentage-of-oleic-and-linoleic-acids"
  },
  {
    id: 37,
    component: "Linoliec Acid",
    description:
      "Linoliec Acid helps makes the skin’s barrier stronger so it can effectively keep water in and irritants out.Topical use can also help reduce acne breakouts.",
    source: "https://www.beginswithskin.com/linoleic"
  },
  {
    id: 38,
    component: "Gallic Acid",
    description:
      "Gallic Acid is an antifungal agent, antiviral, astringent and antioxidant. Some studies have indicated that it has anticancer activity and that it can relax blood vessels.",
    source: "https://personalcaretruth.com/2010/07/gallic-acid-chemistry/"
  },
  {
    id: 39,
    component: "Acetic Acid",
    description:
      "Acetic Acid has been shown to be effective in inhibiting bacterial growth and destroying bacterial biofilms.",
    source: "https://www.healthline.com/health/apple-cider-vinegar-for-face"
  },
  {
    id: 40,
    component: "Limonene",
    description:
      "Limonene has the ability to reduce inflammation through numerous mechanisms. One-way limonene reduces inflammation is through the inhibition of angiogenesis. Angiogenesis is the formation of new blood vessels, which is an inherent component of inflammation. Thus, by inhibiting this process, limonene can help to reduce inflammation and improve wound healing. Limonene has strong antioxidant benefits, which are able to limit oxidative damage caused by free radicals.",
    source: "https://thedermreview.com/limonene/"
  },
  {
    id: 41,
    component: "Sodium Bicarbonate",
    description:
      "Sodium Bicarbonate is alkaline in nature, so it balances the pH levels of your skin to make it glow with radiance. It also helps in exfoliating dead skin cells to reveal new freshness. This can help reduce scarring cause by acne. It also has anti-inflammatory and antibacterial properties.",
    source: "https://cosmeticsinfo.org/ingredient/sodium-bicarbonate"
  },
  {
    id: 42,
    component: "Lauric Acid",
    description:
      "Lauric Acid has antibacterial properties, and has been found to effectively combat acne. Lauric acid also could reduce inflammation and the number of bacteria present.",
    source:
      "https://www.healthline.com/health/beauty-skin-care/what-is-lauric-acid"
  },
  {
    id: 43,
    component: "Lignin",
    description:
      "Lignin is a substance which means it can penetrate. In fact Aloe Vera is the only known substance which can penetrate the dermis layer of the skin. This means when used in skin care these properties used with Aloe Vera will become more beneficial.",
    source:
      "http://aloeverapage.blogspot.com/2012/08/a-focus-on-aloe-vera-ingredient-lignin.html"
  },
  {
    id: 44,
    component: "Salicylic Acid",
    description:
      "Salicylic Acid is one of the best for combating acne. Once it penetrates the skin the acid can dissolve skin debris that can clog pores. This will act as an anti-inflammatory and help red inflamed pimples. The breaking down of debris in the skin will also promote exfoliation. Salicylic acid can directly dissolve the keratin plugs and regulate the skin cells, which is effective for helping get rid of blackheads and whiteheads.",
    source: "https://www.allure.com/story/what-does-salicylic-acid-do"
  },
  {
    id: 45,
    component: "Medium Chain Triglycerides",
    description:
      "Medium Chain Triglycerides is naturally rich in antioxidants and antibacterial properties. It provides lightweight moisture and conditioning to the skin. This is great for areas of the body that have low or no oil glands and tend to get dry and chapped (i.e. the lips). MCT are great for providing a barrier against drying effects and will gently moisturize to make skin softer.",
    source: "https://www.skincarebyalana.com/blog/mct-oil-come/"
  },
  {
    id: 46,
    component: "Lactic Acid",
    description:
      "Lactic Acid exfoliates the skins by dissolving the bonds that hold the older, dull cells together and remove them on the surface. This will help speed up cell turnover and stimulate cell renewal. Lactic acid will also help brighten complexion as well as create smoother and softer skin. It will also help the skin’s natural moisture factor, keeping skin more hydrated.",
    source: "https://www.verywellhealth.com/lactic-acid-skin-care-4178819"
  },
  {
    id: 47,
    component: "Biotin",
    description:
      "Biotin produces fatty acids that nourish the skin to maintain a clear complexion. When the protective outer layer of skin is unbalanced, dry and dehydrated skin can manifest. It assists in the production of new cells and helps oil glands function properly, resulting in the healthy condition of skin.",
    source:
      "https://www.dermstore.com/blog/top_ten/biotin-benefits-hair-skin-nails/"
  },
  {
    id: 48,
    component: "Stearic Acid",
    description:
      "Stearic acid functions mainly as a surfactant, emulsifier, and thickener when added to cosmetics and personal care products. Surfactants attract the oil, dirt, and other impurities that have accumulated on your skin during the day and wash them away. Stearic acid reduces the surface tension by positioning itself at the oil/water or air/water interface, which has a stabilizing effect on the emulsion. This component has been shown to protect skin’s surface against water loss and help shore up skin’s protective barrier.",
    source: "https://thedermreview.com/stearic-acid/"
  },
  {
    id: 49,
    component: "Lysozyme",
    description:
      "Lysozyme kills both gram positive and gram negative bacteria. This can help skin that is prone to acne and will purify oily and blemished skin. This component stimulates natural skin defenses to detoxify oily skin. It can protect the skin from over cleansing and over exfoliation.",
    source:
      "https://skinforlife.com/shop/antibac-essentials-lysozyme-protection-lss-delivery-oily-troubled-skins/"
  }
];

db.Component.remove({})
  .then(() => db.Component.collection.insertMany(componentSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
