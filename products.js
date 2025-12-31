/* ---------------------------------------------------------
   AVIRUCHI MASTER PRODUCT SCRIPT
   Clean Base File — Start From Here
--------------------------------------------------------- */

const PRODUCTS = [
    // ---------------------------------------------------------
  // PICKLES (VEG)
  // ---------------------------------------------------------

  {
    id: "pickles_avakaya",
    name: "Avakaya",
    category: "Pickles",
    subCategory: "Veg",
    spice: "hot",
    rating: 4.8,
    reviews: 120,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 4.50 },
      { label: "500g", price: 8.50 },
      { label: "1kg", price: 16.00 }
    ]
  },
  {
    id: "pickles_chintakaya",
    name: "Chintakaya",
    category: "Pickles",
    subCategory: "Veg",
    spice: "hot",
    rating: 4.6,
    reviews: 80,
    unit: "250g+",
    notes: "Pre order required",
    packSizes: [
      { label: "250g", price: 4.50 },
      { label: "500g", price: 8.50 },
      { label: "1kg", price: 16.00 }
    ]
  },
  {
    id: "pickles_amla",
    name: "Amla Pickle",
    category: "Pickles",
    subCategory: "Veg",
    spice: "medium",
    rating: 4.7,
    reviews: 75,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 4.50 },
      { label: "500g", price: 8.50 },
      { label: "1kg", price: 16.00 }
    ]
  },
  {
    id: "pickles_mango_turumu",
    name: "Mango Turumu Pickle",
    category: "Pickles",
    subCategory: "Veg",
    spice: "hot",
    rating: 4.7,
    reviews: 82,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 4.00 },
      { label: "500g", price: 7.50 },
      { label: "1kg", price: 14.50 }
    ]
  },
  {
    id: "pickles_tomato",
    name: "Tomato Pickle",
    category: "Pickles",
    subCategory: "Veg",
    spice: "medium",
    rating: 4.8,
    reviews: 90,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 4.50 },
      { label: "500g", price: 8.50 },
      { label: "1kg", price: 16.00 }
    ]
  },
  {
    id: "pickles_mango",
    name: "Mango Pickle",
    category: "Pickles",
    subCategory: "Veg",
    spice: "hot",
    rating: 4.9,
    reviews: 130,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 4.50 },
      { label: "500g", price: 8.50 },
      { label: "1kg", price: 16.00 },
      { label: "350g", price: 5.50 }
    ]
  },
  {
    id: "pickles_gongura",
    name: "Gongura Pickle",
    category: "Pickles",
    subCategory: "Veg",
    spice: "hot",
    rating: 4.9,
    reviews: 140,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 4.50 },
      { label: "500g", price: 8.50 },
      { label: "1kg", price: 16.00 },
      { label: "350g", price: 5.50 }
    ]
  },
  {
    id: "pickles_allam_pachadi",
    name: "Allam Pachadi",
    category: "Pickles",
    subCategory: "Veg",
    spice: "medium",
    rating: 4.7,
    reviews: 88,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 4.50 },
      { label: "500g", price: 8.50 },
      { label: "1kg", price: 16.00 }
    ]
  },
  {
    id: "pickles_kottimeera",
    name: "Kottimeera Pickle",
    category: "Pickles",
    subCategory: "Veg",
    spice: "medium",
    rating: 4.6,
    reviews: 70,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 4.50 },
      { label: "500g", price: 8.50 },
      { label: "1kg", price: 16.00 },
      { label: "350g", price: 5.50 }
    ]
  },
  {
    id: "pickles_bittergourd",
    name: "Bittergourd Pickle",
    category: "Pickles",
    subCategory: "Veg",
    spice: "medium",
    rating: 4.5,
    reviews: 60,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 4.50 },
      { label: "500g", price: 8.50 },
      { label: "1kg", price: 16.00 }
    ]
  },
  {
    id: "pickles_pandu_mirchi",
    name: "Pandu Mirchi Pickle",
    category: "Pickles",
    subCategory: "Veg",
    spice: "hot",
    rating: 4.8,
    reviews: 95,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 4.50 },
      { label: "500g", price: 8.50 },
      { label: "1kg", price: 16.00 },
      { label: "350g", price: 5.50 }
    ]
  },

  // ---------------------------------------------------------
  // PICKLES (NON‑VEG)
  // ---------------------------------------------------------

  {
    id: "pickles_prawn",
    name: "Prawn Pickle",
    category: "Pickles",
    subCategory: "Non-Veg",
    spice: "hot",
    rating: 4.8,
    reviews: 95,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 6.50 },
      { label: "500g", price: 12.50 },
      { label: "1kg", price: 24.00 }
    ]
  },
  {
    id: "pickles_chicken",
    name: "Chicken Pickle",
    category: "Pickles",
    subCategory: "Non-Veg",
    spice: "hot",
    rating: 4.7,
    reviews: 90,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 5.50 },
      { label: "500g", price: 11.00 },
      { label: "1kg", price: 21.00 }
    ]
  },
  {
    id: "pickles_fish",
    name: "Fish Pickle",
    category: "Pickles",
    subCategory: "Non-Veg",
    spice: "hot",
    rating: 4.7,
    reviews: 80,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 6.50 },
      { label: "500g", price: 12.50 },
      { label: "1kg", price: 24.00 }
    ]
  },
  // ---------------------------------------------------------
  // SNACKS (HOT SNACKS)
  // ---------------------------------------------------------

  {
    id: "snacks_senugapindi_sev",
    name: "Senugapindi Segu / Gram Flour Sev",
    category: "Snacks",
    subCategory: "Hot Snacks",
    spice: "medium",
    rating: 4.7,
    reviews: 110,
    unit: "125/150g+",
    notes: "",
    packSizes: [
      { label: "125g", price: 2.00 },
      { label: "250g", price: 3.50 },
      { label: "500g", price: 7.50 },
      { label: "1kg", price: 15.00 }
    ]
  },
  {
    id: "snacks_biyyampindi_chakra",
    name: "Biyyampindi Chakra Muruku",
    category: "Snacks",
    subCategory: "Hot Snacks",
    spice: "medium",
    rating: 4.8,
    reviews: 95,
    unit: "125/150g+",
    notes: "",
    packSizes: [
      { label: "125g", price: 2.50 },
      { label: "250g", price: 4.00 },
      { label: "500g", price: 7.50 },
      { label: "1kg", price: 15.00 }
    ]
  },
  {
    id: "snacks_biyyampindi_sanna",
    name: "Biyyampindi Sanna Muruku",
    category: "Snacks",
    subCategory: "Hot Snacks",
    spice: "medium",
    rating: 4.7,
    reviews: 88,
    unit: "125/150g+",
    notes: "",
    packSizes: [
      { label: "125g", price: 2.50 },
      { label: "250g", price: 4.00 },
      { label: "500g", price: 7.50 },
      { label: "1kg", price: 15.00 }
    ]
  },
  {
    id: "snacks_jandikalu",
    name: "Jandikalu / Venna Chekkalu",
    category: "Snacks",
    subCategory: "Hot Snacks",
    spice: "medium",
    rating: 4.9,
    reviews: 140,
    unit: "125/150g+",
    notes: "",
    packSizes: [
      { label: "125g", price: 2.50 },
      { label: "250g", price: 4.00 },
      { label: "500g", price: 7.50 },
      { label: "1kg", price: 15.00 }
    ]
  },
  {
    id: "snacks_pudina_chekkalu",
    name: "Pudina Venna Chekkalu",
    category: "Snacks",
    subCategory: "Hot Snacks",
    spice: "medium",
    rating: 4.8,
    reviews: 100,
    unit: "125/150g+",
    notes: "",
    packSizes: [
      { label: "125g", price: 2.50 },
      { label: "250g", price: 4.00 },
      { label: "500g", price: 7.50 },
      { label: "1kg", price: 15.00 }
    ]
  },
  {
    id: "snacks_ragi_chekkalu",
    name: "Ragi Venna Chekkalu",
    category: "Snacks",
    subCategory: "Hot Snacks",
    spice: "medium",
    rating: 4.7,
    reviews: 85,
    unit: "125/150g+",
    notes: "",
    packSizes: [
      { label: "125g", price: 2.50 },
      { label: "250g", price: 4.00 },
      { label: "500g", price: 7.50 },
      { label: "1kg", price: 15.00 }
    ]
  },
  {
    id: "snacks_beetroot_chekkalu",
    name: "Beetroot Venna Chekkalu",
    category: "Snacks",
    subCategory: "Hot Snacks",
    spice: "medium",
    rating: 4.8,
    reviews: 92,
    unit: "125/150g+",
    notes: "",
    packSizes: [
      { label: "125g", price: 2.50 },
      { label: "250g", price: 4.00 },
      { label: "500g", price: 7.50 },
      { label: "1kg", price: 15.00 }
    ]
  },
  {
    id: "snacks_jonna_chekkalu",
    name: "Jonna Venna Chekkalu",
    category: "Snacks",
    subCategory: "Hot Snacks",
    spice: "medium",
    rating: 4.7,
    reviews: 80,
    unit: "125/150g+",
    notes: "",
    packSizes: [
      { label: "125g", price: 2.50 },
      { label: "250g", price: 4.00 },
      { label: "500g", price: 7.50 },
      { label: "1kg", price: 15.00 }
    ]
  },
  {
    id: "snacks_segodilu",
    name: "Segodilu",
    category: "Snacks",
    subCategory: "Hot Snacks",
    spice: "medium",
    rating: 4.6,
    reviews: 70,
    unit: "125/150g+",
    notes: "",
    packSizes: [
      { label: "125g", price: 2.50 },
      { label: "250g", price: 4.00 },
      { label: "500g", price: 7.50 },
      { label: "1kg", price: 15.00 }
    ]
  },
  {
    id: "snacks_boondi",
    name: "Boondi",
    category: "Snacks",
    subCategory: "Hot Snacks",
    spice: "medium",
    rating: 4.8,
    reviews: 120,
    unit: "125/150g+",
    notes: "",
    packSizes: [
      { label: "125g", price: 2.50 },
      { label: "250g", price: 4.00 },
      { label: "500g", price: 7.50 },
      { label: "1kg", price: 15.00 }
    ]
  },
  {
    id: "snacks_peanut_pakodi",
    name: "Peanut Pakodi / Palli Pakodi (Spiced Peanuts)",
    category: "Snacks",
    subCategory: "Hot Snacks",
    spice: "medium",
    rating: 4.9,
    reviews: 150,
    unit: "125/150g+",
    notes: "",
    packSizes: [
      { label: "125g", price: 2.50 },
      { label: "250g", price: 4.00 },
      { label: "500g", price: 7.50 },
      { label: "1kg", price: 15.00 }
    ]
  },
  {
    id: "snacks_mixture",
    name: "Mixture",
    category: "Snacks",
    subCategory: "Hot Snacks",
    spice: "medium",
    rating: 4.8,
    reviews: 200,
    unit: "125/150g+",
    notes: "Out of stock",
    packSizes: [
      { label: "125g", price: 2.50 },
      { label: "250g", price: 4.00 },
      { label: "500g", price: 7.50 },
      { label: "1kg", price: 15.00 }
    ]
  },
  {
    id: "snacks_chegodi",
    name: "Chegodi",
    category: "Snacks",
    subCategory: "Hot Snacks",
    spice: "medium",
    rating: 4.9,
    reviews: 180,
    unit: "125/150g+",
    notes: "",
    packSizes: [
      { label: "125g", price: 2.50 },
      { label: "250g", price: 4.00 },
      { label: "500g", price: 7.50 },
      { label: "1kg", price: 15.00 }
    ]
  },

  // ---------------------------------------------------------
  // MILLET SNACKS
  // ---------------------------------------------------------

  {
    id: "snacks_millet_gavvalu",
    name: "Millet Gavvalu",
    category: "Snacks",
    subCategory: "Millet Snacks",
    spice: "medium",
    rating: 4.8,
    reviews: 90,
    unit: "125/150g+",
    notes: "",
    packSizes: [
      { label: "125g", price: 2.50 },
      { label: "250g", price: 4.00 },
      { label: "500g", price: 7.50 },
      { label: "1kg", price: 15.00 }
    ]
  },
  {
    id: "snacks_ragi_chegodilu",
    name: "Ragi Chegodilu",
    category: "Snacks",
    subCategory: "Millet Snacks",
    spice: "medium",
    rating: 4.7,
    reviews: 85,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 4.50 },
      { label: "500g", price: 9.00 },
      { label: "1kg", price: 17.00 }
    ]
  },
  {
    id: "snacks_ragi_mixture",
    name: "Ragi Mixture",
    category: "Snacks",
    subCategory: "Millet Snacks",
    spice: "medium",
    rating: 4.8,
    reviews: 100,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 4.50 },
      { label: "500g", price: 9.00 },
      { label: "1kg", price: 17.00 }
    ]
  },
  {
    id: "snacks_ragi_murukulu",
    name: "Ragi Murukulu",
    category: "Snacks",
    subCategory: "Millet Snacks",
    spice: "medium",
    rating: 4.7,
    reviews: 88,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 4.50 },
      { label: "500g", price: 9.00 },
      { label: "1kg", price: 17.00 }
    ]
  },
  {
    id: "snacks_jowar_mixture",
    name: "Jowar Mixture",
    category: "Snacks",
    subCategory: "Millet Snacks",
    spice: "medium",
    rating: 4.8,
    reviews: 95,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 4.50 },
      { label: "500g", price: 9.00 },
      { label: "1kg", price: 17.00 }
    ]
  },
  {
    id: "snacks_jowar_murukulu",
    name: "Jowar Murukulu",
    category: "Snacks",
    subCategory: "Millet Snacks",
    spice: "medium",
    rating: 4.7,
    reviews: 80,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 4.50 },
      { label: "500g", price: 9.00 },
      { label: "1kg", price: 17.00 }
    ]
  },
  {
    id: "snacks_jowar_ribbon",
    name: "Jowar Ribbon Pakodi",
    category: "Snacks",
    subCategory: "Millet Snacks",
    spice: "medium",
    rating: 4.8,
    reviews: 85,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 4.50 },
      { label: "500g", price: 9.00 },
      { label: "1kg", price: 17.00 }
    ]
  },
  {
    id: "snacks_foxtail_sev",
    name: "Foxtail (Korralu) Sev",
    category: "Snacks",
    subCategory: "Millet Snacks",
    spice: "medium",
    rating: 4.7,
    reviews: 78,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 4.50 },
      { label: "500g", price: 9.00 },
      { label: "1kg", price: 17.00 }
    ]
  },
  {
    id: "snacks_kodo_jantikalu",
    name: "Kodo-Arikala Jantikalu",
    category: "Snacks",
    subCategory: "Millet Snacks",
    spice: "medium",
    rating: 4.8,
    reviews: 90,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 4.50 },
      { label: "500g", price: 9.00 },
      { label: "1kg", price: 17.00 }
    ]
  },
  {
    id: "snacks_little_millet_boondi",
    name: "Little Millet Samala Boondhi",
    category: "Snacks",
    subCategory: "Millet Snacks",
    spice: "medium",
    rating: 4.7,
    reviews: 75,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 4.50 },
      { label: "500g", price: 9.00 },
      { label: "1kg", price: 17.00 }
    ]
  },
  // ---------------------------------------------------------
  // SWEETS
  // ---------------------------------------------------------

  {
    id: "sweets_ariselu",
    name: "Ariselu (Adhirasam)",
    category: "Sweets",
    subCategory: "Traditional",
    spice: "mild",
    rating: 4.8,
    reviews: 120,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 4.00 },
      { label: "500g", price: 7.50 },
      { label: "1kg", price: 15.00 }
    ]
  },
  {
    id: "sweets_pootharekulu_sliced",
    name: "Athreyapuram Pootharekulu (Jaggery & Dryfruits - Sliced)",
    category: "Sweets",
    subCategory: "Pootharekulu",
    spice: "mild",
    rating: 4.9,
    reviews: 140,
    unit: "125/150g+",
    notes: "",
    packSizes: [
      { label: "125g", price: 2.50 },
      { label: "500g", price: 9.50 },
      { label: "1kg", price: 18.00 }
    ]
  },
  {
    id: "sweets_pootharekulu_powdered",
    name: "Athreyapuram Pootharekulu (Jaggery & Dryfruits - Powdered)",
    category: "Sweets",
    subCategory: "Pootharekulu",
    spice: "mild",
    rating: 4.9,
    reviews: 135,
    unit: "125/150g+",
    notes: "",
    packSizes: [
      { label: "125g", price: 2.50 },
      { label: "500g", price: 9.50 },
      { label: "1kg", price: 18.00 }
    ]
  },
  {
    id: "sweets_kaju_katli",
    name: "Kaju Katli",
    category: "Sweets",
    subCategory: "Cashew",
    spice: "mild",
    rating: 4.9,
    reviews: 160,
    unit: "250g+",
    notes: "Pre-order only",
    packSizes: [
      { label: "250g", price: 4.50 },
      { label: "500g", price: 9.00 },
      { label: "1kg", price: 17.50 }
    ]
  },
  {
    id: "sweets_dryfruit_laddu",
    name: "Dry Fruit Laddu",
    category: "Sweets",
    subCategory: "Laddus",
    spice: "mild",
    rating: 4.8,
    reviews: 145,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 5.00 },
      { label: "500g", price: 9.50 },
      { label: "1kg", price: 18.00 }
    ]
  },
  {
    id: "sweets_mysorepak_ghee",
    name: "Mysorepak (Ghee)",
    category: "Sweets",
    subCategory: "Mysorepak",
    spice: "mild",
    rating: 4.7,
    reviews: 130,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 4.50 },
      { label: "500g", price: 8.50 },
      { label: "1kg", price: 16.00 }
    ]
  },
  {
    id: "sweets_milk_mysorepak",
    name: "Milk Mysorepak",
    category: "Sweets",
    subCategory: "Mysorepak",
    spice: "mild",
    rating: 4.6,
    reviews: 115,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 4.50 },
      { label: "500g", price: 8.50 },
      { label: "1kg", price: 16.00 }
    ]
  },
  {
    id: "sweets_flaxseed_laddu",
    name: "Flax Seed Laddu",
    category: "Sweets",
    subCategory: "Laddus",
    spice: "mild",
    rating: 4.7,
    reviews: 110,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 4.00 },
      { label: "500g", price: 8.00 },
      { label: "1kg", price: 16.00 }
    ]
  },
  {
    id: "sweets_multigrain_laddu",
    name: "Multi Grain / Millet Laddu",
    category: "Sweets",
    subCategory: "Laddus",
    spice: "mild",
    rating: 4.8,
    reviews: 125,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 4.50 },
      { label: "500g", price: 8.50 },
      { label: "1kg", price: 16.00 }
    ]
  },
  {
    id: "sweets_dryfruit_chikki",
    name: "Dryfruit Chikki",
    category: "Sweets",
    subCategory: "Chikki",
    spice: "mild",
    rating: 4.8,
    reviews: 140,
    unit: "125/150g+",
    notes: "",
    packSizes: [
      { label: "125g", price: 2.25 },
      { label: "500g", price: 10.00 },
      { label: "1kg", price: 19.00 }
    ]
  },
  {
    id: "sweets_dryfruit_kalakhand",
    name: "Dry Fruit Kalakhand",
    category: "Sweets",
    subCategory: "Kalakhand",
    spice: "mild",
    rating: 4.9,
    reviews: 150,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 5.00 },
      { label: "500g", price: 9.50 },
      { label: "1kg", price: 18.50 }
    ]
  },
  {
    id: "sweets_palakova",
    name: "Pala Kova",
    category: "Sweets",
    subCategory: "Milk",
    spice: "mild",
    rating: 4.8,
    reviews: 135,
    unit: "250g+",
    notes: "Pre-order only",
    packSizes: [
      { label: "250g", price: 5.00 },
      { label: "500g", price: 9.50 },
      { label: "1kg", price: 18.00 }
    ]
  },
  // ---------------------------------------------------------
  // PODIS / SPICE POWDERS
  // ---------------------------------------------------------

  {
    id: "podi_curry_chilli",
    name: "Curry Chilli Chutney Powder",
    category: "Podis / Spice Powders",
    subCategory: "Chutney Powders",
    spice: "hot",
    rating: 4.9,
    reviews: 55,
    unit: "125/150g+",
    notes: "",
    packSizes: [
      { label: "125g", price: 2.00 },
      { label: "250g", price: 4.50 },
      { label: "500g", price: 8.50 },
      { label: "1kg", price: 16.00 }
    ]
  },
  {
    id: "podi_green_chilli",
    name: "Pachi Mirchi Karam / Green Chilli Podi",
    category: "Podis / Spice Powders",
    subCategory: "Chutney Powders",
    spice: "hot",
    rating: 4.9,
    reviews: 52,
    unit: "125/150g+",
    notes: "",
    packSizes: [
      { label: "125g", price: 2.00 },
      { label: "250g", price: 4.50 },
      { label: "500g", price: 8.50 },
      { label: "1kg", price: 16.00 }
    ]
  },
  {
    id: "podi_nalla_karam",
    name: "Nalla Karam Chutney Powder",
    category: "Podis / Spice Powders",
    subCategory: "Chutney Powders",
    spice: "hot",
    rating: 4.9,
    reviews: 52,
    unit: "125/150g+",
    notes: "",
    packSizes: [
      { label: "125g", price: 2.00 },
      { label: "250g", price: 4.50 },
      { label: "500g", price: 8.50 },
      { label: "1kg", price: 16.00 }
    ]
  },
  {
    id: "podi_curry_leaf",
    name: "Curry Leaf Spice Powder",
    category: "Podis / Spice Powders",
    subCategory: "Chutney Powders",
    spice: "medium",
    rating: 4.8,
    reviews: 50,
    unit: "125/150g+",
    notes: "",
    packSizes: [
      { label: "125g", price: 2.00 },
      { label: "250g", price: 4.50 },
      { label: "500g", price: 8.50 },
      { label: "1kg", price: 16.00 }
    ]
  },
  {
    id: "podi_idly_spice",
    name: "Idly Spice Mix Powder",
    category: "Podis / Spice Powders",
    subCategory: "Chutney Powders",
    spice: "medium",
    rating: 4.8,
    reviews: 48,
    unit: "125/150g+",
    notes: "",
    packSizes: [
      { label: "125g", price: 2.00 },
      { label: "250g", price: 4.50 },
      { label: "500g", price: 8.50 },
      { label: "1kg", price: 16.00 }
    ]
  },
  {
    id: "podi_peanut",
    name: "Peanut Chutney Powder",
    category: "Podis / Spice Powders",
    subCategory: "Chutney Powders",
    spice: "medium",
    rating: 4.8,
    reviews: 50,
    unit: "125/150g+",
    notes: "",
    packSizes: [
      { label: "125g", price: 2.00 },
      { label: "250g", price: 4.50 },
      { label: "500g", price: 8.50 },
      { label: "1kg", price: 16.00 }
    ]
  },
  {
    id: "podi_garlic_chilli",
    name: "Garlic Chilli Powder",
    category: "Podis / Spice Powders",
    subCategory: "Chutney Powders",
    spice: "hot",
    rating: 4.8,
    reviews: 48,
    unit: "125/150g+",
    notes: "",
    packSizes: [
      { label: "125g", price: 2.00 },
      { label: "250g", price: 4.50 },
      { label: "500g", price: 8.50 },
      { label: "1kg", price: 16.00 }
    ]
  },
  {
    id: "podi_peanut_mix",
    name: "Peanut Chutney Mix (1:1 Water)",
    category: "Podis / Spice Powders",
    subCategory: "Instant Mixes",
    spice: "medium",
    rating: 4.7,
    reviews: 40,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 3.50 },
      { label: "500g", price: 6.50 },
      { label: "1kg", price: 12.50 }
    ]
  },
  {
    id: "podi_rasam",
    name: "Rasam Powder",
    category: "Podis / Spice Powders",
    subCategory: "Cooking Powders",
    spice: "medium",
    rating: 4.8,
    reviews: 60,
    unit: "125/150g+",
    notes: "",
    packSizes: [
      { label: "125g", price: 2.00 },
      { label: "250g", price: 4.00 },
      { label: "500g", price: 7.50 },
      { label: "1kg", price: 14.00 }
    ]
  },
  {
    id: "podi_sambar",
    name: "Sambar Powder",
    category: "Podis / Spice Powders",
    subCategory: "Cooking Powders",
    spice: "medium",
    rating: 4.8,
    reviews: 58,
    unit: "125/150g+",
    notes: "",
    packSizes: [
      { label: "125g", price: 2.00 },
      { label: "250g", price: 4.00 },
      { label: "500g", price: 7.50 },
      { label: "1kg", price: 14.00 }
    ]
  },
  {
    id: "podi_garam_masala",
    name: "Garam Masala",
    category: "Podis / Spice Powders",
    subCategory: "Cooking Powders",
    spice: "medium",
    rating: 4.7,
    reviews: 55,
    unit: "125/150g+",
    notes: "",
    packSizes: [
      { label: "125g", price: 2.00 },
      { label: "250g", price: 4.00 },
      { label: "500g", price: 7.50 },
      { label: "1kg", price: 14.00 }
    ]
  },
  {
    id: "podi_mutton_masala",
    name: "Mutton Masala",
    category: "Podis / Spice Powders",
    subCategory: "Cooking Powders",
    spice: "hot",
    rating: 4.8,
    reviews: 62,
    unit: "125/150g+",
    notes: "",
    packSizes: [
      { label: "125g", price: 2.50 },
      { label: "250g", price: 4.50 },
      { label: "500g", price: 8.50 },
      { label: "1kg", price: 16.00 }
    ]
  },
  {
    id: "podi_chicken_masala",
    name: "Chicken Masala",
    category: "Podis / Spice Powders",
    subCategory: "Cooking Powders",
    spice: "hot",
    rating: 4.8,
    reviews: 65,
    unit: "125/150g+",
    notes: "",
    packSizes: [
      { label: "125g", price: 2.50 },
      { label: "250g", price: 4.50 },
      { label: "500g", price: 8.50 },
      { label: "1kg", price: 16.00 }
]}
  // ---------------------------------------------------------
  // MIXES (RICE MIXES, MILLET MIXES, READY MIXES)
  // ---------------------------------------------------------

  ,{
    id: "mix_pulihora",
    name: "Pulihora Mix (Tamarind Rice Mix)",
    category: "Mixes",
    subCategory: "Rice Mixes",
    spice: "medium",
    rating: 4.8,
    reviews: 90,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 3.50 },
      { label: "500g", price: 6.50 },
      { label: "1kg", price: 12.50 }
    ]
  },
  {
    id: "mix_tomato_rice",
    name: "Tomato Rice Mix",
    category: "Mixes",
    subCategory: "Rice Mixes",
    spice: "medium",
    rating: 4.7,
    reviews: 85,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 3.50 },
      { label: "500g", price: 6.50 },
      { label: "1kg", price: 12.50 }
    ]
  },
  {
    id: "mix_gongura_rice",
    name: "Gongura Rice Mix",
    category: "Mixes",
    subCategory: "Rice Mixes",
    spice: "hot",
    rating: 4.8,
    reviews: 95,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 3.50 },
      { label: "500g", price: 6.50 },
      { label: "1kg", price: 12.50 }
    ]
  },
  {
    id: "mix_biryani",
    name: "Biryani Mix",
    category: "Mixes",
    subCategory: "Rice Mixes",
    spice: "hot",
    rating: 4.9,
    reviews: 110,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 4.00 },
      { label: "500g", price: 7.50 },
      { label: "1kg", price: 14.00 }
    ]
  },
  {
    id: "mix_upma",
    name: "Upma Mix",
    category: "Mixes",
    subCategory: "Breakfast Mixes",
    spice: "mild",
    rating: 4.7,
    reviews: 70,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 3.00 },
      { label: "500g", price: 5.50 },
      { label: "1kg", price: 10.50 }
    ]
  },
  {
    id: "mix_pongal",
    name: "Pongal Mix",
    category: "Mixes",
    subCategory: "Breakfast Mixes",
    spice: "mild",
    rating: 4.8,
    reviews: 75,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 3.00 },
      { label: "500g", price: 5.50 },
      { label: "1kg", price: 10.50 }
    ]
  },
  {
    id: "mix_millet_upma",
    name: "Millet Upma Mix",
    category: "Mixes",
    subCategory: "Millet Mixes",
    spice: "mild",
    rating: 4.7,
    reviews: 65,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 3.50 },
      { label: "500g", price: 6.50 },
      { label: "1kg", price: 12.00 }
    ]
  },
  {
    id: "mix_millet_pongal",
    name: "Millet Pongal Mix",
    category: "Mixes",
    subCategory: "Millet Mixes",
    spice: "mild",
    rating: 4.8,
    reviews: 68,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 3.50 },
      { label: "500g", price: 6.50 },
      { label: "1kg", price: 12.00 }
    ]
  },
  {
    id: "mix_millet_khichdi",
    name: "Millet Khichdi Mix",
    category: "Mixes",
    subCategory: "Millet Mixes",
    spice: "medium",
    rating: 4.8,
    reviews: 72,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 3.50 },
      { label: "500g", price: 6.50 },
      { label: "1kg", price: 12.00 }
    ]
  },
    // ---------------------------------------------------------
  // READY MIXES (IDLY, DOSA, VADA, BAJJI, MILLET VERSIONS)
  // ---------------------------------------------------------

  {
    id: "ready_idly",
    name: "Idly Mix",
    category: "Ready Mixes",
    subCategory: "Classic",
    spice: "mild",
    rating: 4.8,
    reviews: 85,
    unit: "500g+",
    notes: "",
    packSizes: [
      { label: "500g", price: 3.50 },
      { label: "1kg", price: 6.50 }
    ]
  },
  {
    id: "ready_dosa",
    name: "Dosa Mix",
    category: "Ready Mixes",
    subCategory: "Classic",
    spice: "mild",
    rating: 4.7,
    reviews: 80,
    unit: "500g+",
    notes: "",
    packSizes: [
      { label: "500g", price: 3.50 },
      { label: "1kg", price: 6.50 }
    ]
  },
  {
    id: "ready_vada",
    name: "Vada Mix",
    category: "Ready Mixes",
    subCategory: "Classic",
    spice: "mild",
    rating: 4.8,
    reviews: 78,
    unit: "500g+",
    notes: "",
    packSizes: [
      { label: "500g", price: 3.50 },
      { label: "1kg", price: 6.50 }
    ]
  },
  {
    id: "ready_bajji",
    name: "Bajji Mix",
    category: "Ready Mixes",
    subCategory: "Classic",
    spice: "medium",
    rating: 4.7,
    reviews: 75,
    unit: "500g+",
    notes: "",
    packSizes: [
      { label: "500g", price: 3.50 },
      { label: "1kg", price: 6.50 }
    ]
  },
  {
    id: "ready_punugulu",
    name: "Punugulu Mix",
    category: "Ready Mixes",
    subCategory: "Classic",
    spice: "medium",
    rating: 4.8,
    reviews: 82,
    unit: "500g+",
    notes: "",
    packSizes: [
      { label: "500g", price: 3.50 },
      { label: "1kg", price: 6.50 }
    ]
  },
  {
    id: "ready_millet_idly",
    name: "Millet Idly Mix",
    category: "Ready Mixes",
    subCategory: "Millet",
    spice: "mild",
    rating: 4.8,
    reviews: 70,
    unit: "500g+",
    notes: "",
    packSizes: [
      { label: "500g", price: 4.00 },
      { label: "1kg", price: 7.50 }
    ]
  },
  {
    id: "ready_millet_dosa",
    name: "Millet Dosa Mix",
    category: "Ready Mixes",
    subCategory: "Millet",
    spice: "mild",
    rating: 4.7,
    reviews: 68,
    unit: "500g+",
    notes: "",
    packSizes: [
      { label: "500g", price: 4.00 },
      { label: "1kg", price: 7.50 }
    ]
  },
  {
    id: "ready_millet_vada",
    name: "Millet Vada Mix",
    category: "Ready Mixes",
    subCategory: "Millet",
    spice: "mild",
    rating: 4.8,
    reviews: 65,
    unit: "500g+",
    notes: "",
    packSizes: [
      { label: "500g", price: 4.00 },
      { label: "1kg", price: 7.50 }
    ]
  },
  {
    id: "ready_millet_bajji",
    name: "Millet Bajji Mix",
    category: "Ready Mixes",
    subCategory: "Millet",
    spice: "medium",
    rating: 4.7,
    reviews: 60,
    unit: "500g+",
    notes: "",
    packSizes: [
      { label: "500g", price: 4.00 },
      { label: "1kg", price: 7.50 }
    ]
  },
  {
    id: "ready_millet_punugulu",
    name: "Millet Punugulu Mix",
    category: "Ready Mixes",
    subCategory: "Millet",
    spice: "medium",
    rating: 4.8,
    reviews: 62,
    unit: "500g+",
    notes: "",
    packSizes: [
      { label: "500g", price: 4.00 },
      { label: "1kg", price: 7.50 }
    ]
  },
  // ---------------------------------------------------------
  // PAPADUMS
  // ---------------------------------------------------------

  {
    id: "papad_sago_plain",
    name: "Sago Papad (Plain)",
    category: "Papadums",
    subCategory: "Sago",
    spice: "mild",
    rating: 4.7,
    reviews: 60,
    unit: "100g+",
    notes: "",
    packSizes: [
      { label: "100g", price: 2.00 },
      { label: "250g", price: 4.00 },
      { label: "500g", price: 7.50 }
    ]
  },
  {
    id: "papad_sago_chilli",
    name: "Sago Papad (Chilli)",
    category: "Papadums",
    subCategory: "Sago",
    spice: "medium",
    rating: 4.8,
    reviews: 65,
    unit: "100g+",
    notes: "",
    packSizes: [
      { label: "100g", price: 2.00 },
      { label: "250g", price: 4.00 },
      { label: "500g", price: 7.50 }
    ]
  },
  {
    id: "papad_rice_plain",
    name: "Rice Papad (Plain)",
    category: "Papadums",
    subCategory: "Rice",
    spice: "mild",
    rating: 4.7,
    reviews: 55,
    unit: "100g+",
    notes: "",
    packSizes: [
      { label: "100g", price: 2.00 },
      { label: "250g", price: 4.00 },
      { label: "500g", price: 7.50 }
    ]
  },
  {
    id: "papad_rice_chilli",
    name: "Rice Papad (Chilli)",
    category: "Papadums",
    subCategory: "Rice",
    spice: "medium",
    rating: 4.8,
    reviews: 58,
    unit: "100g+",
    notes: "",
    packSizes: [
      { label: "100g", price: 2.00 },
      { label: "250g", price: 4.00 },
      { label: "500g", price: 7.50 }
    ]
  },
  {
    id: "papad_millet_plain",
    name: "Millet Papad (Plain)",
    category: "Papadums",
    subCategory: "Millet",
    spice: "mild",
    rating: 4.7,
    reviews: 50,
    unit: "100g+",
    notes: "",
    packSizes: [
      { label: "100g", price: 2.50 },
      { label: "250g", price: 4.50 },
      { label: "500g", price: 8.00 }
    ]
  },
  {
    id: "papad_millet_chilli",
    name: "Millet Papad (Chilli)",
    category: "Papadums",
    subCategory: "Millet",
    spice: "medium",
    rating: 4.8,
    reviews: 52,
    unit: "100g+",
    notes: "",
    packSizes: [
      { label: "100g", price: 2.50 },
      { label: "250g", price: 4.50 },
      { label: "500g", price: 8.00 }
    ]
  },
  // ---------------------------------------------------------
  // READY PASTES (COOKING BASES)
  // ---------------------------------------------------------

  {
    id: "paste_ginger_garlic",
    name: "Ginger Garlic Paste",
    category: "Ready Pastes",
    subCategory: "Cooking Bases",
    spice: "mild",
    rating: 4.9,
    reviews: 150,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 3.00 },
      { label: "500g", price: 5.50 },
      { label: "1kg", price: 10.50 }
    ]
  },
  {
    id: "paste_ginger",
    name: "Ginger Paste",
    category: "Ready Pastes",
    subCategory: "Cooking Bases",
    spice: "mild",
    rating: 4.8,
    reviews: 120,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 3.00 },
      { label: "500g", price: 5.50 },
      { label: "1kg", price: 10.50 }
    ]
  },
  {
    id: "paste_garlic",
    name: "Garlic Paste",
    category: "Ready Pastes",
    subCategory: "Cooking Bases",
    spice: "mild",
    rating: 4.8,
    reviews: 115,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 3.00 },
      { label: "500g", price: 5.50 },
      { label: "1kg", price: 10.50 }
    ]
  },
  {
    id: "paste_tamarind",
    name: "Tamarind Paste",
    category: "Ready Pastes",
    subCategory: "Cooking Bases",
    spice: "mild",
    rating: 4.9,
    reviews: 140,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 3.50 },
      { label: "500g", price: 6.50 },
      { label: "1kg", price: 12.00 }
    ]
  },
  {
    id: "paste_tomato_base",
    name: "Tomato Curry Base",
    category: "Ready Pastes",
    subCategory: "Curry Bases",
    spice: "medium",
    rating: 4.8,
    reviews: 130,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 3.50 },
      { label: "500g", price: 6.50 },
      { label: "1kg", price: 12.00 }
    ]
  },
  {
    id: "paste_onion_base",
    name: "Onion Curry Base",
    category: "Ready Pastes",
    subCategory: "Curry Bases",
    spice: "medium",
    rating: 4.7,
    reviews: 110,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 3.50 },
      { label: "500g", price: 6.50 },
      { label: "1kg", price: 12.00 }
    ]
  },
  {
    id: "paste_masala_base",
    name: "Masala Curry Base",
    category: "Ready Pastes",
    subCategory: "Curry Bases",
    spice: "hot",
    rating: 4.9,
    reviews: 145,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 4.00 },
      { label: "500g", price: 7.50 },
      { label: "1kg", price: 14.00 }
    ]
  },
  {
    id: "paste_millet_curry",
    name: "Millet-Friendly Curry Base",
    category: "Ready Pastes",
    subCategory: "Millet",
    spice: "medium",
    rating: 4.8,
    reviews: 95,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 4.00 },
      { label: "500g", price: 7.50 },
      { label: "1kg", price: 14.00 }
    ]
  },
  // ---------------------------------------------------------
  // MISC ITEMS (FRYUMS, ADD-ONS, EXTRAS)
  // ---------------------------------------------------------

  {
    id: "misc_fryums_stars",
    name: "Fryums – Stars",
    category: "Misc",
    subCategory: "Fryums",
    spice: "mild",
    rating: 4.7,
    reviews: 55,
    unit: "100g+",
    notes: "",
    packSizes: [
      { label: "100g", price: 1.50 },
      { label: "250g", price: 3.00 },
      { label: "500g", price: 5.50 }
    ]
  },
  {
    id: "misc_fryums_wheels",
    name: "Fryums – Wheels",
    category: "Misc",
    subCategory: "Fryums",
    spice: "mild",
    rating: 4.8,
    reviews: 60,
    unit: "100g+",
    notes: "",
    packSizes: [
      { label: "100g", price: 1.50 },
      { label: "250g", price: 3.00 },
      { label: "500g", price: 5.50 }
    ]
  },
  {
    id: "misc_fryums_coloured",
    name: "Fryums – Coloured Mix",
    category: "Misc",
    subCategory: "Fryums",
    spice: "mild",
    rating: 4.7,
    reviews: 52,
    unit: "100g+",
    notes: "",
    packSizes: [
      { label: "100g", price: 1.50 },
      { label: "250g", price: 3.00 },
      { label: "500g", price: 5.50 }
    ]
  },
  {
    id: "misc_jaggery_ball",
    name: "Jaggery Ball",
    category: "Misc",
    subCategory: "Sweet Add-ons",
    spice: "mild",
    rating: 4.9,
    reviews: 80,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 2.50 },
      { label: "500g", price: 4.50 },
      { label: "1kg", price: 8.50 }
    ]
  },
  {
    id: "misc_groundnut_oil",
    name: "Cold Pressed Groundnut Oil",
    category: "Misc",
    subCategory: "Oils",
    spice: "mild",
    rating: 4.9,
    reviews: 95,
    unit: "500ml+",
    notes: "",
    packSizes: [
      { label: "500ml", price: 4.50 },
      { label: "1L", price: 8.50 },
      { label: "2L", price: 16.00 }
    ]
  },
  {
    id: "misc_sesame_oil",
    name: "Cold Pressed Sesame Oil",
    category: "Misc",
    subCategory: "Oils",
    spice: "mild",
    rating: 4.8,
    reviews: 88,
    unit: "500ml+",
    notes: "",
    packSizes: [
      { label: "500ml", price: 5.00 },
      { label: "1L", price: 9.50 },
      { label: "2L", price: 18.00 }
    ]
  },
  {
    id: "misc_ghee",
    name: "Pure Cow Ghee",
    category: "Misc",
    subCategory: "Ghee",
    spice: "mild",
    rating: 5.0,
    reviews: 120,
    unit: "250g+",
    notes: "",
    packSizes: [
      { label: "250g", price: 6.50 },
      { label: "500g", price: 12.00 },
      { label: "1kg", price: 23.00 }
    ]
  }



    

]; // <-- VERY IMPORTANT: Do NOT delete this bracket.

/* ---------------------------------------------------------
   AVIRUCHI PRODUCT ENGINE — FINAL VERSION (Sidebar Only)
--------------------------------------------------------- */

//////////////////////////////////////////////////////////////
// STATE
//////////////////////////////////////////////////////////////

let state = {
  products: PRODUCTS,
  filtered: PRODUCTS,
  category: "all",
  sort: "featured",
  search: "",
  basket: []
};

//////////////////////////////////////////////////////////////
// HELPERS
//////////////////////////////////////////////////////////////

function getSpiceClass(spice) {
  if (spice === "hot") return "hot";
  if (spice === "medium") return "medium";
  return "mild";
}

function getSpiceLabel(spice) {
  if (!spice) return "";
  return spice.charAt(0).toUpperCase() + spice.slice(1);
}

function formatPrice(value) {
  return `£${value.toFixed(2)}`;
}

function getCategoryLabel(p) {
  if (p.category === "Pickles" && p.subCategory) {
    return `Pickles (${p.subCategory})`;
  }
  if (p.category === "Snacks" && p.subCategory) {
    return `Snacks (${p.subCategory})`;
  }
  if (p.category === "Podis / Spice Powders" && p.subCategory) {
    return `Podis / Spice Powders (${p.subCategory})`;
  }
  return p.category;
}

//////////////////////////////////////////////////////////////
// RENDER PRODUCTS
//////////////////////////////////////////////////////////////

function renderProducts() {
  const grid = document.getElementById("products-grid");
  const emptyState = document.getElementById("empty-state");
  const resultsCount = document.getElementById("results-count");
  const resultsContext = document.getElementById("results-context");

  const list = state.filtered || [];

  if (!list.length) {
    grid.innerHTML = "";
    emptyState.hidden = false;
    resultsCount.textContent = "0 products";
    resultsContext.textContent = "No matching results";
    return;
  }

  emptyState.hidden = true;

  resultsCount.textContent = `${list.length} products`;
  resultsContext.textContent =
    state.category === "all"
      ? "Showing all categories"
      : `Category: ${state.category}`;

  grid.innerHTML = list
    .map((p) => {
      const spiceClass = getSpiceClass(p.spice);
      const spiceLabel = getSpiceLabel(p.spice);
      const ratingStars =
        "★".repeat(Math.round(p.rating)) +
        "☆".repeat(5 - Math.round(p.rating));

      const mainPack = p.packSizes?.[0] || null;
      const unitPrice = mainPack ? mainPack.price : p.basePrice || 0;
      const unitText = p.unit || (mainPack ? mainPack.label : "");
      const categoryLabel = getCategoryLabel(p);

      const packSelectHtml = p.packSizes?.length
        ? `
          <select class="pack-select click-anim">
            ${p.packSizes
              .map(
                (ps) =>
                  `<option value="${ps.label}" data-price="${ps.price}">
                    ${ps.label} - ${formatPrice(ps.price)}
                  </option>`
              )
              .join("")}
          </select>
        `
        : `<div class="pack-unavailable">Pre-order only</div>`;

      return `
        <article class="product-card fade-in" data-id="${p.id}">
          <div class="product-body">
            <div class="product-name">${p.name}</div>
            <div class="product-category">${categoryLabel}</div>

            <div class="product-meta-row">
              <div class="product-spice">
                <span class="spice-dot ${spiceClass}"></span>
                <span>${spiceLabel}</span>
              </div>
              <div class="product-rating">
                <span class="star">${ratingStars}</span>
                <span>(${p.reviews})</span>
              </div>
            </div>

            <div class="product-price-row">
              <div class="price-main">
                <span class="price-current">${formatPrice(unitPrice)}</span>
              </div>
              ${
                unitText
                  ? `<div class="price-unit">Based on ${unitText}</div>`
                  : ""
              }
            </div>

            <div class="product-controls">
              ${packSelectHtml}

              <div class="qty-row">
                <span class="qty-label">Qty</span>
                <div class="qty-box">
                  <button class="qty-btn click-anim" data-change="-1">-</button>
                  <span class="qty-value">1</span>
                  <button class="qty-btn click-anim" data-change="1">+</button>
                </div>
              </div>

              <button class="add-btn click-anim" data-id="${p.id}">Add</button>
            </div>

            ${p.notes ? `<div class="product-notes">${p.notes}</div>` : ""}
          </div>
        </article>
      `;
    })
    .join("");
}

//////////////////////////////////////////////////////////////
// BASKET LOGIC
//////////////////////////////////////////////////////////////

function saveBasket() {
  localStorage.setItem("aviruchi_basket", JSON.stringify(state.basket));
}

function loadBasket() {
  const saved = localStorage.getItem("aviruchi_basket");
  if (saved) {
    state.basket = JSON.parse(saved);
  }
}

function addToBasket(product, qty, selectedPack) {
  const key = product.id + (selectedPack ? `_${selectedPack.label}` : "");
  const existing = state.basket.find((item) => item.key === key);

  if (existing) {
    existing.qty += qty;
  } else {
    state.basket.push({
      key,
      id: product.id,
      name: product.name,
      category: product.category,
      subCategory: product.subCategory || null,
      pack: selectedPack,
      qty
    });
  }

  saveBasket();
  updateBasketUI();
}

function updateBasketUI() {
  const countEl = document.getElementById("basket-count");
  const listEl = document.getElementById("basket-items");

  const totalItems = state.basket.reduce((sum, item) => sum + item.qty, 0);

  if (countEl) {
    countEl.textContent = totalItems;
  }

  if (listEl) {
    if (!state.basket.length) {
      listEl.innerHTML = `<p>Your basket is empty.</p>`;
      return;
    }

    listEl.innerHTML = state.basket
      .map((item) => {
        const packLabel = item.pack ? ` (${item.pack.label})` : "";
        return `
          <div class="basket-item fade-in">
            <span>${item.name}${packLabel}</span>
            <span>Qty: ${item.qty}</span>
          </div>
        `;
      })
      .join("");
  }
}

//////////////////////////////////////////////////////////////
// FILTERING & SORTING
//////////////////////////////////////////////////////////////

function applyFiltersAndSort() {
  let list = [...state.products];

  if (state.category !== "all") {
    list = list.filter((p) => p.category === state.category);
  }

  if (state.search.trim() !== "") {
    const q = state.search.toLowerCase();
    list = list.filter((p) => p.name.toLowerCase().includes(q));
  }

  if (state.sort === "price-asc") {
    list.sort((a, b) => {
      const pa = a.packSizes?.[0]?.price || 0;
      const pb = b.packSizes?.[0]?.price || 0;
      return pa - pb;
    });
  }

  if (state.sort === "price-desc") {
    list.sort((a, b) => {
      const pa = a.packSizes?.[0]?.price || 0;
      const pb = b.packSizes?.[0]?.price || 0;
      return pb - pa;
    });
  }

  if (state.sort === "name-asc") {
    list.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (state.sort === "name-desc") {
    list.sort((a, b) => b.name.localeCompare(a.name));
  }

  state.filtered = list;
  renderProducts();
}

//////////////////////////////////////////////////////////////
// CATEGORY HIGHLIGHT
//////////////////////////////////////////////////////////////

function highlightActiveCategory(catKey) {
  const buttons = document.querySelectorAll("[data-category]");
  buttons.forEach((btn) => {
    const key = btn.getAttribute("data-category");
    if (key === catKey) {
      btn.classList.add("active");
      btn.classList.add("click-anim");
    } else {
      btn.classList.remove("active");
    }
  });
}

//////////////////////////////////////////////////////////////
// EVENT WIRING
//////////////////////////////////////////////////////////////

function attachProductEvents() {
  const grid = document.getElementById("products-grid");
  if (!grid) return;

  grid.addEventListener("click", (e) => {
    const qtyBtn = e.target.closest(".qty-btn");
    if (qtyBtn) {
      qtyBtn.classList.add("clicked");
      setTimeout(() => qtyBtn.classList.remove("clicked"), 150);

      const change = parseInt(qtyBtn.getAttribute("data-change"), 10);
      const card = qtyBtn.closest(".product-card");
      const qtyValue = card.querySelector(".qty-value");
      let current = parseInt(qtyValue.textContent, 10) || 1;
      current += change;
      if (current < 1) current = 1;
      qtyValue.textContent = current;
      return;
    }

    const addBtn = e.target.closest(".add-btn");
    if (addBtn) {
      addBtn.classList.add("clicked");
      setTimeout(() => addBtn.classList.remove("clicked"), 150);

      const card = addBtn.closest(".product-card");
      const id = card.getAttribute("data-id");
      const product = state.products.find((p) => p.id === id);
      if (!product) return;

      const qtyValue = card.querySelector(".qty-value");
      const qty = parseInt(qtyValue.textContent, 10) || 1;

      const select = card.querySelector(".pack-select");
      let selectedPack = null;
      if (select && select.options.length) {
        const opt = select.options[select.selectedIndex];
        selectedPack = {
          label: opt.value,
          price: parseFloat(opt.getAttribute("data-price"))
        };
      }

      addToBasket(product, qty, selectedPack);

      addBtn.textContent = "Added";
      addBtn.classList.add("added");
      setTimeout(() => {
        addBtn.textContent = "Add";
        addBtn.classList.remove("added");
      }, 1200);
    }
  });
}

function attachFilterEvents() {
  const categoryEls = document.querySelectorAll("[data-category]");
  categoryEls.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const cat = el.getAttribute("data-category");
      highlightActiveCategory(cat);
      state.category = cat;
      applyFiltersAndSort();
    });
  });

  const sortSelect = document.getElementById("sort-filter");
  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      state.sort = sortSelect.value;
      applyFiltersAndSort();
    });
  }

  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      state.search = searchInput.value;
      applyFiltersAndSort();
    });
  }

  const clearBtn = document.getElementById("clear-filters-btn");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      state.category = "all";
      state.sort = "featured";
      state.search = "";

      highlightActiveCategory("all");

      const searchInput = document.getElementById("search-input");
      if (searchInput) searchInput.value = "";

      const sortSelect = document.getElementById("sort-filter");
      if (sortSelect) sortSelect.value = "featured";

      applyFiltersAndSort();
    });
  }

  const emptyReset = document.getElementById("empty-reset-btn");
  if (emptyReset) {
    emptyReset.addEventListener("click", () => {
      state.category = "all";
      state.sort = "featured";
      state.search = "";

      highlightActiveCategory("all");

      const searchInput = document.getElementById("search-input");
      if (searchInput) searchInput.value = "";

      const sortSelect = document.getElementById("sort-filter");
      if (sortSelect) sortSelect.value = "featured";

      applyFiltersAndSort();
    });
  }
}

//////////////////////////////////////////////////////////////
// INIT
//////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", () => {
  const isProductsPage = document.getElementById("products-grid");

  if (isProductsPage) {
    // Load basket first
    loadBasket();
    updateBasketUI();

    // Render products
    applyFiltersAndSort();

    // Attach all product + filter events
    attachProductEvents();
    attachFilterEvents();
  }
});