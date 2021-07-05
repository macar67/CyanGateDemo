<template>
<div style="display:flex; flex-direction:row; justify-content: center; flex-wrap: wrap;">
  <Card v-for='index in data.length' :key='index' v-bind:users="data[index]" />
</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import getUsers from '../service/UserService';
import Card from "@/components/Card";

export default {
  name: 'MainPage',
  components: {Card},
  data(){
    return{
      data:''
    }
  },

  created: function () {
     getUsers().then(
        (res)=>{
          this.data = res;
        }
    );

  }
}
</script>

