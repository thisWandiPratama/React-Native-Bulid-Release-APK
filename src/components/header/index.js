import React from "react";
import { View, Text, TouchableOpacity, Touchable } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from "./styles";
const Header = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props.onpress}>
                <Icon name='arrow-back' size={30} color='white' />
            </TouchableOpacity>
            <Text style={styles.titleHeader}>{props.title}</Text>
        </View>
    )
}
export default Header