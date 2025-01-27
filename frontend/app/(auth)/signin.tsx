import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  StatusBar,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignupScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false); // Toggle for demonstration

  // Color scheme
  const colors = {
    background: isDarkMode ? "#121212" : "#FFFFFF",
    text: isDarkMode ? "#FFFFFF" : "#000000",
    secondaryText: isDarkMode ? "#B0B0B0" : "#666666",
    inputBackground: isDarkMode ? "#333333" : "#F4F4F4",
    inputText: isDarkMode ? "#FFFFFF" : "#000000",
    buttonBackground: isDarkMode ? "#2563EB" : "#3B82F6",
    buttonText: "#FFFFFF",
    placeholderText: isDarkMode ? "#888888" : "#9CA3AF",
  };
  const router = useRouter();
  const handleSignUp = () => {
    // Implement signup logic here
    console.log("Signup pressed");
    router.push("/signup");
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={colors.background}
      />
      <Stack.Screen options={{ headerShown: false }} />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        <View style={styles.content}>
          {/* Logo Section */}
          <View style={styles.logoSection}>
            <Image
              source={require("../../assets/images/logo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={[styles.titleText, { color: colors.text }]}>
              Log In
            </Text>
          </View>

          {/* Hero Image */}
          <View style={styles.heroImageContainer}>
            <Image
              source={require("../../assets/images/logo.png")}
              style={styles.heroImage}
              resizeMode="contain"
            />
          </View>

          {/* Input Fields */}
          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <Text
                style={[styles.inputLabel, { color: colors.secondaryText }]}
              >
                Email Address
              </Text>
              <TextInput
                placeholder="Enter your email"
                placeholderTextColor={colors.placeholderText}
                value={email}
                onChangeText={setEmail}
                style={[
                  styles.input,
                  {
                    backgroundColor: colors.inputBackground,
                    color: colors.inputText,
                  },
                ]}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputWrapper}>
              <Text
                style={[styles.inputLabel, { color: colors.secondaryText }]}
              >
                Password
              </Text>
              <TextInput
                placeholder="Create a strong password"
                placeholderTextColor={colors.placeholderText}
                value={password}
                onChangeText={setPassword}
                style={[
                  styles.input,
                  {
                    backgroundColor: colors.inputBackground,
                    color: colors.inputText,
                  },
                ]}
                secureTextEntry
              />
            </View>

            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: colors.buttonBackground },
              ]}
              onPress={() => {
                // Implement signup logic
                console.log("Signup pressed");
              }}
            >
              <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
          </View>

          {/* Footer */}
          <View style={styles.footerContainer}>
            <Text style={[styles.footerText, { color: colors.secondaryText }]}>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={handleSignUp}>
              <Text
                style={[styles.loginText, { color: colors.buttonBackground }]}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>

          {/* Dark Mode Toggle (for demonstration) */}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 48,
  },
  logoSection: {
    alignItems: "center",
    marginBottom: 32,
  },
  logo: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "red",
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16,
  },
  subtitleText: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 8,
  },
  heroImageContainer: {
    alignItems: "center",
    marginBottom: 32,
  },
  heroImage: {
    width: "100%",
    height: 192,
  },
  inputContainer: {
    gap: 16,
  },
  inputWrapper: {
    gap: 8,
  },
  inputLabel: {
    fontSize: 14,
  },
  input: {
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
  },
  button: {
    borderRadius: 8,
    paddingVertical: 16,
    marginTop: 16,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 24,
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
  },
  loginText: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 8,
  },
  darkModeToggle: {
    position: "absolute",
    bottom: 16,
    alignSelf: "center",
  },
});
