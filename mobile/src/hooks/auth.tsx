import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';

interface User {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  loading: boolean;
  updateUser(user: User): Promise<void>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragegData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@gostack_gobarber:user_tokens',
        '@gostack_gobarber:users',
      ]);

      if (token[1] && user[1]) {
        api.defaults.headers.authorization = `Bearer ${token[1]}`;

        setData({ token: token[1], user: JSON.parse(user[1]) });
      }

      setLoading(false);
    }

    loadStoragegData();
  }, []);

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    await AsyncStorage.multiSet([
      ['@gostack_gobarber:user_tokens', token],
      ['@gostack_gobarber:users', JSON.stringify(user)],
    ]);

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove([
      '@gostack_gobarber:user_tokens',
      '@gostack_gobarber:users',
    ]);

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    async (user: User) => {
      await AsyncStorage.setItem('@GoBarber:user', JSON.stringify(user));

      setData({
        token: data.token,
        user,
      });
    },
    [setData, data.token],
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, loading, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
