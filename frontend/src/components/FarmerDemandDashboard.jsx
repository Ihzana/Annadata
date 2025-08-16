import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { WeeklyDemandChart, DailyTrendChart, RegionalDemandChart } from './charts/DemandChart';
import { mockIngredientDemand } from '../mockData';
import { 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  Target, 
  BarChart3, 
  MapPin,
  Calendar,
  Lightbulb,
  Zap
} from 'lucide-react';

const FarmerDemandDashboard = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('weekly');

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-300';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      default: return 'bg-green-100 text-green-800 border-green-300';
    }
  };

  const getTrendIcon = (trend) => {
    const isPositive = trend.startsWith('+');
    return isPositive ? 
      <TrendingUp className="h-4 w-4 text-green-600" /> : 
      <TrendingDown className="h-4 w-4 text-red-600" />;
  };

  const topOpportunities = mockIngredientDemand.weekly
    .filter(item => item.priority === 'high')
    .sort((a, b) => b.demand - a.demand)
    .slice(0, 4);

  const insights = [
    {
      icon: <Zap className="h-5 w-5 text-yellow-600" />,
      title: "High Demand Alert",
      description: "Tomatoes demand increased by 22% - Consider expanding cultivation",
      priority: "high"
    },
    {
      icon: <Target className="h-5 w-5 text-green-600" />,
      title: "Market Opportunity",
      description: "Rice demand steady at 1,250kg/week - Reliable income source",
      priority: "medium"
    },
    {
      icon: <MapPin className="h-5 w-5 text-blue-600" />,
      title: "Regional Focus",
      description: "Delhi NCR shows highest growth (+14%) - Prime market area",
      priority: "medium"
    },
    {
      icon: <Calendar className="h-5 w-5 text-purple-600" />,
      title: "Seasonal Trend",
      description: "Weekly demand patterns show Friday-Sunday peaks",
      priority: "low"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">Ingredient Demand Insights</h2>
            <p className="text-green-100 text-lg">
              AI-powered predictions based on NGO activity and food donation patterns
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">₹2,40,000</div>
            <div className="text-green-200">Potential Monthly Revenue</div>
          </div>
        </div>
      </div>

      {/* Key Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {insights.map((insight, index) => (
          <Card key={index} className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
            <CardContent className="pt-4">
              <div className="flex items-start space-x-3">
                <div className="bg-gray-100 p-2 rounded-lg">
                  {insight.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800">{insight.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{insight.description}</p>
                  <Badge className={`mt-2 ${getPriorityColor(insight.priority)}`}>
                    {insight.priority}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Top Opportunities */}
      <Card className="border-2 border-orange-200 bg-orange-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-800">
            <AlertTriangle className="h-5 w-5" />
            High Demand Opportunities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {topOpportunities.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-orange-200">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-gray-800">{item.ingredient}</h4>
                  {getTrendIcon(item.trend)}
                </div>
                <div className="text-2xl font-bold text-orange-600 mb-1">
                  {item.demand} {item.unit}
                </div>
                <div className="text-sm text-gray-600">
                  Weekly demand • {item.trend} growth
                </div>
                <Badge className="mt-2 bg-orange-100 text-orange-800 border-orange-300">
                  High Priority
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Charts Section */}
      <Tabs value={selectedTimeframe} onValueChange={setSelectedTimeframe} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="weekly" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Weekly Demand
          </TabsTrigger>
          <TabsTrigger value="daily" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Daily Trends
          </TabsTrigger>
          <TabsTrigger value="regional" className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Regional View
          </TabsTrigger>
        </TabsList>

        <TabsContent value="weekly">
          <Card>
            <CardContent className="pt-6">
              <div className="h-96">
                <WeeklyDemandChart data={mockIngredientDemand.weekly} />
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="h-5 w-5 text-blue-600" />
                  <h4 className="font-semibold text-blue-800">Farmer Insight</h4>
                </div>
                <p className="text-blue-700">
                  Rice and wheat flour show the highest demand. Consider allocating 60% of your farmland to these crops 
                  for maximum profitability. Tomatoes have the highest growth trend (+22%) - excellent opportunity for greenhouse farming.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="daily">
          <Card>
            <CardContent className="pt-6">
              <div className="h-96">
                <DailyTrendChart data={mockIngredientDemand.daily} />
              </div>
              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="h-5 w-5 text-green-600" />
                  <h4 className="font-semibold text-green-800">Supply Strategy</h4>
                </div>
                <p className="text-green-700">
                  Peak demand occurs on Thursday and Friday. Plan your harvest and delivery schedule accordingly. 
                  Weekend demand drops slightly - use this time for storage and processing activities.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="regional">
          <Card>
            <CardContent className="pt-6">
              <div className="h-96">
                <RegionalDemandChart data={mockIngredientDemand.regional} />
              </div>
              <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="h-5 w-5 text-purple-600" />
                  <h4 className="font-semibold text-purple-800">Market Expansion</h4>
                </div>
                <p className="text-purple-700">
                  Delhi NCR and Mumbai represent 66% of total demand. Focus your distribution network on these metros. 
                  Chennai shows highest growth rate (+16%) - emerging market opportunity.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Action Items */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-800">
            <Target className="h-5 w-5" />
            Recommended Actions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <h4 className="font-bold text-green-800 mb-2">Immediate (Next Week)</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Harvest existing tomato crop - high demand</li>
                <li>• Contact Delhi NCR NGOs directly</li>
                <li>• Prepare rice inventory for Friday peak</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4 border border-yellow-200">
              <h4 className="font-bold text-yellow-800 mb-2">Short Term (Next Month)</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Plant additional tomato seeds</li>
                <li>• Establish cold storage for vegetables</li>
                <li>• Partner with transportation network</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <h4 className="font-bold text-blue-800 mb-2">Long Term (Next Season)</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Increase rice cultivation by 30%</li>
                <li>• Invest in greenhouse technology</li>
                <li>• Explore value-added processing</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FarmerDemandDashboard;