import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Target, Award, BookOpen } from 'lucide-react';

const mockData = [
  { name: 'Lun', progreso: 4 },
  { name: 'Mar', progreso: 3 },
  { name: 'Mie', progreso: 5 },
  { name: 'Jue', progreso: 6 },
  { name: 'Vie', progreso: 4 },
  { name: 'Sab', progreso: 7 },
  { name: 'Dom', progreso: 8 },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-background-header p-6 rounded-lg shadow-custom">
          <div className="flex items-center space-x-4">
            <Target className="w-8 h-8 text-accent-primary" />
            <div>
              <h3 className="text-lg font-semibold">Metas Activas</h3>
              <p className="text-2xl font-bold">3</p>
            </div>
          </div>
        </div>

        <div className="bg-background-header p-6 rounded-lg shadow-custom">
          <div className="flex items-center space-x-4">
            <Award className="w-8 h-8 text-accent-primary" />
            <div>
              <h3 className="text-lg font-semibold">Logros</h3>
              <p className="text-2xl font-bold">12</p>
            </div>
          </div>
        </div>

        <div className="bg-background-header p-6 rounded-lg shadow-custom">
          <div className="flex items-center space-x-4">
            <BookOpen className="w-8 h-8 text-accent-primary" />
            <div>
              <h3 className="text-lg font-semibold">Recursos Completados</h3>
              <p className="text-2xl font-bold">8</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-background-header p-6 rounded-lg shadow-custom">
        <h2 className="text-xl font-semibold mb-4">Progreso Semanal</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#A9A9A9" />
              <YAxis stroke="#A9A9A9" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F1F1F',
                  border: '1px solid #374151'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="progreso" 
                stroke="#8A2BE2" 
                strokeWidth={2}
                dot={{ fill: '#8A2BE2' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}