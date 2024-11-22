import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, Loader2 } from 'lucide-react';
import useAuth from '../hooks/useAuth';

interface AuthPopupsProps {
  isLoginOpen: boolean;
  isRegisterOpen: boolean;
  onCloseLogin: () => void;
  onCloseRegister: () => void;
}

export default function AuthPopups({ 
  isLoginOpen, 
  isRegisterOpen, 
  onCloseLogin, 
  onCloseRegister 
}: AuthPopupsProps) {
  const [isLoading, setIsLoading] = React.useState(false);
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await login('demo@example.com', 'password');
      onCloseLogin();
    } catch (error) {
      console.error('Login failed:', error);
    }
    setIsLoading(false);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate registration
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    onCloseRegister();
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: -20
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 20,
      transition: {
        duration: 0.2
      }
    }
  };

  const inputClasses = "w-full bg-background-primary border border-accent-primary/20 rounded-lg px-4 py-3 text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-primary/50 transition-all";
  const buttonClasses = "w-full bg-accent-primary hover:bg-accent-hover text-white font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <>
      <AnimatePresence>
        {isLoginOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
          >
            <motion.div
              className="bg-background-header w-full max-w-md rounded-2xl p-8 relative"
              variants={modalVariants}
            >
              <button
                onClick={onCloseLogin}
                className="absolute right-4 top-4 text-text-secondary hover:text-text-primary transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <h2 className="text-2xl font-bold mb-6">Iniciar Sesión</h2>
              
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
                    <input
                      type="email"
                      placeholder="tu@email.com"
                      className={`${inputClasses} pl-12`}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Contraseña</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
                    <input
                      type="password"
                      placeholder="••••••••"
                      className={`${inputClasses} pl-12`}
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className={buttonClasses}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Iniciando sesión...
                    </>
                  ) : (
                    'Iniciar Sesión'
                  )}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isRegisterOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
          >
            <motion.div
              className="bg-background-header w-full max-w-md rounded-2xl p-8 relative"
              variants={modalVariants}
            >
              <button
                onClick={onCloseRegister}
                className="absolute right-4 top-4 text-text-secondary hover:text-text-primary transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <h2 className="text-2xl font-bold mb-6">Crear Cuenta</h2>
              
              <form onSubmit={handleRegister} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nombre</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
                    <input
                      type="text"
                      placeholder="Tu nombre"
                      className={`${inputClasses} pl-12`}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
                    <input
                      type="email"
                      placeholder="tu@email.com"
                      className={`${inputClasses} pl-12`}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Contraseña</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
                    <input
                      type="password"
                      placeholder="••••••••"
                      className={`${inputClasses} pl-12`}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Confirmar Contraseña</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
                    <input
                      type="password"
                      placeholder="••••••••"
                      className={`${inputClasses} pl-12`}
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className={buttonClasses}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Creando cuenta...
                    </>
                  ) : (
                    'Crear Cuenta'
                  )}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}