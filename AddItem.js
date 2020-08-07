import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const AddItem = ({addingMethod}) => {
  const [inputText, setInputText] = useState('');
  const updateInput = (text) => {
    setInputText(text);
  };
  return (
    <View>
      <TextInput
        placeholder="New Item..."
        style={styles.input}
        onChangeText={updateInput}
      />
      <TouchableOpacity style={styles.btn} onPress={()=> {
        inputText===""? alert("Please enter an item"):
     addingMethod(inputText)}}>
        <Icon name="plus" size={20} color="green" />
        <Text style={styles.btnText}>Add Item</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    marginTop: 40,
    borderBottomWidth: 1.5,
    borderColor: 'green',
    marginHorizontal: 30,
    marginBottom: 5,
  },
  btn: {
    backgroundColor: '#c2baf8',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    padding: 8,
    marginHorizontal: 30,
    borderRadius: 6,
  },
  btnText: {
    marginHorizontal: 7,
  },
});
export default AddItem;
