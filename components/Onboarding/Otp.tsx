import { StyleSheet } from 'react-native';
import { View } from '../../components/Themed';
import { TextInput, Button, Paragraph, Title, FAB } from 'react-native-paper';
import React from 'react';



export default function Otp({ navigation }) {
    const [otp, setOtp] = React.useState("");
    return (


        <View>
            <View style={styles.red_container}>
                <FAB style={styles.fab} icon='chevron-left'
                    mode='flat' color='white' size='small' onPress={()=> navigation.goBack()} />
                <Title style={styles.title}>
                    Verification Code
                </Title>
                <Paragraph style={styles.text}>
                    We’ve sent the code to *****2356.
                </Paragraph>
                <TextInput
                    mode='flat'
                    underlineColor='white'
                    activeUnderlineColor='white'
                    selectionColor='white'
                    value={otp}
                    onChangeText={otp => setOtp(otp)}
                    style={{
                        backgroundColor: 'none',
                    }}
                />
                <Paragraph style={styles.text}>
                    Haven’t received it yet?
                    Resend code in 20 seconds.
                </Paragraph>
                {/* <Button mode='text' textColor='white'> Resend</Button> */}

            </View>
            <View style={styles.btn_container}>

                <Button mode='contained'
                    onPress={() => navigation.navigate('Dob')}
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
        color: '#ffffff',
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
