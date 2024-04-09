

import { Text, TextInput, View, Image } from "react-native";
import styles from './css/sSignin.js'
import Button1 from "../elems/buttons/Button1.js";
import Button2 from "../elems/buttons/Button2.js";


export default function Signin({ setToken }) {
  
  const submit = async () => {
    const userToken = "secret-token";
    setToken(userToken);
  }

  return (
    <View style={styles.cont0}>
      <View style={styles.cont1}>
        <Image source={require('../../../assets/imgs/logoAirbnb.png')} style={styles.img}/>
        <Text style={styles.p1}>Sign in</Text>
      </View>
      <View style={styles.cont2}>
        <TextInput placeholder="email" style={styles.input}/>
        <TextInput placeholder="password" style={styles.input} secureTextEntry={true} />
      </View>
      <View style={styles.cont3}>
        <Text style={styles.p2}>Please fill all fields</Text>
        <Button1 onPress={submit} title='Sign in' title2='Submited...'/>
        <Button2 title='No account ? Register' title2="let's go..." target='Signup'/>
      </View>
    </View>
  )
}
