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
    id: 4,
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
    id: 5,
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
    verified: true
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