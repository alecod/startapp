import { View, Text } from "react-native";
import DashboardLayout from "@/src/layouts/dashboard-layout";

export default function HomeScreen() {
  return (
    <DashboardLayout>
      <Text className="text-lg font-bold">Bem-vindo ao Dashboard!</Text>
    </DashboardLayout>
  );
}