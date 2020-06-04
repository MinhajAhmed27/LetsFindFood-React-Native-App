import axios from 'axios';

export default axios.create({
baseURL:'https://api.yelp.com/v3/businesses',
headers:{
    Authorization:'Bearer IcSUZYzplg6pIB2_1K5VpSMxVYcP9T84IH5NlTGskTJQndl2T14zT2Lu6Fsa2RnJ_7qNPNH4qVLQFxTvpW09m-CV8BVnrsT7NimOF0hDU0W0bWnqu4zbDO6xsxLRXnYx'
}
});