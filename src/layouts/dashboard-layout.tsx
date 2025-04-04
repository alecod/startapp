import { View } from "react-native";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <View className="flex-1 bg-gray-100 p-4">
      {children}
    </View>
  );
}