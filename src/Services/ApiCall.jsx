import axios from "axios";

export const CommonRequest = async(methods,url,body,header) =>{
    let config = {
        method:methods,
        url:url,
        headers:header ?
        header : {
            "Content-Type":"application/json"
        },
        data:body,
    }
    // axios instance
    //axios.defaults.withCredentials = true ;                       // Cookies settings for displaying the frontend
    return axios(config).then((data)=> {
        return data
    }).catch((error)=> {
        return error
    });
}
