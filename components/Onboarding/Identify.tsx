import { StyleSheet, Text } from 'react-native';
import { View } from '../Themed';
import { Button, ToggleButton, Title, FAB } from 'react-native-paper';
import React from 'react';



export default function Identify({ navigation }) {
    const [identify, setIdentify] = React.useState("");
    return (


        <View>
            <View style={styles.red_container}>
                <FAB style={styles.fab} icon='chevron-left'
                    mode='flat' color='white' size='small' />
                <Title style={styles.title}>
                    I Identify as
                </Title>
                <ToggleButton.Group
                    onValueChange={identify => setIdentify(identify)}
                    value={identify}>
                    <ToggleButton icon={() => <View><Text style={styles.text}>Man</Text></View>} value="man" />
                    <ToggleButton icon={() => <View><Text style={styles.text}>Woman</Text></View>} value="woman" />
                    <ToggleButton icon={() => <View><Text style={styles.text}>Non-Binary</Text></View>} value="nb" />
                </ToggleButton.Group>
                {/* <Paragraph style={styles.text}>
                So that other people know what to call you.                </Paragraph> */}

            </View>
            <View style={styles.btn_container}>

                <Button mode='contained'
                    onPress={() => navigation.navigate('Orientation')}
                    style={styles.btn}>Continue</Button>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    btn_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {

        color: '#ffffff'
    },
    text: {
        marginTop: '2em',
        paddingHorizontal: '2em',
        color: '#ffffff'
    },

    fab: {
        position: "absolute",
        top: '1em',
        left: '1em',
        backgroundColor: 'none'

    },
    btn: {
        borderRadius: 36,
        width: '75%',
        marginTop: '1em'
    },
    text_btn: {
        width: '75%',
        marginTop: '1em',
        textDecorationLine: 'underline',
        textDecorationColor: '#FF595B'
    },
    red_container: {
        backgroundColor: '#FF595B',
        width: '100%',
        height: '65vh',

        alignItems: 'center',
        justifyContent: 'center',

    }
});
