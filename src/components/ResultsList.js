
import React from 'react';
import { StyleSheet, Text, View,FlatList,TouchableOpacity } from 'react-native';
import ResultsDetail from './ResultsDetail';
import {withNavigation} from 'react-navigation';

const ResultsList = ({title,results,navigation})=>{
    if(!results.length){
        return null;
    }
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
            horizontal
            data={results}
            keyExtractor={(results)=>results.id}
            renderItem={({item})=>{
                return (
                    <TouchableOpacity onPress={()=>navigation.navigate('Show',{id:item.id})}>
                        <ResultsDetail result={item}/>
                    </TouchableOpacity>
                );
            }}
            showsHorizontalScrollIndicator={false}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      marginBottom:10
    },
    inputStyle:{
        flex:1,
        fontSize:18
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:5
    }
  });

export default withNavigation(ResultsList);