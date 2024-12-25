"use client";
import { createContext, useState, useContext, ReactNode } from 'react';

interface AuthContextType {
  token: string | null;
  setToken: (token: string | null) => void;
  userdata: Object | null;
  setuserdata: (data: Object | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>("weee youceff ");
  const [userdata, setuserdata] = useState<Object | null>({
    data: {
      email: "exemple@gmail.com" ,
      first_name: "youcef", 
      last_name: "bouzidi", 
      phone: "0555555555", 
    }
  });

  return (
    <AuthContext.Provider value={{ token, setToken, userdata, setuserdata }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};