import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Swiper from 'react-native-swiper/src';


const SwiperComponents = () => {
    return(
        <Swiper
        style={styles.wrapper}
        dotStyle={{
            marginTop:-200,
            width:15,
            height:5,
            borderRadius:10,
            backgroundColor:"#FFF",

        }}
        activeDotColor="#FFF"
        activeDotStyle={{
            marginTop:-200,
            width:30,
            height:6,
            borderRadius:10,
            backgroundColor:"#FFF",
            activeDotColor:"#FFF"

        }}
        >
             <View style={styles.slide}>
                    <img
                        src={require('../images/img.png')}
                        style={{
                            marginLeft:120,
                            marginBottom:130,
                            height:720,
                            width:420,
                            marginTop:30,
                            resize:"stretch"
                        }}
                    />
                </View>
                <View style={styles.slide}>
                    <img
                        src={require('../images/img2.png')}
                        style={{
                            marginLeft:120,
                            marginBottom:130,
                            height:720,
                            width:420,
                            marginTop:30,
                            resize:"stretch"
                        }}
                    />
                </View>
                <View style={styles.slide}>
                    <img
                        src={require('../images/img.png')}
                        style={{
                            marginLeft:120,
                            marginBottom:130,
                            height:720,
                            width:420,
                            marginTop:60,
                            resize:"stretch"
                        }}
                    />
                </View>
        </Swiper>
    )
}
const styles = StyleSheet.create({
    wrapper:{},
    slide:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'#fff'
        
    }
})
export default SwiperComponents;
