import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import useAuth from './hooks/useAuth';
import Navbar from './components/Navbar';
import AuthHeader from './components/AuthHeader';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Progress from './pages/Progress';
import Resources from './pages/Resources';
import ProtectedRoute from './components/ProtectedRoute';

const queryClient = new QueryClient();

export default function App() {
  const { isAuthenticated } = useAuth();
  const isHomePage = window.location.pathname === '/';

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-background-primary text-text-primary">
          {isAuthenticated ? (
            <>
              <Navbar />
              {isHomePage && <AuthHeader />}
            </>
          ) : (
            <AuthHeader />
          )}
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route path="/progress" element={
                <ProtectedRoute>
                  <Progress />
                </ProtectedRoute>
              } />
              <Route path="/resources" element={<Resources />} />
            </Routes>
          </main>
        </div>
      </Router>
    </QueryClientProvider>
  );
}