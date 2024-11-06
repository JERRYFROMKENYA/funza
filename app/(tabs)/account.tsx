import {ScrollView, StyleSheet} from "react-native";
import {Appbar, Avatar, Button, Card, Divider, List, Surface, Text} from "react-native-paper";
import * as React from "react";

export default function Account() {
    return (
        <>
            <Appbar.Header style={{paddingLeft:30, paddingRight:30}}>
                <Appbar.Content  style={{alignSelf:"center"}}  title={"Account"}/>
                <Button mode={"elevated"}>Edit Account</Button>
            </Appbar.Header>
            <ScrollView>
                <Card style={{width:"95%", alignSelf:"center",marginBottom:10}}   >
                    <Card.Title title={"Name: John Doe"} left={()=> <Avatar.Image size={40} source={require('@/assets/images/avatar.webp')} />} />
                    <Card.Content>
                        <Text variant="bodyMedium">Email: johnappleseed@icloud.com</Text>
                        <Text variant="bodyMedium">School: St. Mary's School, Yala</Text>
                        <Text variant="bodyMedium">Child Admission Number: 1046093</Text>
                    </Card.Content>
                </Card>


                <Surface elevation={1} style={{alignSelf:"center", width:"95%", borderRadius:15,marginBottom:20}}>
                    <Text style={{fontSize:20, marginBottom:10, marginTop:10, alignSelf:"flex-start",marginLeft:20}}>Diary Updates</Text>

                    <List.Item
                        title="Math Assignment"
                        description="Complete exercises 5 to 10 on page 42. Due date: 25th Oct."

                       />
                    <Divider/>

                    <List.Item
                        title="Science Project"
                        description="Please Submit Your Permission Slips For The Field Trip"

                       />
                    <Divider/>
                    <List.Item
                        title="History Essay"
                        description="Write an essay on World War II. Due date: 1st Nov"

                    />


                </Surface>


                <Card style={{width:"95%", alignSelf:"center",marginBottom:10}}   >
                    <Card.Title title={"Messages"}  />
                    <Card.Content>
                        <Text variant="bodyMedium">Send Teachers Messages</Text>
                    </Card.Content>
                    <Card.Actions>
                        <Button mode={"contained"}>Send Message</Button>
                    </Card.Actions>
                </Card>

            </ScrollView>
        </>
    );
}

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