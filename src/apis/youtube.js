import axios from 'axios';

// const KEY = "AIzaSyB_J6JPkUJDmDm8raUUpcpBqulDCib0VuU";

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        // part:'snippet',
        maxResults: 5,
        // keys: KEY
    }
})
