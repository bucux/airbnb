
import { StyleSheet, Dimensions } from 'react-native';
import { Gcolor } from '../../../../libs/global';

const screenWidth = Dimensions.get('window').width;

export default styles = StyleSheet.create({
  button: {
    padding: 10,
    borderColor: Gcolor.pink,
    borderWidth: 2,
    width: screenWidth / 2,
  },
  text: {
    fontSize: 16,
    color: Gcolor.greyText,
    fontWeight: '600',
    textAlign: 'center',
  },
});