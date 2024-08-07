import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { Easing, useAnimatedStyle, useSharedValue, withClamp, withDelay, withRepeat, withSpring, withTiming } from 'react-native-reanimated'


const AppDemoShareValue = () => {
  const offset = useSharedValue(0);

  const animateStyle = useAnimatedStyle(() => {
    return { transform: [{translateY:offset.value}] }
  })

  const moveBox = () => {
    const randomPosition = Math.floor(Math.random() * 600); // Random vị trí trong khoảng 0 đến 300
    offset.value = withTiming(randomPosition, {
      duration: 1000,  
      easing: Easing.inOut(Easing.ease),  
    });
  };

  return (
    <View style={styles.container}>
       <Pressable
        style={{backgroundColor:'lightblue',
          paddingVertical:20,
          alignItems:'center',
          width:200,
          position:'absolute',
          zIndex:3,
          marginTop:10,
          borderRadius:10}} 
       onPress={moveBox} >
        <Text style={{fontSize:20,fontWeight:'bold'}}>Move the Box</Text>
       </Pressable>
      <Animated.Image source={require('./image/image.png')} style={[styles.box, animateStyle]} />
    </View>
  )
}

export default AppDemoShareValue

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    marginTop:100,
    backgroundColor: 'lightgreen',
    padding:2,
    position: 'absolute',
  },
})