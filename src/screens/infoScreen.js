
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import yelp from '../api/yelp';

const InfoScreen = ({navigation})=>{
    const [result,setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id)=>{
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
    useEffect(()=>{
        getResult(id);
    },[]);

    if(!result){
        return null;
    }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>{result.name}</Text>
        <Text style={styles.rate}>{result.rating} Stars</Text>
        {result.is_closed ? <Text style={styles.status}>Status : Close</Text>: <Text style={styles.status}>Status : Open</Text> }
            
            <Text style={styles.text}>Contact: {result.display_phone}</Text>
            <Text style={styles.text}>Address: {result.location.display_address}</Text>

    </View>
  ); 
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#ff7373'
      },
      title:{
        fontSize:22,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:15
    },
      text:{
          marginTop:10,
        fontSize:15,
        textAlign:'center',
        fontWeight:'bold',
        marginBottom:5
      },
      status:{
        fontSize:20,
        textAlign:'center',
        fontWeight:'bold',
        marginBottom:10
      },
      rate:{
        fontSize:13,
        textAlign:'center',
        fontWeight:'bold',
        marginBottom:25
      }
    
});

export default InfoScreen;
