import React from 'react';
import { Text, View, StyleSheet, Image,Animated } from 'react-native';

import { images, theme, COLORS, FONTS, SIZES } from '../../constants';

const { onboarding1, onboarding2, onboarding3 } = images;


const onBoardings = [
    {
        title: "Let's Travelling",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
        img: onboarding1
    },
    {
        title: "Navigation",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
        img: onboarding2
    },
    {
        title: "Destination",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
        img: onboarding3
    }
];
const OnBoarding = () => {


    const scrollX = new Animated.Value(0);

    function renderContainer() {
        return (
            <Animated.ScrollView
                horizontal
                pagingEnabled
                scrollEnabled
                decelerationRate={0}
                scrollEventThrottle={16}
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                
                onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollX}}}],{useNativeDriver:false})}
            >
                {onBoardings.map((item, index) => {
                    return (
                        <View key={index} >
                            <View style={{ width: theme.SIZES.width, alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={item.img} resizeMode='cover' style={{
                                    width: '100%',
                                    height: '100%'
                                }} />
                            </View>
                            <View style={{
                                position: 'absolute',
                                bottom: '10%',
                                right: 40,
                                left: 40,

                            }}>
                                <Text style={{
                                    ...FONTS.h1,
                                    color: COLORS.gray,
                                    textAlign: 'center'
                                }}>{item.title}</Text>
                                <Text
                                    style={{
                                        ...FONTS.body3,
                                        textAlign: 'center',
                                        marginTop: SIZES.base,
                                        color: COLORS.gray,



                                    }}
                                >{item.description}</Text>
                            </View>
                        </View>

                    )
                })}
            </Animated.ScrollView>
        )
    }

    function renderDots() {

        const dotPosition = Animated.divide(scrollX, SIZES.width);
        console.log(dotPosition);

        return (
            <View style={{flexDirection:'row'}}>
                {onBoardings.map((item, index) => {
                    
                        const opacity = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [0.3, 1, 0.3,],
                        extrapolate: "clamp"
                    });

                    const dotSize = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [SIZES.base, 17, SIZES.base],
                        extrapolate: "clamp"
                    });                   
                    return (
                        <Animated.View
                            key={`dot-${index}`}
                            opacity={opacity}
                            style={[styles.dot, { width: dotSize, height: dotSize, }]}
                        />
                    );
                })}
            </View>
        );
    }



    return (
        <View style={styles.container}>
            <View>
                {renderContainer()}
            </View>
            <View style={{position:'absolute',bottom:SIZES.height>700 ? '30%':'20%' }} >
                {renderDots()}
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        
    },
    dot:{
        borderRadius:SIZES.radius,
        backgroundColor:COLORS.blue,
        marginHorizontal:SIZES.radius/2
    }
})
export default OnBoarding;