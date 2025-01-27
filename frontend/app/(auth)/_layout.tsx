import { Redirect, Stack } from "expo-router";
import { useAuth } from "../context/AuthContext";

export default function AuthLayout() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Redirect href="/(tabs)" />;
  }
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Hide the header for all auth screens
      }}
      initialRouteName="signin" // Set "signin" as the initial route
    >
      <Stack.Screen name="signin" />
      <Stack.Screen name="signup" />
      <Stack.Screen name="forgot-password" />
    </Stack>
  );
}
