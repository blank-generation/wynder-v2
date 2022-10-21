import * as React from 'react';
import { Surface, IconButton, FAB, Modal, Portal, TextInput, Title, Subheading, Switch, Paragraph, Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import DropDown from "react-native-paper-dropdown";

import { View } from '../components/Themed';




const BottomNav = () => {
    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const [text, setText] = React.useState("");

    const [postLocal, setPostLocal] = React.useState(false);
    const [disableComments, setDisableComments] = React.useState(false);
    const onTogglePostLocal = () => setPostLocal(!postLocal);
    const onToggleDisableComments = () => setDisableComments(!disableComments);

    const [showDropDown, setShowDropDown] = React.useState(false);
    const [value, setValue] = React.useState(null);
    const [items, setItems] = React.useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);

    return (
        <Surface style={styles.surface}>
            <IconButton style={{ marginLeft: '2em' }} iconColor='#ffffff' icon='heart'></IconButton>
            <IconButton style={{ marginLeft: '2em' }} iconColor='#ffffff' icon='account-group'></IconButton>
            <IconButton style={{ marginLeft: '2em' }} iconColor='#ffffff' icon='message'></IconButton>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modal}>
                    <Title style={styles.title}>Feed name</Title>
                    <Subheading style={styles.subtitle}>Real Name</Subheading>
                    <DropDown
                        label={"Choose a question to answer..."}
                        visible={showDropDown}
                        showDropDown={() => setShowDropDown(true)}
                        onDismiss={() => setShowDropDown(false)}
                        value={value}
                        setValue={setValue}
                        list={items}
                    />
                    <TextInput
                        label={'Your post'}
                        value={text}
                        onChangeText={text => setText(text)}
                        multiline
                        placeholder='Write your heart out ...'
                        numberOfLines={4}
                        style={{ marginVertical: '1em' }}
                    />
                    <View style={styles.switchLine}>
                        <Paragraph>Post locally</Paragraph>
                        <Switch value={postLocal} onValueChange={onTogglePostLocal} />
                    </View>

                    <View style={styles.switchLine}>
                        <Paragraph>Disable comments</Paragraph> <Switch value={disableComments} onValueChange={onToggleDisableComments} />
                    </View>
                    <View style={styles.btnContainer}>
                        <Button mode='elevated' style={styles.button}>Post</Button>
                    </View>
                </Modal>
            </Portal>
            <FAB
                icon="plus"
                color='#FF595B'
                style={styles.fab}
                onPress={showModal}
            />
        </Surface>
    );
};

export default BottomNav;

const styles = StyleSheet.create({
    surface: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        backgroundColor: '#FF595B'

    },
    switchLine: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    title: {
        fontSize: 16,
        fontWeight: 600,
        color: '#FF595D'
    },
    subtitle: {
        fontSize: 14,
        fontWeight: 400,
        marginBottom: '2em'
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 12,
        bottom: 12,
        borderRadius: 32
    },
    modal: {
        backgroundColor: 'white', padding: 20, marginHorizontal: '1em'
    },
    button: {
        width: "50%",
        borderRadius: 100
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '2em'
    }

});