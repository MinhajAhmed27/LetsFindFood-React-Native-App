
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import {Feather} from '@expo/vector-icons';
const SearchBar = ({term,onTermSubmit,onTermChange})=>{
  return (
    <View style={styles.container}>
        <Feather name="search" style={styles.iconStyle}/>
      <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      value={term}
      onChangeText={newTerm => onTermChange(newTerm )}
      onEndEditing={()=>onTermSubmit()}
      style={styles.inputStyle} placeholder="Search Your Favorate Food here!"/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      marginTop:10,
      marginBottom:10,
      backgroundColor: '#d6d2d2',
      height:47,
      borderRadius:10,
      marginHorizontal:15,
      flexDirection:'row'
    },
    inputStyle:{
        flex:1,
        fontSize:18
    },
    iconStyle:{
        fontSize:28,
        alignSelf:'center',
        marginHorizontal:15
    }
  });

export default SearchBar;