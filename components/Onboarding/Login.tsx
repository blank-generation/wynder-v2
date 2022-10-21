import { StyleSheet, Image, ImageBackground } from 'react-native';
import { Text, View } from '../../components/Themed';
import { Card, Button } from 'react-native-paper';



export default function Login({ navigation }) {
    return (


        <View>
            <View style={styles.red_container}>
                <ImageBackground source={require('../../assets/images/bgc.png')} resizeMode="cover" style={styles.image}>
                    <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
                </ImageBackground>
            </View>
            <View style={styles.btn_container}>
                <Button contentStyle={{ flexDirection: 'row-reverse' }} mode='outlined' style={styles.btn} icon={() => (
                    <Image
                        source={require('../../assets/images/google.png')}
                        style={{ width: 18, height: 18 }}
                    />)}>
                    Sign in with Google
                </Button>
                <Button contentStyle={{ flexDirection: 'row-reverse' }} mode='outlined' style={styles.btn} icon={() => (
                    <Image
                        source={require('../../assets/images/fb.png')}
                        style={{ width: 18, height: 18 }}
                    />)}>
                    Sign in with Facebook
                </Button>
                <Text style={styles.text}>
                    Or
                </Text>
                <Button mode='text' style={styles.text_btn} onPress={() =>
                    navigation.navigate('Phone')} > Sign in with phone number</Button>
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
    text: {

        marginTop: '1em'
    },
    logo: {
        height: '48px',
        width: '226px'

    },
    image: {
        height: '100%',
        width: '100%',
        justifyContent: "center",
        alignItems: "center"
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

    }
});
