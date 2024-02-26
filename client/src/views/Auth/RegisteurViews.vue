<template>
    <div id="login-box">
    <div class="left">
      <h1>Sign In</h1>
      <form @submit.prevent="register" class="mt-4">
        <div class="mb-3">
          <label for="username" class="form-label">Username:</label>
          <input type="text" id="username" v-model="username" class="form-control">
        </div>
        <div class="mb-3">
          <label for="Email" class="form-label">Email:</label>
          <input type="text" id="Email" v-model="email" class="form-control">
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password:</label>
          <input type="password" id="password" v-model="password" class="form-control">
        </div>
        <input type="submit" class="btn btn-primary" value="Sign In" />
      </form>
      <router-link to="/">Login</router-link>
      <p v-if="error" class="mt-3" style="color: red;">{{ error }}</p>
    </div>
    
  <div class="right">
    <span class="loginwith">Sign In  with <br>  Notomatic</span>
    
    <button class="social-signin facebook">Sign in with facebook</button>
    <button class="social-signin twitter">Sign in with Twitter</button>
    <button class="social-signin google">Sign in with Google+</button>
  </div>
  <div class="or">OR</div>
  </div>
  </template>
  
  <script>
import axios from 'axios';

  export default {
    data() {
      return {
        username: '',
        password: '',
        error: '',
        email:''
      };
    },
    methods: {
      
       async register(){
        const Data ={
            Username:this.username,
            Email:this.email,
            Password:this.password
        }
         await axios.post('http://localhost:5000/api/Inscription',{...Data})
        .then((res)=>{
            console.log(res);
            this.$router.push('/')
        })
      }
    }
  };
  </script>
  