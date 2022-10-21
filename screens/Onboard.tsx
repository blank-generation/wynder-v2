import { StyleSheet, Image, ImageBackground } from 'react-native';
import { Text, View } from '../components/Themed';
import { Card, Button } from 'react-native-paper';
import Login from '../components/Onboarding/login';
import Phone from '../components/Onboarding/Phone';
import Otp from '../components/Onboarding/Otp';
import Dob from '../components/Onboarding/Dob';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserName from '../components/Onboarding/UserName';
import Identify from '../components/Onboarding/Identify';
import Orientation from '../components/Onboarding/Orientation';


const Stack = createNativeStackNavigator();

export default function Onboard() {
    return (

        <NavigationContainer>
            <Stack.Navigator>

            <Stack.Screen
                    name="Identify"
                    component={Identify}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Phone"
                    component={Phone}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Otp"
                    component={Otp}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Dob"
                    component={Dob}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="UserName"
                    component={UserName}
                    options={{ headerShown: false }}
                />
 
                <Stack.Screen
                    name="Orientation"
                    component={Orientation}
                    options={{ headerShown: false }}
                />

            </Stack.Navigator>
        </NavigationContainer>
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
