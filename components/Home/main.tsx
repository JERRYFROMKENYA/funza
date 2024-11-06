import React from 'react';
import {
  StyleProp,
  ViewStyle,
  Animated,
  StyleSheet,
  Platform,
  ScrollView,
  Text,
  SafeAreaView,
  I18nManager,
  View,
} from 'react-native';
import { AnimatedFAB, Avatar } from 'react-native-paper';
import JournalEntry, {HomeEntry} from './components/journal-entry';
import { EntryExitTransition } from 'react-native-reanimated';
import  SearchBar  from './components/search-bar';
import { ThemedText } from '../ThemedText';
import Suggestions from './components/suggestions-widget';
import SegmentedButtonView from './components/segmenter';
import Header from './components/header';

const Main = ({
  animatedValue,
  visible,
  extended,
  label,
  animateFrom,
  style,
  iconMode,
}:any) => {
  const [isExtended, setIsExtended] = React.useState(true);

  const isIOS = Platform.OS === 'ios';

  const onScroll = ({ nativeEvent }:any) => {
    const currentScrollPosition =
      Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

    setIsExtended(currentScrollPosition <= 0);

  };

  const fabStyle = { [animateFrom]: 16 };

  return (
    
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection:"column"}}> 
      <Header/>
      </View>

      <ScrollView onScroll={onScroll} >
      
        <Suggestions/>
        <HomeEntry  title={"Urgent Alerts(Daily Alert Overview)"}
                    payload={"School closed tomorrow due to weather conditions."}/>

        <HomeEntry  title={"Diary Updates"}
                    payload={"Math homework due next Monday."}/>

        <HomeEntry  title={"Upcoming Events"}
                    payload={"Parent-teacher meeting on Friday at 3 PM."}/>

        <HomeEntry  title={"Notifications"}
                    payload={"Fee due for the upcoming semester."}/>

        <HomeEntry  title={"New Message"}
                    payload={"Message from Principal: School's annual day preparations."}/>
      </ScrollView>
      {/*<AnimatedFAB*/}
      {/*  icon={'plus'}*/}
      {/*  label={'Add Journal Entry'}*/}
      {/*  extended={isExtended}*/}
      {/*  onPress={() => console.log('Pressed')}*/}
      {/*  visible={visible}*/}
      {/*  animateFrom={'right'}*/}
      {/*  iconMode={'dynamic'}*/}
      {/*  style={[styles.fabStyle, style, fabStyle]}*/}
      {/*/>*/}


    </SafeAreaView>
  
  );
};

export default Main;
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    gap:8,
    columnGap: 8,
    marginBottom: 45,
  },
  fabStyle: {
    bottom: "15%",
    right: 16,
    position: 'absolute',
  },
  entry:{
    marginBottom: 30
  }
});
