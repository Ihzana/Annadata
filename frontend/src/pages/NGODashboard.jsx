import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { useToast } from '../hooks/use-toast';
import { mockFoodDonations, mockUserProfiles } from '../mockData';
import { Search, MapPin, Clock, Phone, Package, Users, Heart, Filter } from 'lucide-react';

const NGODashboard = () => {
  const [donations, setDonations] = useState(mockFoodDonations);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('available');
  const { toast } = useToast();
  const userProfile = mockUserProfiles.ngo;

  const handleClaimDonation = (donationId) => {
    setDonations(prev => prev.map(donation => 
      donation.id === donationId 
        ? { ...donation, status: 'claimed', claimedBy: userProfile.name }
        : donation
    ));
    
    toast({
      title: "Donation Claimed Successfully!",
      description: "You can now coordinate with the donor to collect the food.",
    });
  };

  const filteredDonations = donations.filter(donation => {
    const matchesSearch = donation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         donation.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         donation.donor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || donation.category === filterCategory;
    const matchesStatus = filterStatus === 'all' || donation.status === filterStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'available': return 'bg-green-100 text-green-800';
      case 'claimed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Vegetables': return 'bg-green-50 text-green-700 border-green-200';
      case 'Cooked Food': return 'bg-orange-50 text-orange-700 border-orange-200';
      case 'Bakery': return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      case 'Fruits': return 'bg-red-50 text-red-700 border-red-200';
      default: return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  const getUrgencyColor = (expiryTime) => {
    const hours = parseInt(expiryTime);
    if (hours <= 2) return 'text-red-600';
    if (hours <= 4) return 'text-orange-600';
    return 'text-green-600';
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-green-800">NGO Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome, {userProfile.name}!</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="border-blue-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Claimed</p>
                <p className="text-3xl font-bold text-blue-600">{userProfile.totalClaimed}</p>
              </div>
              <Package className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-green-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">People Served</p>
                <p className="text-3xl font-bold text-green-600">{userProfile.peopleServed.toLocaleString()}</p>
              </div>
              <Users className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-orange-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Available Now</p>
                <p className="text-3xl font-bold text-orange-600">{donations.filter(d => d.status === 'available').length}</p>
              </div>
              <Heart className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-purple-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Areas Served</p>
                <p className="text-3xl font-bold text-purple-600">{userProfile.areasServed.length}</p>
              </div>
              <MapPin className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search by food type, location, or donor..."
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
                  <SelectItem value="Vegetables">Vegetables</SelectItem>
                  <SelectItem value="Fruits">Fruits</SelectItem>
                  <SelectItem value="Cooked Food">Cooked Food</SelectItem>
                  <SelectItem value="Bakery">Bakery Items</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="available">Available</SelectItem>
                  <SelectItem value="claimed">Claimed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Food Donations List */}
      <Card>
        <CardHeader>
          <CardTitle className="text-green-800 flex items-center gap-2">
            <Package className="h-5 w-5" />
            Available Food Donations ({filteredDonations.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredDonations.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <Package className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No donations found matching your criteria.</p>
              </div>
            ) : (
              filteredDonations.map((donation) => (
                <div key={donation.id} className="border rounded-lg p-6 hover:shadow-lg transition-all duration-200">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-xl text-gray-800">{donation.title}</h3>
                        <Badge className={getCategoryColor(donation.category)}>
                          {donation.category}
                        </Badge>
                        <Badge className={getStatusColor(donation.status)}>
                          {donation.status}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600 mb-3">
                        <span className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          <strong>Donor:</strong> {donation.donor}
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <strong>Location:</strong> {donation.location}
                        </span>
                        <span className="flex items-center gap-2">
                          <Package className="h-4 w-4" />
                          <strong>Quantity:</strong> {donation.quantity}
                        </span>
                        <span className={`flex items-center gap-2 font-semibold ${getUrgencyColor(donation.expiryTime)}`}>
                          <Clock className="h-4 w-4" />
                          <strong>Available for:</strong> {donation.expiryTime}
                        </span>
                      </div>
                      
                      <p className="text-gray-700 mb-3 leading-relaxed">{donation.description}</p>
                      
                      <div className="flex items-center gap-2 text-sm text-blue-600">
                        <Phone className="h-4 w-4" />
                        <strong>Contact:</strong> {donation.donorPhone}
                      </div>
                    </div>
                    
                    <div className="ml-4">
                      {donation.status === 'available' ? (
                        <Button 
                          onClick={() => handleClaimDonation(donation.id)}
                          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2"
                        >
                          <Heart className="mr-2 h-4 w-4" />
                          Claim Donation
                        </Button>
                      ) : (
                        <div className="text-center">
                          <Badge className="bg-blue-100 text-blue-800 mb-2">
                            Already Claimed
                          </Badge>
                          {donation.claimedBy && (
                            <p className="text-xs text-gray-600">
                              by {donation.claimedBy}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {donation.status === 'claimed' && donation.claimedBy === userProfile.name && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-4">
                      <p className="text-green-800 font-medium text-sm">
                        ✅ You have claimed this donation. Please coordinate with the donor for pickup.
                      </p>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NGODashboard;