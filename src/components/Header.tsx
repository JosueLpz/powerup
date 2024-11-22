import React from 'react';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="component-container relative min-h-[90vh]" data-component="Header">
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="object-cover w-full h-full opacity-30"
          poster="https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?auto=format&fit=crop&q=80"
        >
          <source
            src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eba0aa30313c29e9a61346f49974dce4824b2&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="child-container relative z-10 h-full" data-component="Hero Content">
        <div className="max-w-4xl mx-auto text-center pt-32 pb-16 px-4">
          <div className="inline-flex items-center gap-2 bg-accent-primary/10 text-accent-primary px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Transforma tu vida hoy</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-accent-primary to-accent-hover bg-clip-text text-transparent">
            Despierta Tu
            <br />
            Máximo Potencial
          </h1>

          <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-2xl mx-auto">
            Desarrolla hábitos poderosos, alcanza tus metas y conviértete en la mejor versión de ti mismo
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/dashboard"
              className="group flex items-center gap-2 bg-accent-primary hover:bg-accent-hover px-8 py-4 rounded-full text-white font-semibold transition-all transform hover:scale-105"
            >
              Comienza Tu Viaje
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/resources"
              className="group flex items-center gap-2 bg-background-header hover:bg-background-header/80 px-8 py-4 rounded-full text-white font-semibold transition-all"
            >
              Explorar Recursos
              <Star className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background-primary to-transparent h-32" />
      </div>

      <div className="child-container absolute bottom-8 left-0 right-0 z-20" data-component="Stats">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Usuarios Activos', value: '10K+' },
              { label: 'Metas Alcanzadas', value: '50K+' },
              { label: 'Recursos', value: '200+' },
              { label: 'Testimonios', value: '5K+' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center bg-background-header/50 backdrop-blur-sm rounded-lg p-4 border border-accent-primary/20"
              >
                <div className="text-2xl md:text-3xl font-bold text-accent-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}