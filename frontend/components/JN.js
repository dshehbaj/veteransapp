import * as React from 'react';
import { Avatar, Banner } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const MyJN = () => (
  <Avatar.Image size={100} source={require('../images/jn.png')} style={styles.BannerStyle}/>
);

const styles = StyleSheet.create({ 
    BannerStyle: {
       left: 148
    }    
});

export default MyJN

