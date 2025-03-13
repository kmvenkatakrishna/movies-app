import { Text, View } from "react-native";
// Import the global.css file in the index.js file:
import "../global.css";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-5xl text-primary font-bold">Welcome!!</Text>
      <Link href="/onboarding">Onboarding</Link>
      <Link href="/movie/avengers">Avengers</Link>
      <Link href="/movie/batman">Batman</Link>
    </View>
  );
}
