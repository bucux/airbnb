

import styles from './css/sButton1.js';
import { Pressable, Text } from 'react-native';

const Button1 = ({ onPress, title, title2 }) => {

  const funcStyle = ({ pressed }) => [
    { borderRadius: pressed ? 5 : 25 },
    styles.button,
  ];

  return (
    <Pressable style={({ pressed }) => funcStyle({ pressed })} onPress={onPress}>
      {({ pressed }) => <Text style={styles.text}> {pressed ? title2 : title} </Text>}
    </Pressable>
  );
};

export default Button1;
