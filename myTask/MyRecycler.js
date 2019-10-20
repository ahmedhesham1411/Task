import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, Image, YellowBox,ImageBackground,TouchableOpacity } from 'react-native';
import faker from 'faker';
import { RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview'

export default class MyRecycler extends Component {
  constructor(props) {
     super(props);

     YellowBox.ignoreWarnings([
         'Warning: componentWillMount is deprecated',
         'Warning: componentWillReceiveProps is deprecated',
         'Warning: componentWillMount has been renamed',
         'Warning: componentWillReceiveProps has been renamed',
       ]);

     const fakeData = [];
     for(i = 0; i < 100; i+= 1) {
       fakeData.push({
         type: 'NORMAL',
         item: {
           id: i,
           image: faker.image.avatar(),
           name: 'محمود عبد الرحيم',
           description: faker.random.words(5),
         },
       });
     }
     this.state = {
       list: new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(fakeData),
     };

     this.layoutProvider = new LayoutProvider((i) => {
       return this.state.list.getDataForIndex(i).type;
     }, (type, dim) => {
       switch (type) {
         case 'NORMAL':
           dim.width = Math.round(Dimensions.get('window').width);;
           dim.height = 100;
           break;
         default:
           dim.width = 0;
           dim.height = 0;
           break;
       };
     })
   }

   rowRenderer = (type, data) => {
     const { image, name, description } = data.item;
     return (
       <View style={styles.listItem}>
         <Image style={styles.image} source={{ uri: image }} />
         <View style={styles.body}>
           <Text style={styles.name}>{name}</Text>
           <Text >كهربائى</Text>
           <Text style={styles.textDetails}>التفاصيل</Text>
         </View>
         <View>
             <TouchableOpacity>
                 <View style={styles.touchHagz} >
                     <Text style={styles.fontHagz}>حجز</Text>
                 </View>
             </TouchableOpacity>
         </View>
       </View>
     )
   }

   render() {
     return (
       <View style={styles.container}>
       <View >
           <View style={{flexDirection: 'row',backgroundColor:'red',height:50,width:'100%',justifyContent:'space-between'}}>
                   <ImageBackground source={require('../app/images/darkFlowers.png')}
                                    style={{resizeMode:'cover',height:50,width:430}}>
                         <View style={{ flexDirection: 'row',backgroundColor: 'rgba(0,0,0, .2)',height:50,width:'100%'}}>
                             <TouchableOpacity onPress={() => this.props.navigation.navigate('MyRecycler')}>
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
          <RecyclerListView
           style={{flex: 1}}
           rowRenderer={this.rowRenderer}
           dataProvider={this.state.list}
           layoutProvider={this.layoutProvider}
         />
       </View>
     );
   }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#FFF',
     minHeight: 1,
     minWidth: 1,
   },
   body: {
     marginLeft: 10,
     marginRight: 10,
     maxWidth: Math.round(Dimensions.get('window').width) - (80 + 10 + 20),

   },
   image: {
     height: 80,
     width: 80,
     margin:10
   },
   name: {
     fontSize: 16,
     fontWeight: 'bold',
     marginTop:10
   },
   description: {
     fontSize: 14,
     opacity: 0.5,
   },
   listItem: {
     flexDirection: 'row',
     borderBottomWidth:0.5
   },
   textDetails:{
     textDecorationLine: 'underline',
     color:'#fac858',
     marginTop:15,
     fontWeight:'bold'
   },
   touchHagz:{
     height:25,
     backgroundColor:'#fac858',
     marginTop:15,
     borderRadius:3,
     marginLeft:140
   },
   fontHagz:{
     fontSize:12,
     fontWeight:'bold',
     color:'white',
     alignSelf:'center',
     margin:5
   },
 });
