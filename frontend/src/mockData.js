// Mock data for Annadata-Setu

export const mockFoodDonations = [
  {
    id: 1,
    title: "Fresh Vegetable Surplus",
    donor: "Green Garden Restaurant",
    location: "Connaught Place, Delhi",
    quantity: "50 kg mixed vegetables",
    expiryTime: "2 hours",
    category: "Vegetables",
    description: "Fresh carrots, potatoes, onions, and seasonal vegetables from our daily preparation.",
    donorPhone: "+91 98765 43210",
    status: "available",
    postedAt: "2024-01-15T10:30:00Z"
  },
  {
    id: 2,
    title: "Cooked Meals Ready",
    donor: "Spice Route Catering",
    location: "Bandra, Mumbai",
    quantity: "100 meal portions",
    expiryTime: "4 hours",
    category: "Cooked Food",
    description: "Dal, rice, sabzi, and roti. Prepared for an event that got cancelled.",
    donorPhone: "+91 87654 32109",
    status: "claimed",
    claimedBy: "Mumbai Food Angels NGO",
    postedAt: "2024-01-15T08:15:00Z"
  },
  {
    id: 3,
    title: "Wedding Reception Surplus",
    donor: "Grand Palace Wedding Hall",
    location: "Vasant Kunj, Delhi",
    quantity: "500 meal portions",
    expiryTime: "5 hours",
    category: "Cooked Food",
    description: "Complete wedding feast: paneer makhani, dal makhani, biryani, naan, raita, gulab jamun, and salads. High-quality banquet food.",
    donorPhone: "+91 99999 11111",
    status: "available",
    postedAt: "2024-01-15T14:30:00Z"
  },
  {
    id: 4,
    title: "Hotel Breakfast Surplus",
    donor: "Taj Palace Hotel",
    location: "Chanakyapuri, Delhi",
    quantity: "150 portions",
    expiryTime: "3 hours",
    category: "Cooked Food",
    description: "Continental and Indian breakfast items: paratha, poha, upma, fruit salads, sandwiches, and fresh juice.",
    donorPhone: "+91 88888 22222",
    status: "available",
    postedAt: "2024-01-15T11:45:00Z"
  },
  {
    id: 5,
    title: "Bakery Items",
    donor: "Sunrise Bakery",
    location: "Koramangala, Bangalore",
    quantity: "200 pieces (bread, pastries)",
    expiryTime: "6 hours",
    category: "Bakery",
    description: "Day-old bread, pastries, and cake pieces. All fresh and safe to consume.",
    donorPhone: "+91 76543 21098",
    status: "available",
    postedAt: "2024-01-15T06:45:00Z"
  },
  {
    id: 6,
    title: "Corporate Event Leftover",
    donor: "Microsoft India Office",
    location: "Gurgaon, Haryana",
    quantity: "200 meal boxes",
    expiryTime: "4 hours",
    category: "Cooked Food",
    description: "Lunch boxes from corporate event: vegetable biryani, paneer curry, dal, roti, pickle, and sweet. Packed in disposable containers.",
    donorPhone: "+91 77777 33333",
    status: "available",
    postedAt: "2024-01-15T13:20:00Z"
  },
  {
    id: 7,
    title: "Restaurant Daily Surplus",
    donor: "Karim's Restaurant",
    location: "Chandni Chowk, Delhi",
    quantity: "80 portions",
    expiryTime: "2 hours",
    category: "Cooked Food",
    description: "Traditional Mughlai cuisine: chicken curry, mutton biryani, kebabs, naan, and rumali roti. Prepared fresh today.",
    donorPhone: "+91 66666 44444",
    status: "available",
    postedAt: "2024-01-15T16:00:00Z"
  },
  {
    id: 8,
    title: "Wedding Food Leftover",
    donor: "Sharma Family",
    location: "Lajpat Nagar, Delhi",
    quantity: "300 meal portions",
    expiryTime: "3 hours",
    category: "Cooked Food",
    description: "North Indian wedding feast including various curries, rice, and desserts.",
    donorPhone: "+91 54321 09876",
    status: "claimed",
    claimedBy: "Delhi Care Foundation",
    postedAt: "2024-01-15T12:00:00Z"
  },
  {
    id: 9,
    title: "Hotel Banquet Surplus",
    donor: "ITC Maurya Hotel",
    location: "Sardar Patel Marg, Delhi",
    quantity: "400 portions",
    expiryTime: "6 hours",
    category: "Cooked Food",
    description: "5-star banquet food: live counter items, continental dishes, Indian curries, desserts, and fresh salads. Premium quality.",
    donorPhone: "+91 55555 66666",
    status: "available",
    postedAt: "2024-01-15T15:15:00Z"
  },
  {
    id: 10,
    title: "Fruit Surplus",
    donor: "Reliance Fresh Store",
    location: "Sector 18, Noida",
    quantity: "80 kg assorted fruits",
    expiryTime: "1 day",
    category: "Fruits",
    description: "Apples, bananas, oranges that are slightly overripe but still nutritious.",
    donorPhone: "+91 65432 10987",
    status: "available",
    postedAt: "2024-01-14T18:20:00Z"
  },
  {
    id: 11,
    title: "Dhaba Food Surplus",
    donor: "Amrik Sukhdev Dhaba",
    location: "NH-1, Murthal",
    quantity: "120 portions",
    expiryTime: "3 hours",
    category: "Cooked Food",
    description: "Authentic Punjabi dhaba food: makki di roti, sarson da saag, chole bhature, lassi, and fresh pickle.",
    donorPhone: "+91 44444 77777",
    status: "available",
    postedAt: "2024-01-15T17:30:00Z"
  },
  {
    id: 12,
    title: "Reception Hall Surplus",
    donor: "Golden Paradise Banquet",
    location: "Rohini, Delhi",
    quantity: "350 portions",
    expiryTime: "4 hours",
    category: "Cooked Food",
    description: "Wedding reception surplus: mix veg, paneer butter masala, rajma, jeera rice, butter naan, raita, and sweets.",
    donorPhone: "+91 33333 88888",
    status: "available",
    postedAt: "2024-01-15T18:45:00Z"
  }
];

export const mockNGOs = [
  {
    id: 1,
    name: "Mumbai Food Angels NGO",
    location: "Mumbai, Maharashtra",
    contact: "+91 98888 12345",
    email: "contact@mumbaiangels.org",
    capacity: "500 meals/day",
    areasServed: ["Bandra", "Andheri", "Malad", "Borivali"],
    verified: true,
    activeRequests: 12
  },
  {
    id: 2,
    name: "Delhi Care Foundation",
    location: "Delhi",
    contact: "+91 97777 23456",
    email: "help@delhicare.org",
    capacity: "800 meals/day",
    areasServed: ["Central Delhi", "South Delhi", "East Delhi"],
    verified: true,
    activeRequests: 8
  },
  {
    id: 3,
    name: "Bangalore Helping Hands",
    location: "Bangalore, Karnataka",
    contact: "+91 96666 34567",
    email: "support@blrhands.org",
    capacity: "300 meals/day",
    areasServed: ["Koramangala", "BTM Layout", "Electronic City"],
    verified: true,
    activeRequests: 15
  }
];

export const mockMarketPrices = [
  {
    id: 1,
    crop: "Wheat",
    currentPrice: 2150,
    unit: "per quintal",
    change: "+2.3%",
    trend: "up",
    market: "APMC Mandi, Delhi",
    lastUpdated: "2024-01-15T14:30:00Z",
    weeklyHigh: 2200,
    weeklyLow: 2050,
    category: "Cereals"
  },
  {
    id: 2,
    crop: "Rice (Basmati)",
    currentPrice: 4500,
    unit: "per quintal",
    change: "-1.2%",
    trend: "down",
    market: "Punjab Mandi",
    lastUpdated: "2024-01-15T14:15:00Z",
    weeklyHigh: 4650,
    weeklyLow: 4400,
    category: "Cereals"
  },
  {
    id: 3,
    crop: "Onion",
    currentPrice: 3200,
    unit: "per quintal",
    change: "+5.8%",
    trend: "up",
    market: "Nashik APMC",
    lastUpdated: "2024-01-15T14:45:00Z",
    weeklyHigh: 3300,
    weeklyLow: 2800,
    category: "Vegetables"
  },
  {
    id: 4,
    crop: "Tomato",
    currentPrice: 2800,
    unit: "per quintal",
    change: "-3.5%",
    trend: "down",
    market: "Bangalore APMC",
    lastUpdated: "2024-01-15T14:20:00Z",
    weeklyHigh: 3200,
    weeklyLow: 2600,
    category: "Vegetables"
  },
  {
    id: 5,
    crop: "Sugarcane",
    currentPrice: 350,
    unit: "per quintal",
    change: "+1.8%",
    trend: "up",
    market: "UP Sugar Mills",
    lastUpdated: "2024-01-15T13:30:00Z",
    weeklyHigh: 365,
    weeklyLow: 340,
    category: "Cash Crops"
  },
  {
    id: 6,
    crop: "Cotton",
    currentPrice: 6200,
    unit: "per quintal",
    change: "+0.5%",
    trend: "stable",
    market: "Gujarat Cotton Market",
    lastUpdated: "2024-01-15T14:00:00Z",
    weeklyHigh: 6350,
    weeklyLow: 6100,
    category: "Cash Crops"
  }
];

export const mockUserProfiles = {
  donor: {
    name: "Rajesh Kumar",
    type: "Restaurant Owner",
    location: "Delhi",
    totalDonations: 45,
    totalKgDonated: 2300,
    joinedDate: "2023-06-15",
    verified: true
  },
  ngo: {
    name: "Mumbai Food Angels NGO",
    registrationNumber: "NGO/2019/MH/12345",
    location: "Mumbai",
    totalClaimed: 234,
    peopleServed: 15600,
    joinedDate: "2019-03-20",
    verified: true,
    areasServed: ["Bandra", "Andheri", "Malad", "Borivali"]
  },
  farmer: {
    name: "Suresh Patel",
    farmLocation: "Rajkot, Gujarat",
    farmSize: "25 acres",
    primaryCrops: ["Cotton", "Groundnut", "Wheat"],
    joinedDate: "2023-01-10",
    verified: true
  }
};

// Mock data for predicted ingredient demand based on NGO activity
export const mockIngredientDemand = {
  weekly: [
    { ingredient: "Rice", demand: 1250, unit: "kg", trend: "+12%", priority: "high" },
    { ingredient: "Wheat Flour", demand: 800, unit: "kg", trend: "+8%", priority: "high" },
    { ingredient: "Onions", demand: 650, unit: "kg", trend: "+15%", priority: "medium" },
    { ingredient: "Potatoes", demand: 550, unit: "kg", trend: "+5%", priority: "medium" },
    { ingredient: "Tomatoes", demand: 450, unit: "kg", trend: "+22%", priority: "high" },
    { ingredient: "Lentils (Dal)", demand: 400, unit: "kg", trend: "+10%", priority: "high" },
    { ingredient: "Cooking Oil", demand: 300, unit: "liters", trend: "+7%", priority: "medium" },
    { ingredient: "Sugar", demand: 250, unit: "kg", trend: "-2%", priority: "low" },
    { ingredient: "Salt", demand: 200, unit: "kg", trend: "+3%", priority: "low" },
    { ingredient: "Spices", demand: 150, unit: "kg", trend: "+18%", priority: "medium" }
  ],
  daily: [
    { day: "Mon", rice: 180, wheat: 120, onions: 95, potatoes: 80, tomatoes: 65 },
    { day: "Tue", rice: 190, wheat: 115, onions: 88, potatoes: 75, tomatoes: 70 },
    { day: "Wed", rice: 175, wheat: 125, onions: 102, potatoes: 85, tomatoes: 60 },
    { day: "Thu", rice: 200, wheat: 110, onions: 90, potatoes: 78, tomatoes: 68 },
    { day: "Fri", rice: 185, wheat: 130, onions: 98, potatoes: 82, tomatoes: 72 },
    { day: "Sat", rice: 195, wheat: 105, onions: 85, potatoes: 90, tomatoes: 58 },
    { day: "Sun", rice: 175, wheat: 95, onions: 92, potatoes: 75, tomatoes: 62 }
  ],
  regional: [
    { region: "Delhi NCR", totalDemand: 2800, topIngredient: "Rice", growth: "+14%" },
    { region: "Mumbai", totalDemand: 2400, topIngredient: "Wheat Flour", growth: "+11%" },
    { region: "Bangalore", totalDemand: 1900, topIngredient: "Rice", growth: "+9%" },
    { region: "Chennai", totalDemand: 1600, topIngredient: "Rice", growth: "+16%" },
    { region: "Kolkata", totalDemand: 1500, topIngredient: "Rice", growth: "+8%" },
    { region: "Hyderabad", totalDemand: 1400, topIngredient: "Rice", growth: "+12%" }
  ],
  monthlyTrends: [
    { month: "Jan", rice: 4200, wheat: 3100, vegetables: 2800, pulses: 1900 },
    { month: "Feb", rice: 4100, wheat: 3200, vegetables: 2900, pulses: 1950 },
    { month: "Mar", rice: 4300, wheat: 3050, vegetables: 3100, pulses: 2000 },
    { month: "Apr", rice: 4450, wheat: 3150, vegetables: 3200, pulses: 2100 },
    { month: "May", rice: 4600, wheat: 3300, vegetables: 3000, pulses: 2050 },
    { month: "Jun", rice: 4800, wheat: 3400, vegetables: 2850, pulses: 2150 },
    { month: "Jul", rice: 5000, wheat: 3500, vegetables: 2950, pulses: 2200 }
  ]
};