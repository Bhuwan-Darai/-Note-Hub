import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add your login logic here
    console.log("Login pressed:", { email, password });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-white"
    >
      <StatusBar style="dark" />
      <ScrollView
        className="flex-grow justify-center"
        keyboardShouldPersistTaps="handled"
      >
        <View className="p-8">
          {/* Logo/Header Section */}
          <View className="items-center mb-8">
            <View className="w-24 h-24 bg-blue-500 rounded-full items-center justify-center mb-4">
              <Text className="text-white text-4xl font-bold">L</Text>
            </View>
            <Text className="text-2xl font-bold text-gray-800">
              Welcome Back
            </Text>
            <Text className="text-gray-500 text-center mt-2">
              Please sign in to continue
            </Text>
          </View>

          {/* Form Section */}
          <View className="space-y-4">
            <View>
              <Text className="text-gray-700 mb-2 font-medium">Email</Text>
              <TextInput
                className="bg-gray-50 p-4 rounded-xl border border-gray-200"
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View>
              <Text className="text-gray-700 mb-2 font-medium">Password</Text>
              <TextInput
                className="bg-gray-50 p-4 rounded-xl border border-gray-200"
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>

            <TouchableOpacity>
              <Text className="text-blue-500 text-right font-medium">
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>

          {/* Login Button */}
          <TouchableOpacity
            onPress={handleLogin}
            className="bg-blue-500 p-4 rounded-xl mt-8"
          >
            <Text className="text-white text-center font-bold text-lg">
              Log In
            </Text>
          </TouchableOpacity>

          {/* Sign Up Section */}
          <View className="flex-row justify-center mt-8">
            <Text className="text-gray-600">Don't have an account? </Text>
            <TouchableOpacity>
              <Text className="text-blue-500 font-medium">Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
