import AuthStack from "./AuthStack";
import DashboardStack from "./DashboardStack";
import { useAuth } from "@/app/src/context/AuthContext";

export default function AppNavigator() {
  const { user } = useAuth();

  return user ? <DashboardStack /> : <AuthStack />;
}