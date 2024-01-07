import React from 'react'
import {View, Text,Image } from 'react-native'
import SwiperComponents from '../components/SwiperComponents'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Detail = ({navigation}) => {
    return(
        <View style={{
            flex:1,
            backgroundColor:'#fff'
            
            
        }}>
            <View style={{
                flexDirection:"row",
                width:"100%",
                height:"90%"
            }}>
                <View style={{width:"30%",paddingLeft:20}}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <img
                            src={require('../images/17.png')}
                            style={{marginVertical:40,width:20,marginTop:20}}
                        />
                    </TouchableOpacity>   
                        <View style={{
                            
                            height:50,
                            width:50,
                            borderRadius:5,
                            elevation:5,
                            alignItems:"center",
                            justifyContent:"center",
                            marginTop:50,
                            borderColor:'#00a46c'
                        }}>
                            <img
                                src={require('../images/11.png')}
                                
                           
                           
                            />
                            <Text style={{
                            paddingHorizontal:20,
                            fontWeight:"bold",
                            color:"#b1e5d3",
                            paddingTop:3,
                            fontSize:15
                        }}>
                            35-40%
                        </Text>
                        </View>
                        <View style={{
                            backgroundColor:"#FFF",
                            height:50,
                            width:50,
                            borderRadius:5,
                            elevation:5,
                            alignItems:"center",
                            justifyContent:"center",
                            marginTop:50,
                            borderColor:'#00a46c'
                        }}>
                            <img
                                src={require('../images/12.png')}
                            />
                            <Text style={{
                            paddingHorizontal:20,
                            fontWeight:"bold",
                            color:"#b1e5d3",
                            paddingTop:3,
                            fontSize:15
                        }}>
                            20 c
                        </Text>
                        </View>
                        <View style={{
                            backgroundColor:"#FFF",
                            height:50,
                            width:50,
                            borderRadius:5,
                            elevation:5,
                            alignItems:"center",
                            justifyContent:"center",
                            marginTop:50,
                            borderColor:'#00a46c'
                        }}>
                            <img
                                src={require('../images/13.png')}
                            />
                            <Text style={{
                            paddingHorizontal:20,
                            fontWeight:"bold",
                            color:"#b1e5d3",
                            paddingTop:3,
                            fontSize:15
                        }}>
                            250ml
                        </Text>
                        </View>
                        <View style={{
                            backgroundColor:"#FFF",
                            height:50,
                            width:50,
                            borderRadius:5,
                            elevation:5,
                            alignItems:"center",
                            justifyContent:"center",
                            marginTop:50,
                            borderColor:'#00a46c'
                        }}>
                            <img
                                src={require('../images/14.png')}
                            />
                            <Text style={{
                            paddingHorizontal:20,
                            fontWeight:"bold",
                            color:"#b1e5d3",
                            paddingTop:3,
                            fontSize:15
                        }}>
                           2
                        </Text>
                        </View>  
                </View>
                <View style={{width:"70%"}}>
                        <SwiperComponents/>
                </View>
            </View>

                        <View style={{
                            flexDirection:"row",
                            marginTop:-90,
                            marginHorizontal:20,
                            alignItems:"center"
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:28,
                                color:"#62636a"
                            }}>
                                Angelica
                            </Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#39b349",
                                paddingLeft:170,
                                fontSize:20
                            }}>
                                $400
                            </Text>
                        </View>

                        <Text style={{
                            paddingHorizontal:20,
                            fontWeight:"bold",
                            color:"#b1e5d3",
                            paddingTop:3,
                            fontSize:20
                        }}>
                            Russia
                        </Text>

                        <View style={{
                            flexDirection:"row",
                            width:"100%"
                        }}>
                            <View style={{
                                width:"50%",
                                backgroundColor:"#39b349",
                                height:70,
                                marginTop:20,
                                borderTopRightRadius:25,
                                alignItems:"center",
                                justifyContent:"center"
                            }}>
                                <Text style={{
                                    color:"#FFF",
                                    fontSize:17
                                }}>Buy Now</Text>
                            </View>

                            <View style={{
                                width:"50%",
                                alignItems:"center",
                                justifyContent:"center",
                                marginTop:20
                            }}>
                                <Text style={{
                                    color:"#62636a",
                                    fontWeight:"bold",
                                    fontSize:17
                                }}>Description</Text>
                            </View>
                        </View>
                        
        </View>
    )
}
export default Detail;