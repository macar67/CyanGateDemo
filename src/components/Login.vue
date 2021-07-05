<template>
  <div class="login">
    <main class="form-signin">
      <form>
        <img class="mb-4 cyan" src="../assets/logo.png" alt="">
        <h2 class="h3 mb-3 fw-bold " v-bind:style="[ message  ? {'color':'red','font-size':'1em'} : {'font-size':'1em'} ]"> {{ info }}</h2>

        <div class="form-floating">
          <input type="email" class="form-control" @change="username=$event.target.value" id="floatingInput"
                 placeholder="email">
          <label for="floatingInput">Email</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" @change="password=$event.target.value" id="floatingPassword"
                 placeholder="Password">
          <label for="floatingPassword">Password</label>
        </div>

        <button class="w-100 btn btn-lg btn-primary" v-on:click="loginEvent" type="submit">Login</button>

      </form>
    </main>
  </div>
</template>

<script>

import login from '../service/LoginService';

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      info: "Please Login",
      message:false
    }
  },
  methods: {
    loginEvent: function (event) {
      event.preventDefault();
      let loginResult = '';
      login(this.username, this.password).then(
          (res) => {

            loginResult = res;
            if (loginResult === 'success') {
              this.$emit('token', false)
            } else if (loginResult === 'error') {
              this.message=true;
              this.info = "Wrong email or password!";
            }
          }
      );

    }
  }
}
</script>


<style scoped>

.cyan {
  height: auto;
  width: 100%;
}

body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}



</style>
