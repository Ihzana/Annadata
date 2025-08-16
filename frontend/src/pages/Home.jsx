import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Heart, Users, BarChart3, MapPin, Clock, Truck } from 'lucide-react';

const Home = () => {
  const stats = [
    { label: 'Food Donations', value: '2,500+', icon: Heart, color: 'text-red-600' },
    { label: 'NGOs Connected', value: '150+', icon: Users, color: 'text-blue-600' },
    { label: 'Farmers Helped', value: '800+', icon: BarChart3, color: 'text-green-600' },
    { label: 'Cities Covered', value: '25+', icon: MapPin, color: 'text-purple-600' },
  ];

  const features = [
    {
      title: 'Food Waste Reduction',
      description: 'Connect surplus food from restaurants and households to NGOs serving the needy',
      icon: Heart,
      color: 'bg-red-50 border-red-200',
      iconColor: 'text-red-600'
    },
    {
      title: 'NGO Network',
      description: 'Verified NGOs can browse and claim food donations in real-time',
      icon: Users,
      color: 'bg-blue-50 border-blue-200',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Price Transparency',
      description: 'Real-time agricultural market prices to help farmers make informed decisions',
      icon: BarChart3,
      color: 'bg-green-50 border-green-200',
      iconColor: 'text-green-600'
    },
    {
      title: 'Location Matching',
      description: 'Smart matching based on proximity for efficient food distribution',
      icon: MapPin,
      color: 'bg-purple-50 border-purple-200',
      iconColor: 'text-purple-600'
    }
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-16 mb-16">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-4 bg-green-100 text-green-800 border-green-300">
            Connecting Food Donors • NGOs • Farmers
          </Badge>
          <h1 className="text-5xl font-bold text-green-800 mb-6 leading-tight">
            Bridging the Gap Between
            <span className="text-orange-600"> Food Waste </span>
            and
            <span className="text-green-600"> Hunger</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Annadata-Setu solves urban food waste while providing price transparency to farmers. 
            Join our mission to create a sustainable food ecosystem across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donor">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
                <Heart className="mr-2 h-5 w-5" />
                Donate Food
              </Button>
            </Link>
            <Link to="/ngo">
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3">
                <Users className="mr-2 h-5 w-5" />
                Find Food Donations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center border-2 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Icon className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
                  <div className="text-3xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">How Annadata-Setu Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className={`${feature.color} border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                <CardHeader className="text-center">
                  <Icon className={`h-12 w-12 mx-auto mb-4 ${feature.iconColor}`} />
                  <CardTitle className="text-lg text-gray-800">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-gradient-to-r from-green-600 to-orange-500 rounded-2xl text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
        <p className="text-xl mb-8 opacity-90">Join thousands of donors, NGOs, and farmers creating positive change</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/farmer">
            <Button size="lg" variant="secondary" className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3">
              <BarChart3 className="mr-2 h-5 w-5" />
              Check Market Prices
            </Button>
          </Link>
          <Link to="/donor">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700 px-8 py-3">
              <Truck className="mr-2 h-5 w-5" />
              Start Donating
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;