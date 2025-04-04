import { View, Text } from "react-native";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <View className="flex-1 justify-center items-center bg-gray-900 p-6">
      <Text className="text-white text-2xl font-bold mb-4">Bem-vindo</Text>
      {children}
    </View>
  );
}