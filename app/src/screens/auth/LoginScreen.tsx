import { View, Text, TextInput, Button } from "react-native";
import AuthLayout from "@/app/src/layouts/AuthLayout";

export default function LoginScreen() {
  return (
    <AuthLayout>
      <View className="w-full max-w-md">
        <Text className="text-white text-lg mb-2">E-mail</Text>
        <TextInput className="bg-white w-full p-2 rounded mb-4" placeholder="Digite seu e-mail" />
        
        <Text className="text-white text-lg mb-2">Senha</Text>
        <TextInput className="bg-white w-full p-2 rounded mb-4" placeholder="Digite sua senha" secureTextEntry />

        <Button title="Entrar" onPress={() => {}} />
      </View>
    </AuthLayout>
  );
}