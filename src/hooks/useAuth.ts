import create from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  user: null | { id: string; name: string };
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const useAuth = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: async (email: string, password: string) => {
    // TODO: Implement actual login logic
    set({ isAuthenticated: true, user: { id: '1', name: 'Usuario Demo' } });
  },
  logout: () => set({ isAuthenticated: false, user: null }),
}));

export default useAuth;