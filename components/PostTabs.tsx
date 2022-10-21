import { Surface, Button } from "react-native-paper";
import { useState } from "react";
import { StyleSheet } from "react-native";

export default function PostTabs() {

    const [personalFeed, setPersonalFeed] = useState(true);
    const [generalFeed, setGeneralFeed] = useState(false);

    return (
        <Surface elevation={3} style={{ width: '100%', }}>
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <Button style={personalFeed ? styles.activeTab : styles.inactiveTab}
                    onPress={() => {
                        setPersonalFeed(true);
                        if (generalFeed) {
                            setGeneralFeed(!generalFeed);
                        }
                    }}
                >Personal
                </Button>
                
                <Button style={generalFeed ? styles.activeTab : styles.inactiveTab}
                
                onPress={() => {
                    setGeneralFeed(true);
                    if (personalFeed) {
                        setPersonalFeed(!personalFeed);
                    }
                }}
                >General</Button>

            </div>
        </Surface>
    );
}

const styles = StyleSheet.create(
    {
        activeTab: {
            borderBottomColor: '#FF595B',
            borderBottomWidth: 4,
            borderRadius: 0,
            flexBasis: "50%",
            backgroundColor: '#FFFFFF'
        },
        inactiveTab: {
            borderBottomColor: '#938F99',
            borderBottomWidth: 4,
            borderRadius: 0,
            flexBasis: "50%",
        }

    }
)