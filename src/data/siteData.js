export const navLinks = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'stay-plans', label: 'Stay Plans', href: '#stay-plans' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'our-story', label: 'Our Story', href: '#our-story' },
  { id: 'meal-plans', label: 'Meal Plans', href: '#meal-plans' },
  { id: 'important-notice', label: 'Important Notice', href: '#important-notice' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]

export const heroContent = {
  heading: 'Meow Manor',
  tagline: 'Where every cat feels right at home',
  description:
    'Safe. Peaceful. Cage-free or isolated staycation for your cat in our secure and spacious 2BHK home.',
  trustLine: 'Safe home boarding • Daily updates • Personalized care',
  primaryCta: { label: "Book Your Cat’s Stay", href: '#booking' },
  secondaryCta: { label: 'View Stay Plans', href: '#stay-plans' },
}

export const bookingOffer = {
  badge: 'New Guest Offer',
  title: '🎉 First Booking Offer',
  highlight: '₹100 OFF your first stay!',
  terms: [
    '✨ Exclusive for new Meow Manor guests',
    '🏷️ Valid only with a referral code',
    '🔖 One-time use per customer',
    '🍽️ Discount applies to boarding only. Meal plans are charged separately.',
  ],
}

export const stayPlans = [
  {
    id: 'standard-stay',
    icon: '🐱',
    name: 'Standard Stay',
    description: 'Non-AC Room',
    price: '₹399',
    unit: 'per Night',
    benefit: 'Comfortable cage-free boarding in a shared home setting',
    featured: false,
  },
  {
    id: 'private-stay',
    icon: '🌟',
    name: 'Private Stay',
    description: 'Isolated Room',
    price: '₹499',
    unit: 'per Night',
    benefit: 'Quiet, private space for cats who prefer their own room',
    featured: false,
  },
  {
    id: 'day-care',
    icon: '☀️',
    name: 'Day Care',
    description: '12 Hours',
    price: '₹299',
    unit: '',
    benefit: 'Complimentary treat included',
    featured: false,
  },
  {
    id: 'hourly-stay',
    icon: '⏰',
    name: 'Hourly Stay',
    description: 'Flexible short stays',
    price: '₹50',
    unit: 'per Hour',
    benefit: 'Complimentary treat included',
    featured: false,
  },
]

export const benefits = [
  {
    icon: '🪵',
    title: 'Personalized litter maintenance',
    description: 'Fresh, carefully maintained litter tailored to each guest.',
  },
  {
    icon: '💧',
    title: 'Fresh water stations',
    description: 'Clean drinking water available in every room.',
  },
  {
    icon: '🍬',
    title: 'Complimentary daycare treat',
    description: 'A little something special for daycare guests.',
  },
  {
    icon: '🐈',
    title: 'Individual play sessions',
    description: 'Dedicated playtime in our safe play area.',
  },
  {
    icon: '📸',
    title: 'Daily photos and videos',
    description: 'Updates sent so you never miss a moment.',
  },
  {
    icon: '🧸',
    title: 'Toys and enrichment',
    description: 'Stimulating activities to keep curious cats happy.',
  },
  {
    icon: '💖',
    title: 'Gentle care and affection',
    description: 'Cuddles, calm company, and lots of love.',
  },
]

export const ourStory = {
  title: 'Meet Loki & Veera 🐾',
  intro:
    'Loki and Veera, two tabby brothers born on 28th October and adopted on 8th March, are the inspiration behind Meow Manor.',
  closing: 'Every cat we welcome is cared for with the love these two inspired.',
  names: 'Loki & Veera',
  slides: [
    {
      srcKey: 'story1',
      alt: 'Loki and Veera lying side by side on the floor',
    },
    {
      srcKey: 'story2',
      alt: 'A playful tabby cat lying on its back',
    },
    {
      srcKey: 'story3',
      alt: 'Loki and Veera sitting together on a wooden seat',
    },
    {
      srcKey: 'story4',
      alt: 'Loki looking upward in a soft side profile',
    },
  ],
  descriptions: [
    'Veera was brave, playful, curious, and loved being carried. He sadly crossed the rainbow bridge on 12th May but will always be the heart of our story.',
    'Loki is independent and curious. He prefers affection on his own terms, enjoys gentle pets, and loves curling up on a cozy bed for a nap.',
  ],
}

export const mealPlansIntro = {
  paragraphs: [
    "Pet parents are welcome to bring their cat's own food.",
    "If you'd rather leave everything to us, simply choose one of our meal plans. Meals can be customized according to your cat's preferences, age, medical requirements, allergies, or veterinary diet. Medication can also be administered upon request.",
    'Menu cards and detailed meal plans will be shared on request. The pricing below is a short pricing guide.',
  ],
}

export const mealPlans = [
  {
    id: 'basic-meal',
    icon: '🥣',
    name: 'Basic Meal Plan',
    price: '₹199',
    unit: 'per Day',
  },
  {
    id: 'mid-meal',
    icon: '🍖',
    name: 'Mid Meal Plan',
    price: '₹289',
    unit: 'per Day',
  },
  {
    id: 'premium-meal',
    icon: '👑',
    name: 'Premium Meal Plan',
    price: '₹399',
    unit: 'per Day',
  },
]

export const mealPricingInfo = {
  intro: "Meal prices are calculated based on your cat's individual needs.",
  basedOnLabel: 'The listed prices are based on approximately:',
  baseItems: [
    '🥫 Up to 2 cans or pouches of wet food per day',
    '🥣 Up to 40 g of dry food per day',
  ],
  notes: [
    "🐾 If your cat requires less, the final meal charges will be reduced.",
    "🐾 If your cat requires more food, the additional cost will be added to the final bill.",
  ],
  highlight:
    "No hidden charges—just fair pricing based on your instructions and your kitty's appetite.",
}

export const specialBreedCare = {
  heading: '✨ Special Breed Care',
  price: '₹249',
  unit: 'per Day',
  label: 'Add-on Service',
  includes: [
    '🪮 Daily brushing and coat maintenance',
    '🧼 Daily paw cleaning',
    '🍑 Sanitary cleaning',
    '👀 Eye and face cleaning, if required',
    '🍗 Premium meal upgrade',
    '💖 Extra cuddle time and grooming attention',
  ],
  closing: 'Because every fluffy baby deserves a little extra pampering.',
}

export const importantNotice = {
  heading: 'Important Notice',
  description:
    "Please bring your cat's records at the time of check-in. You will be given a consent form to complete.",
  checklist: [
    '💉 Vaccination records',
    '🩺 Deworming and flea/tick treatment records',
    "💊 Any medications your cat requires, if applicable",
    "🧸 Your cat's favourite toy or blanket, optional but helpful for making them feel at home",
  ],
  reminder: 'Records must be provided at check-in for the safety of every guest.',
}

export const bookingFields = {
  stayPlanOptions: [
    { value: '', label: 'Select a stay plan' },
    { value: 'Standard Stay', label: 'Standard Stay — ₹399/night' },
    { value: 'Private Stay', label: 'Private Stay — ₹499/night' },
    { value: 'Day Care', label: 'Day Care — ₹299' },
    { value: 'Hourly Stay', label: 'Hourly Stay — ₹50/hour' },
  ],
  mealPlanOptions: [
    { value: '', label: 'None / Bringing own food' },
    { value: 'Basic Meal Plan', label: 'Basic Meal Plan — ₹199/day' },
    { value: 'Mid Meal Plan', label: 'Mid Meal Plan — ₹289/day' },
    { value: 'Premium Meal Plan', label: 'Premium Meal Plan — ₹399/day' },
  ],
}

export const contactCards = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    description: 'Chat with us about your cat’s stay',
    type: 'whatsapp',
  },
  {
    id: 'phone',
    label: 'Phone',
    description: 'Call for booking enquiries',
    type: 'phone',
  },
  {
    id: 'email',
    label: 'Email',
    description: 'Write to us anytime',
    type: 'email',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    description: 'Follow life at Meow Manor',
    type: 'instagram',
  },
  {
    id: 'location',
    label: 'Location',
    description:
      'Flat no 309, Sai Indraprastha Apartment Sai, Rachenahalli Main Rd, Sinthan Nagar, Rachenahalli, Thanisandra, Bengaluru, Karnataka 560077',
    type: 'location',
  },
]

export const footerContent = {
  madeWithLove: 'Made with love for cats and the people who care for them.',
  privacyNote: 'Home boarding in Thanisandra, Bengaluru.',
}
