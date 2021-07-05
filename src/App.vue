<template>
   <Login v-if="firstPage" @token="passMainPage($event)" />
   <MainPage v-else/>
</template>

<script>
import Login from './components/Login.vue'
import 'bootstrap/dist/css/bootstrap.css';
import MainPage from "@/components/MainPage";

export default {
  name: 'App',
  components: {
    MainPage,
    Login
  },
  data()
  {
    return{
      firstPage:true
    }
  },
  methods:{
    passMainPage(closeFlag)
    {
     this.firstPage=closeFlag;

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
