import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export const WeeklyDemandChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.ingredient),
    datasets: [
      {
        label: 'Predicted Demand (kg)',
        data: data.map(item => item.demand),
        backgroundColor: data.map(item => {
          switch(item.priority) {
            case 'high': return 'rgba(239, 68, 68, 0.8)';
            case 'medium': return 'rgba(245, 158, 11, 0.8)';
            default: return 'rgba(34, 197, 94, 0.8)';
          }
        }),
        borderColor: data.map(item => {
          switch(item.priority) {
            case 'high': return 'rgb(239, 68, 68)';
            case 'medium': return 'rgb(245, 158, 11)';
            default: return 'rgb(34, 197, 94)';
          }
        }),
        borderWidth: 2,
        borderRadius: 6,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 12,
            weight: 'bold'
          }
        }
      },
      title: {
        display: true,
        text: 'Predicted Ingredient Demand - Next 7 Days',
        font: {
          size: 16,
          weight: 'bold'
        },
        color: '#1f2937'
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const item = data[context.dataIndex];
            return [
              `${context.label}: ${context.parsed.y} ${item.unit}`,
              `Trend: ${item.trend}`,
              `Priority: ${item.priority.toUpperCase()}`
            ];
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          font: {
            weight: 'bold'
          },
          callback: function(value) {
            return value + ' kg';
          }
        }
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            weight: 'bold'
          },
          maxRotation: 45,
        }
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export const DailyTrendChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.day),
    datasets: [
      {
        label: 'Rice (kg)',
        data: data.map(item => item.rice),
        borderColor: 'rgb(34, 197, 94)',
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
      {
        label: 'Wheat (kg)',
        data: data.map(item => item.wheat),
        borderColor: 'rgb(245, 158, 11)',
        backgroundColor: 'rgba(245, 158, 11, 0.1)',
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
      {
        label: 'Onions (kg)',
        data: data.map(item => item.onions),
        borderColor: 'rgb(168, 85, 247)',
        backgroundColor: 'rgba(168, 85, 247, 0.1)',
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
      {
        label: 'Tomatoes (kg)',
        data: data.map(item => item.tomatoes),
        borderColor: 'rgb(239, 68, 68)',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          font: {
            size: 12,
            weight: 'bold'
          }
        }
      },
      title: {
        display: true,
        text: 'Daily Demand Trends - This Week',
        font: {
          size: 16,
          weight: 'bold'
        },
        color: '#1f2937'
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          font: {
            weight: 'bold'
          }
        }
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            weight: 'bold'
          }
        }
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export const RegionalDemandChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.region),
    datasets: [
      {
        label: 'Total Demand (kg)',
        data: data.map(item => item.totalDemand),
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(168, 85, 247, 0.8)',
          'rgba(236, 72, 153, 0.8)',
        ],
        borderColor: [
          'rgb(59, 130, 246)',
          'rgb(16, 185, 129)',
          'rgb(245, 158, 11)',
          'rgb(239, 68, 68)',
          'rgb(168, 85, 247)',
          'rgb(236, 72, 153)',
        ],
        borderWidth: 2,
        borderRadius: 6,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 12,
            weight: 'bold'
          }
        }
      },
      title: {
        display: true,
        text: 'Regional Demand Distribution',
        font: {
          size: 16,
          weight: 'bold'
        },
        color: '#1f2937'
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const item = data[context.dataIndex];
            return [
              `${context.label}: ${context.parsed.y} kg`,
              `Top ingredient: ${item.topIngredient}`,
              `Growth: ${item.growth}`
            ];
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          font: {
            weight: 'bold'
          }
        }
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            weight: 'bold'
          },
          maxRotation: 45,
        }
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};