import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const Header = ({title}) => {
  return (
    <View style={styles.views}>
      <Text style={styles.heading}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  views: {
    flex: 1,
  },
  heading: {
    backgroundColor: 'darkblue',
    textAlign: 'center',
    color: 'white',
    height: 40,
    padding: 7,
    fontSize: 16,
  },
});

export default Header;
