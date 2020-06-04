
import React,{useState} from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import SearchBar from '../components/searchBar'
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = ()=>{ 
    const [term,setTerm]=useState('');
    const [searchApi,results,errorMessage]=useResults();
    
    const filterResults = (price)=>{
      return results.filter(results=>{
        return results.price === price;
      })
    };

  return (
    <View style={{flex:1}}>
        <SearchBar term={term} 
          onTermChange={setTerm}
          onTermSubmit={()=>searchApi(term)} 
        />
      {errorMessage ? <Text> {errorMessage} </Text> : null}
      <ScrollView>
        <ResultsList results={filterResults('$')} title="Cost Effective"/>
        <ResultsList results={filterResults('$$')} title="Bit Pricier"/>
        <ResultsList results={filterResults('$$$')} title="Big Spender"/>
      </ScrollView>
    </View>
  );
}

export default SearchScreen;
