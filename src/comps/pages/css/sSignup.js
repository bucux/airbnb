


import { StyleSheet } from 'react-native';
import { Gcolor } from '../../../libs/global';

export default styles = StyleSheet.create({
  cont0: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 30,
  },
  cont1: {
    alignItems: 'center',
    gap: 20,
  },
  cont2: {
    alignItems: 'center',
    gap: 20,
    width: '100%',
  },
  cont3: {
    alignItems: 'center',
    gap: 20,
  },
  img: {
    height: 110,
    width: 110,
  },
  p1: {
    fontSize: 20,
    fontWeight: '800',
    color: Gcolor.greyText,
  },
  p2: {
    color: Gcolor.pink,
  },
  input1: {
    borderBottomWidth: 1,
    borderBottomColor: 'pink',
    width: '80%',
  },
  input2: {
    borderWidth: 1,
    borderColor: 'pink',
    width: '80%',
    height: 80,
    paddingLeft: 10,
  }
})