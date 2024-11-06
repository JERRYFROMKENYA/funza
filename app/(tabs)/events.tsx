import {ScrollView, StyleSheet} from "react-native";
import {Appbar, Button, Card, Text} from "react-native-paper";
import * as React from "react";

export default function Events() {
    return (
        <>
            <Appbar.Header style={{paddingLeft:30, paddingRight:30}}>
                <Appbar.Content  style={{alignSelf:"center"}}  title={"Events"}/>
                <Button mode={"elevated"}>See All Events</Button>
            </Appbar.Header>
            <ScrollView>
                <EventCard title={"School Fair"}
                           date={"12/12/2021 | 10:00 AM - 03:00 PM"}
                           content={"Join us for a fun-filled day at the annual " +
                               "school fair with games, food stalls, and " +
                               "activities for the whole family."}
                           style={{width:"90%", alignSelf:"center",marginBottom:10}}
                />
                <EventCard title={"Talent Show"}
                           date={"12/12/2021 | 10:00 AM - 03:00 PM"}
                           content={"Come and support our talented students as they " +
                               "showcase their skills in music, dance, " +
                               "and drama at the annual talent show.',"}
                           style={{width:"90%", alignSelf:"center",marginBottom:10}}
                />
                <EventCard title={"Parent-Teacher Meeting"}
                           date={"12/12/2021 | 10:00 AM - 03:00 PM"}
                           content={"An opportunity for parents to meet" +
                               " with teachers to discuss their " +
                               "children\'s progress and address " +
                               "any concerns or questions."}
                           style={{width:"90%", alignSelf:"center",marginBottom:10}}
                />

            </ScrollView>



        </>
    );
}


const EventCard = (props:any) => (
    <Card style={props.style}   >
        <Card.Cover source={{ uri: 'https://picsum.photos/700'||props.image }} />
        <Card.Title title={props.title} subtitle={props.date} />
        <Card.Content>
            <Text variant="bodyMedium">{props.content}</Text>
        </Card.Content>
    </Card>
);


const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});