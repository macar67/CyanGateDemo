const axios = require('axios');
function getUsers(){

   return axios.get('https://reqres.in/api/users?page=2')
        .then(function (response) {

            return response.data.data
        })
        .catch(function (error) {
            alert("Kullanıcı Bulunamadı");
            console.log(error);
        });


}

export default getUsers;