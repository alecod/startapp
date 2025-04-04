import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "@/app/src/context/AuthContext";
import AppNavigator from "@/app/src/navigation/AppNavigator";

export default function Index() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}