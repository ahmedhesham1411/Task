import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview';

export default class MyNavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex:1}}>
          <View style={{flexDirection: 'row',backgroundColor:'red',height:50,width:'100%',justifyContent:'space-between'}}>
                  <ImageBackground source={require('../app/images/darkFlowers.png')}
                                   style={{resizeMode:'cover',height:50,width:430}}>
                        <View style={{ flexDirection: 'row',backgroundColor: 'rgba(0,0,0, .2)',height:50,width:'100%'}}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Second')}>
                                <View style={{height:25,backgroundColor:'#fac858',alignSelf:'center',marginTop:15,borderRadius:3,marginLeft:10}} >
                                    <Text style={{fontSize:12,fontWeight:'bold',color:'white',alignSelf:'center',margin:5}}>كل الخدمات</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={{height:25,backgroundColor:'#fac858',alignSelf:'center',marginTop:15,borderRadius:3,marginLeft:10}} >
                                    <Text style={{fontSize:12,fontWeight:'bold',color:'white',alignSelf:'center',margin:5}}>المهندسين</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={{height:25,backgroundColor:'#fac858',alignSelf:'center',marginTop:15,borderRadius:3,marginLeft:10}} >
                                    <Text style={{fontSize:12,fontWeight:'bold',color:'white',alignSelf:'center',margin:5}}>اليوم</Text>
                                </View>
                            </TouchableOpacity>

                            <Image
                              source={require('../app/images/filter.png')}
                              style={{ width: 35, height: 35,marginTop:10,marginLeft:185}}
                            />
                        </View>
                  </ImageBackground>

          </View>
      </View>
    );
  }
}
