import React from 'react';
import {View, Text, TouchableOpacity, Touchable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';

const Header = props => {
  return (
    <View style={[styles.container, {backgroundColor: props.backgroundColor}]}>
      <TouchableOpacity onPress={props.onpress}>
        <Icon name="arrow-back" size={30} color="white" />
      </TouchableOpacity>
      <Text style={[styles.titleHeader, {fontSize: props.fontSize}]}>
        {props.title}
      </Text>
    </View>
  );
};
export default Header;