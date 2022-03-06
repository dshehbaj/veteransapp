import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const MyBanner = () => {
  const _goBack = () => console.log('Went back');

  

  return (
    <Appbar.Header style={styles.BannerStyle}>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="SLOService" style={styles.BannerStyle}/>
     
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({ 
    BannerStyle: {
        
        borderColor: 'grey',
        backgroundColor: 'grey',
        color:'grey'   
    }    
});

export default MyBanner;