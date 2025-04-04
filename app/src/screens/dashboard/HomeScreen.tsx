import { View, Text, Button } from "react-native";
import DashboardLayout from "@/app/src/layouts/DashboardLayout";
import { useAuth } from "@/app/src/context/AuthContext";

export default function HomeScreen() {


  return (
    <DashboardLayout>
      <View className="flex-1 items-center justify-center bg-gray-900">
        <Text className="text-white text-2xl mb-4">
          Bem-vindo
        </Text>
     
      </View>
    </DashboardLayout>
  );
}
