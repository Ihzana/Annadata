import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { mockMarketPrices, mockUserProfiles } from '../mockData';
import { Search, TrendingUp, TrendingDown, Minus, BarChart3, MapPin, Clock, Filter, Wheat } from 'lucide-react';

const FarmerDashboard = () => {
  const [prices, setPrices] = useState(mockMarketPrices);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [sortBy, setSortBy] = useState('crop');
  const userProfile = mockUserProfiles.farmer;

  const filteredAndSortedPrices = prices
    .filter(price => {
      const matchesSearch = price.crop.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           price.market.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = filterCategory === 'all' || price.category === filterCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-high':
          return b.currentPrice - a.currentPrice;
        case 'price-low':
          return a.currentPrice - b.currentPrice;
        case 'change':
          return parseFloat(b.change) - parseFloat(a.change);
        default:
          return a.crop.localeCompare(b.crop);
      }
    });

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-4 w-4 text-green-600" />;
      case 'down':
        return <TrendingDown className="h-4 w-4 text-red-600" />;
      default:
        return <Minus className="h-4 w-4 text-gray-600" />;
    }
  };

  const getTrendColor = (trend, change) => {
    const changeValue = parseFloat(change);
    if (trend === 'up' || changeValue > 0) return 'text-green-600 bg-green-50';
    if (trend === 'down' || changeValue < 0) return 'text-red-600 bg-red-50';
    return 'text-gray-600 bg-gray-50';
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Cereals': return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      case 'Vegetables': return 'bg-green-50 text-green-700 border-green-200';
      case 'Cash Crops': return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Fruits': return 'bg-red-50 text-red-700 border-red-200';
      default: return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatTime = (timeString) => {
    return new Date(timeString).toLocaleString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      day: '2-digit',
      month: 'short'
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-green-800">Farmer Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome, {userProfile.name} from {userProfile.farmLocation}</p>
      </div>

      {/* Profile Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="border-green-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Farm Size</p>
                <p className="text-3xl font-bold text-green-600">{userProfile.farmSize}</p>
              </div>
              <MapPin className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-blue-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Crops Grown</p>
                <p className="text-3xl font-bold text-blue-600">{userProfile.primaryCrops.length}</p>
              </div>
              <Wheat className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-orange-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Markets Tracked</p>
                <p className="text-3xl font-bold text-orange-600">{prices.length}</p>
              </div>
              <BarChart3 className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-purple-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Member Since</p>
                <p className="text-lg font-bold text-purple-600">{new Date(userProfile.joinedDate).getFullYear()}</p>
              </div>
              <Clock className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Primary Crops */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-green-800">Your Primary Crops</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {userProfile.primaryCrops.map((crop, index) => {
              const priceData = prices.find(p => p.crop.toLowerCase().includes(crop.toLowerCase()));
              return (
                <Badge 
                  key={index} 
                  className="px-4 py-2 text-sm bg-green-100 text-green-800 border-green-300"
                >
                  {crop}
                  {priceData && (
                    <span className="ml-2 font-bold">
                      {formatCurrency(priceData.currentPrice)}
                    </span>
                  )}
                </Badge>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Search and Filters */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search crops or markets..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="flex gap-2">
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-40">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Cereals">Cereals</SelectItem>
                  <SelectItem value="Vegetables">Vegetables</SelectItem>
                  <SelectItem value="Cash Crops">Cash Crops</SelectItem>
                  <SelectItem value="Fruits">Fruits</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="crop">Sort by Crop</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="change">By Price Change</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Market Prices */}
      <Card>
        <CardHeader>
          <CardTitle className="text-green-800 flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Live Market Prices ({filteredAndSortedPrices.length} crops)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredAndSortedPrices.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <BarChart3 className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No price data found matching your criteria.</p>
              </div>
            ) : (
              filteredAndSortedPrices.map((price) => (
                <div key={price.id} className="border rounded-lg p-6 hover:shadow-lg transition-all duration-200">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-xl text-gray-800">{price.crop}</h3>
                        <Badge className={getCategoryColor(price.category)}>
                          {price.category}
                        </Badge>
                        <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-sm font-medium ${getTrendColor(price.trend, price.change)}`}>
                          {getTrendIcon(price.trend)}
                          <span>{price.change}</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600 mb-3">
                        <div>
                          <span className="font-medium text-gray-800">Current Price:</span>
                          <p className="text-2xl font-bold text-green-600">
                            {formatCurrency(price.currentPrice)}
                            <span className="text-sm font-normal text-gray-500 ml-1">{price.unit}</span>
                          </p>
                        </div>
                        
                        <div>
                          <span className="font-medium text-gray-800">Weekly Range:</span>
                          <p className="text-lg">
                            <span className="text-red-600">{formatCurrency(price.weeklyLow)}</span>
                            <span className="mx-2">-</span>
                            <span className="text-green-600">{formatCurrency(price.weeklyHigh)}</span>
                          </p>
                        </div>
                        
                        <div>
                          <span className="font-medium text-gray-800 flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            Market:
                          </span>
                          <p className="font-medium">{price.market}</p>
                        </div>
                        
                        <div>
                          <span className="font-medium text-gray-800 flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            Updated:
                          </span>
                          <p className="font-medium">{formatTime(price.lastUpdated)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Price Analysis */}
                  <div className="bg-gray-50 rounded-lg p-4 mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <p className="text-gray-600">vs. Weekly Low</p>
                        <p className={`font-bold ${price.currentPrice > price.weeklyLow ? 'text-green-600' : 'text-red-600'}`}>
                          {((price.currentPrice - price.weeklyLow) / price.weeklyLow * 100).toFixed(1)}%
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-600">vs. Weekly High</p>
                        <p className={`font-bold ${price.currentPrice < price.weeklyHigh ? 'text-red-600' : 'text-green-600'}`}>
                          {((price.currentPrice - price.weeklyHigh) / price.weeklyHigh * 100).toFixed(1)}%
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-600">Market Position</p>
                        <p className="font-bold text-blue-600">
                          {price.currentPrice === price.weeklyHigh ? 'At Peak' : 
                           price.currentPrice === price.weeklyLow ? 'At Low' : 'Mid-Range'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FarmerDashboard;