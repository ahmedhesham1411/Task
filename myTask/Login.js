import React, { Component } from 'react';
import { View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert,
  Button
  }
  from 'react-native';
import  LinearGradient  from 'react-native-linear-gradient';
//import store from "./store";
import {Provider} from "react-redux";
//import Myform from "./ourForm";



 class Login extends Component<{}>{

  constructor(){
    super();

    this.state = {
      email: '',
      password: ''
    };

  }

  render() {
    return (

      <ImageBackground source={require('../app/images/Home.png')}
                        style={styles.backg}>
                        <View style={styles.inner}>
                            <View styles={styles.container}>

                                  <View style={styles.logoo}>
                                      <ImageBackground source={require('../app/images/logo.png')}
                                          style={styles.logo}>
                                      </ImageBackground>
                                  </View>

                                  <View style={styles.inputCont}>
                                      <TextInput style={styles.input}
                                        placeholder = "البريد الالكترونى"
                                        placeholderTextColor = "white"
                                        placeholderTextSize = '100'
                                        onChangeText={(email) =>this.setState({email :email})}/>
                                        <TextInput style={styles.input}
                                          placeholder = "كلمة المرور"
                                          placeholderTextColor = "white"
                                          placeholderTextSize = '100'
                                          onChangeText={(password) =>this.setState({password :password})}/>
                                  </View>

                                  <View>
                                      <TouchableOpacity style={styles.viewLinear} onPress={() => this.props.navigation.navigate('SettingScreen')}>
                                          <View style={{height:40}} >
                                              <LinearGradient start={{x: 1, y: 0}} end={{x: 0, y: 5}}
                                                colors={['#F6813A', '#FAC858', '#848484']}
                                                style={styles.linearGradient}>
                                                    <Text
                                                      style={styles.textbtn}>
                                                      تسجيل الدخول
                                                    </Text>
                                              </LinearGradient>
                                          </View>
                                      </TouchableOpacity>
                                  </View>

                                  <View style={styles.haveAnAccount} >
                                  <TouchableOpacity

                                            onPress={() => Alert.alert('loading...')}
                                            underlayColor='#fff'>
                                            <Text style={{fontSize:16,
                                            fontFamily: 'Helvetica',
                                            color:'rgb(255,255,255)'}}>لديك حساب - تسجيل الدخول</Text>
                                   </TouchableOpacity>
                                  </View>


                            </View>
                        </View>
      </ImageBackground>


    );
  }
}
const styles = StyleSheet.create({
    backg:{
      height: '110%',
      width: '100%',
      backgroundColor: '#fff',
      resizeMode: 'cover',
      position: 'absolute',
      alignSelf: "flex-end"

    },
    inner:{
      flex:1,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0, .6)',
      flexDirection: 'column',
    },
    container:{
      flex: 1,
      height: '100%',
      width: '100%',
    },
    logo:{
     flex:1,
     width: 160,
     height: 140,
     justifyContent: 'center',
     resizeMode: 'contain',
     marginTop: 30,
     marginLeft: 20
    },
    inputCont:{
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      padding: 20,
      marginTop:150,
      fontWeight: 'bold'
    },
    input:{
      justifyContent:'space-between',
      marginTop:20,
      fontSize:20,
      fontFamily: 'Helvetica',
      color:'rgb(255,255,255)',
      borderBottomColor: 'white',
      borderBottomWidth: 1,
      height: 60,

    },
    logoo:{
      marginTop:30,
      marginLeft: 80
    },
    viewLinear:{
      marginTop:120,
      marginLeft:40,
      marginRight:40,
      height:60
    },
    linearGradient:{
      padding: 15,
      alignItems: 'center',
      borderRadius: 5,
      height:60,
    },
    textbtn:{
      backgroundColor: 'transparent',
      fontSize: 20,
      color: '#fff',
      fontWeight: 'bold'
    },
    haveAnAccount:{
      paddingTop:20,
      paddingRight:120,
      paddingLeft:120
    }
  },
);


export default Login;
