import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./auth-stack";
import DashboardStack from "./dashboard-stack";
import { useAuth } from "@/src/context/auth-context";

export default function AppNavigator() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user ? <DashboardStack /> : <AuthStack />}
    </NavigationContainer>
  );
}