import Main from "@/components/Home/main";
import {ScrollView, StyleSheet} from "react-native";
import {Appbar, Avatar, Button, Card, List, Surface, Text} from "react-native-paper";
import * as React from "react";

export default function Messaging() {
    return (
        <>
            <Appbar.Header style={{paddingLeft:30}}>
                <Appbar.Content  style={{alignSelf:"center"}}  title={"Messaging"}/>
            </Appbar.Header>
            <ScrollView>
                <Surface elevation={1} style={{alignSelf:"center", width:"90%", borderRadius:15, margin:10}}>
                    <Text style={{fontSize:20, marginBottom:10, marginTop:10, alignSelf:"flex-start",marginLeft:20}}>Emergency Hub</Text>
                    <MessageEntry payload={"Fire Drill @ 3PM"} />
                    <MessageEntry payload={"Severe Weather Alert "} />
                </Surface>
                <Surface elevation={1} style={{alignSelf:"center", width:"90%", borderRadius:15, marginBottom:10}}>
                    <Text style={{fontSize:20, marginBottom:10, marginTop:10, alignSelf:"flex-start",marginLeft:20}}>Personal Messages</Text>

                    <List.Item
                        title="Mr. John"
                        description="Please Review Your Child's Progress"
                        style={{padding:30}}
                        left={props =>   <Avatar.Image size={30} source={require('@/assets/images/avatar.webp')} />}/>

                    <List.Item
                        title="Ms. Smith"
                        description="Parent Teacher Meeting On Friday"
                        style={{padding:30}}
                        left={props =>   <Avatar.Image size={30} source={require('@/assets/images/avatar.webp')} />}/>


                </Surface>
                <Surface elevation={1} style={{alignSelf:"center", width:"90%", borderRadius:15,marginBottom:20}}>
                    <Text style={{fontSize:20, marginBottom:10, marginTop:10, alignSelf:"flex-start",marginLeft:20}}>Bulk Messages</Text>

                    <List.Item
                        title="To All Parents"
                        description="We close on the 30th of June"
                        style={{padding:30}}
                        left={props =>   <Avatar.Image size={30} source={require('@/assets/images/avatar.webp')} />}/>

                    <List.Item
                        title="From The Geography Department"
                        description="Please Submit Your Permission Slips For The Field Trip"
                        style={{padding:30}}
                        left={props =>   <Avatar.Image size={30} source={require('@/assets/images/avatar.webp')} />}/>


                </Surface>


            </ScrollView>

        </>
    );
}

const MessageEntry = (props:any) => (
    <Card style={{borderRadius:15, marginBottom:10, width:"90%",height:80, alignSelf:"center"}}>
        <Card.Content style={{flexDirection:"row"}} >
           <Text children={props.payload}  style={{marginRight:50, justifyContent:"center", flex:1}} />
            <Button mode={"contained"}>View</Button>
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