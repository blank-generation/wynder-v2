import { IconProps } from '@expo/vector-icons/build/createIconSet';
import React, { Component } from 'react';
import { Text, View, ViewPropTypes } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Menu, Divider } from 'react-native-paper';
import { ViewProps } from './Themed';
import { IconButton } from 'react-native-paper';
import { useState } from 'react';

const Post: React.FC = (props) => {
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    let LeftContent;
    //--------------------------------  Avatar Image ------------------------------
    if (props.DisplayPicture != null) {
        LeftContent = props => <Avatar.Image {...props} size={48} source={require('../assets/images/ava.png')} />
    } else {
        LeftContent = props => <Avatar.Icon {...props} icon="account" />
    }
    // ---------------------------- Post Menu ----------------------------------------
    const RightContent = props =>
        <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={<IconButton onPress={openMenu} icon="dots-vertical" />}>
            <Menu.Item onPress={() => { }} title="Item 1" />
            <Menu.Item onPress={() => { }} title="Item 2" />
            <Divider />
            <Menu.Item onPress={() => { }} title="Item 3" />
        </Menu>

    const [like, setLike] = useState(false);
    const [unlike, setUnlike] = useState(false);
    let postcontent = props.PostContent;
    let readMore = false;
    // ------------------------- Read More Logic -------------------------------------------

    if (postcontent.length > 100 && !props.Expanded) {
        postcontent = postcontent.slice(0, 100);
        readMore = true;
    }


    return (
        <View style={{
            marginTop: '1em',
            paddingHorizontal: '0.8em'

        }}>

            <Card style={{
                backgroundColor: '#FFFBFE',
                borderRadius: '12px'
            }}>
                {/* ---------------------- Name, Avatar and Menu ------------------------- */}
                <Card.Title titleStyle={{
                    fontWeight: '600',
                    color: '#FF595D'
                }}
                    title={props.FeedName}
                    subtitle={props.RealName}
                    left={LeftContent}
                    right={RightContent} />
                {/* ------------------------ Post content ------------------------------- */}
                <Card.Content>
                    <Paragraph>
                        {postcontent}

                        {readMore && <div> ...<a href='#'>read more</a></div>}
                    </Paragraph>
                </Card.Content>
                {/* <Card.Actions></Card.Actions> */}
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    {/* ---------------------------------Comments -------------------------------------- */}
                    <Button icon='comment' textColor='gray'> {props.CommentNum} comments</Button>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                        {/* ------------------------ Like Buttons ---------------------------- */}
                        <IconButton icon='thumb-down' animated selected={unlike}
                            onPress={() => {
                                setUnlike(!unlike);
                                if (like) {
                                    setLike(!like);
                                }
                            }} />
                        <IconButton icon='thumb-up' animated selected={like} iconColor={like ? '#0E4DA4' : '#49454f'}
                            onPress={() => {
                                setLike(!like);
                                if (unlike) {
                                    setUnlike(!unlike);
                                }

                            }} />
                    </div>

                </View>
            </Card>
        </View>
    )
}

export default Post;
