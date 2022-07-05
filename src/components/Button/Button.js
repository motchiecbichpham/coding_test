//import libraries
import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import ButtonStyles from './styles/index';
import {DEFAULT_SIZE_ACTIVITY_INDICATOR} from './config';
import {COLORS} from '../../utils/colors';
const Button = ({title, textColor, style, onPress, disabled, isLoading}) => {
  if (isLoading) {
    onPress = null;
  }
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={disabled}
      style={[ButtonStyles.button, style]}
      onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator
          size={DEFAULT_SIZE_ACTIVITY_INDICATOR}
          color={textColor || COLORS.white}
        />
      ) : (
        <Text style={ButtonStyles.buttonText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};
export default Button;
