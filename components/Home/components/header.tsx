import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { ThemedText } from '../../ThemedText'
import {ThemedView, ThemedView as View} from "../../ThemedView"
import {Appbar, Avatar, Button } from 'react-native-paper'
import AppbarContent from "react-native-paper/lib/typescript/components/Appbar/AppbarContent";

export default function Header() {
  return (

    <Appbar.Header style={{paddingLeft:30}}>
            <Avatar.Image  size={30} style={{marginRight:10}} source={require('@/assets/images/logo.png')} />
        <Appbar.Content  style={{alignSelf:"center"}}  title={"Funza-Home"}/>
    </Appbar.Header>



  )
}

const styles = StyleSheet.create({})