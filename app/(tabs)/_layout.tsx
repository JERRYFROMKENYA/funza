import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import HomeScreen from '.';
import { BottomNavigation } from 'react-native-paper';
import TabTwoScreen from './explore';
import Events from "@/app/(tabs)/events";
import Account from "@/app/(tabs)/account";
import Messaging from "@/app/(tabs)/messaging";



export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
    { key: 'messages', title: 'Messages', focusedIcon: 'message' ,unfocusedIcon: 'message-outline'},
    { key: 'events', title: 'Events', focusedIcon: "calendar" , unfocusedIcon: "calendar-outline"},
    { key: 'account', title: 'Account', focusedIcon: "account" , unfocusedIcon: "account-outline"},

  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    messages: Messaging,
    events: Events,
    account: Account,
  });

  return (
    <BottomNavigation
    // barStyle={{
    //   height:50,
    //   borderRadius: 50,
    //   width:"80%",
    //   display:"flex",
    //   justifyContent:"center",
    //   alignSelf:"center",
    //   paddingBottom:15,
    //   marginBottom:15,
    // }}
    navigationState={{ index, routes }}
    onIndexChange={setIndex}
    renderScene={renderScene}
  />
    // <Tabs
    //   screenOptions={{
    //     tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
    //     headerShown: false,
    //   }}>


    //   <Tabs.Screen
    //     name="index"
    //     options={{
    //       title: 'Journal',
    //       tabBarIcon: ({ color, focused }) => (
    //         <TabBarIcon name={focused ? 'journal' : 'journal-outline'} color={color} />
    //       ),
    //     }}
    //   />


    //   <Tabs.Screen
    //     name="explore"
    //     options={{
    //       title: 'Vision Board',
    //       tabBarIcon: ({ color, focused }) => (
    //         <TabBarIcon name={focused ? 'list' : 'list-outline'} color={color} />
    //       ),
    //     }}
    //   />
    // </Tabs>
  );
}
