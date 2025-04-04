import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "@/src/screens/auth/login";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}