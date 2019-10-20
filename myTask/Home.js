import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox, Dimensions, ImageBackground,Button } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack'
import  LinearGradient  from 'react-native-linear-gradient';
import { NavigationActions } from 'react-navigation';
import MyRecycler from './MyRecycler';
import MyNavBar from './MyNavBar';

class HamburgerIcon extends Component {

  toggleDrawer = () => {

    console.log(this.props.navigationProps);

    this.props.navigationProps.toggleDrawer();

  }

  render() {

    return (
      <ImageBackground source={require('../app/images/darkFlowers.png')}
                        style={{resizeMode:'cover',height:70,width:430}}>

          <View style={{ flexDirection: 'row',justifyContent:'space-between',backgroundColor: 'rgba(0,0,0, .7)',borderBottomWidth:5,height:70,width:'100%'}}>

              <View style={{marginTop:25,marginLeft:10 }}>

                <TouchableOpacity onPress={this.toggleDrawer.bind(this)} >
                  <Image
                    source={require('../app/images/drawerMenu.png')}
                    style={{ width: 20, height: 20}}
                  />
                </TouchableOpacity>

              </View>

              <View style={{height:70}}>
              <Image
                source={require('../app/images/logo.png')}
                style={{ width: 70, height: 70,marginTop:3 }}
              />
              </View>

              <View style={{height:70}}>
              <Image
                source={require('../app/images/profile.png')}
                style={{ width: 25, height: 25,marginRight:30,marginTop:25}}
              />
              </View>

          </View>
      </ImageBackground>
    );


  }
}

class Custom_Side_Menu extends Component {

  render() {

    return (

      <View style={styles.sideMenuContainer}>

          <Image source={require('../app/images/logo.png')}
            style={styles.sideMenuProfileIcon} />

              <View style={{ width: '100%', height: 5}} >

              <LinearGradient start={{x: 1, y: 0}} end={{x: 0, y: 1}}
                colors={['#F6813A', '#FAC858']} style={{height:5}}>
                <Text></Text>
              </LinearGradient>

                </View>

                <View style={{width: '100%'}}>

                  <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth:0.2}}>

                        <Image source={require('../app/images/homeIcon.png')}
                        style={styles.sideMenuIcon} />

                        <Text style={styles.menuText} onPress={() => { this.props.navigation.goBack() }} > الرئيسية  </Text>

                 </View>

                 <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth:0.2}}>

                       <Image source={require('../app/images/myRequest.png')}
                       style={styles.sideMenuIcon} />

                       <Text style={styles.menuText} onPress={() => { this.props.navigation.goBack() }} > طلباتى  </Text>

                </View>

               <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth:0.2}}>

                      <Image source={require('../app/images/wallet.png')}
                      style={styles.sideMenuIcon} />

                      <Text style={styles.menuText} onPress={() => { this.props.navigation.goBack() }} > المحفظة  </Text>

               </View>

               <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth:0.2}}>

                     <Image source={require('../app/images/location.png')}
                     style={styles.sideMenuIcon} />

                     <Text style={styles.menuText} onPress={() => { this.props.navigation.goBack() }} > العناوين  </Text>

              </View>

              <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth:0.2}}>

                    <Image source={require('../app/images/lock.png')}
                    style={styles.sideMenuIcon} />

                    <Text style={styles.menuText} onPress={() => { this.props.navigation.goBack() }} > سياسة الضمان  </Text>

             </View>

             <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth:0.2}}>

                   <Image source={require('../app/images/condition.png')}
                   style={styles.sideMenuIcon} />

                   <Text style={styles.menuText} onPress={() => { this.props.navigation.goBack() }} > الشروط و الاحكام  </Text>

            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth:0.2}}>

                  <Image source={require('../app/images/aboutApp.png')}
                  style={styles.sideMenuIcon} />

                  <Text style={styles.menuText} onPress={() => { this.props.navigation.goBack() }} > عن التطبيق  </Text>

           </View>

           <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth:0.2}}>

                 <Image source={require('../app/images/setting.png')}
                 style={styles.sideMenuIcon} />

                 <Text style={styles.menuText} onPress={() => { this.props.navigation.goBack() }} > الاعدادات  </Text>

          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>

                <Image source={require('../app/images/share.png')}
                style={styles.sideMenuIcon} />

                <Text style={styles.menuText} onPress={() => { this.props.navigation.goBackk() }} > شارك التطبيق  </Text>

         </View>


      </View>

      <View style={{ width: '100%', marginTop: 40}} >
          <TouchableOpacity  onPress={() => this.props.navigation.navigate('LoginScreen')}>
              <View style={{justifyContent:'center'}}>
                  <LinearGradient start={{x: 1, y: 0}} end={{x: 0, y: 5}}
                    colors={['#F6813A', '#FAC858', '#848484']}
                    style={{height:60}}>
                       <Text
                         style={styles.textbtn}>
                              تسجيل الخروج
                       </Text>
                 </LinearGradient>
             </View>
          </TouchableOpacity>
      </View>

  </View>
    );
  }
}

const FirstActivity_StackNavigator = createStackNavigator({
  First: {
    screen: MyNavBar,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <HamburgerIcon navigationProps={navigation}/>,
      headerStyle: {
        backgroundColor: 'blue',
        height:60,
        marginRight:370
      },
      headerTintColor: '#fff',
    })
  },
});


const SecondActivity_StackNavigator = createStackNavigator({
  Second: {
    screen: MyRecycler,
    navigationOptions: ({ navigation }) => ({
      title: 'SecondActivity',
      headerLeft: <HamburgerIcon navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#FF9800'
      },
      headerTintColor: '#fff',
    })
  },
});

export default MyDrawerNavigator = createDrawerNavigator({
  MainStack: {
    screen: FirstActivity_StackNavigator
  },

  SecondStack: {
    screen: SecondActivity_StackNavigator
  }
},
  {
    contentComponent: Custom_Side_Menu,
    drawerWidth: Dimensions.get('window').width - 130,
  });


const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center'
  },

  sideMenuProfileIcon:
  {
    resizeMode: 'cover',
    width: '100%',
    height: 100,
    borderRadius: 150/2,
    resizeMode:'contain',
    backgroundColor:'#F0EDED'
  },

  sideMenuIcon:
  {
    resizeMode: 'center',
    width: 28,
    height: 15,
    marginRight: 10,
    marginLeft: 10
  },

  menuText:{
    fontSize: 15,
    color: '#222222',
    margin:10,
    padding:5,
  },
  textbtn:{
    backgroundColor: 'transparent',
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf:'center',
    marginTop:15
    },

});
