import {StyleSheet} from 'react-native';
import {COLORS} from '../../../utils/colors';
const ButtonStyles = StyleSheet.create({
  button: {
    height: 48,
    width: '70%',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 16,
    backgroundColor: COLORS.grayAsparagus,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: COLORS.eggshell,
  },
});

export default ButtonStyles;
