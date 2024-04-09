

import styles from './css/sButton2.js'
import { Pressable, Text } from 'react-native';
import { useNavigation } from "@react-navigation/core";

const Button2 = ({ title, title2, target }) => { // navigue vers la page target

  const navigation = useNavigation();

  const goTo = () => { navigation.navigate(target) }

  return (
    <Pressable onPress={goTo}>
      {({ pressed }) => <Text style={styles.text}> {pressed ? title2 : title} </Text>}
    </Pressable>
  )
}

export default Button2;