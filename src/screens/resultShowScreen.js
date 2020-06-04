
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,FlatList,Image, Button,TouchableOpacity} from 'react-native';
import yelp from '../api/yelp';

const ShowScreen = ({navigation})=>{
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
        <FlatList style={styles.flat} data={result.photos}
            keyExtractor={(photo)=>photo}
            renderItem={({item})=>{
                return <Image style={styles.image} source={{uri:item}} />
            }}
        />
        <TouchableOpacity onPress={()=>navigation.navigate('Info',{id:result.id})}>
          <Text style={styles.button}>More Info</Text>
        </TouchableOpacity>
    </View>
  ); 
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#ff5c5c',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        overflow: 'hidden',
        padding: 8,
        marginHorizontal:15,
        marginVertical:15,
        textAlign:'center',
        
      },
    container: {
        flex:1
      },
      flat:{
        alignSelf:'center',
      },
      title:{
          fontSize:22,
          fontWeight:'bold',
          textAlign:'center',
          marginVertical:15
      },
     image:{
        width:300,
        height:150,
        borderRadius:4,
        marginBottom:5
},
});

export default ShowScreen;
