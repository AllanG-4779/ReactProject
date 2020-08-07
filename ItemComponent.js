import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const ItemComponent = ({dataSource, RemoveItem}) => {
  return (
    <View style={styles.listItems}>
      {dataSource.map((listItem) => (
        <TouchableOpacity
          style={{backgroundColor: '#f0f0f0', marginBottom: 4}}
          key={Math.random()}>
          <View style={styles.styleList}>
            <Text style={styles.listView}>{listItem}</Text>
            <Icon
              name="remove"
              size={15}
              color="darkred"
              onPress={() => RemoveItem(listItem)}
            />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  listItems: {

    marginHorizontal: 0,
    fontFamily: 'Times New Roman',
    backgroundColor: '#f8f8f8',
    padding: 10,

  },
  styleList: {
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listView:{
    fontSize: 20,
    fontFamily: "serif"
  }
});
export default ItemComponent;
