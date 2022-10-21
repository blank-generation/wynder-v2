import { IconProps } from '@expo/vector-icons/build/createIconSet';
import React, { Component } from 'react';
import { Text, View, ViewPropTypes, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Menu, Divider } from 'react-native-paper';
import { ViewProps } from './Themed';
import { IconButton } from 'react-native-paper';
import { useState } from 'react';

const Comment: React.FC = (props) => {
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    let LeftContent;
    //--------------------------------  Avatar Image ------------------------------
    if (props.DisplayPicture != null) {
        LeftContent = props => <Avatar.Image {...props} size={48} source={require('../assets/images/adaptive-icon.png')} />
    } else {
        LeftContent = props => <Avatar.Icon {...props} icon="account" />
    }



    return (
        <View style={props.Me ? styles.Mecontainer : styles.container}>
            <LeftContent />
            <Card elevation={3} style={props.Me ? styles.Mecard : styles.card}>

                {/* ------------------------ Post content ------------------------------- */}
                <Card.Content style={{paddingTop:0}}>
                    <View style={styles.titleContainer}>
                        <Title style={styles.title}>
                            {props.FeedName}
                        </Title>
                        {!props.Reported &&
                            <Menu
                                visible={visible}
                                onDismiss={closeMenu}

                                anchor={<IconButton onPress={openMenu} size={18} icon="dots-vertical" />}>
                                <Menu.Item onPress={() => { }} title="Item 1" />
                                <Menu.Item onPress={() => { }} title="Item 2" />
                                <Divider />
                                <Menu.Item onPress={() => { }} title="Item 3" />
                            </Menu>
                        }
                    </View>
                    <Paragraph>
                        {!props.Reported ? <span>{props.Content}</span> : <div>*this commment has been reported*<br /><br /></div>}



                    </Paragraph>
                </Card.Content>
                {!props.Reported &&
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        {/* ---------------------------------Likes -------------------------------------- */}
                        <Button icon='thumb-up' textColor='gray'> {props.CommentNum} likes</Button>

                        {/* --------------------------- Time ------------------------------------------ */}
                        <div style={{

                            marginRight: '1em'
                        }}>
                            <Paragraph> 12:10 am</Paragraph>
                        </div>

                    </View>
                }
            </Card>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: '1em',
        paddingHorizontal: '0.8em',
        //  marginBottom: '3em',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    Mecontainer: {
        marginTop: '1em',
        paddingHorizontal: '0.8em',
        // marginBottom: '3em',
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center'
    },
    card: {
        backgroundColor: '#F5F5F5',
        borderRadius: 12,
        width: '80%',
        marginLeft: "1em"
    },
    Mecard: {
        backgroundColor: '#F5F5F5',
        borderRadius: 12,
        width: '80%',
        marginRight: "1em"
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FF595D',
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline'
    },
    reportedText: {

    }

});

export default Comment;
