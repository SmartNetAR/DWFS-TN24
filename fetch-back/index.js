const axios = require('axios');

const url = "https://api.github.com/users/su_usuario";

async function getUser() {
    try {
        const response = await axios.get(url);
        console.log(response.data.bio);
        
        
    } catch (error) {
        console.log(error);
        
    }
}

getUser()