import {useEffect,useState} from 'react';
import yelp from '../api/yelp';

export default ()=>{

    const [results,setResults] = useState([]);
    const [errorMessage,setErrorMessage] = useState('');

    const searchApi = async (searchTerm) =>{
      try{
        const response = await yelp.get('/search',{
          params:{
            limit:30,
            term:searchTerm,
            location:'california'
          }
        });
        setResults(response.data.businesses);
    }catch(err){
      setErrorMessage('somthing went wrong')
    }
    };

    // run first time when render
    useEffect(()=>{searchApi('pasta')},[]);

    return [searchApi,results,errorMessage];
};