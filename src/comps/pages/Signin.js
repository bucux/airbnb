

import { Text, TextInput, View, Image } from "react-native";
import styles from './css/sSignin.js'
import Button1 from "../elems/buttons/Button1.js";
import Button2 from "../elems/buttons/Button2.js";
import { postAxios } from "../../libs/axios.js";
import { Gstr } from "../../libs/global.js";
import { useStoreStr } from "../../stores/storeStr.js";
import { useState } from "react";

export default function Signin() {

  const setStr = useStoreStr(state=>state.setStr)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('')
  
  const submit = async () => {
    if(email && password){
      const body = {
        email : email,
        password : password,
      }
      const datas = await postAxios('user/log_in', body)
      if(datas.token){ // fetch réussi
        await AsyncStorage.setItem("token", datas.token);
        Gstr.token = datas.token
        setStr('token', datas.token)
      } else {setMessage(datas.error)}
    } else {setMessage('Please fill all fields')}
  }

  return (
    <View style={styles.cont0}>
      <View style={styles.cont1}>
        <Image source={require('../../../assets/imgs/logoAirbnb.png')} style={styles.img}/>
        <Text style={styles.p1}>Sign in</Text>
      </View>
      <View style={styles.cont2}>
        <TextInput placeholder="email" style={styles.input} onChangeText={setEmail}/>
        <TextInput placeholder="password" style={styles.input} secureTextEntry={true} onChangeText={setPassword}/>
      </View>
      <View style={styles.cont3}>
        <Text style={styles.p2}>{message}</Text>
        <Button1 onPress={submit} title='Sign in' title2='Submited...'/>
        <Button2 title='No account ? Register' title2="let's go..." target='Signup'/>
      </View>
    </View>
  )
}
