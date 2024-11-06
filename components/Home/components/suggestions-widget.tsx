import * as React from 'react';
import { Avatar, Button, Card, Chip, Text } from 'react-native-paper';
import { ThemedView } from '../../ThemedView';
import { ThemedText } from '../../ThemedText';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from '@/hooks/useColorScheme';
import { MaterialIcons } from '@expo/vector-icons';
import { RefreshIcon } from '../../RefreshIcon';

import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withRepeat,
    withSequence,
  } from 'react-native-reanimated';

const Suggestions = () => {
    const rotationAnimation = useSharedValue(0);

    rotationAnimation.value = withRepeat(
      withSequence(withTiming(10, { duration: 200 }), withTiming(-10, { duration: 200 }),withTiming(0, { duration: 200 })),
      1 // Run the animation 4 times
    );
  
    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ rotate: `${rotationAnimation.value}deg` }],
    }));

    const colorScheme= useColorScheme()
    
    return(
    <View style={{marginBottom:20, marginLeft:10, marginRight:10,marginTop:13}}>
     
        {/* Card */}
        <Animated.View style={animatedStyle}>
        <Card style={{alignContent:"center"}} onPress={()=>{
            console.log("pressed")
        }}>
        <Card.Title style={{alignSelf:"center"}} title="Welcome to Funza Learning" subtitle="Stay updated with all school communications."  />

        </Card>
        </Animated.View>


    </View>
  
)};

export default Suggestions;