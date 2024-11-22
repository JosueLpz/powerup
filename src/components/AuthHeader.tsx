import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, LogIn, UserPlus, Sparkles } from 'lucide-react';

const loginMessages = [
  "La mejor inversión que puedes hacer eres tú mismo.",
  "Bienvenido de nuevo, ¡vamos con todo!",
  "Tu éxito empieza aquí.",
  "Cada día es una nueva oportunidad.",
  "¡Tu potencial no tiene límites!"
];

const registerMessages = [
  "Vamos a empezar este viaje.",
  "Construyamos tu futuro juntos.",
  "¡Es hora de hacer algo extraordinario!",
  "Tu transformación comienza hoy.",
  "Únete a nuestra comunidad de éxito."
];

const inspirationalTitles = [
  "Transforma tu vida, alcanza tus metas",
  "Da el primer paso hacia tu mejor versión",
  "Crea el futuro que deseas empezar hoy",
  "Convierte tus sueños en metas alcanzables",
  "Redefine tu vida, comienza con pequeños cambios",
  "Desarrolla tu potencial, el éxito está en tus manos"
];

export default function AuthHeader() {
  const [loginMessage, setLoginMessage] = useState('');
  const [registerMessage, setRegisterMessage] = useState('');
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % inspirationalTitles.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getRandomMessage = (messages: string[]) => {
    return messages[Math.floor(Math.random() * messages.length)];
  };

  return (
    <div className="component-container relative min-h-[90vh]" data-component="Auth Header">
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

      <div className="child-container relative z-10" data-component="Auth Content">
        <nav className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <Brain className="w-10 h-10 text-accent-primary" />
              <span className="text-2xl font-bold">Power Up</span>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <motion.button
                  className="flex items-center space-x-2 px-6 py-3 rounded-full bg-background-header hover:bg-accent-primary transition-all duration-300"
                  onHoverStart={() => setLoginMessage(getRandomMessage(loginMessages))}
                  onHoverEnd={() => setLoginMessage('')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <LogIn className="w-5 h-5" />
                  <span>Iniciar Sesión</span>
                </motion.button>
                <AnimatePresence>
                  {loginMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-64 p-3 bg-background-header rounded-lg shadow-lg text-center"
                    >
                      <p className="text-sm">{loginMessage}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="relative">
                <motion.button
                  className="flex items-center space-x-2 px-6 py-3 rounded-full bg-accent-primary hover:bg-accent-hover transition-all duration-300"
                  onHoverStart={() => setRegisterMessage(getRandomMessage(registerMessages))}
                  onHoverEnd={() => setRegisterMessage('')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <UserPlus className="w-5 h-5" />
                  <span>Registrarse</span>
                </motion.button>
                <AnimatePresence>
                  {registerMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-64 p-3 bg-background-header rounded-lg shadow-lg text-center"
                    >
                      <p className="text-sm">{registerMessage}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-4 mt-24 md:mt-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="child-container" 
            data-component="Hero Message"
          >
            <div className="inline-flex items-center gap-2 bg-accent-primary/10 text-accent-primary px-4 py-2 rounded-full mb-8">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Comienza tu transformación</span>
            </div>

            <div className="relative h-[200px] sm:h-[240px] md:h-[280px] mb-8">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentTitleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 20
                    }
                  }}
                  exit={{ 
                    opacity: 0, 
                    y: -20,
                    transition: {
                      duration: 0.3
                    }
                  }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold absolute inset-0 flex items-center justify-center bg-gradient-to-r from-white via-accent-primary to-accent-hover bg-clip-text text-transparent px-4 leading-tight"
                >
                  {inspirationalTitles[currentTitleIndex]}
                </motion.h1>
              </AnimatePresence>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl text-text-secondary mb-12 max-w-2xl mx-auto px-4">
              Únete a nuestra comunidad y descubre herramientas poderosas para tu desarrollo personal
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}