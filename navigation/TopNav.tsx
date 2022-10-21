import { useState } from 'react';
import { Surface, IconButton, Avatar} from 'react-native-paper';
import { StyleSheet } from 'react-native';
import './TopNav.css'

export default function TopNav() {
    const [isSwitchOn, setIsSwitchOn] = useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    const [value, setValue] = useState('left');
    return (
        <Surface elevation={1} style={styles.surface}>
            <Avatar.Icon size={40} icon="account" />

            <div className="container">
                <div className="selector">
                    <div className="selecotr-item">
                        <input type="radio" id="radio1" name="selector" className="selector-item_radio" defaultChecked />
                        <label htmlFor="radio1" className="selector-item_label">FEED</label>
                    </div>
                    <div className="selecotr-item">
                        <input type="radio" id="radio2" name="selector" className="selector-item_radio" />
                        <label htmlFor="radio2" className="selector-item_label">MATCH</label>
                    </div>

                </div>
            </div>



            <IconButton iconColor='#FF595B' icon='tune'></IconButton>
            <IconButton iconColor='#FF595B' icon='bell'></IconButton>
        </Surface >
    );
}

const styles = StyleSheet.create({
    surface: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1em',
        backgroundColor: '#F3EDF7'

    },
    topToggle: {
        scaleX: 3,
        scaleY: 1
    }

});