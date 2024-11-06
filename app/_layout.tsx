import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import {MD2DarkTheme, MD2LightTheme, PaperProvider} from 'react-native-paper';
import { useColorScheme } from '@/hooks/useColorScheme';
import {
  RNMLKitFaceDetectionContextProvider,
} from "@infinitered/react-native-mlkit-face-detection";
import {FunzaDarkTheme} from "@react-navigation/native/src/theming/DefaultTheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

    const lightTheme = {
        ...MD2LightTheme,
        colors: {
            ...MD2LightTheme.colors,
            primary: '#3BA97A',        // Green for sidebar and buttons
            background: '#F5F5F5',     // Light gray background for main content
            accent: '#FFD700',         // Gold/yellow for highlights
            text: '#333333',           // Dark gray for readable text
            surface: '#FFFFFF',        // White for card surfaces
            onSurface: '#666666',      // Slightly lighter text color for non-primary text
        },
    };


    const darkTheme = {
        ...MD2DarkTheme,
        colors: {
            ...MD2DarkTheme.colors,
            primary: '#66D9A0',        // Lighter green for sidebar and buttons
            background: '#121212',     // Dark gray background for main content
            accent: '#FFC107',         // Golden yellow for highlights
            text: '#E0E0E0',           // Light gray text for readability on dark background
            surface: '#1E1E1E',        // Darker gray for cards and paper surfaces
            onSurface: '#A0A0A0',      // Medium-light gray for non-primary text
        },
    };

  return (
    <>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <PaperProvider theme={colorScheme === 'dark' ? darkTheme : lightTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      </PaperProvider>
    </ThemeProvider>
    </>
    
  );
}
