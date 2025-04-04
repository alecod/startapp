import { createContext, useContext, useState } from "react";

interface UserData {
  name: string;
  email: string;
  password: string;
}

interface AuthContextType {
  user: UserData;
  login: (userData: UserData) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState({
    name: "Alessandro",
    email: "alessandro@gmail.com",
    password: "12345",
  });

  const login = (userData: UserData) => setUser(userData);
  const logout = () => setUser({ email: "", password: "", name: "" });

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
