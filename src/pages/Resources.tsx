import React from 'react';
import { BookOpen, Video, FileText, ExternalLink } from 'lucide-react';

const resources = [
  {
    id: 1,
    title: 'Guía de Meditación para Principiantes',
    type: 'article',
    description: 'Aprende los fundamentos de la meditación y mindfulness',
    duration: '10 min lectura',
    difficulty: 'Principiante'
  },
  {
    id: 2,
    title: 'Técnicas de Productividad',
    type: 'video',
    description: 'Metodologías probadas para mejorar tu productividad diaria',
    duration: '15 min video',
    difficulty: 'Intermedio'
  },
  {
    id: 3,
    title: 'Desarrollo de Hábitos Positivos',
    type: 'guide',
    description: 'Guía completa para crear y mantener hábitos saludables',
    duration: '20 min lectura',
    difficulty: 'Avanzado'
  }
];

const getIcon = (type: string) => {
  switch (type) {
    case 'article':
      return <FileText className="w-6 h-6" />;
    case 'video':
      return <Video className="w-6 h-6" />;
    case 'guide':
      return <BookOpen className="w-6 h-6" />;
    default:
      return <FileText className="w-6 h-6" />;
  }
};

export default function Resources() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Recursos</h1>
        <div className="flex space-x-4">
          <select className="bg-background-header text-text-primary px-4 py-2 rounded-lg border border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary">
            <option value="">Todos los tipos</option>
            <option value="article">Artículos</option>
            <option value="video">Videos</option>
            <option value="guide">Guías</option>
          </select>
          <select className="bg-background-header text-text-primary px-4 py-2 rounded-lg border border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary">
            <option value="">Todos los niveles</option>
            <option value="beginner">Principiante</option>
            <option value="intermediate">Intermedio</option>
            <option value="advanced">Avanzado</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <div key={resource.id} className="bg-background-header p-6 rounded-lg shadow-custom hover:transform hover:scale-105 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="text-accent-primary">
                {getIcon(resource.type)}
              </div>
              <span className="text-sm text-text-secondary">{resource.duration}</span>
            </div>
            
            <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
            <p className="text-text-secondary mb-4">{resource.description}</p>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-accent-primary">{resource.difficulty}</span>
              <button className="flex items-center space-x-2 text-accent-primary hover:text-accent-hover transition-colors">
                <span>Acceder</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}