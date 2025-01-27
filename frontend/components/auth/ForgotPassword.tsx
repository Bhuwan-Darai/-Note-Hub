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

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleResetPassword = () => {
    // Add your password reset logic here
    console.log("Reset password for:", email);
    setIsEmailSent(true);
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
              <Text className="text-white text-4xl font-bold">R</Text>
            </View>
            <Text className="text-2xl font-bold text-gray-800">
              Reset Password
            </Text>
            <Text className="text-gray-500 text-center mt-2">
              Enter your email to receive reset instructions
            </Text>
          </View>

          {!isEmailSent ? (
            <>
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
              </View>

              {/* Reset Button */}
              <TouchableOpacity
                onPress={handleResetPassword}
                className="bg-blue-500 p-4 rounded-xl mt-8"
              >
                <Text className="text-white text-center font-bold text-lg">
                  Send Reset Link
                </Text>
              </TouchableOpacity>
            </>
          ) : (
            /* Success Message */
            <View className="items-center">
              <View className="w-16 h-16 bg-green-500 rounded-full items-center justify-center mb-4">
                <Text className="text-white text-2xl">✓</Text>
              </View>
              <Text className="text-xl font-bold text-gray-800 mb-2">
                Email Sent!
              </Text>
              <Text className="text-gray-500 text-center mb-8">
                Please check your email for password reset instructions
              </Text>
              <TouchableOpacity
                onPress={() => setIsEmailSent(false)}
                className="bg-blue-500 p-4 rounded-xl w-full"
              >
                <Text className="text-white text-center font-bold text-lg">
                  Try Different Email
                </Text>
              </TouchableOpacity>
            </View>
          )}

          {/* Back to Login */}
          <View className="flex-row justify-center mt-8">
            <Text className="text-gray-600">Remember your password? </Text>
            <TouchableOpacity>
              <Text className="text-blue-500 font-medium">Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
