import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@/app/src/screens/dashboard/HomeScreen";

const Stack = createNativeStackNavigator();

export default function DashboardStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}