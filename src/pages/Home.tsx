import React from 'react';
import { ArrowRight, Target, Brain, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="component-container" data-component="Home Page">
      <header className="child-container text-center space-y-4" data-component="Hero Section">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-accent-primary to-accent-hover bg-clip-text text-transparent">
          Power Up Tu Vida
        </h1>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
          Descubre tu potencial y alcanza tus metas con nuestra plataforma de desarrollo personal
        </p>
      </header>

      <section className="child-container grid md:grid-cols-3 gap-8 mt-12" data-component="Features Grid">
        <div className="bg-background-header p-6 rounded-lg shadow-custom hover:transform hover:scale-105 transition-all">
          <Target className="w-12 h-12 text-accent-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Establece Metas</h3>
          <p className="text-text-secondary">Define objetivos claros y alcanzables para tu desarrollo personal</p>
        </div>

        <div className="bg-background-header p-6 rounded-lg shadow-custom hover:transform hover:scale-105 transition-all">
          <Brain className="w-12 h-12 text-accent-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Aprende y Crece</h3>
          <p className="text-text-secondary">Accede a recursos exclusivos para potenciar tu desarrollo</p>
        </div>

        <div className="bg-background-header p-6 rounded-lg shadow-custom hover:transform hover:scale-105 transition-all">
          <TrendingUp className="w-12 h-12 text-accent-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Mide tu Progreso</h3>
          <p className="text-text-secondary">Visualiza tu evolución y celebra tus logros</p>
        </div>
      </section>

      <div className="child-container text-center mt-12" data-component="CTA Section">
        <Link 
          to="/dashboard" 
          className="inline-flex items-center gap-2 bg-accent-primary hover:bg-accent-hover px-8 py-3 rounded-full text-white font-semibold transition-colors"
        >
          Comienza Ahora
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

      <section className="child-container mt-24 relative" data-component="Why Us Section">
        <div className="absolute inset-0 bg-gradient-to-b from-background-primary to-accent-primary opacity-10 rounded-xl"></div>
        <div className="relative bg-background-header rounded-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6">¿Por qué elegirnos?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Seguimiento Personalizado</h3>
              <p className="text-text-secondary">Análisis detallado de tu progreso y recomendaciones personalizadas</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Comunidad Activa</h3>
              <p className="text-text-secondary">Conecta con personas que comparten tus objetivos y motivación</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}