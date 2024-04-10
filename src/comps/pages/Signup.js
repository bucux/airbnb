
import { Text, TextInput, View, Image } from "react-native";
import styles from './css/sSignup.js'
import Button1 from "../elems/buttons/Button1.js";
import Button2 from "../elems/buttons/Button2.js";
import { useStoreStr } from "../../stores/storeStr.js";
import { postAxios } from "../../libs/axios.js";
import { useState } from "react";
import { Gstr } from "../../libs/global.js";


export default function Signup() {

  const setStr = useStoreStr(state=>state.setStr)
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('')
  
  const submit = async () => {
    if(email && username && description && password && confirmPassword){
      if(password === confirmPassword){
        const body = {
          email : email,
          username : username,
          description : description,
          password : password,
        }
        if(datas.token){ // fetch réussi
          const datas = await postAxios('user/sign_up', body)
          await AsyncStorage.setItem("token", datas.token);
          Gstr.token = datas.token
          setStr('token', datas.token)
        } else {setMessage(datas.error)}
      }
    } else{ // afficher l'alerte

    }
  }

  return (
    <View style={styles.cont0}>
      <View style={styles.cont1}>
        <Image source={require('../../../assets/imgs/logoAirbnb.png')} style={styles.img}/>
        <Text style={styles.p1}>Sign up</Text>
      </View>
      <View style={styles.cont2}>
        <TextInput placeholder="email" style={styles.input1} onChangeText={setEmail}/>
        <TextInput placeholder="username" style={styles.input1} onChangeText={setUsername}/>
        <TextInput placeholder="describe yourself in a few words..." style={styles.input2} onChangeText={setDescription}/>
        <TextInput placeholder="password" style={styles.input1} secureTextEntry={true} onChangeText={setPassword}/>
        <TextInput placeholder="confirm password" style={styles.input1} secureTextEntry={true} onChangeText={setConfirmPassword}/>
      </View>
      <View style={styles.cont3}>
        <Text style={styles.p2}>Passwords must be the same</Text>
        <Button1 onPress={submit} title='Sign up' title2='Submited...'/>
        <Button2 title='Already have an account? Sign in' title2="let's go..." target='Signin'/>
      </View>
    </View>
  )
}
