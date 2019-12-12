import axios from 'axios';

 export const register = async (data) => {
     
    try {
        let response = await axios({
            method: 'post',
            responseType: 'json',
            url: "https://api.involveteacher.space/public/api/register",
            data: data
          });
    } catch(e){
        console.log(e);
    }
}

 export const login = async (data) => {

    try {

        let response = await axios.post("https://api.involveteacher.space/public/api/login", data);

        if(response.status === 200 && response.data.jwt && response.data.expireAt){
            let jwt = response.data.jwt;
            let expire_at = response.data.expireAt;

            localStorage.setItem("access_token", jwt);
            localStorage.setItem("expire_at", expire_at);

        }


    } catch(e){
        console.log(e);
    }
}


export const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("expire_at");
}