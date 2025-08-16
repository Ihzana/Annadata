import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Badge } from '../components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { useToast } from '../hooks/use-toast';
import { mockFoodDonations, mockUserProfiles } from '../mockData';
import { Plus, MapPin, Clock, Phone, Package, TrendingUp } from 'lucide-react';

const DonorDashboard = () => {
  const [donations, setDonations] = useState(mockFoodDonations.filter(d => d.donor.includes('Restaurant') || d.donor.includes('Bakery') || d.donor.includes('Store')));
  const [newDonation, setNewDonation] = useState({
    title: '',
    quantity: '',
    location: '',
    expiryTime: '',
    category: '',
    description: '',
    donorPhone: '+91 '
  });
  const [showAddForm, setShowAddForm] = useState(false);
  const { toast } = useToast();
  const userProfile = mockUserProfiles.donor;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const donation = {
      id: donations.length + 1,
      ...newDonation,
      donor: userProfile.name,
      status: 'available',
      postedAt: new Date().toISOString()
    };
    
    setDonations([donation, ...donations]);
    setNewDonation({
      title: '',
      quantity: '',
      location: '',
      expiryTime: '',
      category: '',
      description: '',
      donorPhone: '+91 '
    });
    setShowAddForm(false);
    
    toast({
      title: "Donation Posted Successfully!",
      description: "Your food donation is now visible to NGOs in your area.",
    });
  };

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

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-green-800">Food Donor Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back, {userProfile.name}!</p>
        </div>
        <Dialog open={showAddForm} onOpenChange={setShowAddForm}>
          <DialogTrigger asChild>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">
              <Plus className="mr-2 h-4 w-4" />
              Add Food Donation
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-green-800">Create New Food Donation</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">Food Title</Label>
                  <Input
                    id="title"
                    value={newDonation.title}
                    onChange={(e) => setNewDonation({...newDonation, title: e.target.value})}
                    placeholder="e.g., Fresh Vegetables"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select value={newDonation.category} onValueChange={(value) => setNewDonation({...newDonation, category: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Vegetables">Vegetables</SelectItem>
                      <SelectItem value="Fruits">Fruits</SelectItem>
                      <SelectItem value="Cooked Food">Cooked Food</SelectItem>
                      <SelectItem value="Bakery">Bakery Items</SelectItem>
                      <SelectItem value="Dairy">Dairy Products</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input
                    id="quantity"
                    value={newDonation.quantity}
                    onChange={(e) => setNewDonation({...newDonation, quantity: e.target.value})}
                    placeholder="e.g., 50 kg, 100 portions"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="expiryTime">Available For</Label>
                  <Select value={newDonation.expiryTime} onValueChange={(value) => setNewDonation({...newDonation, expiryTime: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2 hours">2 hours</SelectItem>
                      <SelectItem value="4 hours">4 hours</SelectItem>
                      <SelectItem value="6 hours">6 hours</SelectItem>
                      <SelectItem value="1 day">1 day</SelectItem>
                      <SelectItem value="2 days">2 days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={newDonation.location}
                    onChange={(e) => setNewDonation({...newDonation, location: e.target.value})}
                    placeholder="e.g., Connaught Place, Delhi"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Contact Phone</Label>
                  <Input
                    id="phone"
                    value={newDonation.donorPhone}
                    onChange={(e) => setNewDonation({...newDonation, donorPhone: e.target.value})}
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={newDonation.description}
                  onChange={(e) => setNewDonation({...newDonation, description: e.target.value})}
                  placeholder="Describe the food items, preparation details, storage conditions..."
                  rows={3}
                  required
                />
              </div>
              
              <div className="flex gap-2">
                <Button type="submit" className="bg-green-600 hover:bg-green-700 flex-1">
                  Post Donation
                </Button>
                <Button type="button" variant="outline" onClick={() => setShowAddForm(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="border-green-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Donations</p>
                <p className="text-3xl font-bold text-green-600">{userProfile.totalDonations}</p>
              </div>
              <Package className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-orange-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Food Donated</p>
                <p className="text-3xl font-bold text-orange-600">{userProfile.totalKgDonated} kg</p>
              </div>
              <TrendingUp className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-blue-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Listings</p>
                <p className="text-3xl font-bold text-blue-600">{donations.filter(d => d.status === 'available').length}</p>
              </div>
              <Clock className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-purple-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Claimed</p>
                <p className="text-3xl font-bold text-purple-600">{donations.filter(d => d.status === 'claimed').length}</p>
              </div>
              <Package className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Donations List */}
      <Card>
        <CardHeader>
          <CardTitle className="text-green-800">Your Food Donations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {donations.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <Package className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No donations posted yet. Click "Add Food Donation" to get started.</p>
              </div>
            ) : (
              donations.map((donation) => (
                <div key={donation.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">{donation.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {donation.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {donation.expiryTime} left
                        </span>
                        <span className="flex items-center gap-1">
                          <Phone className="h-4 w-4" />
                          {donation.donorPhone}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Badge className={getCategoryColor(donation.category)}>
                        {donation.category}
                      </Badge>
                      <Badge className={getStatusColor(donation.status)}>
                        {donation.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-3">{donation.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-green-600">Quantity: {donation.quantity}</span>
                    {donation.status === 'claimed' && (
                      <span className="text-sm text-blue-600">
                        Claimed by: {donation.claimedBy}
                      </span>
                    )}
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

export default DonorDashboard;