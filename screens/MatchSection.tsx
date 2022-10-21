import { StyleSheet, View, Image } from 'react-native';
import { IconButton, Card, Title, Paragraph, Text, Chip } from 'react-native-paper';
import React from 'react';
import { SliderBox } from "react-native-image-slider-box";
import { useFonts } from 'expo-font';

export default function MatchSection() {
    const [cimages, setCimages] = React.useState(
        ["https://source.unsplash.com/1024x768/?nature",
            "https://source.unsplash.com/1024x768/?water",
            "https://source.unsplash.com/1024x768/?girl",
            "https://source.unsplash.com/1024x768/?tree"]
    );
    const [loaded] = useFonts({
        smr: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });
    return (


        <View style={styles.Matchview}>
            <View>
                <SliderBox images={cimages} />
                <View style={styles.btn_container}>
                    <IconButton
                        style={styles.Icnbtn}
                        mode='contained-tonal'
                        iconColor='#B1D26C'
                        icon="check"
                        size={60}
                        onPress={() => console.log('Pressed')}
                    />
                    <IconButton
                        style={styles.Icnbtn}
                        mode='contained-tonal'
                        icon={() => (
                            <Image
                                source={require('../assets/images/giftcard.png')}
                                style={{ width: 21, height: 31 }}
                            />
                        )}
                        size={40}
                        onPress={() => console.log('Pressed')}
                    />
                    <IconButton
                        style={styles.Icnbtn}
                        mode='contained'
                        icon="close"
                        size={60}
                        onPress={() => console.log('Pressed')}
                    />
                </View>
                <Card elevation={3} style={styles.card}>
                    {/* <Card.Title title="Card Title" subtitle="Card Subtitle" /> */}
                    <Card.Content>
                        <Title style={styles.title}>Real Name, 24</Title>
                        <Paragraph style={styles.Cardcontent}>
                            <Chip style={styles.chip} textStyle={styles.Chiptext}>Games</Chip>
                            <Chip style={styles.chip} textStyle={styles.Chiptext}>Life</Chip>
                            <Chip style={styles.chip} textStyle={styles.Chiptext}>Music</Chip>

                        </Paragraph>
                        <Paragraph style={styles.Cardcontent}>
                            <Text> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo quo blanditiis numquam error aperiam optio. Aspernatur, cumque dicta illo beatae excepturi fugiat expedita iusto corrupti veritatis laboriosam eius itaque recusandae.</Text>
                        </Paragraph>

                    </Card.Content>

                </Card>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    Matchview: {
        height: '82vh'
    },
    btn_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginTop: '2em'
    },
    card: {
        marginHorizontal: '1em',
        marginTop: '2em'
    },
    title: {

        // color: '#ffffff'
        textAlign: 'center',
        fontFamily: 'smr'
    },
    Chiptext: {

        color: '#ffffff',

    },

    Icnbtn: {
        backgroundColor: '#ffffff',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'
    },
    chip: {
    borderRadius: 36,
    backgroundColor: '#FF595B',
    color: 'white',
    marginHorizontal: '2px'
},
    Cardcontent: {

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}


});
