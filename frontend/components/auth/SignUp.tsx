import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function SignupScreen() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (field: any, value: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSignup = () => {
    // Add your signup logic here
    console.log("Signup pressed:", formData);
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
          {/* Header Section */}
          <View className="items-center mb-8">
            <View className="w-24 h-24 bg-blue-500 rounded-full items-center justify-center mb-4">
              <Text className="text-white text-4xl font-bold">S</Text>
            </View>
            <Text className="text-2xl font-bold text-gray-800">
              Create Account
            </Text>
            <Text className="text-gray-500 text-center mt-2">
              Please fill in the details to sign up
            </Text>
          </View>

          {/* Form Section */}
          <View className="space-y-4">
            <View>
              <Text className="text-gray-700 mb-2 font-medium">Full Name</Text>
              <TextInput
                className="bg-gray-50 p-4 rounded-xl border border-gray-200"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChangeText={(value) => handleChange("fullName", value)}
                autoCapitalize="words"
              />
            </View>

            <View>
              <Text className="text-gray-700 mb-2 font-medium">Email</Text>
              <TextInput
                className="bg-gray-50 p-4 rounded-xl border border-gray-200"
                placeholder="Enter your email"
                value={formData.email}
                onChangeText={(value) => handleChange("email", value)}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View>
              <Text className="text-gray-700 mb-2 font-medium">Password</Text>
              <TextInput
                className="bg-gray-50 p-4 rounded-xl border border-gray-200"
                placeholder="Create a password"
                value={formData.password}
                onChangeText={(value) => handleChange("password", value)}
                secureTextEntry
              />
            </View>

            <View>
              <Text className="text-gray-700 mb-2 font-medium">
                Confirm Password
              </Text>
              <TextInput
                className="bg-gray-50 p-4 rounded-xl border border-gray-200"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChangeText={(value) => handleChange("confirmPassword", value)}
                secureTextEntry
              />
            </View>
          </View>

          {/* Signup Button */}
          <TouchableOpacity
            onPress={handleSignup}
            className="bg-blue-500 p-4 rounded-xl mt-8"
          >
            <Text className="text-white text-center font-bold text-lg">
              Sign Up
            </Text>
          </TouchableOpacity>

          {/* Login Link */}
          <View className="flex-row justify-center mt-8">
            <Text className="text-gray-600">Already have an account? </Text>
            <TouchableOpacity>
              <Text className="text-blue-500 font-medium">Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
