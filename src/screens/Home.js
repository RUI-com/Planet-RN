import React from 'react';
import {View,Text,Image,FlatList, ScrollView} from 'react-native';
import {TextInput,TouchableOpacity} from 'react-native-gesture-handler';
import {LinearGradient} from 'expo-linear-gradient';

import menu from '../../assets/iconpage/menu.svg';
import logo from '../../logo-image/logo-grdint.svg';
import image1 from '../images/4.png';
//../../assets/backgroundimage.png
const Home = ({navigation}) => {
    return(
      
         <View style={{
           flex:1,
          
          
       }}>
      <View style={{
       backgroundColor:'#061D3A',
       
       height:'28%',
       borderBottomLeftRadius:20,
       borderBottomRightRadius:20,
       paddingHorizontal:20
      }}>
      <View style={{flexDirection:'row',alignItems:'center',marginTop:10,justifyContent:'space-between'}}>
      
      <Image
      source={menu}
      style={{
       height:20,
       width:20,
       
       tintColor:'#fff'
      }}

      />
    {/* <Text style={{
       fontSize:20,
       fontWeight:'bold',
       color:'#fff'
    }}>
       Home
    </Text> */}
    <Image
      source={logo}
      style={{
       
       width:80,
       height:40
       
       
      }}

      />
      
      </View>
      <View style={{
       flexDirection:'row',
       alignItems:'center',
       marginTop:15,
       
       justifyContent:'space-between'
      }}>
      <View style={{
       
      }}>
       <Text style={{
           fontSize:25,
           color:'#fff',
           fontWeight:'bold'

       }}>Hi Uishopy</Text>

      </View>
      <View style={{
       
      }}>
       
      </View>


      </View>

       
      </View>
      {/* Search */}
       <LinearGradient
           colors={[ "transparent"]}
           style={{
               left:0,
               right:0,
               height:90,
               marginTop:-45
           }}
          >
              <View style={{
                  backgroundColor:"#FFF",
                  paddingVertical:13,
                  paddingHorizontal:13,
                  marginHorizontal:20,
                  borderRadius:15,
                  marginTop:25,
                  flexDirection:"row",
                  alignItems:"center",
                  shadowColor:'#000',
                  shadowOffset:2,
                  shadowOpacity:'0.08'
              }}>
                  <TextInput
                       placeholder="Search"
                       placeholderTextColor="#39b349"
                       style={{
                           fontWeight:"bold",
                           fontSize:18,
                           width:260
                       }}
                  />
                  <Image
                   source={require('../images/3.png')}
                   style={{height:18,width:18,marginRight:4,tintColor:'#39b349'}}
                  />
              </View>
           </LinearGradient>


            <ScrollView
             showsHorizontalScrollIndicator={false}
            >

            <View style={{
                   flexDirection:"row",
                   paddingHorizontal:20,
                   width:"100%",
                   alignItems:"center"
               }}>
                   <View style={{width:"50%"}}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:17,
                            color:"#585a61"
                        }}>Recommended</Text>
                      

                   </View>
                   <View style={{width:"50%", alignItems:"flex-end"}}>
                        <View style={{
                            backgroundColor:"#00a46c",
                            paddingHorizontal:20,
                            paddingVertical:5,
                            borderRadius:15
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:13,
                                color:"#FFF"
                            }}>More</Text>
                        </View>
                   </View>
               </View>
               
               <ScrollView 
                    horizontal={true}
                    
                    
                >
                    
                    <TouchableOpacity 
                        onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                           
                            width:160
                        }}
                    >
                        <img
                            src={image1}
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>SAMANTHA</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#00a46c",
                                paddingLeft:35
                            }}>$400</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#b1e5d3",
                            paddingTop:3
                        }}>
                            RUSSIA
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                           
                            width:160
                        }}
                    >
                        <img
                            src={require('../images/5.png')}
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>ANGELICA</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#00a46c",
                                paddingLeft:45
                            }}>$400</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#b1e5d3",
                            paddingTop:3
                        }}>
                            RUSSIA
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                           
                            width:160
                        }}
                    >
                        <img
                            src={require('../images/6.png')}
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>SAMANTHA</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#00a46c",
                                paddingLeft:35
                            }}>$400</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#b1e5d3",
                            paddingTop:3
                        }}>
                            RUSSIA
                        </Text>
                    </TouchableOpacity>

                </ScrollView>            

                


               <View style={{
                   flexDirection:"row",
                   paddingHorizontal:20,
                   width:"100%",
                   alignItems:"center",
                   marginTop:10,
               }}>
                   <View style={{width:"50%"}}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:17,
                            color:"#585a61"
                        }}>Featured Plants</Text>
                        

                   </View>
                   <View style={{width:"50%", alignItems:"flex-end"}}>
                        <View style={{
                            backgroundColor:"#00a46c",
                            paddingHorizontal:20,
                            paddingVertical:5,
                            borderRadius:15
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:13,
                                color:"#FFF"
                            }}>More</Text>
                        </View>
                   </View>
               </View>
               
               <ScrollView
                    horizontal
                    
                   
                >
                    <img
                        src={require("../images/18.png")}
                        style={{marginTop:20,marginHorizontal:20}}
                    />
                     <img
                        src={require("../images/19.png")}
                        style={{marginTop:20,borderRadius:10,marginLeft:20}}
                    />
                </ScrollView>
            </ScrollView>
        
      

       </View>
      
    )
}

export default Home;