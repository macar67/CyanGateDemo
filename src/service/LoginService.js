const axios = require('axios');

  function login(username,password){
    /*
       "email": "eve.holt@reqres.in",
       "password": "cityslicka"
    **/

    return  axios.post('https://reqres.in/api/login', {
        "email": username,
        "password": password

    })
        .then(function (response) {
            if(response.data.token ){
                 return "success";

            }
        })
        .catch(function () {
         return "error";
        });

}

export default login;



